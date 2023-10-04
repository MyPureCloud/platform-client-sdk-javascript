---
title: TokensApi
---
# platformClient.TokensApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteToken**](TokensApi.html#deleteToken) | **DELETE** /api/v2/tokens/{userId} | Delete all auth tokens for the specified user.
[**deleteTokensMe**](TokensApi.html#deleteTokensMe) | **DELETE** /api/v2/tokens/me | Delete auth token used to make the request.
[**getTokensMe**](TokensApi.html#getTokensMe) | **GET** /api/v2/tokens/me | Fetch information about the current token
[**getTokensTimeout**](TokensApi.html#getTokensTimeout) | **GET** /api/v2/tokens/timeout | Get the current Idle Token Timeout Value
[**headTokensMe**](TokensApi.html#headTokensMe) | **HEAD** /api/v2/tokens/me | Verify user token
[**putTokensTimeout**](TokensApi.html#putTokensTimeout) | **PUT** /api/v2/tokens/timeout | Update or Enable/Disable the Idle Token Timeout
{: class="table table-striped"}

<a name="deleteToken"></a>

# void deleteToken(userId)


DELETE /api/v2/tokens/{userId}

Delete all auth tokens for the specified user.

Requires ANY permissions:

* oauth:token:delete

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

Delete auth token used to make the request.

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


### Return type

void (no response body)

<a name="getTokensMe"></a>

# TokenInfo getTokensMe(opts)


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

let opts = { 
  'preserveIdleTTL': true // Boolean | preserveIdleTTL indicates whether the idle token timeout should be reset or preserved. If preserveIdleTTL is true, then TTL value is not reset. If unset or false, the value is reset.
};

apiInstance.getTokensMe(opts)
  .then((data) => {
    console.log(`getTokensMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTokensMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **preserveIdleTTL** | **Boolean** | preserveIdleTTL indicates whether the idle token timeout should be reset or preserved. If preserveIdleTTL is true, then TTL value is not reset. If unset or false, the value is reset. | [optional]  |
{: class="table table-striped"}

### Return type

**TokenInfo**

<a name="getTokensTimeout"></a>

# IdleTokenTimeout getTokensTimeout()


GET /api/v2/tokens/timeout

Get the current Idle Token Timeout Value

getTokensTimeout is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

apiInstance.getTokensTimeout()
  .then((data) => {
    console.log(`getTokensTimeout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTokensTimeout');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**IdleTokenTimeout**

<a name="headTokensMe"></a>

# void headTokensMe()


HEAD /api/v2/tokens/me

Verify user token

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

apiInstance.headTokensMe()
  .then(() => {
    console.log('headTokensMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headTokensMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="putTokensTimeout"></a>

# IdleTokenTimeout putTokensTimeout(opts)


PUT /api/v2/tokens/timeout

Update or Enable/Disable the Idle Token Timeout

putTokensTimeout is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.putTokensTimeout(opts)
  .then((data) => {
    console.log(`putTokensTimeout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTokensTimeout');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**IdleTokenTimeout**

