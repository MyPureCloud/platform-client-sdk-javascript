---
title: UtilitiesApi
---
# platformClient.UtilitiesApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAppsUserLogout**](UtilitiesApi.html#deleteAppsUserLogout) | **DELETE** /api/v2/apps/users/{userId}/logout | Force-logout specified user.
[**deleteSettings**](UtilitiesApi.html#deleteSettings) | **DELETE** /api/v2/settings | Delete settings for the current user
[**getAppsDownload**](UtilitiesApi.html#getAppsDownload) | **GET** /api/v2/apps/downloads/{downloadId} | Redirect to signed download url
[**getAppsGlobalfeaturetoggles**](UtilitiesApi.html#getAppsGlobalfeaturetoggles) | **GET** /api/v2/apps/globalfeaturetoggles | Get whether or not a feature toggle is globally enabled
[**getAppsLegacyImage**](UtilitiesApi.html#getAppsLegacyImage) | **GET** /api/v2/apps/legacy/images/{imageId} | Gets a user image
[**getAppsLegacyImagesHashImageHashId**](UtilitiesApi.html#getAppsLegacyImagesHashImageHashId) | **GET** /api/v2/apps/legacy/images/hash/{imageHashId} | Gets a user image by hash
[**getAppsLegacySession**](UtilitiesApi.html#getAppsLegacySession) | **GET** /api/v2/apps/legacy/session | Return a legacy directory session
[**getAppsPermissionbundles**](UtilitiesApi.html#getAppsPermissionbundles) | **GET** /api/v2/apps/permissionbundles | Returns list of permission bundles with values for this organization.
[**getDate**](UtilitiesApi.html#getDate) | **GET** /api/v2/date | Get the current system date/time
[**getFeaturetoggles**](UtilitiesApi.html#getFeaturetoggles) | **GET** /api/v2/featuretoggles | Get the features that are enabled or disabled for this user
[**getHealthCheck**](UtilitiesApi.html#getHealthCheck) | **GET** /api/v2/health/check | Get health.
[**getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service**](UtilitiesApi.html#getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service) | **GET** /api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName} | Health check for backend service
[**getIpranges**](UtilitiesApi.html#getIpranges) | **GET** /api/v2/ipranges | Get public ip address ranges for Genesys Cloud
[**getSettings**](UtilitiesApi.html#getSettings) | **GET** /api/v2/settings | Get settings for the current user
[**getTimezones**](UtilitiesApi.html#getTimezones) | **GET** /api/v2/timezones | Get time zones list
[**headHealthCheck**](UtilitiesApi.html#headHealthCheck) | **HEAD** /api/v2/health/check | Get health.
[**headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service**](UtilitiesApi.html#headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service) | **HEAD** /api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName} | Health check for backend service
[**postAppsLegacyImageLinkEntityTypeEntityIdTargetField**](UtilitiesApi.html#postAppsLegacyImageLinkEntityTypeEntityIdTargetField) | **POST** /api/v2/apps/legacy/images/{imageId}/link/{entityType}/{entityId}/{targetField} | Links a previously uploaded image to an entity
[**postAppsLegacyImages**](UtilitiesApi.html#postAppsLegacyImages) | **POST** /api/v2/apps/legacy/images | Uploads a user image and returns the image url
[**postAppsLegacySession**](UtilitiesApi.html#postAppsLegacySession) | **POST** /api/v2/apps/legacy/session | Update preferred language and return the legacy directory session
[**postAppsSession**](UtilitiesApi.html#postAppsSession) | **POST** /api/v2/apps/session | Create apps session cookie named PureCloud-Apps-Session
[**postCertificateDetails**](UtilitiesApi.html#postCertificateDetails) | **POST** /api/v2/certificate/details | Returns the information about an X509 PEM encoded certificate or certificate chain.
[**postDiagnostics**](UtilitiesApi.html#postDiagnostics) | **POST** /api/v2/diagnostics | Send an email with diagnostic information.
[**postDiagnosticsNewrelicInsights**](UtilitiesApi.html#postDiagnosticsNewrelicInsights) | **POST** /api/v2/diagnostics/newrelic/insights | Proxy NewRelic Insights events
[**postDiagnosticsNewrelicInsightsBackgroundassistant**](UtilitiesApi.html#postDiagnosticsNewrelicInsightsBackgroundassistant) | **POST** /api/v2/diagnostics/newrelic/insights/backgroundassistant | Proxy NewRelic Insights events for background assistant using screen recording jwt token
[**postDiagnosticsSupport**](UtilitiesApi.html#postDiagnosticsSupport) | **POST** /api/v2/diagnostics/support | Contact support with diagnostic information.
[**postDiagnosticsTrace**](UtilitiesApi.html#postDiagnosticsTrace) | **POST** /api/v2/diagnostics/trace | Trace messages
[**postDiagnosticsTraceBackgroundassistant**](UtilitiesApi.html#postDiagnosticsTraceBackgroundassistant) | **POST** /api/v2/diagnostics/trace/backgroundassistant | Trace messages for background assistant using screen recording jwt token
[**putSettings**](UtilitiesApi.html#putSettings) | **PUT** /api/v2/settings | Update settings for the current user
{: class="table table-striped"}

<a name="deleteAppsUserLogout"></a>

# void deleteAppsUserLogout(userId)


DELETE /api/v2/apps/users/{userId}/logout

Force-logout specified user.

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

let apiInstance = new platformClient.UtilitiesApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteAppsUserLogout(userId)
  .then(() => {
    console.log('deleteAppsUserLogout returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAppsUserLogout');
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

<a name="deleteSettings"></a>

# void deleteSettings()


DELETE /api/v2/settings

Delete settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.deleteSettings()
  .then(() => {
    console.log('deleteSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="getAppsDownload"></a>

# void getAppsDownload(downloadId, opts)


GET /api/v2/apps/downloads/{downloadId}

Redirect to signed download url

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let downloadId = "downloadId_example"; // String | Download ID
let opts = { 
  'contentDisposition': "attachment" // String | Content Disposition
};

apiInstance.getAppsDownload(downloadId, opts)
  .then(() => {
    console.log('getAppsDownload returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsDownload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **downloadId** | **String** | Download ID |  |
 **contentDisposition** | **String** | Content Disposition | [optional] [default to attachment]<br />**Values**: ATTACHMENT, INLINE, NONE |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAppsGlobalfeaturetoggles"></a>

# **{&#39;String&#39;: &#39;Boolean&#39;}** getAppsGlobalfeaturetoggles(feature)


GET /api/v2/apps/globalfeaturetoggles

Get whether or not a feature toggle is globally enabled

In order to use this resource, feature toggles must be added to the set declared in this resource. Otherwise, theyll always return false.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

let feature = ["feature_example"]; // [String] | The features to query

apiInstance.getAppsGlobalfeaturetoggles(feature)
  .then((data) => {
    console.log(`getAppsGlobalfeaturetoggles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsGlobalfeaturetoggles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **feature** | **[String]** | The features to query |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: &#39;Boolean&#39;}**

<a name="getAppsLegacyImage"></a>

# **Object** getAppsLegacyImage(imageId)


GET /api/v2/apps/legacy/images/{imageId}

Gets a user image

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let imageId = "imageId_example"; // String | The image id

apiInstance.getAppsLegacyImage(imageId)
  .then((data) => {
    console.log(`getAppsLegacyImage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsLegacyImage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **imageId** | **String** | The image id |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getAppsLegacyImagesHashImageHashId"></a>

# **Object** getAppsLegacyImagesHashImageHashId(imageHashId)


GET /api/v2/apps/legacy/images/hash/{imageHashId}

Gets a user image by hash

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let imageHashId = "imageHashId_example"; // String | The hash id associated with the image

apiInstance.getAppsLegacyImagesHashImageHashId(imageHashId)
  .then((data) => {
    console.log(`getAppsLegacyImagesHashImageHashId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsLegacyImagesHashImageHashId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **imageHashId** | **String** | The hash id associated with the image |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getAppsLegacySession"></a>

# DirectorySessionResponse getAppsLegacySession()


GET /api/v2/apps/legacy/session

Return a legacy directory session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getAppsLegacySession()
  .then((data) => {
    console.log(`getAppsLegacySession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsLegacySession');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DirectorySessionResponse**

<a name="getAppsPermissionbundles"></a>

# PermissionBundleListing getAppsPermissionbundles()


GET /api/v2/apps/permissionbundles

Returns list of permission bundles with values for this organization.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getAppsPermissionbundles()
  .then((data) => {
    console.log(`getAppsPermissionbundles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAppsPermissionbundles');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PermissionBundleListing**

<a name="getDate"></a>

# ServerDate getDate()


GET /api/v2/date

Get the current system date/time

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getDate()
  .then((data) => {
    console.log(`getDate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDate');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ServerDate**

<a name="getFeaturetoggles"></a>

# **{&#39;String&#39;: &#39;Boolean&#39;}** getFeaturetoggles(feature)


GET /api/v2/featuretoggles

Get the features that are enabled or disabled for this user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let feature = ["feature_example"]; // [String] | The features to query.

apiInstance.getFeaturetoggles(feature)
  .then((data) => {
    console.log(`getFeaturetoggles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFeaturetoggles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **feature** | **[String]** | The features to query. |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: &#39;Boolean&#39;}**

<a name="getHealthCheck"></a>

# HealthCheckInfo getHealthCheck()


GET /api/v2/health/check

Get health.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getHealthCheck()
  .then((data) => {
    console.log(`getHealthCheck success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getHealthCheck');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**HealthCheckInfo**

<a name="getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service"></a>

# HealthCheckInfo getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName)


GET /api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}

Health check for backend service

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

let serviceName = "serviceName_example"; // String | serviceName

apiInstance.getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName)
  .then((data) => {
    console.log(`getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **serviceName** | **String** | serviceName |  |
{: class="table table-striped"}

### Return type

**HealthCheckInfo**

<a name="getIpranges"></a>

# IpAddressRangeListing getIpranges()


GET /api/v2/ipranges

Get public ip address ranges for Genesys Cloud

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getIpranges()
  .then((data) => {
    console.log(`getIpranges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIpranges');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**IpAddressRangeListing**

<a name="getSettings"></a>

# **{&#39;String&#39;: Object}** getSettings()


GET /api/v2/settings

Get settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getSettings()
  .then((data) => {
    console.log(`getSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**{&#39;String&#39;: Object}**

<a name="getTimezones"></a>

# TimeZoneEntityListing getTimezones(opts)


GET /api/v2/timezones

Get time zones list

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getTimezones(opts)
  .then((data) => {
    console.log(`getTimezones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTimezones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TimeZoneEntityListing**

<a name="headHealthCheck"></a>

# void headHealthCheck()


HEAD /api/v2/health/check

Get health.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.headHealthCheck()
  .then(() => {
    console.log('headHealthCheck returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headHealthCheck');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service"></a>

# void headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName)


HEAD /api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}

Health check for backend service

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

let serviceName = "serviceName_example"; // String | serviceName

apiInstance.headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName)
  .then(() => {
    console.log('headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **serviceName** | **String** | serviceName |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAppsLegacyImageLinkEntityTypeEntityIdTargetField"></a>

# DirectoryLegacyImageLinkResponse postAppsLegacyImageLinkEntityTypeEntityIdTargetField(imageId, entityType, entityId, targetField, opts)


POST /api/v2/apps/legacy/images/{imageId}/link/{entityType}/{entityId}/{targetField}

Links a previously uploaded image to an entity

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let imageId = "imageId_example"; // String | The image id
let entityType = "entityType_example"; // String | The type of entity (e.g. person, group, etc.)
let entityId = "entityId_example"; // String | The entity id
let targetField = "targetField_example"; // String | The target field of the given entity (e.g. uploads.images)
let opts = { 
  'body': {} // Object | query
};

apiInstance.postAppsLegacyImageLinkEntityTypeEntityIdTargetField(imageId, entityType, entityId, targetField, opts)
  .then((data) => {
    console.log(`postAppsLegacyImageLinkEntityTypeEntityIdTargetField success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAppsLegacyImageLinkEntityTypeEntityIdTargetField');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **imageId** | **String** | The image id |  |
 **entityType** | **String** | The type of entity (e.g. person, group, etc.) |  |
 **entityId** | **String** | The entity id |  |
 **targetField** | **String** | The target field of the given entity (e.g. uploads.images) |  |
 **body** | **Object** | query | [optional]  |
{: class="table table-striped"}

### Return type

**DirectoryLegacyImageLinkResponse**

<a name="postAppsLegacyImages"></a>

# DirectoryLegacyImageUploadResponse postAppsLegacyImages(body)


POST /api/v2/apps/legacy/images

Uploads a user image and returns the image url

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let body = {}; // Object | Image upload request

apiInstance.postAppsLegacyImages(body)
  .then((data) => {
    console.log(`postAppsLegacyImages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAppsLegacyImages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Image upload request |  |
{: class="table table-striped"}

### Return type

**DirectoryLegacyImageUploadResponse**

<a name="postAppsLegacySession"></a>

# DirectorySessionResponse postAppsLegacySession(opts)


POST /api/v2/apps/legacy/session

Update preferred language and return the legacy directory session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postAppsLegacySession(opts)
  .then((data) => {
    console.log(`postAppsLegacySession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAppsLegacySession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**DirectorySessionResponse**

<a name="postAppsSession"></a>

# void postAppsSession()


POST /api/v2/apps/session

Create apps session cookie named PureCloud-Apps-Session

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.postAppsSession()
  .then(() => {
    console.log('postAppsSession returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAppsSession');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="postCertificateDetails"></a>

# ParsedCertificate postCertificateDetails(body)


POST /api/v2/certificate/details

Returns the information about an X509 PEM encoded certificate or certificate chain.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let body = {}; // Object | Certificate

apiInstance.postCertificateDetails(body)
  .then((data) => {
    console.log(`postCertificateDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCertificateDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Certificate |  |
{: class="table table-striped"}

### Return type

**ParsedCertificate**

<a name="postDiagnostics"></a>

# DiagnosticEmail postDiagnostics(opts)


POST /api/v2/diagnostics

Send an email with diagnostic information.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Diagnostic
};

apiInstance.postDiagnostics(opts)
  .then((data) => {
    console.log(`postDiagnostics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnostics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Diagnostic | [optional]  |
{: class="table table-striped"}

### Return type

**DiagnosticEmail**

<a name="postDiagnosticsNewrelicInsights"></a>

# void postDiagnosticsNewrelicInsights(opts)


POST /api/v2/diagnostics/newrelic/insights

Proxy NewRelic Insights events

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Event List
};

apiInstance.postDiagnosticsNewrelicInsights(opts)
  .then(() => {
    console.log('postDiagnosticsNewrelicInsights returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsNewrelicInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Event List | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postDiagnosticsNewrelicInsightsBackgroundassistant"></a>

# void postDiagnosticsNewrelicInsightsBackgroundassistant(opts)


POST /api/v2/diagnostics/newrelic/insights/backgroundassistant

Proxy NewRelic Insights events for background assistant using screen recording jwt token

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Event List
};

apiInstance.postDiagnosticsNewrelicInsightsBackgroundassistant(opts)
  .then(() => {
    console.log('postDiagnosticsNewrelicInsightsBackgroundassistant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsNewrelicInsightsBackgroundassistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Event List | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postDiagnosticsSupport"></a>

# DiagnosticEmail postDiagnosticsSupport(opts)


POST /api/v2/diagnostics/support

Contact support with diagnostic information.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Diagnostic
};

apiInstance.postDiagnosticsSupport(opts)
  .then((data) => {
    console.log(`postDiagnosticsSupport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsSupport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Diagnostic | [optional]  |
{: class="table table-striped"}

### Return type

**DiagnosticEmail**

<a name="postDiagnosticsTrace"></a>

# **Object** postDiagnosticsTrace(opts)


POST /api/v2/diagnostics/trace

Trace messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Trace List
};

apiInstance.postDiagnosticsTrace(opts)
  .then((data) => {
    console.log(`postDiagnosticsTrace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsTrace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trace List | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postDiagnosticsTraceBackgroundassistant"></a>

# void postDiagnosticsTraceBackgroundassistant(opts)


POST /api/v2/diagnostics/trace/backgroundassistant

Trace messages for background assistant using screen recording jwt token

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': {} // Object | Trace List
};

apiInstance.postDiagnosticsTraceBackgroundassistant(opts)
  .then(() => {
    console.log('postDiagnosticsTraceBackgroundassistant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsTraceBackgroundassistant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trace List | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putSettings"></a>

# **{&#39;String&#39;: Object}** putSettings(opts)


PUT /api/v2/settings

Update settings for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'body': null // {String: Object} | 
};

apiInstance.putSettings(opts)
  .then((data) => {
    console.log(`putSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **{String: Object}** |  | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

