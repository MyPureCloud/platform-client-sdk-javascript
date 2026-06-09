# AgentCopilotApi

# platformClient.AgentCopilotApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getAssistantCopilot**](AgentCopilotApi#getAssistantCopilot) | **GET** /api/v2/assistants/{assistantId}/copilot | Get copilot configuration of an assistant.
[**getAssistantsCopilotFeaturesupport**](AgentCopilotApi#getAssistantsCopilotFeaturesupport) | **GET** /api/v2/assistants/copilot/featuresupport | Get information about the support of features for all the languages or only for a certain language.
[**putAssistantCopilot**](AgentCopilotApi#putAssistantCopilot) | **PUT** /api/v2/assistants/{assistantId}/copilot | Update agent copilot configuration



## getAssistantCopilot

> Copilot getAssistantCopilot(assistantId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAssistantCopilot(assistantId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Copilot**


## getAssistantsCopilotFeaturesupport

> LanguageSupportResponse getAssistantsCopilotFeaturesupport(opts)


GET /api/v2/assistants/copilot/featuresupport

Get information about the support of features for all the languages or only for a certain language.

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

let opts = { 
  'language': "language_example", // String | Which language are the features supported for
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAssistantsCopilotFeaturesupport(opts)
  .then((data) => {
    console.log(`getAssistantsCopilotFeaturesupport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantsCopilotFeaturesupport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | Which language are the features supported for | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LanguageSupportResponse**


## putAssistantCopilot

> Copilot putAssistantCopilot(assistantId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putAssistantCopilot(assistantId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Copilot**


_purecloud-platform-client-v2@254.0.0_
