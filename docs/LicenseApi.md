# LicenseApi

# platformClient.LicenseApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getLicenseDefinition**](LicenseApi#getLicenseDefinition) | **GET** /api/v2/license/definitions/{licenseId} | Get PureCloud license definition.
[**getLicenseDefinitions**](LicenseApi#getLicenseDefinitions) | **GET** /api/v2/license/definitions | Get all PureCloud license definitions available for the organization.
[**getLicenseToggle**](LicenseApi#getLicenseToggle) | **GET** /api/v2/license/toggles/{featureName} | Deprecated - no alternative required. This operation will always return 'true' for requested toggles
[**getLicenseUser**](LicenseApi#getLicenseUser) | **GET** /api/v2/license/users/{userId} | Get licenses for specified user.
[**getLicenseUsers**](LicenseApi#getLicenseUsers) | **GET** /api/v2/license/users | Get a page of users and their licenses
[**postLicenseInfer**](LicenseApi#postLicenseInfer) | **POST** /api/v2/license/infer | Get a list of licenses inferred based on a list of roleIds
[**postLicenseOrganization**](LicenseApi#postLicenseOrganization) | **POST** /api/v2/license/organization | Update the organization's license assignments in a batch.
[**postLicenseToggle**](LicenseApi#postLicenseToggle) | **POST** /api/v2/license/toggles/{featureName} | Deprecated. No alternative required - this endpoint has no effect
[**postLicenseUsers**](LicenseApi#postLicenseUsers) | **POST** /api/v2/license/users | Fetch user licenses in a batch.



## getLicenseDefinition

> LicenseDefinition getLicenseDefinition(licenseId)


GET /api/v2/license/definitions/{licenseId}

Get PureCloud license definition.

Requires ANY permissions:

* authorization:grant:add
* authorization:license:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let licenseId = "licenseId_example"; // String | ID

apiInstance.getLicenseDefinition(licenseId)
  .then((data) => {
    console.log(`getLicenseDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseDefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **licenseId** | **String** | ID |  |

### Return type

**LicenseDefinition**


## getLicenseDefinitions

> [LicenseDefinition] getLicenseDefinitions()


GET /api/v2/license/definitions

Get all PureCloud license definitions available for the organization.

Requires ANY permissions:

* authorization:grant:add
* authorization:license:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

apiInstance.getLicenseDefinitions()
  .then((data) => {
    console.log(`getLicenseDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseDefinitions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[LicenseDefinition]**


## getLicenseToggle

> LicenseOrgToggle getLicenseToggle(featureName)


GET /api/v2/license/toggles/{featureName}

Deprecated - no alternative required. This operation will always return 'true' for requested toggles

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let featureName = "featureName_example"; // String | featureName

apiInstance.getLicenseToggle(featureName)
  .then((data) => {
    console.log(`getLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseToggle');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | featureName |  |

### Return type

**LicenseOrgToggle**


## getLicenseUser

> LicenseUser getLicenseUser(userId)


GET /api/v2/license/users/{userId}

Get licenses for specified user.

Requires ANY permissions:

* authorization:grant:add
* authorization:license:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let userId = "userId_example"; // String | ID

apiInstance.getLicenseUser(userId)
  .then((data) => {
    console.log(`getLicenseUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | ID |  |

### Return type

**LicenseUser**


## getLicenseUsers

> UserLicensesEntityListing getLicenseUsers(opts)


GET /api/v2/license/users

Get a page of users and their licenses

Retrieve a page of users in an organization along with the licenses they possess.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getLicenseUsers(opts)
  .then((data) => {
    console.log(`getLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**UserLicensesEntityListing**


## postLicenseInfer

> **[&#39;String&#39;]** postLicenseInfer(opts)


POST /api/v2/license/infer

Get a list of licenses inferred based on a list of roleIds

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'body': ["body_example"] // [String] | The roleIds to use while inferring licenses
};

apiInstance.postLicenseInfer(opts)
  .then((data) => {
    console.log(`postLicenseInfer success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseInfer');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | The roleIds to use while inferring licenses | [optional]  |

### Return type

**[&#39;String&#39;]**


## postLicenseOrganization

> [LicenseUpdateStatus] postLicenseOrganization(opts)


POST /api/v2/license/organization

Update the organization's license assignments in a batch.

Requires ANY permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'body': {} // Object | The license assignments to update.
};

apiInstance.postLicenseOrganization(opts)
  .then((data) => {
    console.log(`postLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The license assignments to update. | [optional]  |

### Return type

**[LicenseUpdateStatus]**


## postLicenseToggle

> LicenseOrgToggle postLicenseToggle(featureName)


POST /api/v2/license/toggles/{featureName}

Deprecated. No alternative required - this endpoint has no effect

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let featureName = "featureName_example"; // String | featureName

apiInstance.postLicenseToggle(featureName)
  .then((data) => {
    console.log(`postLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseToggle');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | featureName |  |

### Return type

**LicenseOrgToggle**


## postLicenseUsers

> **{&#39;String&#39;: Object}** postLicenseUsers(opts)


POST /api/v2/license/users

Fetch user licenses in a batch.

Requires ANY permissions:

* authorization:grant:add
* authorization:license:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'body': ["body_example"] // [String] | The user IDs to fetch.
};

apiInstance.postLicenseUsers(opts)
  .then((data) => {
    console.log(`postLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | The user IDs to fetch. | [optional]  |

### Return type

**{&#39;String&#39;: Object}**


_purecloud-platform-client-v2@229.1.0_
