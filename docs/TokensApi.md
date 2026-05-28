# TokensApi

# platformClient.TokensApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteToken**](TokensApi#deleteToken) | **DELETE** /api/v2/tokens/{userId} | Delete all auth tokens for the specified user.
[**deleteTokensMe**](TokensApi#deleteTokensMe) | **DELETE** /api/v2/tokens/me | Delete auth token used to make the request.
[**getTokensMe**](TokensApi#getTokensMe) | **GET** /api/v2/tokens/me | Fetch information about the current token
[**getTokensTimeout**](TokensApi#getTokensTimeout) | **GET** /api/v2/tokens/timeout | Get the current Idle Token Timeout Value
[**headTokensMe**](TokensApi#headTokensMe) | **HEAD** /api/v2/tokens/me | Verify user token
[**putTokensTimeout**](TokensApi#putTokensTimeout) | **PUT** /api/v2/tokens/timeout | Update or Enable/Disable the Idle Token Timeout



## deleteToken

> void deleteToken(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteToken(userId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteTokensMe

> void deleteTokensMe(opts)


DELETE /api/v2/tokens/me

Delete auth token used to make the request.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteTokensMe(opts)
  .then(() => {
    console.log('deleteTokensMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTokensMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getTokensMe

> TokenInfo getTokensMe(opts)


GET /api/v2/tokens/me

Fetch information about the current token

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

let opts = { 
  'preserveIdleTTL': true, // Boolean | preserveIdleTTL indicates whether the idle token timeout should be reset or preserved. If preserveIdleTTL is true, then TTL value is not reset. If unset or false, the value is reset.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TokenInfo**


## getTokensTimeout

> IdleTokenTimeout getTokensTimeout(opts)


GET /api/v2/tokens/timeout

Get the current Idle Token Timeout Value

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTokensTimeout(opts)
  .then((data) => {
    console.log(`getTokensTimeout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTokensTimeout');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IdleTokenTimeout**


## headTokensMe

> void headTokensMe(opts)


HEAD /api/v2/tokens/me

Verify user token

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.headTokensMe(opts)
  .then(() => {
    console.log('headTokensMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headTokensMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## putTokensTimeout

> IdleTokenTimeout putTokensTimeout(opts)


PUT /api/v2/tokens/timeout

Update or Enable/Disable the Idle Token Timeout

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TokensApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IdleTokenTimeout**


_purecloud-platform-client-v2@253.0.0_
