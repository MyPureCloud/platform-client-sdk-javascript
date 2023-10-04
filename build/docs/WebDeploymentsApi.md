---
title: WebDeploymentsApi
---
# platformClient.WebDeploymentsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWebdeploymentsConfiguration**](WebDeploymentsApi.html#deleteWebdeploymentsConfiguration) | **DELETE** /api/v2/webdeployments/configurations/{configurationId} | Delete all versions of a configuration
[**deleteWebdeploymentsDeployment**](WebDeploymentsApi.html#deleteWebdeploymentsDeployment) | **DELETE** /api/v2/webdeployments/deployments/{deploymentId} | Delete a deployment
[**deleteWebdeploymentsDeploymentCobrowseSessionId**](WebDeploymentsApi.html#deleteWebdeploymentsDeploymentCobrowseSessionId) | **DELETE** /api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId} | Deletes a cobrowse session
[**deleteWebdeploymentsTokenRevoke**](WebDeploymentsApi.html#deleteWebdeploymentsTokenRevoke) | **DELETE** /api/v2/webdeployments/token/revoke | Invalidate JWT
[**getWebdeploymentsConfigurationVersion**](WebDeploymentsApi.html#getWebdeploymentsConfigurationVersion) | **GET** /api/v2/webdeployments/configurations/{configurationId}/versions/{versionId} | Get a configuration version
[**getWebdeploymentsConfigurationVersions**](WebDeploymentsApi.html#getWebdeploymentsConfigurationVersions) | **GET** /api/v2/webdeployments/configurations/{configurationId}/versions | Get the versions of a configuration
[**getWebdeploymentsConfigurationVersionsDraft**](WebDeploymentsApi.html#getWebdeploymentsConfigurationVersionsDraft) | **GET** /api/v2/webdeployments/configurations/{configurationId}/versions/draft | Get the configuration draft
[**getWebdeploymentsConfigurations**](WebDeploymentsApi.html#getWebdeploymentsConfigurations) | **GET** /api/v2/webdeployments/configurations | View configuration drafts
[**getWebdeploymentsDeployment**](WebDeploymentsApi.html#getWebdeploymentsDeployment) | **GET** /api/v2/webdeployments/deployments/{deploymentId} | Get a deployment
[**getWebdeploymentsDeploymentCobrowseSessionId**](WebDeploymentsApi.html#getWebdeploymentsDeploymentCobrowseSessionId) | **GET** /api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId} | Retrieves a cobrowse session
[**getWebdeploymentsDeploymentConfigurations**](WebDeploymentsApi.html#getWebdeploymentsDeploymentConfigurations) | **GET** /api/v2/webdeployments/deployments/{deploymentId}/configurations | Get active configuration for a given deployment
[**getWebdeploymentsDeployments**](WebDeploymentsApi.html#getWebdeploymentsDeployments) | **GET** /api/v2/webdeployments/deployments | Get deployments
[**postWebdeploymentsConfigurationVersionsDraftPublish**](WebDeploymentsApi.html#postWebdeploymentsConfigurationVersionsDraftPublish) | **POST** /api/v2/webdeployments/configurations/{configurationId}/versions/draft/publish | Publish the configuration draft and create a new version
[**postWebdeploymentsConfigurations**](WebDeploymentsApi.html#postWebdeploymentsConfigurations) | **POST** /api/v2/webdeployments/configurations | Create a configuration draft
[**postWebdeploymentsDeployments**](WebDeploymentsApi.html#postWebdeploymentsDeployments) | **POST** /api/v2/webdeployments/deployments | Create a deployment
[**postWebdeploymentsTokenOauthcodegrantjwtexchange**](WebDeploymentsApi.html#postWebdeploymentsTokenOauthcodegrantjwtexchange) | **POST** /api/v2/webdeployments/token/oauthcodegrantjwtexchange | Exchange an oAuth code (obtained using the Authorization Code Flow) for a JWT that can be used by webdeployments.
[**postWebdeploymentsTokenRefresh**](WebDeploymentsApi.html#postWebdeploymentsTokenRefresh) | **POST** /api/v2/webdeployments/token/refresh | Refresh a JWT.
[**putWebdeploymentsConfigurationVersionsDraft**](WebDeploymentsApi.html#putWebdeploymentsConfigurationVersionsDraft) | **PUT** /api/v2/webdeployments/configurations/{configurationId}/versions/draft | Update the configuration draft
[**putWebdeploymentsDeployment**](WebDeploymentsApi.html#putWebdeploymentsDeployment) | **PUT** /api/v2/webdeployments/deployments/{deploymentId} | Update a deployment
{: class="table table-striped"}

<a name="deleteWebdeploymentsConfiguration"></a>

# void deleteWebdeploymentsConfiguration(configurationId)


DELETE /api/v2/webdeployments/configurations/{configurationId}

Delete all versions of a configuration

Requires ALL permissions:

* webDeployments:configuration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID

apiInstance.deleteWebdeploymentsConfiguration(configurationId)
  .then(() => {
    console.log('deleteWebdeploymentsConfiguration returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebdeploymentsConfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWebdeploymentsDeployment"></a>

# void deleteWebdeploymentsDeployment(deploymentId)


DELETE /api/v2/webdeployments/deployments/{deploymentId}

Delete a deployment

Requires ALL permissions:

* webDeployments:deployment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | The deployment ID

apiInstance.deleteWebdeploymentsDeployment(deploymentId)
  .then(() => {
    console.log('deleteWebdeploymentsDeployment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebdeploymentsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The deployment ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWebdeploymentsDeploymentCobrowseSessionId"></a>

# **Object** deleteWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId)


DELETE /api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId}

Deletes a cobrowse session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | WebMessaging deployment ID
let sessionId = "sessionId_example"; // String | Cobrowse session id or join code

apiInstance.deleteWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId)
  .then((data) => {
    console.log(`deleteWebdeploymentsDeploymentCobrowseSessionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebdeploymentsDeploymentCobrowseSessionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | WebMessaging deployment ID |  |
 **sessionId** | **String** | Cobrowse session id or join code |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteWebdeploymentsTokenRevoke"></a>

# void deleteWebdeploymentsTokenRevoke(opts)


DELETE /api/v2/webdeployments/token/revoke

Invalidate JWT

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebDeploymentsApi();

let opts = { 
  'xJourneySessionId': "xJourneySessionId_example", // String | The Customer's journey sessionId.
  'xJourneySessionType': "xJourneySessionType_example" // String | The Customer's journey session type.
};

apiInstance.deleteWebdeploymentsTokenRevoke(opts)
  .then(() => {
    console.log('deleteWebdeploymentsTokenRevoke returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebdeploymentsTokenRevoke');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **xJourneySessionId** | **String** | The Customer's journey sessionId. | [optional]  |
 **xJourneySessionType** | **String** | The Customer's journey session type. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getWebdeploymentsConfigurationVersion"></a>

# WebDeploymentConfigurationVersion getWebdeploymentsConfigurationVersion(configurationId, versionId)


GET /api/v2/webdeployments/configurations/{configurationId}/versions/{versionId}

Get a configuration version

Requires ALL permissions:

* webDeployments:configuration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID
let versionId = "versionId_example"; // String | The version of the configuration to get

apiInstance.getWebdeploymentsConfigurationVersion(configurationId, versionId)
  .then((data) => {
    console.log(`getWebdeploymentsConfigurationVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsConfigurationVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
 **versionId** | **String** | The version of the configuration to get |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersion**

<a name="getWebdeploymentsConfigurationVersions"></a>

# WebDeploymentConfigurationVersionEntityListing getWebdeploymentsConfigurationVersions(configurationId)


GET /api/v2/webdeployments/configurations/{configurationId}/versions

Get the versions of a configuration

This returns the 50 most recent versions for this configuration

Requires ALL permissions:

* webDeployments:configuration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID

apiInstance.getWebdeploymentsConfigurationVersions(configurationId)
  .then((data) => {
    console.log(`getWebdeploymentsConfigurationVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsConfigurationVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersionEntityListing**

<a name="getWebdeploymentsConfigurationVersionsDraft"></a>

# WebDeploymentConfigurationVersion getWebdeploymentsConfigurationVersionsDraft(configurationId)


GET /api/v2/webdeployments/configurations/{configurationId}/versions/draft

Get the configuration draft

Requires ALL permissions:

* webDeployments:configuration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID

apiInstance.getWebdeploymentsConfigurationVersionsDraft(configurationId)
  .then((data) => {
    console.log(`getWebdeploymentsConfigurationVersionsDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsConfigurationVersionsDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersion**

<a name="getWebdeploymentsConfigurations"></a>

# WebDeploymentConfigurationVersionEntityListing getWebdeploymentsConfigurations(opts)


GET /api/v2/webdeployments/configurations

View configuration drafts

Requires ALL permissions:

* webDeployments:configuration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let opts = { 
  'showOnlyPublished': false // Boolean | Get only configuration drafts with published versions
};

apiInstance.getWebdeploymentsConfigurations(opts)
  .then((data) => {
    console.log(`getWebdeploymentsConfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsConfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **showOnlyPublished** | **Boolean** | Get only configuration drafts with published versions | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersionEntityListing**

<a name="getWebdeploymentsDeployment"></a>

# WebDeployment getWebdeploymentsDeployment(deploymentId, opts)


GET /api/v2/webdeployments/deployments/{deploymentId}

Get a deployment

Requires ALL permissions:

* webDeployments:deployment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | The deployment ID
let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected. 
};

apiInstance.getWebdeploymentsDeployment(deploymentId, opts)
  .then((data) => {
    console.log(`getWebdeploymentsDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The deployment ID |  |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected.  | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**WebDeployment**

<a name="getWebdeploymentsDeploymentCobrowseSessionId"></a>

# CobrowseWebMessagingSession getWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId)


GET /api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId}

Retrieves a cobrowse session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | WebMessaging deployment ID
let sessionId = "sessionId_example"; // String | Cobrowse session id or join code

apiInstance.getWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId)
  .then((data) => {
    console.log(`getWebdeploymentsDeploymentCobrowseSessionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsDeploymentCobrowseSessionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | WebMessaging deployment ID |  |
 **sessionId** | **String** | Cobrowse session id or join code |  |
{: class="table table-striped"}

### Return type

**CobrowseWebMessagingSession**

<a name="getWebdeploymentsDeploymentConfigurations"></a>

# WebDeploymentActiveConfigurationOnDeployment getWebdeploymentsDeploymentConfigurations(deploymentId, opts)


GET /api/v2/webdeployments/deployments/{deploymentId}/configurations

Get active configuration for a given deployment

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | The deployment ID
let opts = { 
  'type': "type_example", // String | Get active configuration on a deployment
  'expand': ["expand_example"] // [String] | Expand instructions for the return value
};

apiInstance.getWebdeploymentsDeploymentConfigurations(deploymentId, opts)
  .then((data) => {
    console.log(`getWebdeploymentsDeploymentConfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsDeploymentConfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The deployment ID |  |
 **type** | **String** | Get active configuration on a deployment | [optional]  |
 **expand** | **[String]** | Expand instructions for the return value | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**WebDeploymentActiveConfigurationOnDeployment**

<a name="getWebdeploymentsDeployments"></a>

# ExpandableWebDeploymentEntityListing getWebdeploymentsDeployments(opts)


GET /api/v2/webdeployments/deployments

Get deployments

Requires ALL permissions:

* webDeployments:deployment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let opts = { 
  'expand': ["expand_example"] // [String] | The specified entity attributes will be filled. Comma separated values expected.
};

apiInstance.getWebdeploymentsDeployments(opts)
  .then((data) => {
    console.log(`getWebdeploymentsDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebdeploymentsDeployments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | The specified entity attributes will be filled. Comma separated values expected. | [optional] <br />**Values**: Configuration, SupportedContent |
{: class="table table-striped"}

### Return type

**ExpandableWebDeploymentEntityListing**

<a name="postWebdeploymentsConfigurationVersionsDraftPublish"></a>

# WebDeploymentConfigurationVersion postWebdeploymentsConfigurationVersionsDraftPublish(configurationId)


POST /api/v2/webdeployments/configurations/{configurationId}/versions/draft/publish

Publish the configuration draft and create a new version

Requires ALL permissions:

* webDeployments:configuration:edit
* webDeployments:configuration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID

apiInstance.postWebdeploymentsConfigurationVersionsDraftPublish(configurationId)
  .then((data) => {
    console.log(`postWebdeploymentsConfigurationVersionsDraftPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebdeploymentsConfigurationVersionsDraftPublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersion**

<a name="postWebdeploymentsConfigurations"></a>

# WebDeploymentConfigurationVersion postWebdeploymentsConfigurations(configurationVersion)


POST /api/v2/webdeployments/configurations

Create a configuration draft

Requires ALL permissions:

* webDeployments:configuration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationVersion = {}; // Object | 

apiInstance.postWebdeploymentsConfigurations(configurationVersion)
  .then((data) => {
    console.log(`postWebdeploymentsConfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebdeploymentsConfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationVersion** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersion**

<a name="postWebdeploymentsDeployments"></a>

# WebDeployment postWebdeploymentsDeployments(deployment)


POST /api/v2/webdeployments/deployments

Create a deployment

Requires ALL permissions:

* webDeployments:deployment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let deployment = {}; // Object | 

apiInstance.postWebdeploymentsDeployments(deployment)
  .then((data) => {
    console.log(`postWebdeploymentsDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebdeploymentsDeployments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deployment** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**WebDeployment**

<a name="postWebdeploymentsTokenOauthcodegrantjwtexchange"></a>

# WebDeploymentsAuthorizationResponse postWebdeploymentsTokenOauthcodegrantjwtexchange(body)


POST /api/v2/webdeployments/token/oauthcodegrantjwtexchange

Exchange an oAuth code (obtained using the Authorization Code Flow) for a JWT that can be used by webdeployments.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebDeploymentsApi();

let body = {}; // Object | webDeploymentsOAuthExchangeRequest

apiInstance.postWebdeploymentsTokenOauthcodegrantjwtexchange(body)
  .then((data) => {
    console.log(`postWebdeploymentsTokenOauthcodegrantjwtexchange success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebdeploymentsTokenOauthcodegrantjwtexchange');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | webDeploymentsOAuthExchangeRequest |  |
{: class="table table-striped"}

### Return type

**WebDeploymentsAuthorizationResponse**

<a name="postWebdeploymentsTokenRefresh"></a>

# SignedData postWebdeploymentsTokenRefresh(opts)


POST /api/v2/webdeployments/token/refresh

Refresh a JWT.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebDeploymentsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postWebdeploymentsTokenRefresh(opts)
  .then((data) => {
    console.log(`postWebdeploymentsTokenRefresh success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebdeploymentsTokenRefresh');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SignedData**

<a name="putWebdeploymentsConfigurationVersionsDraft"></a>

# WebDeploymentConfigurationVersion putWebdeploymentsConfigurationVersionsDraft(configurationId, configurationVersion)


PUT /api/v2/webdeployments/configurations/{configurationId}/versions/draft

Update the configuration draft

Requires ALL permissions:

* webDeployments:configuration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let configurationId = "configurationId_example"; // String | The configuration version ID
let configurationVersion = {}; // Object | 

apiInstance.putWebdeploymentsConfigurationVersionsDraft(configurationId, configurationVersion)
  .then((data) => {
    console.log(`putWebdeploymentsConfigurationVersionsDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWebdeploymentsConfigurationVersionsDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The configuration version ID |  |
 **configurationVersion** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**WebDeploymentConfigurationVersion**

<a name="putWebdeploymentsDeployment"></a>

# WebDeployment putWebdeploymentsDeployment(deploymentId, deployment)


PUT /api/v2/webdeployments/deployments/{deploymentId}

Update a deployment

Requires ALL permissions:

* webDeployments:deployment:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebDeploymentsApi();

let deploymentId = "deploymentId_example"; // String | The deployment ID
let deployment = {}; // Object | 

apiInstance.putWebdeploymentsDeployment(deploymentId, deployment)
  .then((data) => {
    console.log(`putWebdeploymentsDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWebdeploymentsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The deployment ID |  |
 **deployment** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**WebDeployment**

