---
title: SignedDataApi
---
# platformClient.SignedDataApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postSigneddata**](SignedDataApi.html#postSigneddata) | **POST** /api/v2/signeddata | Sign identifying information
{: class="table table-striped"}

<a name="postSigneddata"></a>

# SignedData postSigneddata(opts)


POST /api/v2/signeddata

Sign identifying information

Requires ANY permissions:

* authentication:signature:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SignedDataApi();

let opts = { 
  'body': null // {String: Object} | 
};

apiInstance.postSigneddata(opts)
  .then((data) => {
    console.log(`postSigneddata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSigneddata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **{String: Object}** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SignedData**

