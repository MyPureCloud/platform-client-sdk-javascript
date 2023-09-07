---
title: KnowledgeApi
---
# platformClient.KnowledgeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteKnowledgeKnowledgebase**](KnowledgeApi.html#deleteKnowledgeKnowledgebase) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Delete knowledge base
[**deleteKnowledgeKnowledgebaseCategory**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseCategory) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Delete category
[**deleteKnowledgeKnowledgebaseDocument**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseDocument) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Delete document.
[**deleteKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseDocumentVariation) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Delete a variation for a document.
[**deleteKnowledgeKnowledgebaseExportJob**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseExportJob) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId} | Delete export job
[**deleteKnowledgeKnowledgebaseImportJob**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseImportJob) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Delete import job
[**deleteKnowledgeKnowledgebaseLabel**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLabel) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Delete label
[**deleteKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLanguageCategory) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Delete category
[**deleteKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLanguageDocument) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Delete document
[**deleteKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLanguageDocumentsImport) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Delete import operation
[**getKnowledgeGuestSessionCategories**](KnowledgeApi.html#getKnowledgeGuestSessionCategories) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/categories | Get categories
[**getKnowledgeGuestSessionDocument**](KnowledgeApi.html#getKnowledgeGuestSessionDocument) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId} | Get a knowledge document by ID.
[**getKnowledgeGuestSessionDocuments**](KnowledgeApi.html#getKnowledgeGuestSessionDocuments) | **GET** /api/v2/knowledge/guest/sessions/{sessionId}/documents | Get documents.
[**getKnowledgeKnowledgebase**](KnowledgeApi.html#getKnowledgeKnowledgebase) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Get knowledge base
[**getKnowledgeKnowledgebaseCategories**](KnowledgeApi.html#getKnowledgeKnowledgebaseCategories) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories | Get categories
[**getKnowledgeKnowledgebaseCategory**](KnowledgeApi.html#getKnowledgeKnowledgebaseCategory) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Get category
[**getKnowledgeKnowledgebaseDocument**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocument) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Get document.
[**getKnowledgeKnowledgebaseDocumentFeedback**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentFeedback) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback | Get a list of feedback records given on a document
[**getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId} | Get a single feedback record given on a document
[**getKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVariation) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Get a variation for a document.
[**getKnowledgeKnowledgebaseDocumentVariations**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVariations) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations | Get variations for a document.
[**getKnowledgeKnowledgebaseDocumentVersion**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVersion) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId} | Get document version.
[**getKnowledgeKnowledgebaseDocumentVersionVariation**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVersionVariation) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId} | Get variation for the given document version.
[**getKnowledgeKnowledgebaseDocumentVersionVariations**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVersionVariations) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations | Get variations for the given document version.
[**getKnowledgeKnowledgebaseDocumentVersions**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocumentVersions) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions | Get document versions.
[**getKnowledgeKnowledgebaseDocuments**](KnowledgeApi.html#getKnowledgeKnowledgebaseDocuments) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents | Get documents.
[**getKnowledgeKnowledgebaseExportJob**](KnowledgeApi.html#getKnowledgeKnowledgebaseExportJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId} | Get export job report
[**getKnowledgeKnowledgebaseImportJob**](KnowledgeApi.html#getKnowledgeKnowledgebaseImportJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Get import job report
[**getKnowledgeKnowledgebaseLabel**](KnowledgeApi.html#getKnowledgeKnowledgebaseLabel) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Get label
[**getKnowledgeKnowledgebaseLabels**](KnowledgeApi.html#getKnowledgeKnowledgebaseLabels) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels | Get labels
[**getKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageCategories) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Get categories
[**getKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageCategory) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Get category
[**getKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocument) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Get document
[**getKnowledgeKnowledgebaseLanguageDocumentUpload**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocumentUpload) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads/{uploadId} | Get document content upload status
[**getKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocuments) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Get documents
[**getKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocumentsImport) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Get import operation report
[**getKnowledgeKnowledgebaseLanguageTraining**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageTraining) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId} | Get training detail
[**getKnowledgeKnowledgebaseLanguageTrainings**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageTrainings) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings | Get all trainings information for a knowledgebase
[**getKnowledgeKnowledgebaseUnansweredGroup**](KnowledgeApi.html#getKnowledgeKnowledgebaseUnansweredGroup) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId} | Get knowledge base unanswered group for a particular groupId
[**getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup**](KnowledgeApi.html#getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId} | Get knowledge base unanswered phrase group for a particular phraseGroupId
[**getKnowledgeKnowledgebaseUnansweredGroups**](KnowledgeApi.html#getKnowledgeKnowledgebaseUnansweredGroups) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups | Get knowledge base unanswered groups
[**getKnowledgeKnowledgebases**](KnowledgeApi.html#getKnowledgeKnowledgebases) | **GET** /api/v2/knowledge/knowledgebases | Get knowledge bases
[**patchKnowledgeGuestSessionDocumentsSearchSearchId**](KnowledgeApi.html#patchKnowledgeGuestSessionDocumentsSearchSearchId) | **PATCH** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId} | Update search result.
[**patchKnowledgeKnowledgebase**](KnowledgeApi.html#patchKnowledgeKnowledgebase) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Update knowledge base
[**patchKnowledgeKnowledgebaseCategory**](KnowledgeApi.html#patchKnowledgeKnowledgebaseCategory) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId} | Update category
[**patchKnowledgeKnowledgebaseDocument**](KnowledgeApi.html#patchKnowledgeKnowledgebaseDocument) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId} | Update document.
[**patchKnowledgeKnowledgebaseDocumentVariation**](KnowledgeApi.html#patchKnowledgeKnowledgebaseDocumentVariation) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId} | Update a variation for a document.
[**patchKnowledgeKnowledgebaseDocumentsSearchSearchId**](KnowledgeApi.html#patchKnowledgeKnowledgebaseDocumentsSearchSearchId) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId} | Update search result.
[**patchKnowledgeKnowledgebaseImportJob**](KnowledgeApi.html#patchKnowledgeKnowledgebaseImportJob) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId} | Start import job
[**patchKnowledgeKnowledgebaseLabel**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLabel) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId} | Update label
[**patchKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageCategory) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Update category
[**patchKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageDocument) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Update document
[**patchKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageDocuments) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Update documents collection
[**patchKnowledgeKnowledgebaseLanguageDocumentsImport**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageDocumentsImport) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId} | Start import operation
[**patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup**](KnowledgeApi.html#patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId} | Update a Knowledge base unanswered phrase group
[**postKnowledgeDocumentuploads**](KnowledgeApi.html#postKnowledgeDocumentuploads) | **POST** /api/v2/knowledge/documentuploads | Creates a presigned URL for uploading a knowledge import file with a set of documents
[**postKnowledgeGuestSessionDocumentFeedback**](KnowledgeApi.html#postKnowledgeGuestSessionDocumentFeedback) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/feedback | Give feedback on a document
[**postKnowledgeGuestSessionDocumentsSearch**](KnowledgeApi.html#postKnowledgeGuestSessionDocumentsSearch) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search | Search the documents in a guest session.
[**postKnowledgeGuestSessionDocumentsSearchSuggestions**](KnowledgeApi.html#postKnowledgeGuestSessionDocumentsSearchSuggestions) | **POST** /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions | Query the knowledge documents to provide suggestions for auto completion.
[**postKnowledgeGuestSessions**](KnowledgeApi.html#postKnowledgeGuestSessions) | **POST** /api/v2/knowledge/guest/sessions | Create guest session
[**postKnowledgeKnowledgebaseCategories**](KnowledgeApi.html#postKnowledgeKnowledgebaseCategories) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories | Create new category
[**postKnowledgeKnowledgebaseDocumentFeedback**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentFeedback) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback | Give feedback on a document
[**postKnowledgeKnowledgebaseDocumentVariations**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentVariations) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations | Create a variation for a document.
[**postKnowledgeKnowledgebaseDocumentVersions**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentVersions) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions | Creates or restores a document version.
[**postKnowledgeKnowledgebaseDocumentViews**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentViews) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/views | Create view for a document.
[**postKnowledgeKnowledgebaseDocuments**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocuments) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents | Create document.
[**postKnowledgeKnowledgebaseDocumentsBulkRemove**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentsBulkRemove) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/remove | Bulk remove documents.
[**postKnowledgeKnowledgebaseDocumentsBulkUpdate**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentsBulkUpdate) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/update | Bulk update documents.
[**postKnowledgeKnowledgebaseDocumentsSearch**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentsSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search | Search the documents in a knowledge base.
[**postKnowledgeKnowledgebaseDocumentsSearchSuggestions**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentsSearchSuggestions) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions | Query the knowledge documents to provide suggestions for auto completion.
[**postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd**](KnowledgeApi.html#postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/versions/bulk/add | Bulk add document versions.
[**postKnowledgeKnowledgebaseExportJobs**](KnowledgeApi.html#postKnowledgeKnowledgebaseExportJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs | Create export job
[**postKnowledgeKnowledgebaseImportJobs**](KnowledgeApi.html#postKnowledgeKnowledgebaseImportJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs | Create import job
[**postKnowledgeKnowledgebaseLabels**](KnowledgeApi.html#postKnowledgeKnowledgebaseLabels) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels | Create new label
[**postKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageCategories) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Create new category
[**postKnowledgeKnowledgebaseLanguageDocumentUploads**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageDocumentUploads) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads | Upload Article Content
[**postKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageDocuments) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Create document
[**postKnowledgeKnowledgebaseLanguageDocumentsImports**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageDocumentsImports) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports | Create import operation
[**postKnowledgeKnowledgebaseLanguageTrainingPromote**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageTrainingPromote) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote | Promote trained documents from draft state to active.
[**postKnowledgeKnowledgebaseLanguageTrainings**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageTrainings) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings | Trigger training
[**postKnowledgeKnowledgebaseSearch**](KnowledgeApi.html#postKnowledgeKnowledgebaseSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search | Search Documents
[**postKnowledgeKnowledgebases**](KnowledgeApi.html#postKnowledgeKnowledgebases) | **POST** /api/v2/knowledge/knowledgebases | Create new knowledge base
{: class="table table-striped"}

<a name="deleteKnowledgeKnowledgebase"></a>

# KnowledgeBase deleteKnowledgeKnowledgebase(knowledgeBaseId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Delete knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID

apiInstance.deleteKnowledgeKnowledgebase(knowledgeBaseId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeBase**

<a name="deleteKnowledgeKnowledgebaseCategory"></a>

# CategoryResponse deleteKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Delete category

Requires ALL permissions:

* knowledge:category:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID

apiInstance.deleteKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |
{: class="table table-striped"}

### Return type

**CategoryResponse**

<a name="deleteKnowledgeKnowledgebaseDocument"></a>

# void deleteKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Delete document.

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.

apiInstance.deleteKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteKnowledgeKnowledgebaseDocumentVariation"></a>

# void deleteKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Delete a variation for a document.

Requires ANY permissions:

* knowledge:document:delete
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.

apiInstance.deleteKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseDocumentVariation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteKnowledgeKnowledgebaseExportJob"></a>

# void deleteKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}

Delete export job

Requires ALL permissions:

* knowledge:exportJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let exportJobId = "exportJobId_example"; // String | Export job ID

apiInstance.deleteKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseExportJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **exportJobId** | **String** | Export job ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteKnowledgeKnowledgebaseImportJob"></a>

# void deleteKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Delete import job

Requires ALL permissions:

* knowledge:importJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID

apiInstance.deleteKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseImportJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteKnowledgeKnowledgebaseLabel"></a>

# LabelResponse deleteKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)


DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Delete label

Requires ALL permissions:

* knowledge:label:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID

apiInstance.deleteKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |
{: class="table table-striped"}

### Return type

**LabelResponse**

<a name="deleteKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeCategory deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Delete category

Requires ALL permissions:

* knowledge:category:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
{: class="table table-striped"}

### Return type

**KnowledgeCategory**

<a name="deleteKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Delete document

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`deleteKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="deleteKnowledgeKnowledgebaseLanguageDocumentsImport"></a>

# void deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Delete import operation

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID

apiInstance.deleteKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)
  .then(() => {
    console.log('deleteKnowledgeKnowledgebaseLanguageDocumentsImport returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **importId** | **String** | Import ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getKnowledgeGuestSessionCategories"></a>

# GuestCategoryResponseListing getKnowledgeGuestSessionCategories(sessionId, opts)


GET /api/v2/knowledge/guest/sessions/{sessionId}/categories

Get categories

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'parentId': "parentId_example", // String | If specified, retrieves the children categories by parent category ID.
  'isRoot': true, // Boolean | If specified, retrieves only the root categories.
  'name': "name_example", // String | Filter to return the categories that starts with the given category name.
  'sortBy': "Name", // String | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically
  'expand': "expand_example", // String | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to category.
};

apiInstance.getKnowledgeGuestSessionCategories(sessionId, opts)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **parentId** | **String** | If specified, retrieves the children categories by parent category ID. | [optional]  |
 **isRoot** | **Boolean** | If specified, retrieves only the root categories. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
 **sortBy** | **String** | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically | [optional] [default to Name]<br />**Values**: Name, Hierarchy |
 **expand** | **String** | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to category. | [optional]  |
{: class="table table-striped"}

### Return type

**GuestCategoryResponseListing**

<a name="getKnowledgeGuestSessionDocument"></a>

# KnowledgeGuestDocument getKnowledgeGuestSessionDocument(sessionId, documentId)


GET /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}

Get a knowledge document by ID.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID

apiInstance.getKnowledgeGuestSessionDocument(sessionId, documentId)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeGuestDocument**

<a name="getKnowledgeGuestSessionDocuments"></a>

# KnowledgeGuestDocumentResponseListing getKnowledgeGuestSessionDocuments(sessionId, opts)


GET /api/v2/knowledge/guest/sessions/{sessionId}/documents

Get documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'categoryId': ["categoryId_example"], // [String] | If specified, retrieves documents associated with category ids, comma separated values expected.
  'pageSize': 3.4 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getKnowledgeGuestSessionDocuments(sessionId, opts)
  .then((data) => {
    console.log(`getKnowledgeGuestSessionDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeGuestSessionDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **categoryId** | **[String]** | If specified, retrieves documents associated with category ids, comma separated values expected. | [optional]  |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeGuestDocumentResponseListing**

<a name="getKnowledgeKnowledgebase"></a>

# KnowledgeBase getKnowledgeKnowledgebase(knowledgeBaseId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Get knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID

apiInstance.getKnowledgeKnowledgebase(knowledgeBaseId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeBase**

<a name="getKnowledgeKnowledgebaseCategories"></a>

# CategoryResponseListing getKnowledgeKnowledgebaseCategories(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories

Get categories

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'parentId': "parentId_example", // String | If specified, retrieves the children categories by parent category ID.
  'isRoot': true, // Boolean | If specified, retrieves only the root categories.
  'name': "name_example", // String | Filter to return the categories that starts with the given category name.
  'sortBy': "Name", // String | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically
  'expand': "expand_example", // String | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to category.
};

apiInstance.getKnowledgeKnowledgebaseCategories(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **parentId** | **String** | If specified, retrieves the children categories by parent category ID. | [optional]  |
 **isRoot** | **Boolean** | If specified, retrieves only the root categories. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
 **sortBy** | **String** | Name: sort by category names alphabetically; Hierarchy: sort by the full path of hierarchical category names alphabetically | [optional] [default to Name]<br />**Values**: Name, Hierarchy |
 **expand** | **String** | The specified entity attribute will be filled. Supported value:Ancestors: every ancestors will be filled via the parent attribute recursively,but only the id, name, parentId will be present for the ancestors. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to category. | [optional]  |
{: class="table table-striped"}

### Return type

**CategoryResponseListing**

<a name="getKnowledgeKnowledgebaseCategory"></a>

# CategoryResponse getKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Get category

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID

apiInstance.getKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |
{: class="table table-striped"}

### Return type

**CategoryResponse**

<a name="getKnowledgeKnowledgebaseDocument"></a>

# KnowledgeDocumentResponse getKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Get document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'expand': ["expand_example"], // [String] | The specified entity attributes will be filled. Comma separated values expected. Max No. of variations that can be returned on expand is 20.
  'state': "state_example" // String | when state is Draft, draft version of the document is returned,otherwise by default published version is returned in the response.
};

apiInstance.getKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. Max No. of variations that can be returned on expand is 20. | [optional] <br />**Values**: category, labels, variations |
 **state** | **String** | when state is Draft, draft version of the document is returned,otherwise by default published version is returned in the response. | [optional] <br />**Values**: Draft, Published |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentResponse**

<a name="getKnowledgeKnowledgebaseDocumentFeedback"></a>

# KnowledgeDocumentFeedbackResponseListing getKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback

Get a list of feedback records given on a document

Requires ANY permissions:

* knowledge:feedback:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'onlyCommented': true, // Boolean | If true, only feedback records that have comment are returned. If false, feedback records with and without comment are returned. Default: false.
  'documentVersionId': "documentVersionId_example", // String | Document version ID to filter by. Supported only if onlyCommented=true is set.
  'documentVariationId': "documentVariationId_example", // String | Document variation ID to filter by. Supported only if onlyCommented=true is set.
  'appType': "appType_example", // String | Application type to filter by. Supported only if onlyCommented=true is set.
  'queryType': "queryType_example", // String | Query type to filter by. Supported only if onlyCommented=true is set.
  'userId': "userId_example", // String | The ID of the user, who created the feedback, to filter by. Supported only if onlyCommented=true is set.
  'queueId': "queueId_example", // String | Queue ID to filter by. Supported only if onlyCommented=true is set.
  'state': "state_example" // String | State to filter by. Supported only if onlyCommented=true is set. Default: Final
};

apiInstance.getKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **onlyCommented** | **Boolean** | If true, only feedback records that have comment are returned. If false, feedback records with and without comment are returned. Default: false. | [optional]  |
 **documentVersionId** | **String** | Document version ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **documentVariationId** | **String** | Document variation ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **appType** | **String** | Application type to filter by. Supported only if onlyCommented=true is set. | [optional] <br />**Values**: Assistant, BotFlow, MessengerKnowledgeApp, SmartAdvisor, SupportCenter |
 **queryType** | **String** | Query type to filter by. Supported only if onlyCommented=true is set. | [optional] <br />**Values**: Unknown, Article, AutoSearch, Category, ManualSearch, Recommendation, Suggestion |
 **userId** | **String** | The ID of the user, who created the feedback, to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **queueId** | **String** | Queue ID to filter by. Supported only if onlyCommented=true is set. | [optional]  |
 **state** | **String** | State to filter by. Supported only if onlyCommented=true is set. Default: Final | [optional] <br />**Values**: All, Draft, Final |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentFeedbackResponseListing**

<a name="getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId"></a>

# KnowledgeDocumentFeedbackResponse getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}

Get a single feedback record given on a document

Requires ANY permissions:

* knowledge:feedback:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let feedbackId = "feedbackId_example"; // String | Feedback ID.

apiInstance.getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId(knowledgeBaseId, documentId, feedbackId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentFeedbackFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **feedbackId** | **String** | Feedback ID. |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentFeedbackResponse**

<a name="getKnowledgeKnowledgebaseDocumentVariation"></a>

# DocumentVariation getKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Get a variation for a document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.
let opts = { 
  'documentState': "documentState_example" // String | The state of the document.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |
 **documentState** | **String** | The state of the document. | [optional] <br />**Values**: Draft, Published |
{: class="table table-striped"}

### Return type

**DocumentVariation**

<a name="getKnowledgeKnowledgebaseDocumentVariations"></a>

# DocumentVariationListing getKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations

Get variations for a document.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'documentState': "documentState_example" // String | The state of the document.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **documentState** | **String** | The state of the document. | [optional] <br />**Values**: Draft, Published |
{: class="table table-striped"}

### Return type

**DocumentVariationListing**

<a name="getKnowledgeKnowledgebaseDocumentVersion"></a>

# KnowledgeDocumentVersion getKnowledgeKnowledgebaseDocumentVersion(knowledgeBaseId, documentId, versionId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}

Get document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersion(knowledgeBaseId, documentId, versionId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentVersion**

<a name="getKnowledgeKnowledgebaseDocumentVersionVariation"></a>

# KnowledgeDocumentVersionVariation getKnowledgeKnowledgebaseDocumentVersionVariation(knowledgeBaseId, documentId, versionId, variationId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId}

Get variation for the given document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let variationId = "variationId_example"; // String | Globally unique identifier for the document version variation.

apiInstance.getKnowledgeKnowledgebaseDocumentVersionVariation(knowledgeBaseId, documentId, versionId, variationId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersionVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersionVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **variationId** | **String** | Globally unique identifier for the document version variation. |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentVersionVariation**

<a name="getKnowledgeKnowledgebaseDocumentVersionVariations"></a>

# KnowledgeDocumentVersionVariationListing getKnowledgeKnowledgebaseDocumentVersionVariations(knowledgeBaseId, documentId, versionId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations

Get variations for the given document version.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let versionId = "versionId_example"; // String | Globally unique identifier for the document version.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersionVariations(knowledgeBaseId, documentId, versionId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersionVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersionVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **versionId** | **String** | Globally unique identifier for the document version. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentVersionVariationListing**

<a name="getKnowledgeKnowledgebaseDocumentVersions"></a>

# KnowledgeDocumentVersionListing getKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions

Get document versions.

Requires ALL permissions:

* knowledge:documentVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocumentVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocumentVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentVersionListing**

<a name="getKnowledgeKnowledgebaseDocuments"></a>

# KnowledgeDocumentResponseListing getKnowledgeKnowledgebaseDocuments(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents

Get documents.

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'interval': "interval_example", // String | Retrieves the documents modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ
  'documentId': ["documentId_example"], // [String] | Retrieves the specified documents, comma separated values expected.
  'categoryId': ["categoryId_example"], // [String] | If specified, retrieves documents associated with category ids, comma separated values expected.
  'includeSubcategories': true, // Boolean | Works along with 'categoryId' query parameter. If specified, retrieves documents associated with category ids and its children categories.
  'includeDrafts': true, // Boolean | If includeDrafts is true, Documents in the draft state are also returned in the response.
  'labelIds': ["labelIds_example"], // [String] | If specified, retrieves documents associated with label ids, comma separated values expected.
  'expand': ["expand_example"], // [String] | The specified entity attributes will be filled. Comma separated values expected.
  'externalIds': ["externalIds_example"] // [String] | If specified, retrieves documents associated with external ids, comma separated values expected.
};

apiInstance.getKnowledgeKnowledgebaseDocuments(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **interval** | **String** | Retrieves the documents modified in specified date and time range. If the after and before cursor parameters are within this interval, it would return valid data, otherwise it throws an error.The dates in the interval are represented in ISO-8601 format: YYYY-MM-DDThh:mm:ssZ/YYYY-MM-DDThh:mm:ssZ | [optional]  |
 **documentId** | **[String]** | Retrieves the specified documents, comma separated values expected. | [optional]  |
 **categoryId** | **[String]** | If specified, retrieves documents associated with category ids, comma separated values expected. | [optional]  |
 **includeSubcategories** | **Boolean** | Works along with 'categoryId' query parameter. If specified, retrieves documents associated with category ids and its children categories. | [optional]  |
 **includeDrafts** | **Boolean** | If includeDrafts is true, Documents in the draft state are also returned in the response. | [optional]  |
 **labelIds** | **[String]** | If specified, retrieves documents associated with label ids, comma separated values expected. | [optional]  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: category, labels, variations |
 **externalIds** | **[String]** | If specified, retrieves documents associated with external ids, comma separated values expected. | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentResponseListing**

<a name="getKnowledgeKnowledgebaseExportJob"></a>

# KnowledgeExportJobResponse getKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}

Get export job report

Requires ALL permissions:

* knowledge:exportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let exportJobId = "exportJobId_example"; // String | Export job ID

apiInstance.getKnowledgeKnowledgebaseExportJob(knowledgeBaseId, exportJobId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseExportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **exportJobId** | **String** | Export job ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeExportJobResponse**

<a name="getKnowledgeKnowledgebaseImportJob"></a>

# KnowledgeImportJobResponse getKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Get import job report

Requires ALL permissions:

* knowledge:importJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID
let opts = { 
  'expand': ["expand_example"] // [String] | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled.
};

apiInstance.getKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |
 **expand** | **[String]** | If expand contains 'urls' downloadURL and failedEntitiesURL will be filled. | [optional] <br />**Values**: urls |
{: class="table table-striped"}

### Return type

**KnowledgeImportJobResponse**

<a name="getKnowledgeKnowledgebaseLabel"></a>

# LabelResponse getKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Get label

Requires ALL permissions:

* knowledge:label:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID

apiInstance.getKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |
{: class="table table-striped"}

### Return type

**LabelResponse**

<a name="getKnowledgeKnowledgebaseLabels"></a>

# LabelListing getKnowledgeKnowledgebaseLabels(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels

Get labels

Requires ALL permissions:

* knowledge:label:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example", // String | Filter to return the labels that contains the given phrase in the name.
  'includeDocumentCount': true // Boolean | If specified, retrieves the number of documents related to label.
};

apiInstance.getKnowledgeKnowledgebaseLabels(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Filter to return the labels that contains the given phrase in the name. | [optional]  |
 **includeDocumentCount** | **Boolean** | If specified, retrieves the number of documents related to label. | [optional]  |
{: class="table table-striped"}

### Return type

**LabelListing**

<a name="getKnowledgeKnowledgebaseLanguageCategories"></a>

# CategoryListing getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories

Get categories

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example" // String | Filter to return the categories that starts with the given category name.
};

apiInstance.getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
{: class="table table-striped"}

### Return type

**CategoryListing**

<a name="getKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeExtendedCategory getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Get category

Requires ALL permissions:

* knowledge:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="getKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Get document

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="getKnowledgeKnowledgebaseLanguageDocumentUpload"></a>

# KnowledgeDocumentContentUpload getKnowledgeKnowledgebaseLanguageDocumentUpload(documentId, knowledgeBaseId, languageCode, uploadId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads/{uploadId}

Get document content upload status

getKnowledgeKnowledgebaseLanguageDocumentUpload is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let uploadId = "uploadId_example"; // String | UploadId

apiInstance.getKnowledgeKnowledgebaseLanguageDocumentUpload(documentId, knowledgeBaseId, languageCode, uploadId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocumentUpload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocumentUpload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **uploadId** | **String** | UploadId |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentContentUpload**

<a name="getKnowledgeKnowledgebaseLanguageDocuments"></a>

# DocumentListing getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Get documents

Requires ALL permissions:

* knowledge:document:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'categories': "categories_example", // String | Filter by categories ids, comma separated values expected.
  'title': "title_example", // String | Filter by document title.
  'sortBy': "sortBy_example", // String | Sort by.
  'sortOrder': "sortOrder_example", // String | Sort Order.
  'documentIds': ["documentIds_example"] // [String] | Comma-separated list of document identifiers to fetch by.
};

apiInstance.getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **categories** | **String** | Filter by categories ids, comma separated values expected. | [optional]  |
 **title** | **String** | Filter by document title. | [optional]  |
 **sortBy** | **String** | Sort by. | [optional] <br />**Values**: Title, Date |
 **sortOrder** | **String** | Sort Order. | [optional] <br />**Values**: ASC, ascending, DESC, descending |
 **documentIds** | **[String]** | Comma-separated list of document identifiers to fetch by. | [optional]  |
{: class="table table-striped"}

### Return type

**DocumentListing**

<a name="getKnowledgeKnowledgebaseLanguageDocumentsImport"></a>

# KnowledgeImport getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Get import operation report

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID

apiInstance.getKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageDocumentsImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **importId** | **String** | Import ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeImport**

<a name="getKnowledgeKnowledgebaseLanguageTraining"></a>

# KnowledgeTraining getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}

Get training detail

Requires ALL permissions:

* knowledge:training:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let trainingId = "trainingId_example"; // String | Training ID

apiInstance.getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageTraining success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageTraining');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **trainingId** | **String** | Training ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="getKnowledgeKnowledgebaseLanguageTrainings"></a>

# TrainingListing getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings

Get all trainings information for a knowledgebase

Requires ALL permissions:

* knowledge:training:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'knowledgeDocumentsState': "knowledgeDocumentsState_example" // String | Return the training with the specified state of the trained documents.
};

apiInstance.getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseLanguageTrainings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseLanguageTrainings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **knowledgeDocumentsState** | **String** | Return the training with the specified state of the trained documents. | [optional] <br />**Values**: Draft, Active, Discarded, Archived |
{: class="table table-striped"}

### Return type

**TrainingListing**

<a name="getKnowledgeKnowledgebaseUnansweredGroup"></a>

# UnansweredGroup getKnowledgeKnowledgebaseUnansweredGroup(knowledgeBaseId, groupId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}

Get knowledge base unanswered group for a particular groupId

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be retrieved.
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroup(knowledgeBaseId, groupId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be retrieved. |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**UnansweredGroup**

<a name="getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup"></a>

# UnansweredPhraseGroup getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}

Get knowledge base unanswered phrase group for a particular phraseGroupId

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be retrieved.
let phraseGroupId = "phraseGroupId_example"; // String | The ID of the phraseGroup to be retrieved.
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroupPhrasegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be retrieved. |  |
 **phraseGroupId** | **String** | The ID of the phraseGroup to be retrieved. |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**UnansweredPhraseGroup**

<a name="getKnowledgeKnowledgebaseUnansweredGroups"></a>

# UnansweredGroups getKnowledgeKnowledgebaseUnansweredGroups(knowledgeBaseId, opts)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups

Get knowledge base unanswered groups

Requires ALL permissions:

* knowledge:groups:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'app': "app_example", // String | The app value to be used for filtering phrases.
  'dateStart': "dateStart_example", // String | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example" // String | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.getKnowledgeKnowledgebaseUnansweredGroups(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUnansweredGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUnansweredGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **app** | **String** | The app value to be used for filtering phrases. | [optional] <br />**Values**: SupportCenter, MessengerKnowledgeApp, BotFlow, Assistant, SmartAdvisor |
 **dateStart** | **String** | The start date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | The end date to be used for filtering phrases. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
{: class="table table-striped"}

### Return type

**UnansweredGroups**

<a name="getKnowledgeKnowledgebases"></a>

# KnowledgeBaseListing getKnowledgeKnowledgebases(opts)


GET /api/v2/knowledge/knowledgebases

Get knowledge bases

Requires ALL permissions:

* knowledge:knowledgebase:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 100. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'name': "name_example", // String | Filter by Name.
  'coreLanguage': "coreLanguage_example", // String | Filter by core language.
  'published': true, // Boolean | Filter by published status.
  'sortBy': "sortBy_example", // String | Sort by.
  'sortOrder': "sortOrder_example" // String | Sort Order.
};

apiInstance.getKnowledgeKnowledgebases(opts)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 100. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **name** | **String** | Filter by Name. | [optional]  |
 **coreLanguage** | **String** | Filter by core language. | [optional] <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **published** | **Boolean** | Filter by published status. | [optional]  |
 **sortBy** | **String** | Sort by. | [optional] <br />**Values**: Name, Date |
 **sortOrder** | **String** | Sort Order. | [optional] <br />**Values**: ASC, ascending, DESC, descending |
{: class="table table-striped"}

### Return type

**KnowledgeBaseListing**

<a name="patchKnowledgeGuestSessionDocumentsSearchSearchId"></a>

# void patchKnowledgeGuestSessionDocumentsSearchSearchId(sessionId, searchId, body)


PATCH /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId}

Update search result.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let searchId = "searchId_example"; // String | Search Result ID
let body = {}; // Object | 

apiInstance.patchKnowledgeGuestSessionDocumentsSearchSearchId(sessionId, searchId, body)
  .then(() => {
    console.log('patchKnowledgeGuestSessionDocumentsSearchSearchId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeGuestSessionDocumentsSearchSearchId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **searchId** | **String** | Search Result ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchKnowledgeKnowledgebase"></a>

# KnowledgeBase patchKnowledgeKnowledgebase(knowledgeBaseId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Update knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebase(knowledgeBaseId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeBase**

<a name="patchKnowledgeKnowledgebaseCategory"></a>

# CategoryResponse patchKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}

Update category

Requires ALL permissions:

* knowledge:category:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let categoryId = "categoryId_example"; // String | Category ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseCategory(knowledgeBaseId, categoryId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **categoryId** | **String** | Category ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**CategoryResponse**

<a name="patchKnowledgeKnowledgebaseDocument"></a>

# KnowledgeDocumentResponse patchKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}

Update document.

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseDocument(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentResponse**

<a name="patchKnowledgeKnowledgebaseDocumentVariation"></a>

# DocumentVariation patchKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}

Update a variation for a document.

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentVariationId = "documentVariationId_example"; // String | Globally unique identifier for a document variation.
let documentId = "documentId_example"; // String | Globally unique identifier for a document.
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for a knowledge base.
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseDocumentVariation(documentVariationId, documentId, knowledgeBaseId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseDocumentVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocumentVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentVariationId** | **String** | Globally unique identifier for a document variation. |  |
 **documentId** | **String** | Globally unique identifier for a document. |  |
 **knowledgeBaseId** | **String** | Globally unique identifier for a knowledge base. |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentVariation**

<a name="patchKnowledgeKnowledgebaseDocumentsSearchSearchId"></a>

# void patchKnowledgeKnowledgebaseDocumentsSearchSearchId(knowledgeBaseId, searchId, opts)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId}

Update search result.

Requires ALL permissions:

* knowledge:search:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let searchId = "searchId_example"; // String | Search Result ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchKnowledgeKnowledgebaseDocumentsSearchSearchId(knowledgeBaseId, searchId, opts)
  .then(() => {
    console.log('patchKnowledgeKnowledgebaseDocumentsSearchSearchId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseDocumentsSearchSearchId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **searchId** | **String** | Search Result ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchKnowledgeKnowledgebaseImportJob"></a>

# KnowledgeImportJobResponse patchKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}

Start import job

Requires ALL permissions:

* knowledge:importJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let importJobId = "importJobId_example"; // String | Import job ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseImportJob(knowledgeBaseId, importJobId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **importJobId** | **String** | Import job ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeImportJobResponse**

<a name="patchKnowledgeKnowledgebaseLabel"></a>

# LabelResponse patchKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}

Update label

Requires ALL permissions:

* knowledge:label:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let labelId = "labelId_example"; // String | Label ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLabel(knowledgeBaseId, labelId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLabel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLabel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **labelId** | **String** | Label ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**LabelResponse**

<a name="patchKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeExtendedCategory patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Update category

Requires ALL permissions:

* knowledge:category:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="patchKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Update document

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="patchKnowledgeKnowledgebaseLanguageDocuments"></a>

# DocumentListing patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Update documents collection

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = [{}]; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentListing**

<a name="patchKnowledgeKnowledgebaseLanguageDocumentsImport"></a>

# KnowledgeImport patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports/{importId}

Start import operation

Requires ALL permissions:

* knowledge:document:edit
* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let importId = "importId_example"; // String | Import ID
let body = {}; // Object | 

apiInstance.patchKnowledgeKnowledgebaseLanguageDocumentsImport(knowledgeBaseId, languageCode, importId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseLanguageDocumentsImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseLanguageDocumentsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **importId** | **String** | Import ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeImport**

<a name="patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup"></a>

# UnansweredPhraseGroupUpdateResponse patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, body)


PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}

Update a Knowledge base unanswered phrase group

Requires ALL permissions:

* knowledge:groups:edit
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let groupId = "groupId_example"; // String | The ID of the group to be updated.
let phraseGroupId = "phraseGroupId_example"; // String | The ID of the phraseGroup to be updated.
let body = {}; // Object | Request body of the update unanswered group endpoint.

apiInstance.patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup(knowledgeBaseId, groupId, phraseGroupId, body)
  .then((data) => {
    console.log(`patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchKnowledgeKnowledgebaseUnansweredGroupPhrasegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **groupId** | **String** | The ID of the group to be updated. |  |
 **phraseGroupId** | **String** | The ID of the phraseGroup to be updated. |  |
 **body** | **Object** | Request body of the update unanswered group endpoint. |  |
{: class="table table-striped"}

### Return type

**UnansweredPhraseGroupUpdateResponse**

<a name="postKnowledgeDocumentuploads"></a>

# UploadUrlResponse postKnowledgeDocumentuploads(body)


POST /api/v2/knowledge/documentuploads

Creates a presigned URL for uploading a knowledge import file with a set of documents

Requires ALL permissions:

* knowledge:document:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | query

apiInstance.postKnowledgeDocumentuploads(body)
  .then((data) => {
    console.log(`postKnowledgeDocumentuploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeDocumentuploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postKnowledgeGuestSessionDocumentFeedback"></a>

# KnowledgeGuestDocumentFeedback postKnowledgeGuestSessionDocumentFeedback(sessionId, documentId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}/feedback

Give feedback on a document

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentFeedback(sessionId, documentId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeGuestDocumentFeedback**

<a name="postKnowledgeGuestSessionDocumentsSearch"></a>

# KnowledgeDocumentGuestSearch postKnowledgeGuestSessionDocumentsSearch(sessionId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/search

Search the documents in a guest session.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'expand': ["expand_example"], // [String] | Fields, if any, to expand for each document in the search result matching the query.
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentsSearch(sessionId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **expand** | **[String]** | Fields, if any, to expand for each document in the search result matching the query. | [optional] <br />**Values**: documentVariations, documentAlternatives |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentGuestSearch**

<a name="postKnowledgeGuestSessionDocumentsSearchSuggestions"></a>

# KnowledgeGuestDocumentSuggestion postKnowledgeGuestSessionDocumentsSearchSuggestions(sessionId, opts)


POST /api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions

Query the knowledge documents to provide suggestions for auto completion.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let sessionId = "sessionId_example"; // String | Knowledge guest session ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeGuestSessionDocumentsSearchSuggestions(sessionId, opts)
  .then((data) => {
    console.log(`postKnowledgeGuestSessionDocumentsSearchSuggestions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessionDocumentsSearchSuggestions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | Knowledge guest session ID. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeGuestDocumentSuggestion**

<a name="postKnowledgeGuestSessions"></a>

# KnowledgeGuestSession postKnowledgeGuestSessions(body)


POST /api/v2/knowledge/guest/sessions

Create guest session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | 

apiInstance.postKnowledgeGuestSessions(body)
  .then((data) => {
    console.log(`postKnowledgeGuestSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeGuestSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeGuestSession**

<a name="postKnowledgeKnowledgebaseCategories"></a>

# CategoryResponse postKnowledgeKnowledgebaseCategories(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories

Create new category

Requires ALL permissions:

* knowledge:category:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseCategories(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**CategoryResponse**

<a name="postKnowledgeKnowledgebaseDocumentFeedback"></a>

# KnowledgeDocumentFeedbackResponse postKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback

Give feedback on a document

Requires ANY permissions:

* knowledge:feedback:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentFeedback(knowledgeBaseId, documentId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentFeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentFeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentFeedbackResponse**

<a name="postKnowledgeKnowledgebaseDocumentVariations"></a>

# DocumentVariation postKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations

Create a variation for a document.

Requires ANY permissions:

* knowledge:document:add
* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentVariations(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentVariation**

<a name="postKnowledgeKnowledgebaseDocumentVersions"></a>

# KnowledgeDocumentVersion postKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions

Creates or restores a document version.

Requires ALL permissions:

* knowledge:documentVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Globally unique identifier for the knowledge base.
let documentId = "documentId_example"; // String | Globally unique identifier for the document.
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentVersions(knowledgeBaseId, documentId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Globally unique identifier for the knowledge base. |  |
 **documentId** | **String** | Globally unique identifier for the document. |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentVersion**

<a name="postKnowledgeKnowledgebaseDocumentViews"></a>

# void postKnowledgeKnowledgebaseDocumentViews(knowledgeBaseId, documentId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/views

Create view for a document.

Requires ALL permissions:

* knowledge:documentView:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID.
let documentId = "documentId_example"; // String | Document ID.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentViews(knowledgeBaseId, documentId, opts)
  .then(() => {
    console.log('postKnowledgeKnowledgebaseDocumentViews returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentViews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID. |  |
 **documentId** | **String** | Document ID. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postKnowledgeKnowledgebaseDocuments"></a>

# KnowledgeDocumentResponse postKnowledgeKnowledgebaseDocuments(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents

Create document.

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocuments(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentResponse**

<a name="postKnowledgeKnowledgebaseDocumentsBulkRemove"></a>

# BulkResponse postKnowledgeKnowledgebaseDocumentsBulkRemove(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/remove

Bulk remove documents.

postKnowledgeKnowledgebaseDocumentsBulkRemove is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* knowledge:document:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsBulkRemove(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="postKnowledgeKnowledgebaseDocumentsBulkUpdate"></a>

# BulkResponse postKnowledgeKnowledgebaseDocumentsBulkUpdate(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/bulk/update

Bulk update documents.

postKnowledgeKnowledgebaseDocumentsBulkUpdate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsBulkUpdate(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsBulkUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsBulkUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="postKnowledgeKnowledgebaseDocumentsSearch"></a>

# KnowledgeDocumentSearch postKnowledgeKnowledgebaseDocumentsSearch(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search

Search the documents in a knowledge base.

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let opts = { 
  'expand': ["expand_example"], // [String] | Fields, if any, to expand for each document in the search result matching the query.
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **expand** | **[String]** | Fields, if any, to expand for each document in the search result matching the query. | [optional] <br />**Values**: documentVariations, documentAlternatives |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentSearch**

<a name="postKnowledgeKnowledgebaseDocumentsSearchSuggestions"></a>

# KnowledgeDocumentSuggestion postKnowledgeKnowledgebaseDocumentsSearchSuggestions(knowledgeBaseId, opts)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions

Query the knowledge documents to provide suggestions for auto completion.

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | The ID of knowledge base containing the documents to query.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseDocumentsSearchSuggestions(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsSearchSuggestions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsSearchSuggestions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | The ID of knowledge base containing the documents to query. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentSuggestion**

<a name="postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd"></a>

# BulkResponse postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/versions/bulk/add

Bulk add document versions.

postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* knowledge:documentVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseDocumentsVersionsBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="postKnowledgeKnowledgebaseExportJobs"></a>

# KnowledgeExportJobResponse postKnowledgeKnowledgebaseExportJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs

Create export job

Requires ALL permissions:

* knowledge:exportJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseExportJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseExportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseExportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeExportJobResponse**

<a name="postKnowledgeKnowledgebaseImportJobs"></a>

# KnowledgeImportJobResponse postKnowledgeKnowledgebaseImportJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs

Create import job

Requires ALL permissions:

* knowledge:importJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseImportJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeImportJobResponse**

<a name="postKnowledgeKnowledgebaseLabels"></a>

# LabelResponse postKnowledgeKnowledgebaseLabels(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels

Create new label

Requires ALL permissions:

* knowledge:label:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLabels(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLabels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLabels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**LabelResponse**

<a name="postKnowledgeKnowledgebaseLanguageCategories"></a>

# KnowledgeExtendedCategory postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories

Create new category

Requires ALL permissions:

* knowledge:category:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="postKnowledgeKnowledgebaseLanguageDocumentUploads"></a>

# KnowledgeDocumentContentUpload postKnowledgeKnowledgebaseLanguageDocumentUploads(documentId, knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}/uploads

Upload Article Content

postKnowledgeKnowledgebaseLanguageDocumentUploads is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* knowledge:document:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocumentUploads(documentId, knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocumentUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocumentUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocumentContentUpload**

<a name="postKnowledgeKnowledgebaseLanguageDocuments"></a>

# KnowledgeDocument postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Create document

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="postKnowledgeKnowledgebaseLanguageDocumentsImports"></a>

# KnowledgeImport postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/imports

Create import operation

Requires ALL permissions:

* knowledge:document:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebaseLanguageDocumentsImports(knowledgeBaseId, languageCode, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageDocumentsImports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageDocumentsImports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeImport**

<a name="postKnowledgeKnowledgebaseLanguageTrainingPromote"></a>

# KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote

Promote trained documents from draft state to active.

Requires ALL permissions:

* knowledge:training:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE
let trainingId = "trainingId_example"; // String | Training ID

apiInstance.postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageTrainingPromote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageTrainingPromote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
 **trainingId** | **String** | Training ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="postKnowledgeKnowledgebaseLanguageTrainings"></a>

# KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings

Trigger training

Requires ALL permissions:

* knowledge:training:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = en-US; // String | Language code, format: iso2-LOCALE

apiInstance.postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseLanguageTrainings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseLanguageTrainings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, en-UK, en-AU, en-CA, en-HK, en-IN, en-IE, en-NZ, en-PH, en-SG, en-ZA, de-DE, de-AT, de-CH, es-AR, es-CO, es-MX, es-US, es-ES, fr-FR, fr-BE, fr-CA, fr-CH, pt-BR, pt-PT, nl-NL, nl-BE, it-IT |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="postKnowledgeKnowledgebaseSearch"></a>

# KnowledgeSearchResponse postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search

Search Documents

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeSearchResponse**

<a name="postKnowledgeKnowledgebases"></a>

# KnowledgeBase postKnowledgeKnowledgebases(body)


POST /api/v2/knowledge/knowledgebases

Create new knowledge base

Requires ALL permissions:

* knowledge:knowledgebase:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.KnowledgeApi();

let body = {}; // Object | 

apiInstance.postKnowledgeKnowledgebases(body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeBase**

