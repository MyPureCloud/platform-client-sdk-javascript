---
title: DownloadsApi
---
# platformClient.DownloadsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDownload**](DownloadsApi.html#getDownload) | **GET** /api/v2/downloads/{downloadId} | Issues a redirect to a signed secure download URL for specified download
[**getDownloadsCallback**](DownloadsApi.html#getDownloadsCallback) | **GET** /api/v2/downloads/callback | OAuth Callback used during code authorization grant flow.
{: class="table table-striped"}

<a name="getDownload"></a>

# UrlResponse getDownload(downloadId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getDownloadsCallback"></a>

# void getDownloadsCallback(opts)


GET /api/v2/downloads/callback

OAuth Callback used during code authorization grant flow.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.DownloadsApi();

let opts = { 
  'code': "code_example", // String | code
  'state': "state_example", // String | state
  'error': "error_example" // String | error
};

apiInstance.getDownloadsCallback(opts)
  .then(() => {
    console.log('getDownloadsCallback returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling getDownloadsCallback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **code** | **String** | code | [optional]  |
 **state** | **String** | state | [optional]  |
 **error** | **String** | error | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

