# UploadsApi

# platformClient.UploadsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getKnowledgeKnowledgebaseUploadsUrlsJob**](UploadsApi#getKnowledgeKnowledgebaseUploadsUrlsJob) | **GET** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId} | Get content upload from URL job status
[**postGamificationContestsUploadsPrizeimages**](UploadsApi#postGamificationContestsUploadsPrizeimages) | **POST** /api/v2/gamification/contests/uploads/prizeimages | Generates pre-signed URL to upload a prize image for gamification contests
[**postGuidesUploads**](UploadsApi#postGuidesUploads) | **POST** /api/v2/guides/uploads | Generate presigned URL for uploading a file content to generate guide
[**postIntegrationsActionDraftFunctionUpload**](UploadsApi#postIntegrationsActionDraftFunctionUpload) | **POST** /api/v2/integrations/actions/{actionId}/draft/function/upload | Create upload presigned URL for draft function package file.
[**postKnowledgeDocumentuploads**](UploadsApi#postKnowledgeDocumentuploads) | **POST** /api/v2/knowledge/documentuploads | Creates a presigned URL for uploading a knowledge import file with a set of documents
[**postKnowledgeKnowledgebaseUploadsUrlsJobs**](UploadsApi#postKnowledgeKnowledgebaseUploadsUrlsJobs) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs | Create content upload from URL job
[**postLanguageunderstandingMinerUploads**](UploadsApi#postLanguageunderstandingMinerUploads) | **POST** /api/v2/languageunderstanding/miners/{minerId}/uploads | Creates a presigned URL for uploading a chat corpus which will be used for mining by intent miner
[**postUploadsLearningCoverart**](UploadsApi#postUploadsLearningCoverart) | **POST** /api/v2/uploads/learning/coverart | Generates pre-signed URL to upload cover art for learning modules
[**postUploadsPublicassetsImages**](UploadsApi#postUploadsPublicassetsImages) | **POST** /api/v2/uploads/publicassets/images | Creates presigned url for uploading a public asset image
[**postUploadsRecordings**](UploadsApi#postUploadsRecordings) | **POST** /api/v2/uploads/recordings | Creates presigned url for uploading a recording file
[**postUploadsWorkforcemanagementHistoricaldataCsv**](UploadsApi#postUploadsWorkforcemanagementHistoricaldataCsv) | **POST** /api/v2/uploads/workforcemanagement/historicaldata/csv | Creates presigned url for uploading WFM historical data file. Requires data in csv format.



## getKnowledgeKnowledgebaseUploadsUrlsJob

> GetUploadSourceUrlJobStatusResponse getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let jobId = "jobId_example"; // String | Upload job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GetUploadSourceUrlJobStatusResponse**


## postGamificationContestsUploadsPrizeimages

> UploadUrlResponse postGamificationContestsUploadsPrizeimages(body, opts)


POST /api/v2/gamification/contests/uploads/prizeimages

Generates pre-signed URL to upload a prize image for gamification contests

Requires ALL permissions:

* gamification:contestPrizeImage:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGamificationContestsUploadsPrizeimages(body, opts)
  .then((data) => {
    console.log(`postGamificationContestsUploadsPrizeimages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGamificationContestsUploadsPrizeimages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postGuidesUploads

> UploadUrlResponse postGuidesUploads(body, opts)


POST /api/v2/guides/uploads

Generate presigned URL for uploading a file content to generate guide

Requires ALL permissions:

* aiStudio:guide:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGuidesUploads(body, opts)
  .then((data) => {
    console.log(`postGuidesUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuidesUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postIntegrationsActionDraftFunctionUpload

> FunctionUploadResponse postIntegrationsActionDraftFunctionUpload(actionId, body, opts)


POST /api/v2/integrations/actions/{actionId}/draft/function/upload

Create upload presigned URL for draft function package file.

Requires ANY permissions:

* integrations:actionFunction:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to request URL upload.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntegrationsActionDraftFunctionUpload(actionId, body, opts)
  .then((data) => {
    console.log(`postIntegrationsActionDraftFunctionUpload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftFunctionUpload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to request URL upload. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FunctionUploadResponse**


## postKnowledgeDocumentuploads

> UploadUrlResponse postKnowledgeDocumentuploads(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postKnowledgeDocumentuploads(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postKnowledgeKnowledgebaseUploadsUrlsJobs

> CreateUploadSourceUrlJobResponse postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let body = {}; // Object | uploadRequest
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CreateUploadSourceUrlJobResponse**


## postLanguageunderstandingMinerUploads

> UploadUrlResponse postLanguageunderstandingMinerUploads(minerId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let minerId = "minerId_example"; // String | Miner ID
let body = null; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguageunderstandingMinerUploads(minerId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postUploadsLearningCoverart

> UploadUrlResponse postUploadsLearningCoverart(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUploadsLearningCoverart(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postUploadsPublicassetsImages

> UploadUrlResponse postUploadsPublicassetsImages(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUploadsPublicassetsImages(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postUploadsRecordings

> UploadUrlResponse postUploadsRecordings(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUploadsRecordings(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


## postUploadsWorkforcemanagementHistoricaldataCsv

> UploadUrlResponse postUploadsWorkforcemanagementHistoricaldataCsv(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUploadsWorkforcemanagementHistoricaldataCsv(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UploadUrlResponse**


_purecloud-platform-client-v2@251.2.0_
