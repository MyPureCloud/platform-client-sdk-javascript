---
title: AgentUIApi
---
# platformClient.AgentUIApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#deleteUsersAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**getUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#getUsersAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**patchUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#patchUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**putUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi.html#putUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings
{: class="table table-striped"}

<a name="deleteUsersAgentuiAgentsAutoanswerAgentIdSettings"></a>

# void deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId)


DELETE /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Delete agent auto answer settings

Requires ANY permissions:

* agentUI:agents:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to

apiInstance.deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId)
  .then(() => {
    console.log('deleteUsersAgentuiAgentsAutoanswerAgentIdSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUsersAgentuiAgentsAutoanswerAgentIdSettings');
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

<a name="getUsersAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId)


GET /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Get agent auto answer settings

Requires ANY permissions:

* agentUI:agents:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to

apiInstance.getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId)
  .then((data) => {
    console.log(`getUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersAgentuiAgentsAutoanswerAgentIdSettings');
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

<a name="patchUsersAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)


PATCH /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Update agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings

apiInstance.patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)
  .then((data) => {
    console.log(`patchUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUsersAgentuiAgentsAutoanswerAgentIdSettings');
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

<a name="putUsersAgentuiAgentsAutoanswerAgentIdSettings"></a>

# AutoAnswerSettings putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)


PUT /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Set agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentUIApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings

apiInstance.putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body)
  .then((data) => {
    console.log(`putUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUsersAgentuiAgentsAutoanswerAgentIdSettings');
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

