# WidgetsApi

# platformClient.WidgetsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWidgetsDeployment**](WidgetsApi#deleteWidgetsDeployment) | **DELETE** /api/v2/widgets/deployments/{deploymentId} | Delete a Widget deployment
[**getWidgetsDeployment**](WidgetsApi#getWidgetsDeployment) | **GET** /api/v2/widgets/deployments/{deploymentId} | Get a Widget deployment
[**getWidgetsDeployments**](WidgetsApi#getWidgetsDeployments) | **GET** /api/v2/widgets/deployments | List Widget deployments
[**postWidgetsDeployments**](WidgetsApi#postWidgetsDeployments) | **POST** /api/v2/widgets/deployments | Create Widget deployment
[**putWidgetsDeployment**](WidgetsApi#putWidgetsDeployment) | **PUT** /api/v2/widgets/deployments/{deploymentId} | Update a Widget deployment



## deleteWidgetsDeployment

> void deleteWidgetsDeployment(deploymentId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/widgets/deployments/{deploymentId}

Delete a Widget deployment

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 

Requires ANY permissions:

* widgets:deployment:delete
* webchat:deployment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getWidgetsDeployment

> WidgetDeployment getWidgetsDeployment(deploymentId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/widgets/deployments/{deploymentId}

Get a Widget deployment

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 

Requires ANY permissions:

* widgets:deployment:view
* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WidgetDeployment**


## getWidgetsDeployments

> WidgetDeploymentEntityListing getWidgetsDeployments()

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/widgets/deployments

List Widget deployments

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 

Requires ANY permissions:

* widgets:deployment:view
* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## postWidgetsDeployments

> WidgetDeployment postWidgetsDeployments(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/widgets/deployments

Create Widget deployment

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 

Requires ANY permissions:

* widgets:deployment:add
* webchat:deployment:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WidgetDeployment**


## putWidgetsDeployment

> WidgetDeployment putWidgetsDeployment(deploymentId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/widgets/deployments/{deploymentId}

Update a Widget deployment

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 

Requires ANY permissions:

* widgets:deployment:edit
* webchat:deployment:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WidgetDeployment**


_purecloud-platform-client-v2@229.1.0_
