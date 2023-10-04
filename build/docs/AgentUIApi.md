---
title: AgentUIApi
---
# platformClient.AgentUIApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAppsAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#deleteAppsAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**deleteAppsAgentuiPanelsQueueSettings**](AgentUIApi.html#deleteAppsAgentuiPanelsQueueSettings) | **DELETE** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Delete queue-level default panel settings
[**deleteAppsAgentuiPanelsSettings**](AgentUIApi.html#deleteAppsAgentuiPanelsSettings) | **DELETE** /api/v2/apps/agentui/panels/settings | Delete organization-level default panel settings
[**getAppsAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#getAppsAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**getAppsAgentuiPanels**](AgentUIApi.html#getAppsAgentuiPanels) | **GET** /api/v2/apps/agentui/panels | Get list of available Agent UI panels
[**getAppsAgentuiPanelsQueueSettings**](AgentUIApi.html#getAppsAgentuiPanelsQueueSettings) | **GET** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Get queue-level default panel settings
[**getAppsAgentuiPanelsSettings**](AgentUIApi.html#getAppsAgentuiPanelsSettings) | **GET** /api/v2/apps/agentui/panels/settings | Get organization-level default panel settings
[**patchAppsAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#patchAppsAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**patchAppsAgentuiPanelsQueueSettings**](AgentUIApi.html#patchAppsAgentuiPanelsQueueSettings) | **PATCH** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Update queue-level default panel settings
[**patchAppsAgentuiPanelsSettings**](AgentUIApi.html#patchAppsAgentuiPanelsSettings) | **PATCH** /api/v2/apps/agentui/panels/settings | Update organization-level default panel settings
[**putAppsAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#putAppsAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings
[**putAppsAgentuiPanelsQueueSettings**](AgentUIApi.html#putAppsAgentuiPanelsQueueSettings) | **PUT** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Set queue-level default panel settings
[**putAppsAgentuiPanelsSettings**](AgentUIApi.html#putAppsAgentuiPanelsSettings) | **PUT** /api/v2/apps/agentui/panels/settings | Set organization-level default panel settings
{: class="table table-striped"}

<a name="deleteAppsAgentuiAgentsAutoanswerAgentIdSettings"></a>

# void deleteAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId)


DELETE /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings

Delete agent auto answer settings

Requires ANY permissions:

* agentUI:agents:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to

apiInstance.deleteAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId)
  .then(() => {
    console.log('deleteAppsAgentuiAgentsAutoanswerAgentIdSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAppsAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAppsAgentuiPanelsQueueSettings"></a>

# void deleteAppsAgentuiPanelsQueueSettings(queueId)


DELETE /api/v2/apps/agentui/panels/queues/{queueId}/settings

Delete queue-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let queueId = "queueId_example"; // String | The queue to apply the panel settings to

apiInstance.deleteAppsAgentuiPanelsQueueSettings(queueId)
  .then(() => {
    console.log('deleteAppsAgentuiPanelsQueueSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAppsAgentuiPanelsQueueSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | The queue to apply the panel settings to |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAppsAgentuiPanelsSettings"></a>

# void deleteAppsAgentuiPanelsSettings()


DELETE /api/v2/apps/agentui/panels/settings

Delete organization-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

apiInstance.deleteAppsAgentuiPanelsSettings()
  .then(() => {
    console.log('deleteAppsAgentuiPanelsSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAppsAgentuiPanelsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="getAppsAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings getAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId)


GET /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings

Get agent auto answer settings

Requires ANY permissions:

* agentUI:agents:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to

apiInstance.getAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId)
  .then((data) => {
    console.log(`getAppsAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
{: class="table table-striped"}

### Return type

**AutoAnswerSettings**

<a name="getAppsAgentuiPanels"></a>

# [Panel] getAppsAgentuiPanels(opts)


GET /api/v2/apps/agentui/panels

Get list of available Agent UI panels

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let opts = { 
  'acceptLanguage': "en-us" // String | The locale used for panel name translations
};

apiInstance.getAppsAgentuiPanels(opts)
  .then((data) => {
    console.log(`getAppsAgentuiPanels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsAgentuiPanels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **acceptLanguage** | **String** | The locale used for panel name translations | [optional] [default to en-us] |
{: class="table table-striped"}

### Return type

**[Panel]**

<a name="getAppsAgentuiPanelsQueueSettings"></a>

# PanelSettings getAppsAgentuiPanelsQueueSettings(queueId)


GET /api/v2/apps/agentui/panels/queues/{queueId}/settings

Get queue-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let queueId = "queueId_example"; // String | The queue to apply the panel settings to

apiInstance.getAppsAgentuiPanelsQueueSettings(queueId)
  .then((data) => {
    console.log(`getAppsAgentuiPanelsQueueSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsAgentuiPanelsQueueSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | The queue to apply the panel settings to |  |
{: class="table table-striped"}

### Return type

**PanelSettings**

<a name="getAppsAgentuiPanelsSettings"></a>

# PanelSettings getAppsAgentuiPanelsSettings()


GET /api/v2/apps/agentui/panels/settings

Get organization-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

apiInstance.getAppsAgentuiPanelsSettings()
  .then((data) => {
    console.log(`getAppsAgentuiPanelsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsAgentuiPanelsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PanelSettings**

<a name="patchAppsAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings patchAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)


PATCH /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings

Update agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings

apiInstance.patchAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)
  .then((data) => {
    console.log(`patchAppsAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAppsAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **body** | **Object** | AutoAnswerSettings |  |
{: class="table table-striped"}

### Return type

**AutoAnswerSettings**

<a name="patchAppsAgentuiPanelsQueueSettings"></a>

# PanelSettings patchAppsAgentuiPanelsQueueSettings(queueId, body)


PATCH /api/v2/apps/agentui/panels/queues/{queueId}/settings

Update queue-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let queueId = "queueId_example"; // String | The queue to apply the panel settings to
let body = {}; // Object | DefaultPanelSettings

apiInstance.patchAppsAgentuiPanelsQueueSettings(queueId, body)
  .then((data) => {
    console.log(`patchAppsAgentuiPanelsQueueSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAppsAgentuiPanelsQueueSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | The queue to apply the panel settings to |  |
 **body** | **Object** | DefaultPanelSettings |  |
{: class="table table-striped"}

### Return type

**PanelSettings**

<a name="patchAppsAgentuiPanelsSettings"></a>

# PanelSettings patchAppsAgentuiPanelsSettings(body)


PATCH /api/v2/apps/agentui/panels/settings

Update organization-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let body = {}; // Object | DefaultPanelSettings

apiInstance.patchAppsAgentuiPanelsSettings(body)
  .then((data) => {
    console.log(`patchAppsAgentuiPanelsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAppsAgentuiPanelsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DefaultPanelSettings |  |
{: class="table table-striped"}

### Return type

**PanelSettings**

<a name="putAppsAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings putAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)


PUT /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings

Set agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings

apiInstance.putAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)
  .then((data) => {
    console.log(`putAppsAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAppsAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **body** | **Object** | AutoAnswerSettings |  |
{: class="table table-striped"}

### Return type

**AutoAnswerSettings**

<a name="putAppsAgentuiPanelsQueueSettings"></a>

# PanelSettings putAppsAgentuiPanelsQueueSettings(queueId, body)


PUT /api/v2/apps/agentui/panels/queues/{queueId}/settings

Set queue-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let queueId = "queueId_example"; // String | The queue to apply the panel settings to
let body = {}; // Object | DefaultPanelSettings

apiInstance.putAppsAgentuiPanelsQueueSettings(queueId, body)
  .then((data) => {
    console.log(`putAppsAgentuiPanelsQueueSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAppsAgentuiPanelsQueueSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | The queue to apply the panel settings to |  |
 **body** | **Object** | DefaultPanelSettings |  |
{: class="table table-striped"}

### Return type

**PanelSettings**

<a name="putAppsAgentuiPanelsSettings"></a>

# PanelSettings putAppsAgentuiPanelsSettings(body)


PUT /api/v2/apps/agentui/panels/settings

Set organization-level default panel settings

Requires ANY permissions:

* agentUI:defaultPanels:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let body = {}; // Object | DefaultPanelSettings

apiInstance.putAppsAgentuiPanelsSettings(body)
  .then((data) => {
    console.log(`putAppsAgentuiPanelsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAppsAgentuiPanelsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | DefaultPanelSettings |  |
{: class="table table-striped"}

### Return type

**PanelSettings**

