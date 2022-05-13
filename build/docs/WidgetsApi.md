---
title: WidgetsApi
---
# platformClient.WidgetsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWidgetsDeployment**](WidgetsApi.html#deleteWidgetsDeployment) | **DELETE** /api/v2/widgets/deployments/{deploymentId} | Delete a Widget deployment
[**getWidgetsDeployment**](WidgetsApi.html#getWidgetsDeployment) | **GET** /api/v2/widgets/deployments/{deploymentId} | Get a Widget deployment
[**getWidgetsDeployments**](WidgetsApi.html#getWidgetsDeployments) | **GET** /api/v2/widgets/deployments | List Widget deployments
[**postWidgetsDeployments**](WidgetsApi.html#postWidgetsDeployments) | **POST** /api/v2/widgets/deployments | Create Widget deployment
[**putWidgetsDeployment**](WidgetsApi.html#putWidgetsDeployment) | **PUT** /api/v2/widgets/deployments/{deploymentId} | Update a Widget deployment
{: class="table table-striped"}

<a name="deleteWidgetsDeployment"></a>

# void deleteWidgetsDeployment(deploymentId)


DELETE /api/v2/widgets/deployments/{deploymentId}

Delete a Widget deployment

Requires ANY permissions:

* widgets:deployment:delete
* webchat:deployment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WidgetsApi();

let deploymentId = "deploymentId_example"; // String | Widget Config Id

apiInstance.deleteWidgetsDeployment(deploymentId)
  .then(() => {
    console.log('deleteWidgetsDeployment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWidgetsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Widget Config Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getWidgetsDeployment"></a>

# WidgetDeployment getWidgetsDeployment(deploymentId)


GET /api/v2/widgets/deployments/{deploymentId}

Get a Widget deployment

Requires ANY permissions:

* widgets:deployment:view
* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WidgetsApi();

let deploymentId = "deploymentId_example"; // String | Widget Config Id

apiInstance.getWidgetsDeployment(deploymentId)
  .then((data) => {
    console.log(`getWidgetsDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWidgetsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Widget Config Id |  |
{: class="table table-striped"}

### Return type

**WidgetDeployment**

<a name="getWidgetsDeployments"></a>

# WidgetDeploymentEntityListing getWidgetsDeployments()


GET /api/v2/widgets/deployments

List Widget deployments

Requires ANY permissions:

* widgets:deployment:view
* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WidgetsApi();

apiInstance.getWidgetsDeployments()
  .then((data) => {
    console.log(`getWidgetsDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWidgetsDeployments');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**WidgetDeploymentEntityListing**

<a name="postWidgetsDeployments"></a>

# WidgetDeployment postWidgetsDeployments(body)


POST /api/v2/widgets/deployments

Create Widget deployment

Requires ANY permissions:

* widgets:deployment:add
* webchat:deployment:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WidgetsApi();

let body = {}; // Object | Deployment

apiInstance.postWidgetsDeployments(body)
  .then((data) => {
    console.log(`postWidgetsDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWidgetsDeployments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Deployment |  |
{: class="table table-striped"}

### Return type

**WidgetDeployment**

<a name="putWidgetsDeployment"></a>

# WidgetDeployment putWidgetsDeployment(deploymentId, body)


PUT /api/v2/widgets/deployments/{deploymentId}

Update a Widget deployment

Requires ANY permissions:

* widgets:deployment:edit
* webchat:deployment:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WidgetsApi();

let deploymentId = "deploymentId_example"; // String | Widget Config Id
let body = {}; // Object | Deployment

apiInstance.putWidgetsDeployment(deploymentId, body)
  .then((data) => {
    console.log(`putWidgetsDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWidgetsDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Widget Config Id |  |
 **body** | **Object** | Deployment |  |
{: class="table table-striped"}

### Return type

**WidgetDeployment**

