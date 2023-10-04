---
title: UploadsApi
---
# platformClient.UploadsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getKnowledgeKnowledgebaseUploadsUrlsJob**](UploadsApi.html#getKnowledgeKnowledgebaseUploadsUrlsJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId} | Get content upload from URL job status
[**postKnowledgeDocumentuploads**](UploadsApi.html#postKnowledgeDocumentuploads) | **POST** /api/v2/knowledge/documentuploads | Creates a presigned URL for uploading a knowledge import file with a set of documents
[**postKnowledgeKnowledgebaseUploadsUrlsJobs**](UploadsApi.html#postKnowledgeKnowledgebaseUploadsUrlsJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs | Create content upload from URL job
[**postLanguageunderstandingMinerUploads**](UploadsApi.html#postLanguageunderstandingMinerUploads) | **POST** /api/v2/languageunderstanding/miners/{minerId}/uploads | Creates a presigned URL for uploading a chat corpus which will be used for mining by intent miner
[**postUploadsLearningCoverart**](UploadsApi.html#postUploadsLearningCoverart) | **POST** /api/v2/uploads/learning/coverart | Generates pre-signed URL to upload cover art for learning modules
[**postUploadsPublicassetsImages**](UploadsApi.html#postUploadsPublicassetsImages) | **POST** /api/v2/uploads/publicassets/images | Creates presigned url for uploading a public asset image
[**postUploadsRecordings**](UploadsApi.html#postUploadsRecordings) | **POST** /api/v2/uploads/recordings | Creates presigned url for uploading a recording file
[**postUploadsWorkforcemanagementHistoricaldataCsv**](UploadsApi.html#postUploadsWorkforcemanagementHistoricaldataCsv) | **POST** /api/v2/uploads/workforcemanagement/historicaldata/csv | Creates presigned url for uploading WFM historical data file. Requires data in csv format.
[**postWorkforcemanagementHistoricaldataMultipartuploadsCsv**](UploadsApi.html#postWorkforcemanagementHistoricaldataMultipartuploadsCsv) | **POST** /api/v2/workforcemanagement/historicaldata/multipartuploads/csv | Creates presigned urls for uploading WFM historical data files in chunks. Use to upload files larger than 5GB
[**putWorkforcemanagementHistoricaldataMultipartuploadsCsv**](UploadsApi.html#putWorkforcemanagementHistoricaldataMultipartuploadsCsv) | **PUT** /api/v2/workforcemanagement/historicaldata/multipartuploads/csv | Completes or aborts the uploading of WFM historical data files in chunks
{: class="table table-striped"}

<a name="getKnowledgeKnowledgebaseUploadsUrlsJob"></a>

# GetUploadSourceUrlJobStatusResponse getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId)


GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}

Get content upload from URL job status

Requires ALL permissions:

* knowledge:uploadSourceUrlJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let jobId = "jobId_example"; // String | Upload job ID

apiInstance.getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId)
  .then((data) => {
    console.log(`getKnowledgeKnowledgebaseUploadsUrlsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getKnowledgeKnowledgebaseUploadsUrlsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **jobId** | **String** | Upload job ID |  |
{: class="table table-striped"}

### Return type

**GetUploadSourceUrlJobStatusResponse**

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

let apiInstance = new platformClient.UploadsApi();

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

<a name="postKnowledgeKnowledgebaseUploadsUrlsJobs"></a>

# CreateUploadSourceUrlJobResponse postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body)


POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs

Create content upload from URL job

Requires ALL permissions:

* knowledge:uploadSourceUrlJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | uploadRequest

apiInstance.postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseUploadsUrlsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseUploadsUrlsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** | uploadRequest |  |
{: class="table table-striped"}

### Return type

**CreateUploadSourceUrlJobResponse**

<a name="postLanguageunderstandingMinerUploads"></a>

# UploadUrlResponse postLanguageunderstandingMinerUploads(minerId, body)


POST /api/v2/languageunderstanding/miners/{minerId}/uploads

Creates a presigned URL for uploading a chat corpus which will be used for mining by intent miner

Requires ALL permissions:

* languageUnderstanding:miner:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let minerId = "minerId_example"; // String | Miner ID
let body = null; // Object | query

apiInstance.postLanguageunderstandingMinerUploads(minerId, body)
  .then((data) => {
    console.log(`postLanguageunderstandingMinerUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguageunderstandingMinerUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **minerId** | **String** | Miner ID |  |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postUploadsLearningCoverart"></a>

# UploadUrlResponse postUploadsLearningCoverart(body)


POST /api/v2/uploads/learning/coverart

Generates pre-signed URL to upload cover art for learning modules

Requires ALL permissions:

* learning:coverart:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsLearningCoverart(body)
  .then((data) => {
    console.log(`postUploadsLearningCoverart success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsLearningCoverart');
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

<a name="postUploadsPublicassetsImages"></a>

# UploadUrlResponse postUploadsPublicassetsImages(body)


POST /api/v2/uploads/publicassets/images

Creates presigned url for uploading a public asset image

Requires ALL permissions:

* uploads:publicasset:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsPublicassetsImages(body)
  .then((data) => {
    console.log(`postUploadsPublicassetsImages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsPublicassetsImages');
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

<a name="postUploadsRecordings"></a>

# UploadUrlResponse postUploadsRecordings(body)


POST /api/v2/uploads/recordings

Creates presigned url for uploading a recording file

Requires ALL permissions:

* recording:recording:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsRecordings(body)
  .then((data) => {
    console.log(`postUploadsRecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsRecordings');
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

<a name="postUploadsWorkforcemanagementHistoricaldataCsv"></a>

# UploadUrlResponse postUploadsWorkforcemanagementHistoricaldataCsv(body)


POST /api/v2/uploads/workforcemanagement/historicaldata/csv

Creates presigned url for uploading WFM historical data file. Requires data in csv format.

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsWorkforcemanagementHistoricaldataCsv(body)
  .then((data) => {
    console.log(`postUploadsWorkforcemanagementHistoricaldataCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsWorkforcemanagementHistoricaldataCsv');
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

<a name="postWorkforcemanagementHistoricaldataMultipartuploadsCsv"></a>

# MultipartUploadUrlResponse postWorkforcemanagementHistoricaldataMultipartuploadsCsv(body)


POST /api/v2/workforcemanagement/historicaldata/multipartuploads/csv

Creates presigned urls for uploading WFM historical data files in chunks. Use to upload files larger than 5GB

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postWorkforcemanagementHistoricaldataMultipartuploadsCsv(body)
  .then((data) => {
    console.log(`postWorkforcemanagementHistoricaldataMultipartuploadsCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementHistoricaldataMultipartuploadsCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**MultipartUploadUrlResponse**

<a name="putWorkforcemanagementHistoricaldataMultipartuploadsCsv"></a>

# void putWorkforcemanagementHistoricaldataMultipartuploadsCsv(body)


PUT /api/v2/workforcemanagement/historicaldata/multipartuploads/csv

Completes or aborts the uploading of WFM historical data files in chunks

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.putWorkforcemanagementHistoricaldataMultipartuploadsCsv(body)
  .then(() => {
    console.log('putWorkforcemanagementHistoricaldataMultipartuploadsCsv returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putWorkforcemanagementHistoricaldataMultipartuploadsCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

void (no response body)

