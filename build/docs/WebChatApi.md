---
title: WebChatApi
---
# platformClient.WebChatApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWebchatDeployment**](WebChatApi.html#deleteWebchatDeployment) | **DELETE** /api/v2/webchat/deployments/{deploymentId} | Delete a WebChat deployment
[**deleteWebchatSettings**](WebChatApi.html#deleteWebchatSettings) | **DELETE** /api/v2/webchat/settings | Remove WebChat deployment settings
[**getWebchatDeployment**](WebChatApi.html#getWebchatDeployment) | **GET** /api/v2/webchat/deployments/{deploymentId} | Get a WebChat deployment
[**getWebchatDeployments**](WebChatApi.html#getWebchatDeployments) | **GET** /api/v2/webchat/deployments | List WebChat deployments
[**getWebchatSettings**](WebChatApi.html#getWebchatSettings) | **GET** /api/v2/webchat/settings | Get WebChat deployment settings
[**postWebchatDeployments**](WebChatApi.html#postWebchatDeployments) | **POST** /api/v2/webchat/deployments | Create WebChat deployment
[**putWebchatDeployment**](WebChatApi.html#putWebchatDeployment) | **PUT** /api/v2/webchat/deployments/{deploymentId} | Update a WebChat deployment
[**putWebchatSettings**](WebChatApi.html#putWebchatSettings) | **PUT** /api/v2/webchat/settings | Update WebChat deployment settings
{: class="table table-striped"}

<a name="deleteWebchatDeployment"></a>

# void deleteWebchatDeployment(deploymentId)

DELETE /api/v2/webchat/deployments/{deploymentId}

Delete a WebChat deployment



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();

var deploymentId = "deploymentId_example"; // String | Deployment Id

apiInstance.deleteWebchatDeployment(deploymentId)
  .then(function() {
    console.log('deleteWebchatDeployment returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteWebchatDeployment');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWebchatSettings"></a>

# void deleteWebchatSettings()

DELETE /api/v2/webchat/settings

Remove WebChat deployment settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();
apiInstance.deleteWebchatSettings()
  .then(function() {
    console.log('deleteWebchatSettings returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteWebchatSettings');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getWebchatDeployment"></a>

# WebChatDeployment getWebchatDeployment(deploymentId)

GET /api/v2/webchat/deployments/{deploymentId}

Get a WebChat deployment



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();

var deploymentId = "deploymentId_example"; // String | Deployment Id

apiInstance.getWebchatDeployment(deploymentId)
  .then(function(data) {
    console.log(`getWebchatDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWebchatDeployment');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |
{: class="table table-striped"}

### Return type

**WebChatDeployment**

<a name="getWebchatDeployments"></a>

# WebChatDeploymentEntityListing getWebchatDeployments()

GET /api/v2/webchat/deployments

List WebChat deployments



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();
apiInstance.getWebchatDeployments()
  .then(function(data) {
    console.log(`getWebchatDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWebchatDeployments');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**WebChatDeploymentEntityListing**

<a name="getWebchatSettings"></a>

# WebChatSettings getWebchatSettings()

GET /api/v2/webchat/settings

Get WebChat deployment settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();
apiInstance.getWebchatSettings()
  .then(function(data) {
    console.log(`getWebchatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWebchatSettings');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**WebChatSettings**

<a name="postWebchatDeployments"></a>

# WebChatDeployment postWebchatDeployments(body)

POST /api/v2/webchat/deployments

Create WebChat deployment



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();

var body = {}; // Object | Deployment

apiInstance.postWebchatDeployments(body)
  .then(function(data) {
    console.log(`postWebchatDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postWebchatDeployments');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Deployment |  |
{: class="table table-striped"}

### Return type

**WebChatDeployment**

<a name="putWebchatDeployment"></a>

# WebChatDeployment putWebchatDeployment(deploymentId, body)

PUT /api/v2/webchat/deployments/{deploymentId}

Update a WebChat deployment



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();

var deploymentId = "deploymentId_example"; // String | Deployment Id

var body = {}; // Object | Deployment

apiInstance.putWebchatDeployment(deploymentId, body)
  .then(function(data) {
    console.log(`putWebchatDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putWebchatDeployment');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |
 **body** | **Object** | Deployment |  |
{: class="table table-striped"}

### Return type

**WebChatDeployment**

<a name="putWebchatSettings"></a>

# WebChatSettings putWebchatSettings(body)

PUT /api/v2/webchat/settings

Update WebChat deployment settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WebChatApi();

var body = {}; // Object | webChatSettings

apiInstance.putWebchatSettings(body)
  .then(function(data) {
    console.log(`putWebchatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putWebchatSettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | webChatSettings |  |
{: class="table table-striped"}

### Return type

**WebChatSettings**

