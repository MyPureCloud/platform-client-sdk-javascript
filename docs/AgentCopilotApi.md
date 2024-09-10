# AgentCopilotApi

# platformClient.AgentCopilotApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getAssistantCopilot**](AgentCopilotApi.html#getAssistantCopilot) | **GET** /api/v2/assistants/{assistantId}/copilot | Get copilot configuration of an assistant.
[**putAssistantCopilot**](AgentCopilotApi.html#putAssistantCopilot) | **PUT** /api/v2/assistants/{assistantId}/copilot | Update agent copilot configuration
{: class="table table-striped"}

<a name="getAssistantCopilot"></a>

# Copilot getAssistantCopilot(assistantId)


GET /api/v2/assistants/{assistantId}/copilot

Get copilot configuration of an assistant.

Requires ALL permissions:

* assistants:copilot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentCopilotApi();

let assistantId = "assistantId_example"; // String | Assistant ID

apiInstance.getAssistantCopilot(assistantId)
  .then((data) => {
    console.log(`getAssistantCopilot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantCopilot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
{: class="table table-striped"}

### Return type

**Copilot**

<a name="putAssistantCopilot"></a>

# Copilot putAssistantCopilot(assistantId, body)


PUT /api/v2/assistants/{assistantId}/copilot

Update agent copilot configuration

Requires ALL permissions:

* assistants:copilot:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AgentCopilotApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let body = {}; // Object | 

apiInstance.putAssistantCopilot(assistantId, body)
  .then((data) => {
    console.log(`putAssistantCopilot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAssistantCopilot');
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

**Copilot**


_purecloud-platform-client-v2@204.0.0_
