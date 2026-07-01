# AgentUIApi

# platformClient.AgentUIApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi#deleteUsersAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**getUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi#getUsersAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**patchUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi#patchUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**putUsersAgentuiAgentsAutoanswerAgentIdSettings**](AgentUIApi#putUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings



## deleteUsersAgentuiAgentsAutoanswerAgentIdSettings

> void deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


## patchUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


## putUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


_purecloud-platform-client-v2@256.0.0_
