---
title: KnowledgeApi
---
# platformClient.KnowledgeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteKnowledgeKnowledgebase**](KnowledgeApi.html#deleteKnowledgeKnowledgebase) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Delete knowledge base
[**deleteKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLanguageCategory) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Delete category
[**deleteKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#deleteKnowledgeKnowledgebaseLanguageDocument) | **DELETE** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Delete document
[**getKnowledgeKnowledgebase**](KnowledgeApi.html#getKnowledgeKnowledgebase) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Get knowledge base
[**getKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageCategories) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Get categories
[**getKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageCategory) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Get category
[**getKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocument) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Get document
[**getKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageDocuments) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Get documents
[**getKnowledgeKnowledgebaseLanguageTraining**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageTraining) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId} | Get training detail
[**getKnowledgeKnowledgebaseLanguageTrainings**](KnowledgeApi.html#getKnowledgeKnowledgebaseLanguageTrainings) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings | Get all trainings information for a knowledgebase
[**getKnowledgeKnowledgebases**](KnowledgeApi.html#getKnowledgeKnowledgebases) | **GET** /api/v2/knowledge/knowledgebases | Get knowledge bases
[**patchKnowledgeKnowledgebase**](KnowledgeApi.html#patchKnowledgeKnowledgebase) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId} | Update knowledge base
[**patchKnowledgeKnowledgebaseLanguageCategory**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageCategory) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId} | Update category
[**patchKnowledgeKnowledgebaseLanguageDocument**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageDocument) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId} | Update document
[**patchKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#patchKnowledgeKnowledgebaseLanguageDocuments) | **PATCH** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Update documents collection
[**postKnowledgeKnowledgebaseLanguageCategories**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageCategories) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories | Create new category
[**postKnowledgeKnowledgebaseLanguageDocuments**](KnowledgeApi.html#postKnowledgeKnowledgebaseLanguageDocuments) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents | Create document
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

<a name="deleteKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeCategory deleteKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE

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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
{: class="table table-striped"}

### Return type

**KnowledgeCategory**

<a name="deleteKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument deleteKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE

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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

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

<a name="getKnowledgeKnowledgebaseLanguageCategories"></a>

# CategoryListing getKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, opts)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200.
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Filter to return the categories that starts with the given category name. | [optional]  |
{: class="table table-striped"}

### Return type

**CategoryListing**

<a name="getKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeExtendedCategory getKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE

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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="getKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument getKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE

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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="getKnowledgeKnowledgebaseLanguageDocuments"></a>

# DocumentListing getKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, opts)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'categories': "categories_example", // String | Filter by categories ids, comma separated values expected.
  'title': "title_example" // String | Filter by document title.
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **categories** | **String** | Filter by categories ids, comma separated values expected. | [optional]  |
 **title** | **String** | Filter by document title. | [optional]  |
{: class="table table-striped"}

### Return type

**DocumentListing**

<a name="getKnowledgeKnowledgebaseLanguageTraining"></a>

# KnowledgeTraining getKnowledgeKnowledgebaseLanguageTraining(knowledgeBaseId, languageCode, trainingId)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **trainingId** | **String** | Training ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="getKnowledgeKnowledgebaseLanguageTrainings"></a>

# TrainingListing getKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode, opts)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200.
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **knowledgeDocumentsState** | **String** | Return the training with the specified state of the trained documents. | [optional] <br />**Values**: Draft, Active, Discarded, Archived |
{: class="table table-striped"}

### Return type

**TrainingListing**

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
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example" // String | Name of the KnowledgeBase to filter.
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
 **limit** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Name of the KnowledgeBase to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeBaseListing**

<a name="patchKnowledgeKnowledgebase"></a>

# KnowledgeBase patchKnowledgeKnowledgebase(knowledgeBaseId, body)



PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}

Update knowledge base



Requires ALL permissions: 

* knowledge:knowledgebase:edit


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeBaseExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeBaseExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeBase <a href="#" onclick="return copyKnowledgeBaseExample()">Copy</a>

<div id="KnowledgeBaseExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "coreLanguage": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "faqCount": Number, 
  "dateDocumentLastModified": Date, 
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

<a name="patchKnowledgeKnowledgebaseLanguageCategory"></a>

# KnowledgeExtendedCategory patchKnowledgeKnowledgebaseLanguageCategory(categoryId, knowledgeBaseId, languageCode, body)



PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}

Update category



Requires ALL permissions: 

* knowledge:category:edit


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeCategoryRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeCategoryRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeCategoryRequest <a href="#" onclick="return copyKnowledgeCategoryRequestExample()">Copy</a>

<div id="KnowledgeCategoryRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "parent": { 
    "id": String, 
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

let apiInstance = new platformClient.KnowledgeApi();

let categoryId = "categoryId_example"; // String | Category ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="patchKnowledgeKnowledgebaseLanguageDocument"></a>

# KnowledgeDocument patchKnowledgeKnowledgebaseLanguageDocument(documentId, knowledgeBaseId, languageCode, body)



PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}

Update document



Requires ALL permissions: 

* knowledge:document:edit


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeDocumentRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeDocumentRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeDocumentRequest <a href="#" onclick="return copyKnowledgeDocumentRequestExample()">Copy</a>

<div id="KnowledgeDocumentRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "type": String, 
  "externalUrl": String, 
  "faq": { 
    "question": String, 
    "answer": String, 
    "alternatives": [String], 
  },  
  "categories": { 
    "id": String, 
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

let apiInstance = new platformClient.KnowledgeApi();

let documentId = "documentId_example"; // String | Document ID
let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="patchKnowledgeKnowledgebaseLanguageDocuments"></a>

# DocumentListing patchKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)



PATCH /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Update documents collection



Requires ALL permissions: 

* knowledge:document:edit


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeDocumentBulkRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeDocumentBulkRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeDocumentBulkRequest <a href="#" onclick="return copyKnowledgeDocumentBulkRequestExample()">Copy</a>

<div id="KnowledgeDocumentBulkRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "type": String, 
  "externalUrl": String, 
  "faq": { 
    "question": String, 
    "answer": String, 
    "alternatives": [String], 
  },  
  "categories": { 
    "id": String, 
  },  
  "id": String, 
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

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**DocumentListing**

<a name="postKnowledgeKnowledgebaseLanguageCategories"></a>

# KnowledgeExtendedCategory postKnowledgeKnowledgebaseLanguageCategories(knowledgeBaseId, languageCode, body)



POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories

Create new category



Requires ALL permissions: 

* knowledge:category:add


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeCategoryRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeCategoryRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeCategoryRequest <a href="#" onclick="return copyKnowledgeCategoryRequestExample()">Copy</a>

<div id="KnowledgeCategoryRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "parent": { 
    "id": String, 
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

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeExtendedCategory**

<a name="postKnowledgeKnowledgebaseLanguageDocuments"></a>

# KnowledgeDocument postKnowledgeKnowledgebaseLanguageDocuments(knowledgeBaseId, languageCode, body)



POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents

Create document



Requires ALL permissions: 

* knowledge:document:add


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeDocumentRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeDocumentRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeDocumentRequest <a href="#" onclick="return copyKnowledgeDocumentRequestExample()">Copy</a>

<div id="KnowledgeDocumentRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "type": String, 
  "externalUrl": String, 
  "faq": { 
    "question": String, 
    "answer": String, 
    "alternatives": [String], 
  },  
  "categories": { 
    "id": String, 
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

let apiInstance = new platformClient.KnowledgeApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**KnowledgeDocument**

<a name="postKnowledgeKnowledgebaseLanguageTrainingPromote"></a>

# KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainingPromote(knowledgeBaseId, languageCode, trainingId)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE
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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
 **trainingId** | **String** | Training ID |  |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="postKnowledgeKnowledgebaseLanguageTrainings"></a>

# KnowledgeTraining postKnowledgeKnowledgebaseLanguageTrainings(knowledgeBaseId, languageCode)



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
let languageCode = "en-US"; // String | Language code, format: iso2-LOCALE

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
 **languageCode** | **String** | Language code, format: iso2-LOCALE | <br />**Values**: en-US, de-DE |
{: class="table table-striped"}

### Return type

**KnowledgeTraining**

<a name="postKnowledgeKnowledgebaseSearch"></a>

# KnowledgeSearchResponse postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)



POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search

Search Documents



Requires ALL permissions: 

* knowledge:knowledgebase:search


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeSearchRequest <a href="#" onclick="return copyKnowledgeSearchRequestExample()">Copy</a>

<div id="KnowledgeSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "query": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "documentType": String, 
  "languageCode": String, 
  "searchOnDraftDocuments": Boolean, 
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


### Request Body Schema

<script type="text/javascript">
	function copyKnowledgeBaseExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#KnowledgeBaseExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

KnowledgeBase <a href="#" onclick="return copyKnowledgeBaseExample()">Copy</a>

<div id="KnowledgeBaseExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "coreLanguage": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "faqCount": Number, 
  "dateDocumentLastModified": Date, 
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

