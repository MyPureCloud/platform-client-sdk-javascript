# AgentAssistantsApi

# platformClient.AgentAssistantsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAssistant**](AgentAssistantsApi#deleteAssistant) | **DELETE** /api/v2/assistants/{assistantId} | Delete an assistant.
[**deleteAssistantQueue**](AgentAssistantsApi#deleteAssistantQueue) | **DELETE** /api/v2/assistants/{assistantId}/queues/{queueId} | Disassociate a queue from an assistant.
[**deleteAssistantQueues**](AgentAssistantsApi#deleteAssistantQueues) | **DELETE** /api/v2/assistants/{assistantId}/queues | Disassociate the queues from an assistant for the given assistant ID and queue IDs.
[**deleteAssistantsAgentchecklist**](AgentAssistantsApi#deleteAssistantsAgentchecklist) | **DELETE** /api/v2/assistants/agentchecklists/{agentChecklistId} | Delete an agent checklist
[**getAssistant**](AgentAssistantsApi#getAssistant) | **GET** /api/v2/assistants/{assistantId} | Get an assistant.
[**getAssistantQueue**](AgentAssistantsApi#getAssistantQueue) | **GET** /api/v2/assistants/{assistantId}/queues/{queueId} | Get queue Information for an assistant.
[**getAssistantQueueUsersJob**](AgentAssistantsApi#getAssistantQueueUsersJob) | **GET** /api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs/{jobId} | Get job details.
[**getAssistantQueues**](AgentAssistantsApi#getAssistantQueues) | **GET** /api/v2/assistants/{assistantId}/queues | Get all the queues associated with an assistant.
[**getAssistants**](AgentAssistantsApi#getAssistants) | **GET** /api/v2/assistants | Get all assistants.
[**getAssistantsAgentchecklist**](AgentAssistantsApi#getAssistantsAgentchecklist) | **GET** /api/v2/assistants/agentchecklists/{agentChecklistId} | Get an agent checklist
[**getAssistantsAgentchecklists**](AgentAssistantsApi#getAssistantsAgentchecklists) | **GET** /api/v2/assistants/agentchecklists | Get the list of agent checklists
[**getAssistantsAgentchecklistsLanguages**](AgentAssistantsApi#getAssistantsAgentchecklistsLanguages) | **GET** /api/v2/assistants/agentchecklists/languages | Get the list of supported languages
[**getAssistantsQueues**](AgentAssistantsApi#getAssistantsQueues) | **GET** /api/v2/assistants/queues | Get all queues assigned to any assistant.
[**patchAssistant**](AgentAssistantsApi#patchAssistant) | **PATCH** /api/v2/assistants/{assistantId} | Update an assistant.
[**patchAssistantQueues**](AgentAssistantsApi#patchAssistantQueues) | **PATCH** /api/v2/assistants/{assistantId}/queues | Update Queues for an Assistant.
[**postAssistantQueueUsersBulkAdd**](AgentAssistantsApi#postAssistantQueueUsersBulkAdd) | **POST** /api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/add | Bulk add users to assistant-queue (requires manual assignment mode).
[**postAssistantQueueUsersBulkRemove**](AgentAssistantsApi#postAssistantQueueUsersBulkRemove) | **POST** /api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/remove | Bulk remove users from assistant-queue (requires manual assignment mode).
[**postAssistantQueueUsersJobs**](AgentAssistantsApi#postAssistantQueueUsersJobs) | **POST** /api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs | Start a new job to assistant-queue.
[**postAssistantQueueUsersQuery**](AgentAssistantsApi#postAssistantQueueUsersQuery) | **POST** /api/v2/assistants/{assistantId}/queues/{queueId}/users/query | Query for users in the assistant-queue (requires manual assignment mode).
[**postAssistants**](AgentAssistantsApi#postAssistants) | **POST** /api/v2/assistants | Create an Assistant.
[**postAssistantsAgentchecklists**](AgentAssistantsApi#postAssistantsAgentchecklists) | **POST** /api/v2/assistants/agentchecklists | Create an agent checklist
[**putAssistantQueue**](AgentAssistantsApi#putAssistantQueue) | **PUT** /api/v2/assistants/{assistantId}/queues/{queueId} | Create a queue assistant association.
[**putAssistantsAgentchecklist**](AgentAssistantsApi#putAssistantsAgentchecklist) | **PUT** /api/v2/assistants/agentchecklists/{agentChecklistId} | Update an agent checklist



## deleteAssistant

> void deleteAssistant(assistantId)


DELETE /api/v2/assistants/{assistantId}

Delete an assistant.

Requires ALL permissions:

* assistants:assistant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID

apiInstance.deleteAssistant(assistantId)
  .then(() => {
    console.log('deleteAssistant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAssistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |

### Return type

void (no response body)


## deleteAssistantQueue

> void deleteAssistantQueue(assistantId, queueId)


DELETE /api/v2/assistants/{assistantId}/queues/{queueId}

Disassociate a queue from an assistant.

Requires ALL permissions:

* assistants:queue:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID

apiInstance.deleteAssistantQueue(assistantId, queueId)
  .then(() => {
    console.log('deleteAssistantQueue returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAssistantQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |

### Return type

void (no response body)


## deleteAssistantQueues

> void deleteAssistantQueues(assistantId, opts)


DELETE /api/v2/assistants/{assistantId}/queues

Disassociate the queues from an assistant for the given assistant ID and queue IDs.

Requires ALL permissions:

* assistants:queue:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let opts = { 
  'queueIds': "queueIds_example" // String | Comma-separated identifiers of the queues that need to be deleted.
};

apiInstance.deleteAssistantQueues(assistantId, opts)
  .then(() => {
    console.log('deleteAssistantQueues returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAssistantQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueIds** | **String** | Comma-separated identifiers of the queues that need to be deleted. | [optional]  |

### Return type

void (no response body)


## deleteAssistantsAgentchecklist

> void deleteAssistantsAgentchecklist(agentChecklistId)


DELETE /api/v2/assistants/agentchecklists/{agentChecklistId}

Delete an agent checklist

Requires ALL permissions:

* assistants:agentchecklist:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let agentChecklistId = "agentChecklistId_example"; // String | Agent Checklist ID

apiInstance.deleteAssistantsAgentchecklist(agentChecklistId)
  .then(() => {
    console.log('deleteAssistantsAgentchecklist returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAssistantsAgentchecklist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentChecklistId** | **String** | Agent Checklist ID |  |

### Return type

void (no response body)


## getAssistant

> Assistant getAssistant(assistantId, opts)


GET /api/v2/assistants/{assistantId}

Get an assistant.

Requires ALL permissions:

* assistants:assistant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let opts = { 
  'expand': "expand_example" // String | Which fields, if any, to expand.
};

apiInstance.getAssistant(assistantId, opts)
  .then((data) => {
    console.log(`getAssistant success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **expand** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: copilot |

### Return type

**Assistant**


## getAssistantQueue

> AssistantQueue getAssistantQueue(assistantId, queueId, opts)


GET /api/v2/assistants/{assistantId}/queues/{queueId}

Get queue Information for an assistant.

Requires ALL permissions:

* assistants:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'expand': "expand_example" // String | Which fields, if any, to expand.
};

apiInstance.getAssistantQueue(assistantId, queueId, opts)
  .then((data) => {
    console.log(`getAssistantQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **expand** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: assistant |

### Return type

**AssistantQueue**


## getAssistantQueueUsersJob

> AssistantQueueUsersJobsResponse getAssistantQueueUsersJob(assistantId, queueId, jobId)


GET /api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs/{jobId}

Get job details.

Requires ANY permissions:

* assistants:queueUserJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let jobId = "jobId_example"; // String | Job ID

apiInstance.getAssistantQueueUsersJob(assistantId, queueId, jobId)
  .then((data) => {
    console.log(`getAssistantQueueUsersJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantQueueUsersJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **jobId** | **String** | Job ID |  |

### Return type

**AssistantQueueUsersJobsResponse**


## getAssistantQueues

> AssistantQueueListing getAssistantQueues(assistantId, opts)


GET /api/v2/assistants/{assistantId}/queues

Get all the queues associated with an assistant.

Requires ALL permissions:

* assistants:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expand': "expand_example" // String | Which fields, if any, to expand.
};

apiInstance.getAssistantQueues(assistantId, opts)
  .then((data) => {
    console.log(`getAssistantQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expand** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: assistant |

### Return type

**AssistantQueueListing**


## getAssistants

> AssistantListing getAssistants(opts)


GET /api/v2/assistants

Get all assistants.

Requires ALL permissions:

* assistants:assistant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example", // String | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'name': "name_example", // String | Return the assistant by the given name.
  'expand': "expand_example" // String | Which fields, if any, to expand
};

apiInstance.getAssistants(opts)
  .then((data) => {
    console.log(`getAssistants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. Deprecated in favour of pageSize | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **name** | **String** | Return the assistant by the given name. | [optional]  |
 **expand** | **String** | Which fields, if any, to expand | [optional] <br />**Values**: copilot |

### Return type

**AssistantListing**


## getAssistantsAgentchecklist

> AgentChecklist getAssistantsAgentchecklist(agentChecklistId)


GET /api/v2/assistants/agentchecklists/{agentChecklistId}

Get an agent checklist

Requires ALL permissions:

* assistants:agentchecklist:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let agentChecklistId = "agentChecklistId_example"; // String | Agent Checklist ID

apiInstance.getAssistantsAgentchecklist(agentChecklistId)
  .then((data) => {
    console.log(`getAssistantsAgentchecklist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantsAgentchecklist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentChecklistId** | **String** | Agent Checklist ID |  |

### Return type

**AgentChecklist**


## getAssistantsAgentchecklists

> AgentChecklistListing getAssistantsAgentchecklists(opts)


GET /api/v2/assistants/agentchecklists

Get the list of agent checklists

Requires ALL permissions:

* assistants:agentchecklist:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "25", // String | The page size for the listing. The max that will be returned is 100.
  'namePrefix': "namePrefix_example", // String | The agent checklist name prefix filter applied to the listing.
  'language': "language_example", // String | The agent checklist language filter applied to the listing.
  'sortOrder': "sortOrder_example", // String | The sort order for the listing
  'sortBy': "sortBy_example" // String | The field to sort by for the listing.
};

apiInstance.getAssistantsAgentchecklists(opts)
  .then((data) => {
    console.log(`getAssistantsAgentchecklists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantsAgentchecklists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | The page size for the listing. The max that will be returned is 100. | [optional] [default to 25] |
 **namePrefix** | **String** | The agent checklist name prefix filter applied to the listing. | [optional]  |
 **language** | **String** | The agent checklist language filter applied to the listing. | [optional]  |
 **sortOrder** | **String** | The sort order for the listing | [optional] <br />**Values**: asc, desc |
 **sortBy** | **String** | The field to sort by for the listing. | [optional] <br />**Values**: dateModified, language, name |

### Return type

**AgentChecklistListing**


## getAssistantsAgentchecklistsLanguages

> EntityListing getAssistantsAgentchecklistsLanguages()


GET /api/v2/assistants/agentchecklists/languages

Get the list of supported languages

Requires ALL permissions:

* assistants:agentchecklist:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

apiInstance.getAssistantsAgentchecklistsLanguages()
  .then((data) => {
    console.log(`getAssistantsAgentchecklistsLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantsAgentchecklistsLanguages');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EntityListing**


## getAssistantsQueues

> AssistantQueueListing getAssistantsQueues(opts)


GET /api/v2/assistants/queues

Get all queues assigned to any assistant.

Requires ALL permissions:

* assistants:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'queueIds': "queueIds_example", // String | Comma-separated identifiers of the queues that need to be retrieved.
  'expand': "expand_example" // String | Which fields, if any, to expand.
};

apiInstance.getAssistantsQueues(opts)
  .then((data) => {
    console.log(`getAssistantsQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantsQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **queueIds** | **String** | Comma-separated identifiers of the queues that need to be retrieved. | [optional]  |
 **expand** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: assistant |

### Return type

**AssistantQueueListing**


## patchAssistant

> Assistant patchAssistant(assistantId, body)


PATCH /api/v2/assistants/{assistantId}

Update an assistant.

Requires ALL permissions:

* assistants:assistant:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let body = {}; // Object | 

apiInstance.patchAssistant(assistantId, body)
  .then((data) => {
    console.log(`patchAssistant success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAssistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **body** | **Object** |  |  |

### Return type

**Assistant**


## patchAssistantQueues

> AssistantQueueListing patchAssistantQueues(assistantId, body)


PATCH /api/v2/assistants/{assistantId}/queues

Update Queues for an Assistant.

Requires ALL permissions:

* assistants:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let body = [{}]; // Object | 

apiInstance.patchAssistantQueues(assistantId, body)
  .then((data) => {
    console.log(`patchAssistantQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAssistantQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **body** | **Object** |  |  |

### Return type

**AssistantQueueListing**


## postAssistantQueueUsersBulkAdd

> BulkResponse postAssistantQueueUsersBulkAdd(assistantId, queueId, body)


POST /api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/add

Bulk add users to assistant-queue (requires manual assignment mode).

Requires ANY permissions:

* assistants:queueUserAssignment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 

apiInstance.postAssistantQueueUsersBulkAdd(assistantId, queueId, body)
  .then((data) => {
    console.log(`postAssistantQueueUsersBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantQueueUsersBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |

### Return type

**BulkResponse**


## postAssistantQueueUsersBulkRemove

> BulkResponse postAssistantQueueUsersBulkRemove(assistantId, queueId, body)


POST /api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/remove

Bulk remove users from assistant-queue (requires manual assignment mode).

Requires ANY permissions:

* assistants:queueUserAssignment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 

apiInstance.postAssistantQueueUsersBulkRemove(assistantId, queueId, body)
  .then((data) => {
    console.log(`postAssistantQueueUsersBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantQueueUsersBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |

### Return type

**BulkResponse**


## postAssistantQueueUsersJobs

> AssistantQueueUsersJobsResponse postAssistantQueueUsersJobs(assistantId, queueId, body)


POST /api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs

Start a new job to assistant-queue.

Requires ANY permissions:

* assistants:queueUserJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 

apiInstance.postAssistantQueueUsersJobs(assistantId, queueId, body)
  .then((data) => {
    console.log(`postAssistantQueueUsersJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantQueueUsersJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |

### Return type

**AssistantQueueUsersJobsResponse**


## postAssistantQueueUsersQuery

> AssistantQueueUsersQueryResponse postAssistantQueueUsersQuery(assistantId, queueId, body, opts)


POST /api/v2/assistants/{assistantId}/queues/{queueId}/users/query

Query for users in the assistant-queue (requires manual assignment mode).

Requires ANY permissions:

* assistants:queueUserAssignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand with.
};

apiInstance.postAssistantQueueUsersQuery(assistantId, queueId, body, opts)
  .then((data) => {
    console.log(`postAssistantQueueUsersQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantQueueUsersQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |
 **expand** | **[String]** | Which fields, if any, to expand with. | [optional] <br />**Values**: assistant, copilot |

### Return type

**AssistantQueueUsersQueryResponse**


## postAssistants

> Assistant postAssistants(body)


POST /api/v2/assistants

Create an Assistant.

Requires ALL permissions:

* assistants:assistant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let body = {}; // Object | 

apiInstance.postAssistants(body)
  .then((data) => {
    console.log(`postAssistants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**Assistant**


## postAssistantsAgentchecklists

> AgentChecklist postAssistantsAgentchecklists(body)


POST /api/v2/assistants/agentchecklists

Create an agent checklist

Requires ALL permissions:

* assistants:agentchecklist:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let body = {}; // Object | Request body containing details of checklist to be added

apiInstance.postAssistantsAgentchecklists(body)
  .then((data) => {
    console.log(`postAssistantsAgentchecklists success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantsAgentchecklists');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Request body containing details of checklist to be added |  |

### Return type

**AgentChecklist**


## putAssistantQueue

> AssistantQueue putAssistantQueue(assistantId, queueId, body)


PUT /api/v2/assistants/{assistantId}/queues/{queueId}

Create a queue assistant association.

Requires ALL permissions:

* assistants:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | 

apiInstance.putAssistantQueue(assistantId, queueId, body)
  .then((data) => {
    console.log(`putAssistantQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAssistantQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** |  |  |

### Return type

**AssistantQueue**


## putAssistantsAgentchecklist

> AgentChecklist putAssistantsAgentchecklist(agentChecklistId, body)


PUT /api/v2/assistants/agentchecklists/{agentChecklistId}

Update an agent checklist

Requires ALL permissions:

* assistants:agentchecklist:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentAssistantsApi();

let agentChecklistId = "agentChecklistId_example"; // String | Agent Checklist ID
let body = {}; // Object | Request body containing details of checklist to be updated

apiInstance.putAssistantsAgentchecklist(agentChecklistId, body)
  .then((data) => {
    console.log(`putAssistantsAgentchecklist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAssistantsAgentchecklist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentChecklistId** | **String** | Agent Checklist ID |  |
 **body** | **Object** | Request body containing details of checklist to be updated |  |

### Return type

**AgentChecklist**


_purecloud-platform-client-v2@243.0.0_
