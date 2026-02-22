# AssistantCopilotVariationsApi

# platformClient.AssistantCopilotVariationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAssistantVariation**](AssistantCopilotVariationsApi#deleteAssistantVariation) | **DELETE** /api/v2/assistants/{assistantId}/variations/{variationId} | Delete assistant copilot variation by id
[**getAssistantVariation**](AssistantCopilotVariationsApi#getAssistantVariation) | **GET** /api/v2/assistants/{assistantId}/variations/{variationId} | Get assistant copilot variation by id
[**getAssistantVariations**](AssistantCopilotVariationsApi#getAssistantVariations) | **GET** /api/v2/assistants/{assistantId}/variations | Get variations of an assistant copilot
[**postAssistantVariations**](AssistantCopilotVariationsApi#postAssistantVariations) | **POST** /api/v2/assistants/{assistantId}/variations | Create assistant copilot variation
[**putAssistantVariation**](AssistantCopilotVariationsApi#putAssistantVariation) | **PUT** /api/v2/assistants/{assistantId}/variations/{variationId} | Update assistant copilot variation by id



## deleteAssistantVariation

> void deleteAssistantVariation(assistantId, variationId)


DELETE /api/v2/assistants/{assistantId}/variations/{variationId}

Delete assistant copilot variation by id

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

let apiInstance = new platformClient.AssistantCopilotVariationsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let variationId = "variationId_example"; // String | Variation ID

apiInstance.deleteAssistantVariation(assistantId, variationId)
  .then(() => {
    console.log('deleteAssistantVariation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAssistantVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **variationId** | **String** | Variation ID |  |

### Return type

void (no response body)


## getAssistantVariation

> AssistantCopilotVariation getAssistantVariation(assistantId, variationId)


GET /api/v2/assistants/{assistantId}/variations/{variationId}

Get assistant copilot variation by id

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

let apiInstance = new platformClient.AssistantCopilotVariationsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let variationId = "variationId_example"; // String | Variation ID

apiInstance.getAssistantVariation(assistantId, variationId)
  .then((data) => {
    console.log(`getAssistantVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **variationId** | **String** | Variation ID |  |

### Return type

**AssistantCopilotVariation**


## getAssistantVariations

> AssistantCopilotVariationListing getAssistantVariations(assistantId)


GET /api/v2/assistants/{assistantId}/variations

Get variations of an assistant copilot

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

let apiInstance = new platformClient.AssistantCopilotVariationsApi();

let assistantId = "assistantId_example"; // String | Assistant ID

apiInstance.getAssistantVariations(assistantId)
  .then((data) => {
    console.log(`getAssistantVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAssistantVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |

### Return type

**AssistantCopilotVariationListing**


## postAssistantVariations

> AssistantCopilotVariation postAssistantVariations(assistantId, body)


POST /api/v2/assistants/{assistantId}/variations

Create assistant copilot variation

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

let apiInstance = new platformClient.AssistantCopilotVariationsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let body = {}; // Object | 

apiInstance.postAssistantVariations(assistantId, body)
  .then((data) => {
    console.log(`postAssistantVariations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAssistantVariations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **body** | **Object** |  |  |

### Return type

**AssistantCopilotVariation**


## putAssistantVariation

> AssistantCopilotVariation putAssistantVariation(assistantId, variationId, body)


PUT /api/v2/assistants/{assistantId}/variations/{variationId}

Update assistant copilot variation by id

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

let apiInstance = new platformClient.AssistantCopilotVariationsApi();

let assistantId = "assistantId_example"; // String | Assistant ID
let variationId = "variationId_example"; // String | Variation ID
let body = {}; // Object | 

apiInstance.putAssistantVariation(assistantId, variationId, body)
  .then((data) => {
    console.log(`putAssistantVariation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAssistantVariation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assistantId** | **String** | Assistant ID |  |
 **variationId** | **String** | Variation ID |  |
 **body** | **Object** |  |  |

### Return type

**AssistantCopilotVariation**


_purecloud-platform-client-v2@246.0.0_
