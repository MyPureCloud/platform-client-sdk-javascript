---
title: SettingsApi
---
# platformClient.SettingsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAppsAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#deleteAppsAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**deleteAppsAgentuiPanelsQueueSettings**](SettingsApi.html#deleteAppsAgentuiPanelsQueueSettings) | **DELETE** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Delete queue-level default panel settings
[**deleteAppsAgentuiPanelsSettings**](SettingsApi.html#deleteAppsAgentuiPanelsSettings) | **DELETE** /api/v2/apps/agentui/panels/settings | Delete organization-level default panel settings
[**deleteEmailsSettingsThreading**](SettingsApi.html#deleteEmailsSettingsThreading) | **DELETE** /api/v2/emails/settings/threading | Reset email threading settings to default
[**deleteSettings**](SettingsApi.html#deleteSettings) | **DELETE** /api/v2/settings | Delete settings for the current user
[**deleteSettingsWebrtcUsers**](SettingsApi.html#deleteSettingsWebrtcUsers) | **DELETE** /api/v2/settings/webrtc/users | Delete webrtc settings for a given user, org and oauth client
[**getAppsAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#getAppsAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**getAppsAgentuiPanelsQueueSettings**](SettingsApi.html#getAppsAgentuiPanelsQueueSettings) | **GET** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Get queue-level default panel settings
[**getAppsAgentuiPanelsSettings**](SettingsApi.html#getAppsAgentuiPanelsSettings) | **GET** /api/v2/apps/agentui/panels/settings | Get organization-level default panel settings
[**getEmailsSettings**](SettingsApi.html#getEmailsSettings) | **GET** /api/v2/emails/settings | Get email Contact Center settings
[**getEmailsSettingsThreading**](SettingsApi.html#getEmailsSettingsThreading) | **GET** /api/v2/emails/settings/threading | Get email threading settings
[**getSettings**](SettingsApi.html#getSettings) | **GET** /api/v2/settings | Get settings for the current user
[**getSettingsWebrtcUsers**](SettingsApi.html#getSettingsWebrtcUsers) | **GET** /api/v2/settings/webrtc/users | Get webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on retrieval of settings.
[**patchAppsAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#patchAppsAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**patchAppsAgentuiPanelsQueueSettings**](SettingsApi.html#patchAppsAgentuiPanelsQueueSettings) | **PATCH** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Update queue-level default panel settings
[**patchAppsAgentuiPanelsSettings**](SettingsApi.html#patchAppsAgentuiPanelsSettings) | **PATCH** /api/v2/apps/agentui/panels/settings | Update organization-level default panel settings
[**patchEmailsSettings**](SettingsApi.html#patchEmailsSettings) | **PATCH** /api/v2/emails/settings | Patch email Contact Center settings
[**patchEmailsSettingsThreading**](SettingsApi.html#patchEmailsSettingsThreading) | **PATCH** /api/v2/emails/settings/threading | Patch email threading settings
[**patchSettingsWebrtcUsers**](SettingsApi.html#patchSettingsWebrtcUsers) | **PATCH** /api/v2/settings/webrtc/users | Update webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on update of settings.
[**putAppsAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi.html#putAppsAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/apps/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings
[**putAppsAgentuiPanelsQueueSettings**](SettingsApi.html#putAppsAgentuiPanelsQueueSettings) | **PUT** /api/v2/apps/agentui/panels/queues/{queueId}/settings | Set queue-level default panel settings
[**putAppsAgentuiPanelsSettings**](SettingsApi.html#putAppsAgentuiPanelsSettings) | **PUT** /api/v2/apps/agentui/panels/settings | Set organization-level default panel settings
[**putSettings**](SettingsApi.html#putSettings) | **PUT** /api/v2/settings | Update settings for the current user
[**putSettingsWebrtcUsers**](SettingsApi.html#putSettingsWebrtcUsers) | **PUT** /api/v2/settings/webrtc/users | Set/Add webrtc settings for a given user, org and oauth client. A TTL of 30 days is set on the settings.
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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

<a name="deleteEmailsSettingsThreading"></a>

# void deleteEmailsSettingsThreading()


DELETE /api/v2/emails/settings/threading

Reset email threading settings to default

Requires ANY permissions:

* conversation:emailThreadingSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.deleteEmailsSettingsThreading()
  .then(() => {
    console.log('deleteEmailsSettingsThreading returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteSettings"></a>

# void deleteSettings()


DELETE /api/v2/settings

Delete settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.deleteSettings()
  .then(() => {
    console.log('deleteSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteSettingsWebrtcUsers"></a>

# void deleteSettingsWebrtcUsers()


DELETE /api/v2/settings/webrtc/users

Delete webrtc settings for a given user, org and oauth client

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.deleteSettingsWebrtcUsers()
  .then(() => {
    console.log('deleteSettingsWebrtcUsers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSettingsWebrtcUsers');
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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getEmailsSettingsThreading"></a>

# EmailThreadingSettings getEmailsSettingsThreading()


GET /api/v2/emails/settings/threading

Get email threading settings

Requires ANY permissions:

* conversation:emailThreadingSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.getEmailsSettingsThreading()
  .then((data) => {
    console.log(`getEmailsSettingsThreading success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**EmailThreadingSettings**

<a name="getSettings"></a>

# **{&#39;String&#39;: Object}** getSettings()


GET /api/v2/settings

Get settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.getSettings()
  .then((data) => {
    console.log(`getSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**{&#39;String&#39;: Object}**

<a name="getSettingsWebrtcUsers"></a>

# WebrtcUserSettings getSettingsWebrtcUsers()


GET /api/v2/settings/webrtc/users

Get webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on retrieval of settings.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

apiInstance.getSettingsWebrtcUsers()
  .then((data) => {
    console.log(`getSettingsWebrtcUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSettingsWebrtcUsers');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**WebrtcUserSettings**

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="patchEmailsSettingsThreading"></a>

# EmailThreadingSettings patchEmailsSettingsThreading(opts)


PATCH /api/v2/emails/settings/threading

Patch email threading settings

Requires ANY permissions:

* conversation:emailThreadingSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchEmailsSettingsThreading(opts)
  .then((data) => {
    console.log(`patchEmailsSettingsThreading success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmailThreadingSettings**

<a name="patchSettingsWebrtcUsers"></a>

# UpdatedSettingsResponse patchSettingsWebrtcUsers(opts)


PATCH /api/v2/settings/webrtc/users

Update webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on update of settings.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchSettingsWebrtcUsers(opts)
  .then((data) => {
    console.log(`patchSettingsWebrtcUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSettingsWebrtcUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**UpdatedSettingsResponse**

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

let apiInstance = new platformClient.SettingsApi();

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

<a name="putSettings"></a>

# **{&#39;String&#39;: Object}** putSettings(opts)


PUT /api/v2/settings

Update settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': null // {String: Object} | 
};

apiInstance.putSettings(opts)
  .then((data) => {
    console.log(`putSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **{String: Object}** |  | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="putSettingsWebrtcUsers"></a>

# UpdatedSettingsResponse putSettingsWebrtcUsers(opts)


PUT /api/v2/settings/webrtc/users

Set/Add webrtc settings for a given user, org and oauth client. A TTL of 30 days is set on the settings.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.putSettingsWebrtcUsers(opts)
  .then((data) => {
    console.log(`putSettingsWebrtcUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSettingsWebrtcUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**UpdatedSettingsResponse**

