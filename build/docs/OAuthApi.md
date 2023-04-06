---
title: OAuthApi
---
# platformClient.OAuthApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOauthClient**](OAuthApi.html#deleteOauthClient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth Client
[**getOauthAuthorization**](OAuthApi.html#getOauthAuthorization) | **GET** /api/v2/oauth/authorizations/{clientId} | Get a client that is authorized by the resource owner
[**getOauthAuthorizations**](OAuthApi.html#getOauthAuthorizations) | **GET** /api/v2/oauth/authorizations | List clients that have been authorized, requested, or revoked by the resource owner
[**getOauthClient**](OAuthApi.html#getOauthClient) | **GET** /api/v2/oauth/clients/{clientId} | Get OAuth Client
[**getOauthClientUsageQueryResult**](OAuthApi.html#getOauthClientUsageQueryResult) | **GET** /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId} | Get the results of a usage query
[**getOauthClientUsageSummary**](OAuthApi.html#getOauthClientUsageSummary) | **GET** /api/v2/oauth/clients/{clientId}/usage/summary | Get a summary of OAuth client API usage
[**getOauthClients**](OAuthApi.html#getOauthClients) | **GET** /api/v2/oauth/clients | The list of OAuth clients
[**getOauthScope**](OAuthApi.html#getOauthScope) | **GET** /api/v2/oauth/scopes/{scopeId} | An OAuth scope
[**getOauthScopes**](OAuthApi.html#getOauthScopes) | **GET** /api/v2/oauth/scopes | The list of OAuth scopes
[**postOauthClientSecret**](OAuthApi.html#postOauthClientSecret) | **POST** /api/v2/oauth/clients/{clientId}/secret | Regenerate Client Secret
[**postOauthClientUsageQuery**](OAuthApi.html#postOauthClientUsageQuery) | **POST** /api/v2/oauth/clients/{clientId}/usage/query | Query for OAuth client API usage
[**postOauthClients**](OAuthApi.html#postOauthClients) | **POST** /api/v2/oauth/clients | Create OAuth client
[**putOauthClient**](OAuthApi.html#putOauthClient) | **PUT** /api/v2/oauth/clients/{clientId} | Update OAuth Client
{: class="table table-striped"}

<a name="deleteOauthClient"></a>

# void deleteOauthClient(clientId)


DELETE /api/v2/oauth/clients/{clientId}

Delete OAuth Client

Requires ANY permissions:

* oauth:client:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID

apiInstance.deleteOauthClient(clientId)
  .then(() => {
    console.log('deleteOauthClient returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOauthClient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOauthAuthorization"></a>

# OAuthAuthorization getOauthAuthorization(clientId, opts)


GET /api/v2/oauth/authorizations/{clientId}

Get a client that is authorized by the resource owner

Requires ANY permissions:

* oauth:client:authorize

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | The ID of client
let opts = { 
  'acceptLanguage': "en-us" // String | The language in which to display the client descriptions.
};

apiInstance.getOauthAuthorization(clientId, opts)
  .then((data) => {
    console.log(`getOauthAuthorization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthAuthorization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | The ID of client |  |
 **acceptLanguage** | **String** | The language in which to display the client descriptions. | [optional] [default to en-us] |
{: class="table table-striped"}

### Return type

**OAuthAuthorization**

<a name="getOauthAuthorizations"></a>

# OAuthAuthorizationListing getOauthAuthorizations(opts)


GET /api/v2/oauth/authorizations

List clients that have been authorized, requested, or revoked by the resource owner

Requires ANY permissions:

* oauth:client:authorize

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let opts = { 
  'acceptLanguage': "en-us" // String | The language in which to display the client descriptions.
};

apiInstance.getOauthAuthorizations(opts)
  .then((data) => {
    console.log(`getOauthAuthorizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthAuthorizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **acceptLanguage** | **String** | The language in which to display the client descriptions. | [optional] [default to en-us] |
{: class="table table-striped"}

### Return type

**OAuthAuthorizationListing**

<a name="getOauthClient"></a>

# OAuthClient getOauthClient(clientId)


GET /api/v2/oauth/clients/{clientId}

Get OAuth Client

Requires ANY permissions:

* oauth:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID

apiInstance.getOauthClient(clientId)
  .then((data) => {
    console.log(`getOauthClient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

<a name="getOauthClientUsageQueryResult"></a>

# ApiUsageQueryResult getOauthClientUsageQueryResult(executionId, clientId)


GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}

Get the results of a usage query

Requires ANY permissions:

* oauth:client:view
* usage:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let executionId = "executionId_example"; // String | ID of the query execution
let clientId = "clientId_example"; // String | Client ID

apiInstance.getOauthClientUsageQueryResult(executionId, clientId)
  .then((data) => {
    console.log(`getOauthClientUsageQueryResult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClientUsageQueryResult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **executionId** | **String** | ID of the query execution |  |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**ApiUsageQueryResult**

<a name="getOauthClientUsageSummary"></a>

# UsageExecutionResult getOauthClientUsageSummary(clientId, opts)


GET /api/v2/oauth/clients/{clientId}/usage/summary

Get a summary of OAuth client API usage

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID
let opts = { 
  'days': "7" // String | Previous number of days to query
};

apiInstance.getOauthClientUsageSummary(clientId, opts)
  .then((data) => {
    console.log(`getOauthClientUsageSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClientUsageSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **days** | **String** | Previous number of days to query | [optional] [default to 7] |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

<a name="getOauthClients"></a>

# OAuthClientEntityListing getOauthClients()


GET /api/v2/oauth/clients

The list of OAuth clients

Requires ANY permissions:

* oauth:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

apiInstance.getOauthClients()
  .then((data) => {
    console.log(`getOauthClients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClients');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OAuthClientEntityListing**

<a name="getOauthScope"></a>

# OAuthScope getOauthScope(scopeId, opts)


GET /api/v2/oauth/scopes/{scopeId}

An OAuth scope

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let scopeId = "scopeId_example"; // String | Scope ID
let opts = { 
  'acceptLanguage': "en-us" // String | The language with which to display the scope description.
};

apiInstance.getOauthScope(scopeId, opts)
  .then((data) => {
    console.log(`getOauthScope success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthScope');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scopeId** | **String** | Scope ID |  |
 **acceptLanguage** | **String** | The language with which to display the scope description. | [optional] [default to en-us] |
{: class="table table-striped"}

### Return type

**OAuthScope**

<a name="getOauthScopes"></a>

# OAuthScopeListing getOauthScopes(opts)


GET /api/v2/oauth/scopes

The list of OAuth scopes

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let opts = { 
  'acceptLanguage': "en-us" // String | The language with which to display the scope descriptions.
};

apiInstance.getOauthScopes(opts)
  .then((data) => {
    console.log(`getOauthScopes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthScopes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **acceptLanguage** | **String** | The language with which to display the scope descriptions. | [optional] [default to en-us] |
{: class="table table-striped"}

### Return type

**OAuthScopeListing**

<a name="postOauthClientSecret"></a>

# OAuthClient postOauthClientSecret(clientId)


POST /api/v2/oauth/clients/{clientId}/secret

Regenerate Client Secret

This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.

Requires ANY permissions:

* oauth:client:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID

apiInstance.postOauthClientSecret(clientId)
  .then((data) => {
    console.log(`postOauthClientSecret success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOauthClientSecret');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

<a name="postOauthClientUsageQuery"></a>

# UsageExecutionResult postOauthClientUsageQuery(clientId, body)


POST /api/v2/oauth/clients/{clientId}/usage/query

Query for OAuth client API usage

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID
let body = {}; // Object | Query

apiInstance.postOauthClientUsageQuery(clientId, body)
  .then((data) => {
    console.log(`postOauthClientUsageQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOauthClientUsageQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **body** | **Object** | Query |  |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

<a name="postOauthClients"></a>

# OAuthClient postOauthClients(body)


POST /api/v2/oauth/clients

Create OAuth client

The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud.  The preferred authorizedGrantTypes is CODE which requires applications to send a client ID and client secret. This is typically a web server.  If the client is unable to secure the client secret then the TOKEN grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.  If a client is to be used outside of the context of a user then the CLIENT-CREDENTIALS grant may be used. In this case the client must be granted roles  via the roleIds field.

Requires ANY permissions:

* oauth:client:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let body = {}; // Object | Client

apiInstance.postOauthClients(body)
  .then((data) => {
    console.log(`postOauthClients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOauthClients');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Client |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

<a name="putOauthClient"></a>

# OAuthClient putOauthClient(clientId, body)


PUT /api/v2/oauth/clients/{clientId}

Update OAuth Client

Requires ANY permissions:

* oauth:client:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OAuthApi();

let clientId = "clientId_example"; // String | Client ID
let body = {}; // Object | Client

apiInstance.putOauthClient(clientId, body)
  .then((data) => {
    console.log(`putOauthClient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOauthClient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **body** | **Object** | Client |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

