# DownloadsApi

# platformClient.DownloadsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDownload**](DownloadsApi#getDownload) | **GET** /api/v2/downloads/{downloadId} | Issues a redirect to a signed secure download URL for specified download



## getDownload

> UrlResponse getDownload(downloadId, opts)


GET /api/v2/downloads/{downloadId}

Issues a redirect to a signed secure download URL for specified download

this method will issue a redirect to the url to the content

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DownloadsApi();

let downloadId = "downloadId_example"; // String | Download ID
let opts = { 
  'contentDisposition': "contentDisposition_example", // String | 
  'issueRedirect': true, // Boolean | 
  'redirectToAuth': true // Boolean | 
};

apiInstance.getDownload(downloadId, opts)
  .then((data) => {
    console.log(`getDownload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDownload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **downloadId** | **String** | Download ID |  |
 **contentDisposition** | **String** |  | [optional]  |
 **issueRedirect** | **Boolean** |  | [optional] [default to true] |
 **redirectToAuth** | **Boolean** |  | [optional] [default to true] |

### Return type

**UrlResponse**


_purecloud-platform-client-v2@229.1.0_
