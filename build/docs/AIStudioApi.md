# AIStudioApi

# platformClient.AIStudioApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAgenticVirtualagentJobs**](AIStudioApi#deleteAgenticVirtualagentJobs) | **DELETE** /api/v2/agentic/virtualagents/{virtualAgentId}/jobs | Start the deletion of a virtualAgent.
[**deleteConversationsSummariesSetting**](AIStudioApi#deleteConversationsSummariesSetting) | **DELETE** /api/v2/conversations/summaries/settings/{summarySettingId} | Delete a summary setting.
[**deleteGuideJobs**](AIStudioApi#deleteGuideJobs) | **DELETE** /api/v2/guides/{guideId}/jobs | Start the deletion of a guide.
[**getAgenticVirtualagent**](AIStudioApi#getAgenticVirtualagent) | **GET** /api/v2/agentic/virtualagents/{virtualAgentId} | Get virtual agent.
[**getAgenticVirtualagentJob**](AIStudioApi#getAgenticVirtualagentJob) | **GET** /api/v2/agentic/virtualagents/{virtualAgentId}/jobs/{jobId} | Get a virtualAgent job.
[**getAgenticVirtualagents**](AIStudioApi#getAgenticVirtualagents) | **GET** /api/v2/agentic/virtualagents | Get all virtual agents.
[**getConversationsSummariesSetting**](AIStudioApi#getConversationsSummariesSetting) | **GET** /api/v2/conversations/summaries/settings/{summarySettingId} | Receive a summary setting.
[**getConversationsSummariesSettings**](AIStudioApi#getConversationsSummariesSettings) | **GET** /api/v2/conversations/summaries/settings | Get all summary settings.
[**getGuide**](AIStudioApi#getGuide) | **GET** /api/v2/guides/{guideId} | Get guide.
[**getGuideJob**](AIStudioApi#getGuideJob) | **GET** /api/v2/guides/{guideId}/jobs/{jobId} | Get the specified guide deletion job.
[**getGuideVersion**](AIStudioApi#getGuideVersion) | **GET** /api/v2/guides/{guideId}/versions/{versionId} | Get a guide version.
[**getGuideVersionJob**](AIStudioApi#getGuideVersionJob) | **GET** /api/v2/guides/{guideId}/versions/{versionId}/jobs/{jobId} | Get the status of the publishing job for this guide version.
[**getGuides**](AIStudioApi#getGuides) | **GET** /api/v2/guides | Get all guides.
[**getGuidesJob**](AIStudioApi#getGuidesJob) | **GET** /api/v2/guides/jobs/{jobId} | Get the status of the guide content generation job.
[**patchAgenticVirtualagent**](AIStudioApi#patchAgenticVirtualagent) | **PATCH** /api/v2/agentic/virtualagents/{virtualAgentId} | Update a virtual agent.
[**patchGuide**](AIStudioApi#patchGuide) | **PATCH** /api/v2/guides/{guideId} | Update a guide.
[**patchGuideVersion**](AIStudioApi#patchGuideVersion) | **PATCH** /api/v2/guides/{guideId}/versions/{versionId} | Update a guide version.
[**postAgenticVirtualagentVersionJobs**](AIStudioApi#postAgenticVirtualagentVersionJobs) | **POST** /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs | Start the publishing of a virtual agent version.
[**postAgenticVirtualagents**](AIStudioApi#postAgenticVirtualagents) | **POST** /api/v2/agentic/virtualagents | Create a virtual agent.
[**postConversationsSummariesPreview**](AIStudioApi#postConversationsSummariesPreview) | **POST** /api/v2/conversations/summaries/preview | Trigger summary preview event generation.
[**postConversationsSummariesSettings**](AIStudioApi#postConversationsSummariesSettings) | **POST** /api/v2/conversations/summaries/settings | Create a summary setting.
[**postGuideSessionTurns**](AIStudioApi#postGuideSessionTurns) | **POST** /api/v2/guides/{guideId}/sessions/{guideSessionId}/turns | Add a turn to a guide session.
[**postGuideVersionJobs**](AIStudioApi#postGuideVersionJobs) | **POST** /api/v2/guides/{guideId}/versions/{versionId}/jobs | Start the publishing of a guide version.
[**postGuideVersions**](AIStudioApi#postGuideVersions) | **POST** /api/v2/guides/{guideId}/versions | Create a guide version.
[**postGuides**](AIStudioApi#postGuides) | **POST** /api/v2/guides | Create a guide.
[**postGuidesJobs**](AIStudioApi#postGuidesJobs) | **POST** /api/v2/guides/jobs | Start a guide content generation job.
[**postGuidesUploads**](AIStudioApi#postGuidesUploads) | **POST** /api/v2/guides/uploads | Generate presigned URL for uploading a file content to generate guide
[**putConversationsSummariesSetting**](AIStudioApi#putConversationsSummariesSetting) | **PUT** /api/v2/conversations/summaries/settings/{summarySettingId} | Update a summary setting.



## deleteAgenticVirtualagentJobs

> AgenticVirtualAgentJob deleteAgenticVirtualagentJobs(virtualAgentId, opts)


DELETE /api/v2/agentic/virtualagents/{virtualAgentId}/jobs

Start the deletion of a virtualAgent.

Requires ALL permissions:

* agentic:virtualAgentJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let virtualAgentId = "virtualAgentId_example"; // String | Virtual Agent ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAgenticVirtualagentJobs(virtualAgentId, opts)
  .then((data) => {
    console.log(`deleteAgenticVirtualagentJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAgenticVirtualagentJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **virtualAgentId** | **String** | Virtual Agent ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgentJob**


## deleteConversationsSummariesSetting

> void deleteConversationsSummariesSetting(summarySettingId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteConversationsSummariesSetting(summarySettingId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteGuideJobs

> GuideJob deleteGuideJobs(guideId, opts)


DELETE /api/v2/guides/{guideId}/jobs

Start the deletion of a guide.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteGuideJobs(guideId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideJob**


## getAgenticVirtualagent

> AgenticVirtualAgent getAgenticVirtualagent(virtualAgentId, opts)


GET /api/v2/agentic/virtualagents/{virtualAgentId}

Get virtual agent.

Requires ALL permissions:

* agentic:virtualAgent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let virtualAgentId = "virtualAgentId_example"; // String | Virtual Agent ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAgenticVirtualagent(virtualAgentId, opts)
  .then((data) => {
    console.log(`getAgenticVirtualagent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAgenticVirtualagent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **virtualAgentId** | **String** | Virtual Agent ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgent**


## getAgenticVirtualagentJob

> AgenticVirtualAgentJob getAgenticVirtualagentJob(virtualAgentId, jobId, opts)


GET /api/v2/agentic/virtualagents/{virtualAgentId}/jobs/{jobId}

Get a virtualAgent job.

Requires ALL permissions:

* agentic:virtualAgentJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let virtualAgentId = "virtualAgentId_example"; // String | Virtual Agent ID
let jobId = "jobId_example"; // String | jobId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAgenticVirtualagentJob(virtualAgentId, jobId, opts)
  .then((data) => {
    console.log(`getAgenticVirtualagentJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAgenticVirtualagentJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **virtualAgentId** | **String** | Virtual Agent ID |  |
 **jobId** | **String** | jobId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgentJob**


## getAgenticVirtualagents

> AgenticVirtualAgentEntityListing getAgenticVirtualagents(opts)


GET /api/v2/agentic/virtualagents

Get all virtual agents.

Requires ALL permissions:

* agentic:virtualAgent:view

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
  'pageSize': 25, // Number | Page size. The maximum page size is 100.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAgenticVirtualagents(opts)
  .then((data) => {
    console.log(`getAgenticVirtualagents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAgenticVirtualagents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Filter by matching name - case insensitive. | [optional]  |
 **nameContains** | **String** | Filter by name contains - case insensitive. | [optional]  |
 **status** | **String** | Filter by status. | [optional] <br />**Values**: Draft, Published |
 **sortBy** | **String** | Sort by. Default value dateModified. | [optional] [default to dateModified]<br />**Values**: dateModified, name, status |
 **sortOrder** | **String** | Sort Order. Default value desc. | [optional] [default to desc]<br />**Values**: asc, desc |
 **pageNumber** | **Number** | Page number. | [optional] [default to 1] |
 **pageSize** | **Number** | Page size. The maximum page size is 100. | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgentEntityListing**


## getConversationsSummariesSetting

> SummarySetting getConversationsSummariesSetting(summarySettingId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getConversationsSummariesSetting(summarySettingId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageNumber': 1, // Number | Page number.
  'pageSize': 25, // Number | Page size. The maximum page size is 100.
  'name': "name_example", // String | Filter by partially matching name - case insensitive.
  'sortOrder': "desc", // String | Sort Order. Default value desc.
  'language': "language_example", // String | Filter by matching language - case insensitive.
  'sortBy': "dateModified", // String | Sort by. Default value dateModified.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **pageNumber** | **Number** | Page number. | [optional] [default to 1] |
 **pageSize** | **Number** | Page size. The maximum page size is 100. | [optional] [default to 25] |
 **name** | **String** | Filter by partially matching name - case insensitive. | [optional]  |
 **sortOrder** | **String** | Sort Order. Default value desc. | [optional] [default to desc]<br />**Values**: asc, desc |
 **language** | **String** | Filter by matching language - case insensitive. | [optional]  |
 **sortBy** | **String** | Sort by. Default value dateModified. | [optional] [default to dateModified]<br />**Values**: dateModified, name |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SummarySettingEntityListing**


## getGuide

> Guide getGuide(guideId, opts)


GET /api/v2/guides/{guideId}

Get guide.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGuide(guideId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Guide**


## getGuideJob

> GuideJob getGuideJob(guideId, jobId, opts)


GET /api/v2/guides/{guideId}/jobs/{jobId}

Get the specified guide deletion job.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGuideJob(guideId, jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideJob**


## getGuideVersion

> GuideVersion getGuideVersion(guideId, versionId, opts)


GET /api/v2/guides/{guideId}/versions/{versionId}

Get a guide version.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGuideVersion(guideId, versionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideVersion**


## getGuideVersionJob

> GuideVersionPublishJob getGuideVersionJob(guideId, versionId, jobId, opts)


GET /api/v2/guides/{guideId}/versions/{versionId}/jobs/{jobId}

Get the status of the publishing job for this guide version.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGuideVersionJob(guideId, versionId, jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideVersionPublishJob**


## getGuides

> GuideEntityListing getGuides(opts)


GET /api/v2/guides

Get all guides.

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
  'pageSize': 25, // Number | Page size. The maximum page size is 100.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideEntityListing**


## getGuidesJob

> GuideContentGenerationJob getGuidesJob(jobId, opts)


GET /api/v2/guides/jobs/{jobId}

Get the status of the guide content generation job.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGuidesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideContentGenerationJob**


## patchAgenticVirtualagent

> AgenticVirtualAgent patchAgenticVirtualagent(virtualAgentId, body, opts)


PATCH /api/v2/agentic/virtualagents/{virtualAgentId}

Update a virtual agent.

Requires ALL permissions:

* agentic:virtualAgent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let virtualAgentId = "virtualAgentId_example"; // String | Virtual Agent ID
let body = {}; // Object | 
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchAgenticVirtualagent(virtualAgentId, body, opts)
  .then((data) => {
    console.log(`patchAgenticVirtualagent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAgenticVirtualagent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **virtualAgentId** | **String** | Virtual Agent ID |  |
 **body** | **Object** |  |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgent**


## patchGuide

> Guide patchGuide(guideId, body, opts)


PATCH /api/v2/guides/{guideId}

Update a guide.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchGuide(guideId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Guide**


## patchGuideVersion

> GuideVersion patchGuideVersion(guideId, versionId, body, opts)


PATCH /api/v2/guides/{guideId}/versions/{versionId}

Update a guide version.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchGuideVersion(guideId, versionId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideVersion**


## postAgenticVirtualagentVersionJobs

> AgenticVirtualAgentVersionPublishJob postAgenticVirtualagentVersionJobs(virtualAgentId, versionId, body, opts)


POST /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs

Start the publishing of a virtual agent version.

Requires ALL permissions:

* agentic:virtualAgentVersionJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AIStudioApi();

let virtualAgentId = "virtualAgentId_example"; // String | Virtual Agent ID
let versionId = "versionId_example"; // String | Version ID
let body = {}; // Object | 
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAgenticVirtualagentVersionJobs(virtualAgentId, versionId, body, opts)
  .then((data) => {
    console.log(`postAgenticVirtualagentVersionJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAgenticVirtualagentVersionJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **virtualAgentId** | **String** | Virtual Agent ID |  |
 **versionId** | **String** | Version ID |  |
 **body** | **Object** |  |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgentVersionPublishJob**


## postAgenticVirtualagents

> AgenticVirtualAgent postAgenticVirtualagents(body, opts)


POST /api/v2/agentic/virtualagents

Create a virtual agent.

Requires ALL permissions:

* agentic:virtualAgent:add

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAgenticVirtualagents(body, opts)
  .then((data) => {
    console.log(`postAgenticVirtualagents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAgenticVirtualagents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgenticVirtualAgent**


## postConversationsSummariesPreview

> void postConversationsSummariesPreview(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postConversationsSummariesPreview(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postConversationsSummariesSettings

> SummarySetting postConversationsSummariesSettings(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postConversationsSummariesSettings(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SummarySetting**


## postGuideSessionTurns

> GuideSessionTurnResponse postGuideSessionTurns(guideId, guideSessionId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGuideSessionTurns(guideId, guideSessionId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideSessionTurnResponse**


## postGuideVersionJobs

> GuideVersionPublishJob postGuideVersionJobs(guideId, versionId, body, opts)


POST /api/v2/guides/{guideId}/versions/{versionId}/jobs

Start the publishing of a guide version.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGuideVersionJobs(guideId, versionId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideVersionPublishJob**


## postGuideVersions

> GuideVersion postGuideVersions(guideId, opts)


POST /api/v2/guides/{guideId}/versions

Create a guide version.

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideVersion**


## postGuides

> Guide postGuides(body, opts)


POST /api/v2/guides

Create a guide.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGuides(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Guide**


## postGuidesJobs

> GuideContentGenerationJob postGuidesJobs(body, opts)


POST /api/v2/guides/jobs

Start a guide content generation job.

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGuidesJobs(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GuideContentGenerationJob**


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

let apiInstance = new platformClient.AIStudioApi();

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


## putConversationsSummariesSetting

> SummarySetting putConversationsSummariesSetting(summarySettingId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putConversationsSummariesSetting(summarySettingId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SummarySetting**


_purecloud-platform-client-v2@258.1.0_
