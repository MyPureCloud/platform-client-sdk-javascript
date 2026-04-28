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
[**postLicenseInferPermissions**](LicenseApi#postLicenseInferPermissions) | **POST** /api/v2/license/infer/permissions | Get a list of licenses inferred based on a list of permissions
[**postLicenseOrganization**](LicenseApi#postLicenseOrganization) | **POST** /api/v2/license/organization | Update the organization's license assignments in a batch.
[**postLicenseToggle**](LicenseApi#postLicenseToggle) | **POST** /api/v2/license/toggles/{featureName} | Deprecated. No alternative required - this endpoint has no effect
[**postLicenseUsers**](LicenseApi#postLicenseUsers) | **POST** /api/v2/license/users | Fetch user licenses in a batch.



## getLicenseDefinition

> LicenseDefinition getLicenseDefinition(licenseId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLicenseDefinition(licenseId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LicenseDefinition**


## getLicenseDefinitions

> [LicenseDefinition] getLicenseDefinitions(opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLicenseDefinitions(opts)
  .then((data) => {
    console.log(`getLicenseDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseDefinitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[LicenseDefinition]**


## getLicenseToggle

> LicenseOrgToggle getLicenseToggle(featureName, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLicenseToggle(featureName, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LicenseOrgToggle**


## getLicenseUser

> LicenseUser getLicenseUser(userId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLicenseUser(userId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': ["body_example"], // [String] | The roleIds to use while inferring licenses
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[&#39;String&#39;]**


## postLicenseInferPermissions

> **[&#39;String&#39;]** postLicenseInferPermissions(opts)


POST /api/v2/license/infer/permissions

Get a list of licenses inferred based on a list of permissions

postLicenseInferPermissions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'body': ["body_example"], // [String] | The permissions to use while inferring licenses
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLicenseInferPermissions(opts)
  .then((data) => {
    console.log(`postLicenseInferPermissions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseInferPermissions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | The permissions to use while inferring licenses | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | The license assignments to update.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[LicenseUpdateStatus]**


## postLicenseToggle

> LicenseOrgToggle postLicenseToggle(featureName, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLicenseToggle(featureName, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': ["body_example"], // [String] | The user IDs to fetch.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**{&#39;String&#39;: Object}**


_purecloud-platform-client-v2@251.2.0_
