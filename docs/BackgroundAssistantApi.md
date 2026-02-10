# BackgroundAssistantApi

# platformClient.BackgroundAssistantApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postBackgroundassistantToken**](BackgroundAssistantApi#postBackgroundassistantToken) | **POST** /api/v2/backgroundassistant/token | Sign identifying information for Genesys Cloud Background Assistant
[**postScreenrecordingToken**](BackgroundAssistantApi#postScreenrecordingToken) | **POST** /api/v2/screenrecording/token | Sign identifying information for screen recording



## postBackgroundassistantToken

> SignedData postBackgroundassistantToken(opts)


POST /api/v2/backgroundassistant/token

Sign identifying information for Genesys Cloud Background Assistant

postBackgroundassistantToken is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BackgroundAssistantApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postBackgroundassistantToken(opts)
  .then((data) => {
    console.log(`postBackgroundassistantToken success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBackgroundassistantToken');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**SignedData**


## postScreenrecordingToken

> SignedData postScreenrecordingToken(opts)


POST /api/v2/screenrecording/token

Sign identifying information for screen recording

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BackgroundAssistantApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postScreenrecordingToken(opts)
  .then((data) => {
    console.log(`postScreenrecordingToken success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScreenrecordingToken');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**SignedData**


_purecloud-platform-client-v2@245.1.0_
