---
title: TokensApi
---
# platformClient.TokensApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTokensMe**](TokensApi.html#deleteTokensMe) | **DELETE** /api/v2/tokens/me | Delete  auth token used to make the request.
[**getTokensMe**](TokensApi.html#getTokensMe) | **GET** /api/v2/tokens/me | Fetch information about the current token
{: class="table table-striped"}

<a name="deleteTokensMe"></a>

# void deleteTokensMe()

DELETE /api/v2/tokens/me

Delete  auth token used to make the request.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TokensApi();
apiInstance.deleteTokensMe()
  .then(function() {
    console.log('deleteTokensMe returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteTokensMe');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getTokensMe"></a>

# TokenInfo getTokensMe()

GET /api/v2/tokens/me

Fetch information about the current token



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.TokensApi();
apiInstance.getTokensMe()
  .then(function(data) {
    console.log(`getTokensMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTokensMe');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**TokenInfo**

