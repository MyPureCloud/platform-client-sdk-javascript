---
title: SettingsApi
---
# platformClient.SettingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#deleteUsersAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**getEmailsSettings**](SettingsApi.html#getEmailsSettings) | **GET** /api/v2/emails/settings | Get email Contact Center settings
[**getSettingsExecutiondata**](SettingsApi.html#getSettingsExecutiondata) | **GET** /api/v2/settings/executiondata | Get the execution history enabled setting.
[**getUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#getUsersAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**patchEmailsSettings**](SettingsApi.html#patchEmailsSettings) | **PATCH** /api/v2/emails/settings | Patch email Contact Center settings
[**patchSettingsExecutiondata**](SettingsApi.html#patchSettingsExecutiondata) | **PATCH** /api/v2/settings/executiondata | Edit the execution history on off setting.
[**patchUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#patchUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**putUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#putUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings
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

let apiInstance = new platformClient.SettingsApi();

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

<a name="getEmailsSettings"></a>

# EmailSettings getEmailsSettings()


GET /api/v2/emails/settings

Get email Contact Center settings

Requires ANY permissions:

* conversation:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.getEmailsSettings()
  .then((data) => {
    console.log(`getEmailsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**EmailSettings**

<a name="getSettingsExecutiondata"></a>

# ExecutionDataGlobalSettingsResponse getSettingsExecutiondata()


GET /api/v2/settings/executiondata

Get the execution history enabled setting.

Get the execution history enabled setting.

getSettingsExecutiondata is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* settings:executiondata:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.getSettingsExecutiondata()
  .then((data) => {
    console.log(`getSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ExecutionDataGlobalSettingsResponse**

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

let apiInstance = new platformClient.SettingsApi();

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

<a name="patchEmailsSettings"></a>

# EmailSettings patchEmailsSettings(opts)


PATCH /api/v2/emails/settings

Patch email Contact Center settings

Requires ANY permissions:

* conversation:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchEmailsSettings(opts)
  .then((data) => {
    console.log(`patchEmailsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmailsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmailSettings**

<a name="patchSettingsExecutiondata"></a>

# ExecutionDataGlobalSettingsResponse patchSettingsExecutiondata(body)


PATCH /api/v2/settings/executiondata

Edit the execution history on off setting.

Edit the execution history on off setting.

patchSettingsExecutiondata is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* settings:executiondata:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let body = {}; // Object | New Execution Data Setting

apiInstance.patchSettingsExecutiondata(body)
  .then((data) => {
    console.log(`patchSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | New Execution Data Setting |  |
{: class="table table-striped"}

### Return type

**ExecutionDataGlobalSettingsResponse**

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

