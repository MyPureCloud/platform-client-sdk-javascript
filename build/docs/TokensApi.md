---
title: TokensApi
---
# platformClient.TokensApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteToken**](TokensApi.html#deleteToken) | **DELETE** /api/v2/tokens/{userId} | Delete all auth tokens for the specified user.
[**deleteTokensMe**](TokensApi.html#deleteTokensMe) | **DELETE** /api/v2/tokens/me | Delete  auth token used to make the request.
[**getTokensMe**](TokensApi.html#getTokensMe) | **GET** /api/v2/tokens/me | Fetch information about the current token
{: class="table table-striped"}

<a name="deleteToken"></a>

# void deleteToken(userId)



DELETE /api/v2/tokens/{userId}

Delete all auth tokens for the specified user.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteToken(userId)
  .then(() => {
    console.log('deleteToken returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteToken');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTokensMe"></a>

# void deleteTokensMe()



DELETE /api/v2/tokens/me

Delete  auth token used to make the request.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

apiInstance.deleteTokensMe()
  .then(() => {
    console.log('deleteTokensMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTokensMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getTokensMe"></a>

# TokenInfo getTokensMe()



GET /api/v2/tokens/me

Fetch information about the current token



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

apiInstance.getTokensMe()
  .then((data) => {
    console.log(`getTokensMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTokensMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**TokenInfo**

