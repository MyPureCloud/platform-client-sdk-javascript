---
title: SignedDataApi
---
# platformClient.SignedDataApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postSigneddata**](SignedDataApi.html#postSigneddata) | **POST** /api/v2/signeddata | Sign identifying information
{: class="table table-striped"}

<a name="postSigneddata"></a>

# SignedData postSigneddata(opts)

POST /api/v2/signeddata

Sign identifying information



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SignedDataApi();

var opts = { 
  'body': null // Object | 
};
apiInstance.postSigneddata(opts)
  .then(function(data) {
    console.log(`postSigneddata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postSigneddata');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SignedData**

