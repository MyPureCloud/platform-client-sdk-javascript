---
title: AgentAssistantsApi
---
# platformClient.AgentAssistantsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAssistant**](AgentAssistantsApi.html#deleteAssistant) | **DELETE** /api/v2/assistants/{assistantId} | Delete an assistant.
[**deleteAssistantQueue**](AgentAssistantsApi.html#deleteAssistantQueue) | **DELETE** /api/v2/assistants/{assistantId}/queues/{queueId} | Disassociate a queue from an assistant.
[**deleteAssistantQueues**](AgentAssistantsApi.html#deleteAssistantQueues) | **DELETE** /api/v2/assistants/{assistantId}/queues | Disassociate the queues from an assistant for the given assistant ID and queue IDs.
[**getAssistant**](AgentAssistantsApi.html#getAssistant) | **GET** /api/v2/assistants/{assistantId} | Get an assistant.
[**getAssistantQueue**](AgentAssistantsApi.html#getAssistantQueue) | **GET** /api/v2/assistants/{assistantId}/queues/{queueId} | Get queue Information for an assistant.
[**getAssistantQueues**](AgentAssistantsApi.html#getAssistantQueues) | **GET** /api/v2/assistants/{assistantId}/queues | Get all the queues associated with an assistant.
[**getAssistants**](AgentAssistantsApi.html#getAssistants) | **GET** /api/v2/assistants | Get all assistants.
[**getAssistantsQueues**](AgentAssistantsApi.html#getAssistantsQueues) | **GET** /api/v2/assistants/queues | Get all queues assigned to any assistant.
[**patchAssistant**](AgentAssistantsApi.html#patchAssistant) | **PATCH** /api/v2/assistants/{assistantId} | Update an assistant.
[**patchAssistantQueues**](AgentAssistantsApi.html#patchAssistantQueues) | **PATCH** /api/v2/assistants/{assistantId}/queues | Update Queues for an Assistant.
[**postAssistants**](AgentAssistantsApi.html#postAssistants) | **POST** /api/v2/assistants | Create an Assistant.
[**putAssistantQueue**](AgentAssistantsApi.html#putAssistantQueue) | **PUT** /api/v2/assistants/{assistantId}/queues/{queueId} | Create a queue assistant association.
{: class="table table-striped"}

<a name="deleteAssistant"></a>

# void deleteAssistant(assistantId)


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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAssistantQueue"></a>

# void deleteAssistantQueue(assistantId, queueId)


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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAssistantQueues"></a>

# void deleteAssistantQueues(assistantId, opts)


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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAssistant"></a>

# Assistant getAssistant(assistantId, opts)


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
{: class="table table-striped"}

### Return type

**Assistant**

<a name="getAssistantQueue"></a>

# AssistantQueue getAssistantQueue(assistantId, queueId, opts)


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
{: class="table table-striped"}

### Return type

**AssistantQueue**

<a name="getAssistantQueues"></a>

# AssistantQueueListing getAssistantQueues(assistantId, opts)


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
{: class="table table-striped"}

### Return type

**AssistantQueueListing**

<a name="getAssistants"></a>

# AssistantListing getAssistants(opts)


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
  'name': "name_example" // String | Return the assistant by the given name.
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
{: class="table table-striped"}

### Return type

**AssistantListing**

<a name="getAssistantsQueues"></a>

# AssistantQueueListing getAssistantsQueues(opts)


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
{: class="table table-striped"}

### Return type

**AssistantQueueListing**

<a name="patchAssistant"></a>

# Assistant patchAssistant(assistantId, body)


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
{: class="table table-striped"}

### Return type

**Assistant**

<a name="patchAssistantQueues"></a>

# AssistantQueueListing patchAssistantQueues(assistantId, body)


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
{: class="table table-striped"}

### Return type

**AssistantQueueListing**

<a name="postAssistants"></a>

# Assistant postAssistants(body)


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
{: class="table table-striped"}

### Return type

**Assistant**

<a name="putAssistantQueue"></a>

# AssistantQueue putAssistantQueue(assistantId, queueId, body)


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
{: class="table table-striped"}

### Return type

**AssistantQueue**

