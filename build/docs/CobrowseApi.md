---
title: CobrowseApi
---
# platformClient.CobrowseApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCobrowseDeployment**](CobrowseApi.html#deleteCobrowseDeployment) | **DELETE** /api/v2/cobrowse/deployments/{deploymentId} | Deletes a cobrowse deployment by id
[**getCobrowseDeployment**](CobrowseApi.html#getCobrowseDeployment) | **GET** /api/v2/cobrowse/deployments/{deploymentId} | Retrieves a cobrowse deployment by id
[**getCobrowseDeployments**](CobrowseApi.html#getCobrowseDeployments) | **GET** /api/v2/cobrowse/deployments | Retrieves a list cobrowse deployments within the org
[**postCobrowseDeployment**](CobrowseApi.html#postCobrowseDeployment) | **POST** /api/v2/cobrowse/deployments/{deploymentId} | Updates a cobrowse deployment by id
[**postCobrowseDeployments**](CobrowseApi.html#postCobrowseDeployments) | **POST** /api/v2/cobrowse/deployments | Creates a new cobrowse deployment
[**postCobrowseSessionCobrowseSessionIdActivationfailure**](CobrowseApi.html#postCobrowseSessionCobrowseSessionIdActivationfailure) | **POST** /api/v2/cobrowse/session/{cobrowseSessionId}/activationfailure | Notifies clients that a cobrowse session has failed to activate
{: class="table table-striped"}

<a name="deleteCobrowseDeployment"></a>

# **Object** deleteCobrowseDeployment(deploymentId)


DELETE /api/v2/cobrowse/deployments/{deploymentId}

Deletes a cobrowse deployment by id

Requires ANY permissions:

* cobrowse:deployment:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

let deploymentId = "deploymentId_example"; // String | Id of the deployment

apiInstance.deleteCobrowseDeployment(deploymentId)
  .then((data) => {
    console.log(`deleteCobrowseDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCobrowseDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Id of the deployment |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getCobrowseDeployment"></a>

# Deployment getCobrowseDeployment(deploymentId)


GET /api/v2/cobrowse/deployments/{deploymentId}

Retrieves a cobrowse deployment by id

Requires ANY permissions:

* cobrowse:deployment:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

let deploymentId = "deploymentId_example"; // String | Id of the deployment

apiInstance.getCobrowseDeployment(deploymentId)
  .then((data) => {
    console.log(`getCobrowseDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCobrowseDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Id of the deployment |  |
{: class="table table-striped"}

### Return type

**Deployment**

<a name="getCobrowseDeployments"></a>

# DeploymentEntityListing getCobrowseDeployments()


GET /api/v2/cobrowse/deployments

Retrieves a list cobrowse deployments within the org

Requires ANY permissions:

* cobrowse:deployment:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

apiInstance.getCobrowseDeployments()
  .then((data) => {
    console.log(`getCobrowseDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCobrowseDeployments');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DeploymentEntityListing**

<a name="postCobrowseDeployment"></a>

# Deployment postCobrowseDeployment(deploymentId, opts)


POST /api/v2/cobrowse/deployments/{deploymentId}

Updates a cobrowse deployment by id

Requires ANY permissions:

* cobrowse:deployment:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

let deploymentId = "deploymentId_example"; // String | Id of the deployment
let opts = { 
  'body': {} // Object | The hosts to add to the deployment
};

apiInstance.postCobrowseDeployment(deploymentId, opts)
  .then((data) => {
    console.log(`postCobrowseDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCobrowseDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Id of the deployment |  |
 **body** | **Object** | The hosts to add to the deployment | [optional]  |
{: class="table table-striped"}

### Return type

**Deployment**

<a name="postCobrowseDeployments"></a>

# Deployment postCobrowseDeployments(opts)


POST /api/v2/cobrowse/deployments

Creates a new cobrowse deployment

Requires ANY permissions:

* cobrowse:deployment:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

let opts = { 
  'body': {} // Object | The hosts to add to the deployment
};

apiInstance.postCobrowseDeployments(opts)
  .then((data) => {
    console.log(`postCobrowseDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCobrowseDeployments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The hosts to add to the deployment | [optional]  |
{: class="table table-striped"}

### Return type

**Deployment**

<a name="postCobrowseSessionCobrowseSessionIdActivationfailure"></a>

# void postCobrowseSessionCobrowseSessionIdActivationfailure(cobrowseSessionId, opts)


POST /api/v2/cobrowse/session/{cobrowseSessionId}/activationfailure

Notifies clients that a cobrowse session has failed to activate

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CobrowseApi();

let cobrowseSessionId = "cobrowseSessionId_example"; // String | Id of the cobrowse session
let opts = { 
  'body': {} // Object | The reason for why the cobrowse session was unable to be activated
};

apiInstance.postCobrowseSessionCobrowseSessionIdActivationfailure(cobrowseSessionId, opts)
  .then(() => {
    console.log('postCobrowseSessionCobrowseSessionIdActivationfailure returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postCobrowseSessionCobrowseSessionIdActivationfailure');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **cobrowseSessionId** | **String** | Id of the cobrowse session |  |
 **body** | **Object** | The reason for why the cobrowse session was unable to be activated | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

