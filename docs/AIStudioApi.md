# AIStudioApi

# platformClient.AIStudioApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationsSummariesSetting**](AIStudioApi#deleteConversationsSummariesSetting) | **DELETE** /api/v2/conversations/summaries/settings/{summarySettingId} | Delete a summary setting.
[**deleteGuideJobs**](AIStudioApi#deleteGuideJobs) | **DELETE** /api/v2/guides/{guideId}/jobs | Start the deletion of a guide.
[**getConversationsSummariesSetting**](AIStudioApi#getConversationsSummariesSetting) | **GET** /api/v2/conversations/summaries/settings/{summarySettingId} | Receive a summary setting.
[**getConversationsSummariesSettings**](AIStudioApi#getConversationsSummariesSettings) | **GET** /api/v2/conversations/summaries/settings | Get all summary settings.
[**getGuide**](AIStudioApi#getGuide) | **GET** /api/v2/guides/{guideId} | Get guide.
[**getGuideJob**](AIStudioApi#getGuideJob) | **GET** /api/v2/guides/{guideId}/jobs/{jobId} | Get the specified guide deletion job.
[**getGuideVersion**](AIStudioApi#getGuideVersion) | **GET** /api/v2/guides/{guideId}/versions/{versionId} | Get a guide version.
[**getGuideVersionJob**](AIStudioApi#getGuideVersionJob) | **GET** /api/v2/guides/{guideId}/versions/{versionId}/jobs/{jobId} | Get the status of the publishing job for this guide version.
[**getGuides**](AIStudioApi#getGuides) | **GET** /api/v2/guides | Get all guides.
[**getGuidesJob**](AIStudioApi#getGuidesJob) | **GET** /api/v2/guides/jobs/{jobId} | Get the status of the guide content generation job.
[**patchGuide**](AIStudioApi#patchGuide) | **PATCH** /api/v2/guides/{guideId} | Update a guide.
[**patchGuideVersion**](AIStudioApi#patchGuideVersion) | **PATCH** /api/v2/guides/{guideId}/versions/{versionId} | Update a guide version.
[**postConversationsSummariesPreview**](AIStudioApi#postConversationsSummariesPreview) | **POST** /api/v2/conversations/summaries/preview | Trigger summary preview event generation.
[**postConversationsSummariesSettings**](AIStudioApi#postConversationsSummariesSettings) | **POST** /api/v2/conversations/summaries/settings | Create a summary setting.
[**postGuideSessionTurns**](AIStudioApi#postGuideSessionTurns) | **POST** /api/v2/guides/{guideId}/sessions/{guideSessionId}/turns | Add a turn to a guide session.
[**postGuideVersionJobs**](AIStudioApi#postGuideVersionJobs) | **POST** /api/v2/guides/{guideId}/versions/{versionId}/jobs | Start the publishing of a guide version.
[**postGuideVersions**](AIStudioApi#postGuideVersions) | **POST** /api/v2/guides/{guideId}/versions | Create a guide version.
[**postGuides**](AIStudioApi#postGuides) | **POST** /api/v2/guides | Create a guide.
[**postGuidesJobs**](AIStudioApi#postGuidesJobs) | **POST** /api/v2/guides/jobs | Start a guide content generation job.
[**putConversationsSummariesSetting**](AIStudioApi#putConversationsSummariesSetting) | **PUT** /api/v2/conversations/summaries/settings/{summarySettingId} | Update a summary setting.



## deleteConversationsSummariesSetting

> void deleteConversationsSummariesSetting(summarySettingId)


DELETE /api/v2/conversations/summaries/settings/{summarySettingId}

Delete a summary setting.

Requires ALL permissions:

* aiStudio:summaryConfig:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let summarySettingId = "summarySettingId_example"; // String | Summary setting id

apiInstance.deleteConversationsSummariesSetting(summarySettingId)
  .then(() => {
    console.log('deleteConversationsSummariesSetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsSummariesSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **summarySettingId** | **String** | Summary setting id |  |

### Return type

void (no response body)


## deleteGuideJobs

> GuideJob deleteGuideJobs(guideId)


DELETE /api/v2/guides/{guideId}/jobs

Start the deletion of a guide.

deleteGuideJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID

apiInstance.deleteGuideJobs(guideId)
  .then((data) => {
    console.log(`deleteGuideJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGuideJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |

### Return type

**GuideJob**


## getConversationsSummariesSetting

> SummarySetting getConversationsSummariesSetting(summarySettingId)


GET /api/v2/conversations/summaries/settings/{summarySettingId}

Receive a summary setting.

Requires ALL permissions:

* aiStudio:summaryConfig:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let summarySettingId = "summarySettingId_example"; // String | Summary setting id

apiInstance.getConversationsSummariesSetting(summarySettingId)
  .then((data) => {
    console.log(`getConversationsSummariesSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsSummariesSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **summarySettingId** | **String** | Summary setting id |  |

### Return type

**SummarySetting**


## getConversationsSummariesSettings

> SummarySettingEntityListing getConversationsSummariesSettings(opts)


GET /api/v2/conversations/summaries/settings

Get all summary settings.

Requires ALL permissions:

* aiStudio:summaryConfig:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let opts = { 
  'language': "language_example", // String | Filter by matching language - case insensitive.
  'name': "name_example", // String | Filter by partially matching name - case insensitive.
  'sortBy': "dateModified", // String | Sort by. Default value dateModified.
  'sortOrder': "desc", // String | Sort Order. Default value desc.
  'pageNumber': 1, // Number | Page number.
  'pageSize': 25 // Number | Page size. The maximum page size is 100.
};

apiInstance.getConversationsSummariesSettings(opts)
  .then((data) => {
    console.log(`getConversationsSummariesSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsSummariesSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | Filter by matching language - case insensitive. | [optional]  |
 **name** | **String** | Filter by partially matching name - case insensitive. | [optional]  |
 **sortBy** | **String** | Sort by. Default value dateModified. | [optional] [default to dateModified]<br />**Values**: dateModified, name |
 **sortOrder** | **String** | Sort Order. Default value desc. | [optional] [default to desc]<br />**Values**: asc, desc |
 **pageNumber** | **Number** | Page number. | [optional] [default to 1] |
 **pageSize** | **Number** | Page size. The maximum page size is 100. | [optional] [default to 25] |

### Return type

**SummarySettingEntityListing**


## getGuide

> Guide getGuide(guideId)


GET /api/v2/guides/{guideId}

Get guide.

getGuide is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guide:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID

apiInstance.getGuide(guideId)
  .then((data) => {
    console.log(`getGuide success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuide');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |

### Return type

**Guide**


## getGuideJob

> GuideJob getGuideJob(guideId, jobId)


GET /api/v2/guides/{guideId}/jobs/{jobId}

Get the specified guide deletion job.

getGuideJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let jobId = "jobId_example"; // String | jobId

apiInstance.getGuideJob(guideId, jobId)
  .then((data) => {
    console.log(`getGuideJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuideJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **jobId** | **String** | jobId |  |

### Return type

**GuideJob**


## getGuideVersion

> GuideVersion getGuideVersion(guideId, versionId)


GET /api/v2/guides/{guideId}/versions/{versionId}

Get a guide version.

getGuideVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let versionId = "versionId_example"; // String | Version ID

apiInstance.getGuideVersion(guideId, versionId)
  .then((data) => {
    console.log(`getGuideVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuideVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **versionId** | **String** | Version ID |  |

### Return type

**GuideVersion**


## getGuideVersionJob

> GuideVersionPublishJob getGuideVersionJob(guideId, versionId, jobId)


GET /api/v2/guides/{guideId}/versions/{versionId}/jobs/{jobId}

Get the status of the publishing job for this guide version.

getGuideVersionJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideVersionJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let versionId = "versionId_example"; // String | Version ID
let jobId = "jobId_example"; // String | jobId

apiInstance.getGuideVersionJob(guideId, versionId, jobId)
  .then((data) => {
    console.log(`getGuideVersionJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuideVersionJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **versionId** | **String** | Version ID |  |
 **jobId** | **String** | jobId |  |

### Return type

**GuideVersionPublishJob**


## getGuides

> GuideEntityListing getGuides(opts)


GET /api/v2/guides

Get all guides.

getGuides is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guide:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let opts = { 
  'name': "name_example", // String | Filter by matching name - case insensitive.
  'nameContains': "nameContains_example", // String | Filter by name contains - case insensitive.
  'status': "status_example", // String | Filter by status.
  'sortBy': "dateModified", // String | Sort by. Default value dateModified.
  'sortOrder': "desc", // String | Sort Order. Default value desc.
  'pageNumber': 1, // Number | Page number.
  'pageSize': 25 // Number | Page size. The maximum page size is 100.
};

apiInstance.getGuides(opts)
  .then((data) => {
    console.log(`getGuides success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuides');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Filter by matching name - case insensitive. | [optional]  |
 **nameContains** | **String** | Filter by name contains - case insensitive. | [optional]  |
 **status** | **String** | Filter by status. | [optional] <br />**Values**: Published, Draft |
 **sortBy** | **String** | Sort by. Default value dateModified. | [optional] [default to dateModified]<br />**Values**: dateModified, name, status |
 **sortOrder** | **String** | Sort Order. Default value desc. | [optional] [default to desc]<br />**Values**: asc, desc |
 **pageNumber** | **Number** | Page number. | [optional] [default to 1] |
 **pageSize** | **Number** | Page size. The maximum page size is 100. | [optional] [default to 25] |

### Return type

**GuideEntityListing**


## getGuidesJob

> GuideContentGenerationJob getGuidesJob(jobId)


GET /api/v2/guides/jobs/{jobId}

Get the status of the guide content generation job.

getGuidesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getGuidesJob(jobId)
  .then((data) => {
    console.log(`getGuidesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGuidesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**GuideContentGenerationJob**


## patchGuide

> Guide patchGuide(guideId, body)


PATCH /api/v2/guides/{guideId}

Update a guide.

patchGuide is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guide:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let body = {}; // Object | 

apiInstance.patchGuide(guideId, body)
  .then((data) => {
    console.log(`patchGuide success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchGuide');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **body** | **Object** |  |  |

### Return type

**Guide**


## patchGuideVersion

> GuideVersion patchGuideVersion(guideId, versionId, body)


PATCH /api/v2/guides/{guideId}/versions/{versionId}

Update a guide version.

patchGuideVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideVersion:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let versionId = "versionId_example"; // String | Version ID
let body = {}; // Object | 

apiInstance.patchGuideVersion(guideId, versionId, body)
  .then((data) => {
    console.log(`patchGuideVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchGuideVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **versionId** | **String** | Version ID |  |
 **body** | **Object** |  |  |

### Return type

**GuideVersion**


## postConversationsSummariesPreview

> void postConversationsSummariesPreview(body)


POST /api/v2/conversations/summaries/preview

Trigger summary preview event generation.

Requires ALL permissions:

* aiStudio:summaryPreview:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let body = {}; // Object | 

apiInstance.postConversationsSummariesPreview(body)
  .then(() => {
    console.log('postConversationsSummariesPreview returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsSummariesPreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## postConversationsSummariesSettings

> SummarySetting postConversationsSummariesSettings(body)


POST /api/v2/conversations/summaries/settings

Create a summary setting.

Requires ALL permissions:

* aiStudio:summaryConfig:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let body = {}; // Object | 

apiInstance.postConversationsSummariesSettings(body)
  .then((data) => {
    console.log(`postConversationsSummariesSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsSummariesSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**SummarySetting**


## postGuideSessionTurns

> GuideSessionTurnResponse postGuideSessionTurns(guideId, guideSessionId, body)


POST /api/v2/guides/{guideId}/sessions/{guideSessionId}/turns

Add a turn to a guide session.

Creates a new turn in the specified guide session with the provided request data. If the session ID doesnt exist, a new session will be created automatically.

Requires ALL permissions:

* aiStudio:guideSessionTurn:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let guideSessionId = "guideSessionId_example"; // String | Guide Session ID
let body = {}; // Object | 

apiInstance.postGuideSessionTurns(guideId, guideSessionId, body)
  .then((data) => {
    console.log(`postGuideSessionTurns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuideSessionTurns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **guideSessionId** | **String** | Guide Session ID |  |
 **body** | **Object** |  |  |

### Return type

**GuideSessionTurnResponse**


## postGuideVersionJobs

> GuideVersionPublishJob postGuideVersionJobs(guideId, versionId, body)


POST /api/v2/guides/{guideId}/versions/{versionId}/jobs

Start the publishing of a guide version.

postGuideVersionJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideVersionJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let versionId = "versionId_example"; // String | Version ID
let body = {}; // Object | 

apiInstance.postGuideVersionJobs(guideId, versionId, body)
  .then((data) => {
    console.log(`postGuideVersionJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuideVersionJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **versionId** | **String** | Version ID |  |
 **body** | **Object** |  |  |

### Return type

**GuideVersionPublishJob**


## postGuideVersions

> GuideVersion postGuideVersions(guideId, opts)


POST /api/v2/guides/{guideId}/versions

Create a guide version.

postGuideVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let guideId = "guideId_example"; // String | Guide ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postGuideVersions(guideId, opts)
  .then((data) => {
    console.log(`postGuideVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuideVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **guideId** | **String** | Guide ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**GuideVersion**


## postGuides

> Guide postGuides(body)


POST /api/v2/guides

Create a guide.

postGuides is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guide:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let body = {}; // Object | 

apiInstance.postGuides(body)
  .then((data) => {
    console.log(`postGuides success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuides');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**Guide**


## postGuidesJobs

> GuideContentGenerationJob postGuidesJobs(body)


POST /api/v2/guides/jobs

Start a guide content generation job.

postGuidesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* aiStudio:guideJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let body = {}; // Object | 

apiInstance.postGuidesJobs(body)
  .then((data) => {
    console.log(`postGuidesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGuidesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**GuideContentGenerationJob**


## putConversationsSummariesSetting

> SummarySetting putConversationsSummariesSetting(summarySettingId, body)


PUT /api/v2/conversations/summaries/settings/{summarySettingId}

Update a summary setting.

Requires ALL permissions:

* aiStudio:summaryConfig:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let summarySettingId = "summarySettingId_example"; // String | Summary setting id
let body = {}; // Object | 

apiInstance.putConversationsSummariesSetting(summarySettingId, body)
  .then((data) => {
    console.log(`putConversationsSummariesSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsSummariesSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **summarySettingId** | **String** | Summary setting id |  |
 **body** | **Object** |  |  |

### Return type

**SummarySetting**


_purecloud-platform-client-v2@241.0.0_
