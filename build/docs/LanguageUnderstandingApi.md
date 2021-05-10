---
title: LanguageUnderstandingApi
---
# platformClient.LanguageUnderstandingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLanguageunderstandingDomain**](LanguageUnderstandingApi.html#deleteLanguageunderstandingDomain) | **DELETE** /api/v2/languageunderstanding/domains/{domainId} | Delete an NLU Domain.
[**deleteLanguageunderstandingDomainFeedbackFeedbackId**](LanguageUnderstandingApi.html#deleteLanguageunderstandingDomainFeedbackFeedbackId) | **DELETE** /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId} | Delete the feedback on the NLU Domain Version.
[**deleteLanguageunderstandingDomainVersion**](LanguageUnderstandingApi.html#deleteLanguageunderstandingDomainVersion) | **DELETE** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Delete an NLU Domain Version
[**getLanguageunderstandingDomain**](LanguageUnderstandingApi.html#getLanguageunderstandingDomain) | **GET** /api/v2/languageunderstanding/domains/{domainId} | Find an NLU Domain.
[**getLanguageunderstandingDomainFeedback**](LanguageUnderstandingApi.html#getLanguageunderstandingDomainFeedback) | **GET** /api/v2/languageunderstanding/domains/{domainId}/feedback | Get all feedback in the given NLU Domain Version.
[**getLanguageunderstandingDomainFeedbackFeedbackId**](LanguageUnderstandingApi.html#getLanguageunderstandingDomainFeedbackFeedbackId) | **GET** /api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId} | Find a Feedback
[**getLanguageunderstandingDomainVersion**](LanguageUnderstandingApi.html#getLanguageunderstandingDomainVersion) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Find an NLU Domain Version.
[**getLanguageunderstandingDomainVersionReport**](LanguageUnderstandingApi.html#getLanguageunderstandingDomainVersionReport) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report | Retrieved quality report for the specified NLU Domain Version
[**getLanguageunderstandingDomainVersions**](LanguageUnderstandingApi.html#getLanguageunderstandingDomainVersions) | **GET** /api/v2/languageunderstanding/domains/{domainId}/versions | Get all NLU Domain Versions for a given Domain.
[**getLanguageunderstandingDomains**](LanguageUnderstandingApi.html#getLanguageunderstandingDomains) | **GET** /api/v2/languageunderstanding/domains | Get all NLU Domains.
[**patchLanguageunderstandingDomain**](LanguageUnderstandingApi.html#patchLanguageunderstandingDomain) | **PATCH** /api/v2/languageunderstanding/domains/{domainId} | Update an NLU Domain.
[**postLanguageunderstandingDomainFeedback**](LanguageUnderstandingApi.html#postLanguageunderstandingDomainFeedback) | **POST** /api/v2/languageunderstanding/domains/{domainId}/feedback | Create feedback for the NLU Domain Version.
[**postLanguageunderstandingDomainVersionDetect**](LanguageUnderstandingApi.html#postLanguageunderstandingDomainVersionDetect) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect | Detect intent, entities, etc. in the submitted text using the specified NLU domain version.
[**postLanguageunderstandingDomainVersionPublish**](LanguageUnderstandingApi.html#postLanguageunderstandingDomainVersionPublish) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish | Publish the draft NLU Domain Version.
[**postLanguageunderstandingDomainVersionTrain**](LanguageUnderstandingApi.html#postLanguageunderstandingDomainVersionTrain) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train | Train the draft NLU Domain Version.
[**postLanguageunderstandingDomainVersions**](LanguageUnderstandingApi.html#postLanguageunderstandingDomainVersions) | **POST** /api/v2/languageunderstanding/domains/{domainId}/versions | Create an NLU Domain Version.
[**postLanguageunderstandingDomains**](LanguageUnderstandingApi.html#postLanguageunderstandingDomains) | **POST** /api/v2/languageunderstanding/domains | Create an NLU Domain.
[**putLanguageunderstandingDomainVersion**](LanguageUnderstandingApi.html#putLanguageunderstandingDomainVersion) | **PUT** /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId} | Update an NLU Domain Version.
{: class="table table-striped"}

<a name="deleteLanguageunderstandingDomain"></a>

# void deleteLanguageunderstandingDomain(domainId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.

apiInstance.deleteLanguageunderstandingDomain(domainId)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteLanguageunderstandingDomainFeedbackFeedbackId"></a>

# void deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let feedbackId = "feedbackId_example"; // String | ID of the Feedback

apiInstance.deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteLanguageunderstandingDomainVersion"></a>

# void deleteLanguageunderstandingDomainVersion(domainId, domainVersionId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.

apiInstance.deleteLanguageunderstandingDomainVersion(domainId, domainVersionId)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getLanguageunderstandingDomain"></a>

# NluDomain getLanguageunderstandingDomain(domainId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.

apiInstance.getLanguageunderstandingDomain(domainId)
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
{: class="table table-striped"}

### Return type

**NluDomain**

<a name="getLanguageunderstandingDomainFeedback"></a>

# NluFeedbackListing getLanguageunderstandingDomainFeedback(domainId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'intentName': "intentName_example", // String | The top intent name to retrieve feedback for.
  'assessment': "assessment_example", // String | The top assessment to retrieve feedback for.
  'dateStart': "2013-10-20", // String | Begin of time window as ISO-8601 date.
  'dateEnd': "2013-10-20", // String | End of time window as ISO-8601 date.
  'includeDeleted': true, // Boolean | Whether to include soft-deleted items in the result.
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'enableCursorPagination': false, // Boolean | Enable Cursor Pagination
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true
  'fields': ["fields_example"] // [String] | Fields and properties to get, comma-separated
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
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **enableCursorPagination** | **Boolean** | Enable Cursor Pagination | [optional] [default to false] |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true | [optional]  |
 **fields** | **[String]** | Fields and properties to get, comma-separated | [optional] <br />**Values**: version, dateCreated, text, intents |
{: class="table table-striped"}

### Return type

**NluFeedbackListing**

<a name="getLanguageunderstandingDomainFeedbackFeedbackId"></a>

# NluFeedbackResponse getLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let feedbackId = "feedbackId_example"; // String | ID of the Feedback
let opts = { 
  'fields': ["fields_example"] // [String] | Fields and properties to get, comma-separated
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
{: class="table table-striped"}

### Return type

**NluFeedbackResponse**

<a name="getLanguageunderstandingDomainVersion"></a>

# NluDomainVersion getLanguageunderstandingDomainVersion(domainId, domainVersionId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let opts = { 
  'includeUtterances': true // Boolean | Whether utterances for intent definition should be included when marshalling response.
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
{: class="table table-striped"}

### Return type

**NluDomainVersion**

<a name="getLanguageunderstandingDomainVersionReport"></a>

# NluDomainVersionQualityReport getLanguageunderstandingDomainVersionReport(domainId, domainVersionId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.

apiInstance.getLanguageunderstandingDomainVersionReport(domainId, domainVersionId)
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
{: class="table table-striped"}

### Return type

**NluDomainVersionQualityReport**

<a name="getLanguageunderstandingDomainVersions"></a>

# NluDomainVersionListing getLanguageunderstandingDomainVersions(domainId, opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let opts = { 
  'includeUtterances': true, // Boolean | Whether utterances for intent definition should be included when marshalling response.
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
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
{: class="table table-striped"}

### Return type

**NluDomainVersionListing**

<a name="getLanguageunderstandingDomains"></a>

# NluDomainListing getLanguageunderstandingDomains(opts)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
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
{: class="table table-striped"}

### Return type

**NluDomainListing**

<a name="patchLanguageunderstandingDomain"></a>

# NluDomain patchLanguageunderstandingDomain(domainId, body)



PATCH /api/v2/languageunderstanding/domains/{domainId}

Update an NLU Domain.



Requires ANY permissions: 

* languageUnderstanding:nluDomain:edit
* dialog:bot:edit


### Request Body Schema

<script type="text/javascript">
	function copyNluDomainExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluDomainExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluDomain <a href="#" onclick="return copyNluDomainExample()">Copy</a>

<div id="NluDomainExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "language": String, 
  "draftVersion": { 
    "id": String, 
    "domain": { 
      "id": String, 
      "name": String, 
      "language": String, 
      "draftVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "lastPublishedVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "dateModified": Date, 
      "selfUri": String, 
    },  
    "description": String, 
    "language": String, 
    "published": Boolean, 
    "dateCreated": Date, 
    "dateModified": Date, 
    "dateTrained": Date, 
    "datePublished": Date, 
    "trainingStatus": String, 
    "evaluationStatus": String, 
    "intents": { 
      "name": String, 
      "entityTypeBindings": { 
        "entityType": String, 
        "entityName": String, 
      },  
      "entityNameReferences": [String], 
      "utterances": { 
        "segments": { 
          "text": String, 
          "entity": { 
            "name": String, 
          },  
        },  
      },  
    },  
    "entityTypes": { 
      "name": String, 
      "description": String, 
      "mechanism": { 
        "items": { 
          "value": String, 
          "synonyms": [String], 
        },  
        "restricted": Boolean, 
        "type": String, 
      },  
    },  
    "entities": { 
      "name": String, 
      "type": String, 
    },  
    "selfUri": String, 
  },  
  "lastPublishedVersion": { 
    "id": String, 
    "domain": { 
      "id": String, 
      "name": String, 
      "language": String, 
      "draftVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "lastPublishedVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "dateModified": Date, 
      "selfUri": String, 
    },  
    "description": String, 
    "language": String, 
    "published": Boolean, 
    "dateCreated": Date, 
    "dateModified": Date, 
    "dateTrained": Date, 
    "datePublished": Date, 
    "trainingStatus": String, 
    "evaluationStatus": String, 
    "intents": { 
      "name": String, 
      "entityTypeBindings": { 
        "entityType": String, 
        "entityName": String, 
      },  
      "entityNameReferences": [String], 
      "utterances": { 
        "segments": { 
          "text": String, 
          "entity": { 
            "name": String, 
          },  
        },  
      },  
    },  
    "entityTypes": { 
      "name": String, 
      "description": String, 
      "mechanism": { 
        "items": { 
          "value": String, 
          "synonyms": [String], 
        },  
        "restricted": Boolean, 
        "type": String, 
      },  
    },  
    "entities": { 
      "name": String, 
      "type": String, 
    },  
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "dateModified": Date, 
  "selfUri": String, 
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The updated NLU Domain.

apiInstance.patchLanguageunderstandingDomain(domainId, body)
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
{: class="table table-striped"}

### Return type

**NluDomain**

<a name="postLanguageunderstandingDomainFeedback"></a>

# NluFeedbackResponse postLanguageunderstandingDomainFeedback(domainId, body)



POST /api/v2/languageunderstanding/domains/{domainId}/feedback

Create feedback for the NLU Domain Version.



Requires ANY permissions: 

* languageUnderstanding:feedback:add
* dialog:bot:add


### Request Body Schema

<script type="text/javascript">
	function copyNluFeedbackRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluFeedbackRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluFeedbackRequest <a href="#" onclick="return copyNluFeedbackRequestExample()">Copy</a>

<div id="NluFeedbackRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "text": String, 
  "intents": { 
    "name": String, 
    "probability": Number, 
    "entities": { 
      "name": String, 
      "entityType": String, 
      "probability": Number, 
      "value": { 
        "raw": String, 
        "resolved": String, 
      },  
    },  
    "assessment": String, 
  },  
  "versionId": String, 
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The Feedback to create.

apiInstance.postLanguageunderstandingDomainFeedback(domainId, body)
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
{: class="table table-striped"}

### Return type

**NluFeedbackResponse**

<a name="postLanguageunderstandingDomainVersionDetect"></a>

# NluDetectionResponse postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body)



POST /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect

Detect intent, entities, etc. in the submitted text using the specified NLU domain version.



Requires ANY permissions: 

* languageUnderstanding:nluDomainVersion:view
* dialog:botVersion:view


### Request Body Schema

<script type="text/javascript">
	function copyNluDetectionRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluDetectionRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluDetectionRequest <a href="#" onclick="return copyNluDetectionRequestExample()">Copy</a>

<div id="NluDetectionRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "input": { 
    "text": String, 
  },  
  "context": { 
    "intent": { 
      "name": String, 
    },  
    "entity": { 
      "name": String, 
    },  
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let body = {}; // Object | The input data to perform detection on.

apiInstance.postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body)
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
{: class="table table-striped"}

### Return type

**NluDetectionResponse**

<a name="postLanguageunderstandingDomainVersionPublish"></a>

# NluDomainVersion postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.

apiInstance.postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId)
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
{: class="table table-striped"}

### Return type

**NluDomainVersion**

<a name="postLanguageunderstandingDomainVersionTrain"></a>

# NluDomainVersionTrainingResponse postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId)



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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.

apiInstance.postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId)
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
{: class="table table-striped"}

### Return type

**NluDomainVersionTrainingResponse**

<a name="postLanguageunderstandingDomainVersions"></a>

# NluDomainVersion postLanguageunderstandingDomainVersions(domainId, body)



POST /api/v2/languageunderstanding/domains/{domainId}/versions

Create an NLU Domain Version.



Requires ANY permissions: 

* languageUnderstanding:nluDomainVersion:add
* dialog:botVersion:add


### Request Body Schema

<script type="text/javascript">
	function copyNluDomainVersionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluDomainVersionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluDomainVersion <a href="#" onclick="return copyNluDomainVersionExample()">Copy</a>

<div id="NluDomainVersionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "domain": { 
    "id": String, 
    "name": String, 
    "language": String, 
    "draftVersion": { 
      "id": String, 
      "domain": { 
        "id": String, 
        "name": String, 
        "language": String, 
        "draftVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "lastPublishedVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "dateCreated": Date, 
        "dateModified": Date, 
        "selfUri": String, 
      },  
      "description": String, 
      "language": String, 
      "published": Boolean, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "dateTrained": Date, 
      "datePublished": Date, 
      "trainingStatus": String, 
      "evaluationStatus": String, 
      "intents": { 
        "name": String, 
        "entityTypeBindings": { 
          "entityType": String, 
          "entityName": String, 
        },  
        "entityNameReferences": [String], 
        "utterances": { 
          "segments": { 
            "text": String, 
            "entity": { 
              "name": String, 
            },  
          },  
        },  
      },  
      "entityTypes": { 
        "name": String, 
        "description": String, 
        "mechanism": { 
          "items": { 
            "value": String, 
            "synonyms": [String], 
          },  
          "restricted": Boolean, 
          "type": String, 
        },  
      },  
      "entities": { 
        "name": String, 
        "type": String, 
      },  
      "selfUri": String, 
    },  
    "lastPublishedVersion": { 
      "id": String, 
      "domain": { 
        "id": String, 
        "name": String, 
        "language": String, 
        "draftVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "lastPublishedVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "dateCreated": Date, 
        "dateModified": Date, 
        "selfUri": String, 
      },  
      "description": String, 
      "language": String, 
      "published": Boolean, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "dateTrained": Date, 
      "datePublished": Date, 
      "trainingStatus": String, 
      "evaluationStatus": String, 
      "intents": { 
        "name": String, 
        "entityTypeBindings": { 
          "entityType": String, 
          "entityName": String, 
        },  
        "entityNameReferences": [String], 
        "utterances": { 
          "segments": { 
            "text": String, 
            "entity": { 
              "name": String, 
            },  
          },  
        },  
      },  
      "entityTypes": { 
        "name": String, 
        "description": String, 
        "mechanism": { 
          "items": { 
            "value": String, 
            "synonyms": [String], 
          },  
          "restricted": Boolean, 
          "type": String, 
        },  
      },  
      "entities": { 
        "name": String, 
        "type": String, 
      },  
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "dateModified": Date, 
    "selfUri": String, 
  },  
  "description": String, 
  "language": String, 
  "published": Boolean, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "dateTrained": Date, 
  "datePublished": Date, 
  "trainingStatus": String, 
  "evaluationStatus": String, 
  "intents": { 
    "name": String, 
    "entityTypeBindings": { 
      "entityType": String, 
      "entityName": String, 
    },  
    "entityNameReferences": [String], 
    "utterances": { 
      "segments": { 
        "text": String, 
        "entity": { 
          "name": String, 
        },  
      },  
    },  
  },  
  "entityTypes": { 
    "name": String, 
    "description": String, 
    "mechanism": { 
      "items": { 
        "value": String, 
        "synonyms": [String], 
      },  
      "restricted": Boolean, 
      "type": String, 
    },  
  },  
  "entities": { 
    "name": String, 
    "type": String, 
  },  
  "selfUri": String, 
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let body = {}; // Object | The NLU Domain Version to create.

apiInstance.postLanguageunderstandingDomainVersions(domainId, body)
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
{: class="table table-striped"}

### Return type

**NluDomainVersion**

<a name="postLanguageunderstandingDomains"></a>

# NluDomain postLanguageunderstandingDomains(body)



POST /api/v2/languageunderstanding/domains

Create an NLU Domain.



Requires ANY permissions: 

* languageUnderstanding:nluDomain:add
* dialog:bot:add


### Request Body Schema

<script type="text/javascript">
	function copyNluDomainExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluDomainExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluDomain <a href="#" onclick="return copyNluDomainExample()">Copy</a>

<div id="NluDomainExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "language": String, 
  "draftVersion": { 
    "id": String, 
    "domain": { 
      "id": String, 
      "name": String, 
      "language": String, 
      "draftVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "lastPublishedVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "dateModified": Date, 
      "selfUri": String, 
    },  
    "description": String, 
    "language": String, 
    "published": Boolean, 
    "dateCreated": Date, 
    "dateModified": Date, 
    "dateTrained": Date, 
    "datePublished": Date, 
    "trainingStatus": String, 
    "evaluationStatus": String, 
    "intents": { 
      "name": String, 
      "entityTypeBindings": { 
        "entityType": String, 
        "entityName": String, 
      },  
      "entityNameReferences": [String], 
      "utterances": { 
        "segments": { 
          "text": String, 
          "entity": { 
            "name": String, 
          },  
        },  
      },  
    },  
    "entityTypes": { 
      "name": String, 
      "description": String, 
      "mechanism": { 
        "items": { 
          "value": String, 
          "synonyms": [String], 
        },  
        "restricted": Boolean, 
        "type": String, 
      },  
    },  
    "entities": { 
      "name": String, 
      "type": String, 
    },  
    "selfUri": String, 
  },  
  "lastPublishedVersion": { 
    "id": String, 
    "domain": { 
      "id": String, 
      "name": String, 
      "language": String, 
      "draftVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "lastPublishedVersion": { 
        "id": String, 
        "domain": { 
          "id": String, 
          "name": String, 
          "language": String, 
          "draftVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "lastPublishedVersion": { 
            "id": String, 
            "domain": { 
              "id": String, 
              "name": String, 
              "language": String, 
              "draftVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "lastPublishedVersion": { 
                "id": String, 
                "domain": NluDomain, 
                "description": String, 
                "language": String, 
                "published": Boolean, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "dateTrained": Date, 
                "datePublished": Date, 
                "trainingStatus": String, 
                "evaluationStatus": String, 
                "intents": [IntentDefinition], 
                "entityTypes": [NamedEntityTypeDefinition], 
                "entities": [NamedEntityDefinition], 
                "selfUri": String, 
              },  
              "dateCreated": Date, 
              "dateModified": Date, 
              "selfUri": String, 
            },  
            "description": String, 
            "language": String, 
            "published": Boolean, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "dateTrained": Date, 
            "datePublished": Date, 
            "trainingStatus": String, 
            "evaluationStatus": String, 
            "intents": { 
              "name": String, 
              "entityTypeBindings": { 
                "entityType": String, 
                "entityName": String, 
              },  
              "entityNameReferences": [String], 
              "utterances": { 
                "segments": [NluUtteranceSegment], 
              },  
            },  
            "entityTypes": { 
              "name": String, 
              "description": String, 
              "mechanism": { 
                "items": [NamedEntityTypeItem], 
                "restricted": Boolean, 
                "type": String, 
              },  
            },  
            "entities": { 
              "name": String, 
              "type": String, 
            },  
            "selfUri": String, 
          },  
          "dateCreated": Date, 
          "dateModified": Date, 
          "selfUri": String, 
        },  
        "description": String, 
        "language": String, 
        "published": Boolean, 
        "dateCreated": Date, 
        "dateModified": Date, 
        "dateTrained": Date, 
        "datePublished": Date, 
        "trainingStatus": String, 
        "evaluationStatus": String, 
        "intents": { 
          "name": String, 
          "entityTypeBindings": { 
            "entityType": String, 
            "entityName": String, 
          },  
          "entityNameReferences": [String], 
          "utterances": { 
            "segments": { 
              "text": String, 
              "entity": { 
                "name": String, 
              },  
            },  
          },  
        },  
        "entityTypes": { 
          "name": String, 
          "description": String, 
          "mechanism": { 
            "items": { 
              "value": String, 
              "synonyms": [String], 
            },  
            "restricted": Boolean, 
            "type": String, 
          },  
        },  
        "entities": { 
          "name": String, 
          "type": String, 
        },  
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "dateModified": Date, 
      "selfUri": String, 
    },  
    "description": String, 
    "language": String, 
    "published": Boolean, 
    "dateCreated": Date, 
    "dateModified": Date, 
    "dateTrained": Date, 
    "datePublished": Date, 
    "trainingStatus": String, 
    "evaluationStatus": String, 
    "intents": { 
      "name": String, 
      "entityTypeBindings": { 
        "entityType": String, 
        "entityName": String, 
      },  
      "entityNameReferences": [String], 
      "utterances": { 
        "segments": { 
          "text": String, 
          "entity": { 
            "name": String, 
          },  
        },  
      },  
    },  
    "entityTypes": { 
      "name": String, 
      "description": String, 
      "mechanism": { 
        "items": { 
          "value": String, 
          "synonyms": [String], 
        },  
        "restricted": Boolean, 
        "type": String, 
      },  
    },  
    "entities": { 
      "name": String, 
      "type": String, 
    },  
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "dateModified": Date, 
  "selfUri": String, 
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let body = {}; // Object | The NLU Domain to create.

apiInstance.postLanguageunderstandingDomains(body)
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
{: class="table table-striped"}

### Return type

**NluDomain**

<a name="putLanguageunderstandingDomainVersion"></a>

# NluDomainVersion putLanguageunderstandingDomainVersion(domainId, domainVersionId, body)



PUT /api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}

Update an NLU Domain Version.



Requires ANY permissions: 

* languageUnderstanding:nluDomainVersion:edit
* dialog:botVersion:edit


### Request Body Schema

<script type="text/javascript">
	function copyNluDomainVersionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NluDomainVersionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

NluDomainVersion <a href="#" onclick="return copyNluDomainVersionExample()">Copy</a>

<div id="NluDomainVersionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "domain": { 
    "id": String, 
    "name": String, 
    "language": String, 
    "draftVersion": { 
      "id": String, 
      "domain": { 
        "id": String, 
        "name": String, 
        "language": String, 
        "draftVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "lastPublishedVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "dateCreated": Date, 
        "dateModified": Date, 
        "selfUri": String, 
      },  
      "description": String, 
      "language": String, 
      "published": Boolean, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "dateTrained": Date, 
      "datePublished": Date, 
      "trainingStatus": String, 
      "evaluationStatus": String, 
      "intents": { 
        "name": String, 
        "entityTypeBindings": { 
          "entityType": String, 
          "entityName": String, 
        },  
        "entityNameReferences": [String], 
        "utterances": { 
          "segments": { 
            "text": String, 
            "entity": { 
              "name": String, 
            },  
          },  
        },  
      },  
      "entityTypes": { 
        "name": String, 
        "description": String, 
        "mechanism": { 
          "items": { 
            "value": String, 
            "synonyms": [String], 
          },  
          "restricted": Boolean, 
          "type": String, 
        },  
      },  
      "entities": { 
        "name": String, 
        "type": String, 
      },  
      "selfUri": String, 
    },  
    "lastPublishedVersion": { 
      "id": String, 
      "domain": { 
        "id": String, 
        "name": String, 
        "language": String, 
        "draftVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "lastPublishedVersion": { 
          "id": String, 
          "domain": { 
            "id": String, 
            "name": String, 
            "language": String, 
            "draftVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "lastPublishedVersion": { 
              "id": String, 
              "domain": { 
                "id": String, 
                "name": String, 
                "language": String, 
                "draftVersion": NluDomainVersion, 
                "lastPublishedVersion": NluDomainVersion, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "selfUri": String, 
              },  
              "description": String, 
              "language": String, 
              "published": Boolean, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "dateTrained": Date, 
              "datePublished": Date, 
              "trainingStatus": String, 
              "evaluationStatus": String, 
              "intents": { 
                "name": String, 
                "entityTypeBindings": [NamedEntityTypeBinding], 
                "entityNameReferences": [String], 
                "utterances": [NluUtterance], 
              },  
              "entityTypes": { 
                "name": String, 
                "description": String, 
                "mechanism": NamedEntityTypeMechanism, 
              },  
              "entities": { 
                "name": String, 
                "type": String, 
              },  
              "selfUri": String, 
            },  
            "dateCreated": Date, 
            "dateModified": Date, 
            "selfUri": String, 
          },  
          "description": String, 
          "language": String, 
          "published": Boolean, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "dateTrained": Date, 
          "datePublished": Date, 
          "trainingStatus": String, 
          "evaluationStatus": String, 
          "intents": { 
            "name": String, 
            "entityTypeBindings": { 
              "entityType": String, 
              "entityName": String, 
            },  
            "entityNameReferences": [String], 
            "utterances": { 
              "segments": { 
                "text": String, 
                "entity": NamedEntityAnnotation, 
              },  
            },  
          },  
          "entityTypes": { 
            "name": String, 
            "description": String, 
            "mechanism": { 
              "items": { 
                "value": String, 
                "synonyms": [String], 
              },  
              "restricted": Boolean, 
              "type": String, 
            },  
          },  
          "entities": { 
            "name": String, 
            "type": String, 
          },  
          "selfUri": String, 
        },  
        "dateCreated": Date, 
        "dateModified": Date, 
        "selfUri": String, 
      },  
      "description": String, 
      "language": String, 
      "published": Boolean, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "dateTrained": Date, 
      "datePublished": Date, 
      "trainingStatus": String, 
      "evaluationStatus": String, 
      "intents": { 
        "name": String, 
        "entityTypeBindings": { 
          "entityType": String, 
          "entityName": String, 
        },  
        "entityNameReferences": [String], 
        "utterances": { 
          "segments": { 
            "text": String, 
            "entity": { 
              "name": String, 
            },  
          },  
        },  
      },  
      "entityTypes": { 
        "name": String, 
        "description": String, 
        "mechanism": { 
          "items": { 
            "value": String, 
            "synonyms": [String], 
          },  
          "restricted": Boolean, 
          "type": String, 
        },  
      },  
      "entities": { 
        "name": String, 
        "type": String, 
      },  
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "dateModified": Date, 
    "selfUri": String, 
  },  
  "description": String, 
  "language": String, 
  "published": Boolean, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "dateTrained": Date, 
  "datePublished": Date, 
  "trainingStatus": String, 
  "evaluationStatus": String, 
  "intents": { 
    "name": String, 
    "entityTypeBindings": { 
      "entityType": String, 
      "entityName": String, 
    },  
    "entityNameReferences": [String], 
    "utterances": { 
      "segments": { 
        "text": String, 
        "entity": { 
          "name": String, 
        },  
      },  
    },  
  },  
  "entityTypes": { 
    "name": String, 
    "description": String, 
    "mechanism": { 
      "items": { 
        "value": String, 
        "synonyms": [String], 
      },  
      "restricted": Boolean, 
      "type": String, 
    },  
  },  
  "entities": { 
    "name": String, 
    "type": String, 
  },  
  "selfUri": String, 
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

let apiInstance = new platformClient.LanguageUnderstandingApi();

let domainId = "domainId_example"; // String | ID of the NLU domain.
let domainVersionId = "domainVersionId_example"; // String | ID of the NLU domain version.
let body = {}; // Object | The updated NLU Domain Version.

apiInstance.putLanguageunderstandingDomainVersion(domainId, domainVersionId, body)
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
{: class="table table-striped"}

### Return type

**NluDomainVersion**

