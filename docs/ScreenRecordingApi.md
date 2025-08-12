# ScreenRecordingApi

# platformClient.ScreenRecordingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postScreenrecordingToken**](ScreenRecordingApi#postScreenrecordingToken) | **POST** /api/v2/screenrecording/token | Sign identifying information for screen recording



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

let apiInstance = new platformClient.ScreenRecordingApi();

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


_purecloud-platform-client-v2@229.1.0_
