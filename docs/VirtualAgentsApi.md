# VirtualAgentsApi

# platformClient.VirtualAgentsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAgenticVirtualagentJobs**](VirtualAgentsApi#deleteAgenticVirtualagentJobs) | **DELETE** /api/v2/agentic/virtualagents/{virtualAgentId}/jobs | Start the deletion of a virtualAgent.
[**getAgenticVirtualagent**](VirtualAgentsApi#getAgenticVirtualagent) | **GET** /api/v2/agentic/virtualagents/{virtualAgentId} | Get virtual agent.
[**getAgenticVirtualagentJob**](VirtualAgentsApi#getAgenticVirtualagentJob) | **GET** /api/v2/agentic/virtualagents/{virtualAgentId}/jobs/{jobId} | Get a virtualAgent job.
[**getAgenticVirtualagents**](VirtualAgentsApi#getAgenticVirtualagents) | **GET** /api/v2/agentic/virtualagents | Get all virtual agents.
[**patchAgenticVirtualagent**](VirtualAgentsApi#patchAgenticVirtualagent) | **PATCH** /api/v2/agentic/virtualagents/{virtualAgentId} | Update a virtual agent.
[**postAgenticVirtualagentVersionJobs**](VirtualAgentsApi#postAgenticVirtualagentVersionJobs) | **POST** /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs | Start the publishing of a virtual agent version.
[**postAgenticVirtualagents**](VirtualAgentsApi#postAgenticVirtualagents) | **POST** /api/v2/agentic/virtualagents | Create a virtual agent.



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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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

let apiInstance = new platformClient.VirtualAgentsApi();

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


_purecloud-platform-client-v2@261.0.0_
