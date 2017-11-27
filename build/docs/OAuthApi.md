---
title: OAuthApi
---
# platformClient.OAuthApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOauthClient**](OAuthApi.html#deleteOauthClient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth Client
[**getOauthClient**](OAuthApi.html#getOauthClient) | **GET** /api/v2/oauth/clients/{clientId} | Get OAuth Client
[**getOauthClients**](OAuthApi.html#getOauthClients) | **GET** /api/v2/oauth/clients | The list of OAuth clients
[**postOauthClientSecret**](OAuthApi.html#postOauthClientSecret) | **POST** /api/v2/oauth/clients/{clientId}/secret | Regenerate Client Secret
[**postOauthClients**](OAuthApi.html#postOauthClients) | **POST** /api/v2/oauth/clients | Create OAuth client
[**putOauthClient**](OAuthApi.html#putOauthClient) | **PUT** /api/v2/oauth/clients/{clientId} | Update OAuth Client
{: class="table table-striped"}

<a name="deleteOauthClient"></a>

# void deleteOauthClient(clientId)

DELETE /api/v2/oauth/clients/{clientId}

Delete OAuth Client



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();

var clientId = "clientId_example"; // String | Client ID

apiInstance.deleteOauthClient(clientId)
  .then(function() {
    console.log('deleteOauthClient returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOauthClient');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOauthClient"></a>

# OAuthClient getOauthClient(clientId)

GET /api/v2/oauth/clients/{clientId}

Get OAuth Client



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();

var clientId = "clientId_example"; // String | Client ID

apiInstance.getOauthClient(clientId)
  .then(function(data) {
    console.log(`getOauthClient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOauthClient');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

<a name="getOauthClients"></a>

# OAuthClientEntityListing getOauthClients()

GET /api/v2/oauth/clients

The list of OAuth clients



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();
apiInstance.getOauthClients()
  .then(function(data) {
    console.log(`getOauthClients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOauthClients');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OAuthClientEntityListing**

<a name="postOauthClientSecret"></a>

# OAuthClient postOauthClientSecret(clientId)

POST /api/v2/oauth/clients/{clientId}/secret

Regenerate Client Secret

This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();

var clientId = "clientId_example"; // String | Client ID

apiInstance.postOauthClientSecret(clientId)
  .then(function(data) {
    console.log(`postOauthClientSecret success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOauthClientSecret');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

<a name="postOauthClients"></a>

# OAuthClient postOauthClients(body)

POST /api/v2/oauth/clients

Create OAuth client

The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud.  The preferred authorizedGrantTypes is &#39;CODE&#39; which requires applications to send a client ID and client secret. This is typically a web server.  If the client is unable to secure the client secret then the &#39;TOKEN&#39; grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.  If a client is to be used outside of the context of a user then the &#39;CLIENT-CREDENTIALS&#39; grant may be used. In this case the client must be granted roles  via the &#39;roleIds&#39; field.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();

var body = {}; // Object | Client

apiInstance.postOauthClients(body)
  .then(function(data) {
    console.log(`postOauthClients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOauthClients');
    console.error(err);
  });

~~~

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



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OAuthApi();

var clientId = "clientId_example"; // String | Client ID

var body = {}; // Object | Client

apiInstance.putOauthClient(clientId, body)
  .then(function(data) {
    console.log(`putOauthClient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOauthClient');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **body** | **Object** | Client |  |
{: class="table table-striped"}

### Return type

**OAuthClient**

