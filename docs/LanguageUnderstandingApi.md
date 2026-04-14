# LanguageUnderstandingApi

# platformClient.LanguageUnderstandingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLanguageunderstandingDomain**](LanguageUnderstandingApi#deleteLanguageunderstandingDomain) | **DELETE** /api/v2/languageunderstanding/domains/{domainId} | Delete an NLU Domain.
[**deleteLanguageunderstandingDomainFeedbackFeedbackId**](LanguageUnderstandingApi#deleteLanguageunderstandingDomainFeedbackFeedbackId) | **DELETE** /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId} | Delete the feedback on the NLU Domain Version.
[**deleteLanguageunderstandingDomainVersion**](LanguageUnderstandingApi#deleteLanguageunderstandingDomainVersion) | **DELETE** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Delete an NLU Domain Version
[**deleteLanguageunderstandingMiner**](LanguageUnderstandingApi#deleteLanguageunderstandingMiner) | **DELETE** /api/v2/languageunderstanding/miners/{minerId} | Delete a miner.
[**deleteLanguageunderstandingMinerDraft**](LanguageUnderstandingApi#deleteLanguageunderstandingMinerDraft) | **DELETE** /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId} | Delete a draft
[**getLanguageunderstandingDomain**](LanguageUnderstandingApi#getLanguageunderstandingDomain) | **GET** /api/v2/languageunderstanding/domains/{domainId} | Find an NLU Domain.
[**getLanguageunderstandingDomainFeedback**](LanguageUnderstandingApi#getLanguageunderstandingDomainFeedback) | **GET** /api/v2/languageunderstanding/domains/{domainId}/feedback | Get all feedback in the given NLU Domain Version.
[**getLanguageunderstandingDomainFeedbackFeedbackId**](LanguageUnderstandingApi#getLanguageunderstandingDomainFeedbackFeedbackId) | **GET** /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId} | Find a Feedback
[**getLanguageunderstandingDomainVersion**](LanguageUnderstandingApi#getLanguageunderstandingDomainVersion) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Find an NLU Domain Version.
[**getLanguageunderstandingDomainVersionReport**](LanguageUnderstandingApi#getLanguageunderstandingDomainVersionReport) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report | Retrieved quality report for the specified NLU Domain Version
[**getLanguageunderstandingDomainVersions**](LanguageUnderstandingApi#getLanguageunderstandingDomainVersions) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions | Get all NLU Domain Versions for a given Domain.
[**getLanguageunderstandingDomains**](LanguageUnderstandingApi#getLanguageunderstandingDomains) | **GET** /api/v2/languageunderstanding/domains | Get all NLU Domains.
[**getLanguageunderstandingIgnorephrase**](LanguageUnderstandingApi#getLanguageunderstandingIgnorephrase) | **GET** /api/v2/languageunderstanding/ignorephrases/{languageCode} | Get list of all ignored phrases of the specified language code
[**getLanguageunderstandingIgnoretopic**](LanguageUnderstandingApi#getLanguageunderstandingIgnoretopic) | **GET** /api/v2/languageunderstanding/ignoretopics/{languageCode} | Get list of all ignored topics of the specified language code
[**getLanguageunderstandingMiner**](LanguageUnderstandingApi#getLanguageunderstandingMiner) | **GET** /api/v2/languageunderstanding/miners/{minerId} | Get information about a miner.
[**getLanguageunderstandingMinerDraft**](LanguageUnderstandingApi#getLanguageunderstandingMinerDraft) | **GET** /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId} | Get information about a draft.
[**getLanguageunderstandingMinerDrafts**](LanguageUnderstandingApi#getLanguageunderstandingMinerDrafts) | **GET** /api/v2/languageunderstanding/miners/{minerId}/drafts | Retrieve the list of drafts created.
[**getLanguageunderstandingMinerIntent**](LanguageUnderstandingApi#getLanguageunderstandingMinerIntent) | **GET** /api/v2/languageunderstanding/miners/{minerId}/intents/{intentId} | Get information about a mined intent
[**getLanguageunderstandingMinerIntents**](LanguageUnderstandingApi#getLanguageunderstandingMinerIntents) | **GET** /api/v2/languageunderstanding/miners/{minerId}/intents | Retrieve a list of mined intents.
[**getLanguageunderstandingMinerTopic**](LanguageUnderstandingApi#getLanguageunderstandingMinerTopic) | **GET** /api/v2/languageunderstanding/miners/{minerId}/topics/{topicId} | Retrieves details of a particular topic.
[**getLanguageunderstandingMinerTopicPhrase**](LanguageUnderstandingApi#getLanguageunderstandingMinerTopicPhrase) | **GET** /api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}/phrases/{phraseId} | Retrieves utterances related to a phrase in a topic.
[**getLanguageunderstandingMinerTopics**](LanguageUnderstandingApi#getLanguageunderstandingMinerTopics) | **GET** /api/v2/languageunderstanding/miners/{minerId}/topics | Retrieve a list of mined topics.
[**getLanguageunderstandingMiners**](LanguageUnderstandingApi#getLanguageunderstandingMiners) | **GET** /api/v2/languageunderstanding/miners | Retrieve the list of miners created.
[**getLanguageunderstandingSettings**](LanguageUnderstandingApi#getLanguageunderstandingSettings) | **GET** /api/v2/languageunderstanding/settings | Get Organization Configuration
[**patchLanguageunderstandingDomain**](LanguageUnderstandingApi#patchLanguageunderstandingDomain) | **PATCH** /api/v2/languageunderstanding/domains/{domainId} | Update an NLU Domain.
[**patchLanguageunderstandingMinerDraft**](LanguageUnderstandingApi#patchLanguageunderstandingMinerDraft) | **PATCH** /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId} | Save information for the draft. Either topic draft or intent draft should be sent.
[**postLanguageunderstandingDomainFeedback**](LanguageUnderstandingApi#postLanguageunderstandingDomainFeedback) | **POST** /api/v2/languageunderstanding/domains/{domainId}/feedback | Create feedback for the NLU Domain Version.
[**postLanguageunderstandingDomainVersionDetect**](LanguageUnderstandingApi#postLanguageunderstandingDomainVersionDetect) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect | Detect intent, entities, etc. in the submitted text using the specified NLU domain version.
[**postLanguageunderstandingDomainVersionPublish**](LanguageUnderstandingApi#postLanguageunderstandingDomainVersionPublish) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish | Publish the draft NLU Domain Version.
[**postLanguageunderstandingDomainVersionTrain**](LanguageUnderstandingApi#postLanguageunderstandingDomainVersionTrain) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train | Train the draft NLU Domain Version.
[**postLanguageunderstandingDomainVersions**](LanguageUnderstandingApi#postLanguageunderstandingDomainVersions) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions | Create an NLU Domain Version.
[**postLanguageunderstandingDomains**](LanguageUnderstandingApi#postLanguageunderstandingDomains) | **POST** /api/v2/languageunderstanding/domains | Create an NLU Domain.
[**postLanguageunderstandingIgnorephrase**](LanguageUnderstandingApi#postLanguageunderstandingIgnorephrase) | **POST** /api/v2/languageunderstanding/ignorephrases/{languageCode} | Add phrases to the ignored phrases list
[**postLanguageunderstandingIgnorephraseRemove**](LanguageUnderstandingApi#postLanguageunderstandingIgnorephraseRemove) | **POST** /api/v2/languageunderstanding/ignorephrases/{languageCode}/remove | Delete ignored phrases
[**postLanguageunderstandingIgnoretopic**](LanguageUnderstandingApi#postLanguageunderstandingIgnoretopic) | **POST** /api/v2/languageunderstanding/ignoretopics/{languageCode} | Add topics to the ignored topics list
[**postLanguageunderstandingIgnoretopicRemove**](LanguageUnderstandingApi#postLanguageunderstandingIgnoretopicRemove) | **POST** /api/v2/languageunderstanding/ignoretopics/{languageCode}/remove | Delete ignored topics
[**postLanguageunderstandingMinerDrafts**](LanguageUnderstandingApi#postLanguageunderstandingMinerDrafts) | **POST** /api/v2/languageunderstanding/miners/{minerId}/drafts | Create a new draft resource.
[**postLanguageunderstandingMinerExecute**](LanguageUnderstandingApi#postLanguageunderstandingMinerExecute) | **POST** /api/v2/languageunderstanding/miners/{minerId}/execute | Start the mining process. Specify date range pair with mediaType, queueIds, participantType for mining data from Genesys Cloud. Specify only uploadKey for mining through an external file.
[**postLanguageunderstandingMiners**](LanguageUnderstandingApi#postLanguageunderstandingMiners) | **POST** /api/v2/languageunderstanding/miners | Create a unique miner.
[**putLanguageunderstandingDomainVersion**](LanguageUnderstandingApi#putLanguageunderstandingDomainVersion) | **PUT** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Update an NLU Domain Version.



## deleteLanguageunderstandingDomain

> void deleteLanguageunderstandingDomain(domainId, opts)


DELETE /api/v2/languageunderstanding/domains/{domainId}

Delete an NLU Domain.

Requires ANY permissions:

* languageUnderstanding:nluDomain:delete
* dialog:bot:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguageunderstandingDomain(domainId, opts)
  .then(() => {
    console.log('deleteLanguageunderstandingDomain returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguageunderstandingDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteLanguageunderstandingDomainFeedbackFeedbackId

> void deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts)


DELETE /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}

Delete the feedback on the NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:feedback:delete
* dialog:bot:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let feedbackId = "feedbackId_example"; // String | ID of the Feedback
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts)
  .then(() => {
    console.log('deleteLanguageunderstandingDomainFeedbackFeedbackId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguageunderstandingDomainFeedbackFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **feedbackId** | **String** | ID of the Feedback |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteLanguageunderstandingDomainVersion

> void deleteLanguageunderstandingDomainVersion(domainId, domainVersionId, opts)


DELETE /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}

Delete an NLU Domain Version

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:delete
* dialog:botVersion:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguageunderstandingDomainVersion(domainId, domainVersionId, opts)
  .then(() => {
    console.log('deleteLanguageunderstandingDomainVersion returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguageunderstandingDomainVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteLanguageunderstandingMiner

> void deleteLanguageunderstandingMiner(minerId, opts)


DELETE /api/v2/languageunderstanding/miners/{minerId}

Delete a miner.

Requires ALL permissions:

* languageUnderstanding:miner:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguageunderstandingMiner(minerId, opts)
  .then(() => {
    console.log('deleteLanguageunderstandingMiner returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguageunderstandingMiner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteLanguageunderstandingMinerDraft

> void deleteLanguageunderstandingMinerDraft(minerId, draftId, opts)


DELETE /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}

Delete a draft

Requires ALL permissions:

* languageUnderstanding:draft:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let draftId = "draftId_example"; // String | Draft ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguageunderstandingMinerDraft(minerId, draftId, opts)
  .then(() => {
    console.log('deleteLanguageunderstandingMinerDraft returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguageunderstandingMinerDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **draftId** | **String** | Draft ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getLanguageunderstandingDomain

> NluDomain getLanguageunderstandingDomain(domainId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}

Find an NLU Domain.

Requires ANY permissions:

* languageUnderstanding:nluDomain:view
* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomain(domainId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomain**


## getLanguageunderstandingDomainFeedback

> NluFeedbackListing getLanguageunderstandingDomainFeedback(domainId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}/feedback

Get all feedback in the given NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:feedback:view
* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'intentName': "intentName_example", // String | The top intent name to retrieve feedback for.
  'assessment': "assessment_example", // String | The top assessment to retrieve feedback for.
  'dateStart': "dateStart_example", // String | Begin of time window as ISO-8601 date.
  'dateEnd': "dateEnd_example", // String | End of time window as ISO-8601 date.
  'includeDeleted': true, // Boolean | Whether to include soft-deleted items in the result.
  'language': "language_example", // String | Whether to filter response based on the language, e.g. en-us, pt-br.
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'enableCursorPagination': false, // Boolean | Enable Cursor Pagination
  'includeTrainingUtterances': true, // Boolean | Include Training Utterances. By default they're included.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true
  'fields': ["fields_example"], // [String] | Fields and properties to get, comma-separated
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomainFeedback(domainId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomainFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomainFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **intentName** | **String** | The top intent name to retrieve feedback for. | [optional]  |
 **assessment** | **String** | The top assessment to retrieve feedback for. | [optional] <br />**Values**: Incorrect, Correct, Unknown, Disabled |
 **dateStart** | **String** | Begin of time window as ISO-8601 date. | [optional]  |
 **dateEnd** | **String** | End of time window as ISO-8601 date. | [optional]  |
 **includeDeleted** | **Boolean** | Whether to include soft-deleted items in the result. | [optional]  |
 **language** | **String** | Whether to filter response based on the language, e.g. en-us, pt-br. | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **enableCursorPagination** | **Boolean** | Enable Cursor Pagination | [optional] [default to false] |
 **includeTrainingUtterances** | **Boolean** | Include Training Utterances. By default they're included. | [optional] [default to true] |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true | [optional]  |
 **fields** | **[String]** | Fields and properties to get, comma-separated | [optional] <br />**Values**: version, dateCreated, text, intents |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluFeedbackListing**


## getLanguageunderstandingDomainFeedbackFeedbackId

> NluFeedbackResponse getLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}

Find a Feedback

Requires ANY permissions:

* languageUnderstanding:feedback:view
* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let feedbackId = "feedbackId_example"; // String | ID of the Feedback
let opts = { 
  'fields': ["fields_example"], // [String] | Fields and properties to get, comma-separated
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomainFeedbackFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomainFeedbackFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **feedbackId** | **String** | ID of the Feedback |  |
 **fields** | **[String]** | Fields and properties to get, comma-separated | [optional] <br />**Values**: version, dateCreated, text, intents |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluFeedbackResponse**


## getLanguageunderstandingDomainVersion

> NluDomainVersion getLanguageunderstandingDomainVersion(domainId, domainVersionId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}

Find an NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:view
* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'includeUtterances': true, // Boolean | Whether utterances for intent definition should be included when marshalling response.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomainVersion(domainId, domainVersionId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomainVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomainVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **includeUtterances** | **Boolean** | Whether utterances for intent definition should be included when marshalling response. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersion**


## getLanguageunderstandingDomainVersionReport

> NluDomainVersionQualityReport getLanguageunderstandingDomainVersionReport(domainId, domainVersionId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report

Retrieved quality report for the specified NLU Domain Version

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:view
* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomainVersionReport(domainId, domainVersionId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomainVersionReport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomainVersionReport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersionQualityReport**


## getLanguageunderstandingDomainVersions

> NluDomainVersionListing getLanguageunderstandingDomainVersions(domainId, opts)


GET /api/v2/languageunderstanding/domains/{domainId}/versions

Get all NLU Domain Versions for a given Domain.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:view
* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'includeUtterances': true, // Boolean | Whether utterances for intent definition should be included when marshalling response.
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomainVersions(domainId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomainVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomainVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **includeUtterances** | **Boolean** | Whether utterances for intent definition should be included when marshalling response. | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersionListing**


## getLanguageunderstandingDomains

> NluDomainListing getLanguageunderstandingDomains(opts)


GET /api/v2/languageunderstanding/domains

Get all NLU Domains.

Requires ANY permissions:

* languageUnderstanding:nluDomain:view
* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingDomains(opts)
  .then((data) => {
    console.log(`getLanguageunderstandingDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainListing**


## getLanguageunderstandingIgnorephrase

> IgnoredMinedPhraseListing getLanguageunderstandingIgnorephrase(languageCode, opts)


GET /api/v2/languageunderstanding/ignorephrases/{languageCode}

Get list of all ignored phrases of the specified language code

Requires ALL permissions:

* languageUnderstanding:ignoredPhrase:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let opts = { 
  'pageSize': 25, // Number | The page size for the listing. The max that will be returned is 200.
  'pageNumber': 1, // Number | The page number for the listing
  'text': "text_example", // String | The phrase text filter applied to the listing
  'sortOrder': "desc", // String | The sort order for the listing
  'sortBy': "dateModified", // String | The field to sort by for the listing
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingIgnorephrase(languageCode, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingIgnorephrase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingIgnorephrase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 200. | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number for the listing | [optional] [default to 1] |
 **text** | **String** | The phrase text filter applied to the listing | [optional]  |
 **sortOrder** | **String** | The sort order for the listing | [optional] [default to desc]<br />**Values**: asc, desc |
 **sortBy** | **String** | The field to sort by for the listing | [optional] [default to dateModified]<br />**Values**: dateModified, text |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IgnoredMinedPhraseListing**


## getLanguageunderstandingIgnoretopic

> IgnoredMinedTopicListing getLanguageunderstandingIgnoretopic(languageCode, opts)


GET /api/v2/languageunderstanding/ignoretopics/{languageCode}

Get list of all ignored topics of the specified language code

Requires ALL permissions:

* languageUnderstanding:ignoredTopic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let opts = { 
  'pageSize': 25, // Number | The page size for the listing. The max that will be returned is 200.
  'pageNumber': 1, // Number | The page number for the listing
  'text': "text_example", // String | The topic text filter applied to the listing
  'sortOrder': "desc", // String | The sort order for the listing
  'sortBy': "dateModified", // String | The field to sort by for the listing
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingIgnoretopic(languageCode, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingIgnoretopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingIgnoretopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 200. | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number for the listing | [optional] [default to 1] |
 **text** | **String** | The topic text filter applied to the listing | [optional]  |
 **sortOrder** | **String** | The sort order for the listing | [optional] [default to desc]<br />**Values**: asc, desc |
 **sortBy** | **String** | The field to sort by for the listing | [optional] [default to dateModified]<br />**Values**: dateModified, text |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IgnoredMinedTopicListing**


## getLanguageunderstandingMiner

> Miner getLanguageunderstandingMiner(minerId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}

Get information about a miner.

Requires ALL permissions:

* languageUnderstanding:miner:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMiner(minerId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMiner success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMiner');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Miner**


## getLanguageunderstandingMinerDraft

> Draft getLanguageunderstandingMinerDraft(minerId, draftId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}

Get information about a draft.

Requires ALL permissions:

* languageUnderstanding:draft:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let draftId = "draftId_example"; // String | Draft ID
let opts = { 
  'draftIntentId': "draftIntentId_example", // String | Parameter to filter a specific intent.
  'draftTopicId': "draftTopicId_example", // String | Parameter to filter a specific topic.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerDraft(minerId, draftId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **draftId** | **String** | Draft ID |  |
 **draftIntentId** | **String** | Parameter to filter a specific intent. | [optional]  |
 **draftTopicId** | **String** | Parameter to filter a specific topic. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Draft**


## getLanguageunderstandingMinerDrafts

> DraftListing getLanguageunderstandingMinerDrafts(minerId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/drafts

Retrieve the list of drafts created.

Requires ALL permissions:

* languageUnderstanding:draft:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerDrafts(minerId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DraftListing**


## getLanguageunderstandingMinerIntent

> MinerIntent getLanguageunderstandingMinerIntent(minerId, intentId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/intents/{intentId}

Get information about a mined intent

Requires ALL permissions:

* languageUnderstanding:minerIntent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let intentId = "intentId_example"; // String | The ID of the intent to be retrieved.
let opts = { 
  'expand': "expand_example", // String | Option to fetch utterances
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerIntent(minerId, intentId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerIntent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerIntent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **intentId** | **String** | The ID of the intent to be retrieved. |  |
 **expand** | **String** | Option to fetch utterances | [optional] <br />**Values**: phrases, utterances |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinerIntent**


## getLanguageunderstandingMinerIntents

> MinedIntentsListing getLanguageunderstandingMinerIntents(minerId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/intents

Retrieve a list of mined intents.

Requires ALL permissions:

* languageUnderstanding:minerIntent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'expand': "expand_example", // String | Option to fetch utterances.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerIntents(minerId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerIntents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerIntents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **expand** | **String** | Option to fetch utterances. | [optional] <br />**Values**: phrases, utterances |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinedIntentsListing**


## getLanguageunderstandingMinerTopic

> MinerTopic getLanguageunderstandingMinerTopic(minerId, topicId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}

Retrieves details of a particular topic.

Requires ALL permissions:

* languageUnderstanding:miner:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let topicId = "topicId_example"; // String | The ID of the topic to be retrieved.
let opts = { 
  'expand': "expand_example", // String | Option to fetch phrases
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerTopic(minerId, topicId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerTopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **topicId** | **String** | The ID of the topic to be retrieved. |  |
 **expand** | **String** | Option to fetch phrases | [optional] <br />**Values**: phrases, utterances |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinerTopic**


## getLanguageunderstandingMinerTopicPhrase

> MinerTopicPhrase getLanguageunderstandingMinerTopicPhrase(minerId, topicId, phraseId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}/phrases/{phraseId}

Retrieves utterances related to a phrase in a topic.

Requires ALL permissions:

* languageUnderstanding:miner:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let topicId = "topicId_example"; // String | The ID of the topic to be retrieved.
let phraseId = "phraseId_example"; // String | The ID of the phrase to be retrieved.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerTopicPhrase(minerId, topicId, phraseId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerTopicPhrase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerTopicPhrase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **topicId** | **String** | The ID of the topic to be retrieved. |  |
 **phraseId** | **String** | The ID of the phrase to be retrieved. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinerTopicPhrase**


## getLanguageunderstandingMinerTopics

> MinerTopicsListing getLanguageunderstandingMinerTopics(minerId, opts)


GET /api/v2/languageunderstanding/miners/{minerId}/topics

Retrieve a list of mined topics.

Requires ALL permissions:

* languageUnderstanding:miner:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMinerTopics(minerId, opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMinerTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMinerTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinerTopicsListing**


## getLanguageunderstandingMiners

> MinerListing getLanguageunderstandingMiners(opts)


GET /api/v2/languageunderstanding/miners

Retrieve the list of miners created.

Requires ALL permissions:

* languageUnderstanding:miner:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let opts = { 
  'minerType': "minerType_example", // String | Type of miner, either intent or topic
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingMiners(opts)
  .then((data) => {
    console.log(`getLanguageunderstandingMiners success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingMiners');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerType** | **String** | Type of miner, either intent or topic | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MinerListing**


## getLanguageunderstandingSettings

> NluOrganization getLanguageunderstandingSettings(opts)


GET /api/v2/languageunderstanding/settings

Get Organization Configuration

Requires ANY permissions:

* languageUnderstanding:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguageunderstandingSettings(opts)
  .then((data) => {
    console.log(`getLanguageunderstandingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguageunderstandingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluOrganization**


## patchLanguageunderstandingDomain

> NluDomain patchLanguageunderstandingDomain(domainId, body, opts)


PATCH /api/v2/languageunderstanding/domains/{domainId}

Update an NLU Domain.

Requires ANY permissions:

* languageUnderstanding:nluDomain:edit
* dialog:bot:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The updated NLU Domain.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLanguageunderstandingDomain(domainId, body, opts)
  .then((data) => {
    console.log(`patchLanguageunderstandingDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLanguageunderstandingDomain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **body** | **Object** | The updated NLU Domain. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomain**


## patchLanguageunderstandingMinerDraft

> Draft patchLanguageunderstandingMinerDraft(minerId, draftId, opts)


PATCH /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}

Save information for the draft. Either topic draft or intent draft should be sent.

Requires ALL permissions:

* languageUnderstanding:draft:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let draftId = "draftId_example"; // String | Draft ID
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLanguageunderstandingMinerDraft(minerId, draftId, opts)
  .then((data) => {
    console.log(`patchLanguageunderstandingMinerDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLanguageunderstandingMinerDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **draftId** | **String** | Draft ID |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Draft**


## postLanguageunderstandingDomainFeedback

> NluFeedbackResponse postLanguageunderstandingDomainFeedback(domainId, body, opts)


POST /api/v2/languageunderstanding/domains/{domainId}/feedback

Create feedback for the NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:feedback:add
* dialog:bot:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The Feedback to create.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomainFeedback(domainId, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomainFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomainFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **body** | **Object** | The Feedback to create. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluFeedbackResponse**


## postLanguageunderstandingDomainVersionDetect

> NluDetectionResponse postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body, opts)


POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect

Detect intent, entities, etc. in the submitted text using the specified NLU domain version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:view
* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let body = {}; // Object | The input data to perform detection on.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomainVersionDetect success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomainVersionDetect');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **body** | **Object** | The input data to perform detection on. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDetectionResponse**


## postLanguageunderstandingDomainVersionPublish

> NluDomainVersion postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId, opts)


POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish

Publish the draft NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:add
* dialog:botVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomainVersionPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomainVersionPublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersion**


## postLanguageunderstandingDomainVersionTrain

> NluDomainVersionTrainingResponse postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId, opts)


POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train

Train the draft NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:edit
* dialog:botVersion:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomainVersionTrain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomainVersionTrain');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersionTrainingResponse**


## postLanguageunderstandingDomainVersions

> NluDomainVersion postLanguageunderstandingDomainVersions(domainId, body, opts)


POST /api/v2/languageunderstanding/domains/{domainId}/versions

Create an NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:add
* dialog:botVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The NLU Domain Version to create.
let opts = { 
  'includeUtterances': true, // Boolean | Whether utterances for intent definition should be included when marshalling response.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomainVersions(domainId, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomainVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomainVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **body** | **Object** | The NLU Domain Version to create. |  |
 **includeUtterances** | **Boolean** | Whether utterances for intent definition should be included when marshalling response. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersion**


## postLanguageunderstandingDomains

> NluDomain postLanguageunderstandingDomains(body, opts)


POST /api/v2/languageunderstanding/domains

Create an NLU Domain.

Requires ANY permissions:

* languageUnderstanding:nluDomain:add
* dialog:bot:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let body = {}; // Object | The NLU Domain to create.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingDomains(body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingDomains');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The NLU Domain to create. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomain**


## postLanguageunderstandingIgnorephrase

> IgnorePhrasesResponse postLanguageunderstandingIgnorephrase(languageCode, body, opts)


POST /api/v2/languageunderstanding/ignorephrases/{languageCode}

Add phrases to the ignored phrases list

Requires ALL permissions:

* languageUnderstanding:ignoredPhrase:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let body = {}; // Object | Request body containing phrases to be ignored
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingIgnorephrase(languageCode, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingIgnorephrase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingIgnorephrase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **body** | **Object** | Request body containing phrases to be ignored |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IgnorePhrasesResponse**


## postLanguageunderstandingIgnorephraseRemove

> void postLanguageunderstandingIgnorephraseRemove(languageCode, body, opts)


POST /api/v2/languageunderstanding/ignorephrases/{languageCode}/remove

Delete ignored phrases

Requires ALL permissions:

* languageUnderstanding:ignoredPhrase:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let body = {}; // Object | Request body containing entities to be removed
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingIgnorephraseRemove(languageCode, body, opts)
  .then(() => {
    console.log('postLanguageunderstandingIgnorephraseRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingIgnorephraseRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **body** | **Object** | Request body containing entities to be removed |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postLanguageunderstandingIgnoretopic

> IgnoreTopicsResponse postLanguageunderstandingIgnoretopic(languageCode, body, opts)


POST /api/v2/languageunderstanding/ignoretopics/{languageCode}

Add topics to the ignored topics list

Requires ALL permissions:

* languageUnderstanding:ignoredTopic:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let body = {}; // Object | Request body containing topics to be ignored
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingIgnoretopic(languageCode, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingIgnoretopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingIgnoretopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **body** | **Object** | Request body containing topics to be ignored |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IgnoreTopicsResponse**


## postLanguageunderstandingIgnoretopicRemove

> void postLanguageunderstandingIgnoretopicRemove(languageCode, body, opts)


POST /api/v2/languageunderstanding/ignoretopics/{languageCode}/remove

Delete ignored topics

Requires ALL permissions:

* languageUnderstanding:ignoredTopic:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let languageCode = "languageCode_example"; // String | Language Code
let body = {}; // Object | Request body containing entities to be removed
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingIgnoretopicRemove(languageCode, body, opts)
  .then(() => {
    console.log('postLanguageunderstandingIgnoretopicRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingIgnoretopicRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageCode** | **String** | Language Code |  |
 **body** | **Object** | Request body containing entities to be removed |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postLanguageunderstandingMinerDrafts

> Draft postLanguageunderstandingMinerDrafts(minerId, body, opts)


POST /api/v2/languageunderstanding/miners/{minerId}/drafts

Create a new draft resource.

Requires ALL permissions:

* languageUnderstanding:draft:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let body = {}; // Object | Details for creating draft resource
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingMinerDrafts(minerId, body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingMinerDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingMinerDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **body** | **Object** | Details for creating draft resource |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Draft**


## postLanguageunderstandingMinerExecute

> Miner postLanguageunderstandingMinerExecute(minerId, opts)


POST /api/v2/languageunderstanding/miners/{minerId}/execute

Start the mining process. Specify date range pair with mediaType, queueIds, participantType for mining data from Genesys Cloud. Specify only uploadKey for mining through an external file.

Requires ALL permissions:

* languageUnderstanding:miner:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let minerId = "minerId_example"; // String | Miner ID
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingMinerExecute(minerId, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingMinerExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingMinerExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Miner**


## postLanguageunderstandingMiners

> Miner postLanguageunderstandingMiners(body, opts)


POST /api/v2/languageunderstanding/miners

Create a unique miner.

Requires ALL permissions:

* languageUnderstanding:miner:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let body = {}; // Object | Details for creating a new miner resource.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingMiners(body, opts)
  .then((data) => {
    console.log(`postLanguageunderstandingMiners success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingMiners');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Details for creating a new miner resource. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Miner**


## putLanguageunderstandingDomainVersion

> NluDomainVersion putLanguageunderstandingDomainVersion(domainId, domainVersionId, body, opts)


PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}

Update an NLU Domain Version.

Requires ANY permissions:

* languageUnderstanding:nluDomainVersion:edit
* dialog:botVersion:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let body = {}; // Object | The updated NLU Domain Version.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putLanguageunderstandingDomainVersion(domainId, domainVersionId, body, opts)
  .then((data) => {
    console.log(`putLanguageunderstandingDomainVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLanguageunderstandingDomainVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | ID of the NLU domain. |  |
 **domainVersionId** | **String** | ID of the NLU domain version. |  |
 **body** | **Object** | The updated NLU Domain Version. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NluDomainVersion**


_purecloud-platform-client-v2@251.1.0_
