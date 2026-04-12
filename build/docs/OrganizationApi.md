# OrganizationApi

# platformClient.OrganizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getFieldconfig**](OrganizationApi#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsAuthenticationSettings**](OrganizationApi#getOrganizationsAuthenticationSettings) | **GET** /api/v2/organizations/authentication/settings | Gets the organization's settings
[**getOrganizationsEmbeddedintegration**](OrganizationApi#getOrganizationsEmbeddedintegration) | **GET** /api/v2/organizations/embeddedintegration | Get the list of domains that will be allowed to embed PureCloud applications
[**getOrganizationsIpaddressauthentication**](OrganizationApi#getOrganizationsIpaddressauthentication) | **GET** /api/v2/organizations/ipaddressauthentication | Get organization IP address whitelist settings
[**getOrganizationsLimitsChangerequest**](OrganizationApi#getOrganizationsLimitsChangerequest) | **GET** /api/v2/organizations/limits/changerequests/{requestId} | Get a limit change request
[**getOrganizationsLimitsChangerequests**](OrganizationApi#getOrganizationsLimitsChangerequests) | **GET** /api/v2/organizations/limits/changerequests | Get the available limit change requests
[**getOrganizationsLimitsDocs**](OrganizationApi#getOrganizationsLimitsDocs) | **GET** /api/v2/organizations/limits/docs | Get limit documentation
[**getOrganizationsLimitsDocsFreetrial**](OrganizationApi#getOrganizationsLimitsDocsFreetrial) | **GET** /api/v2/organizations/limits/docs/freetrial | Get free trial limit documentation
[**getOrganizationsLimitsNamespace**](OrganizationApi#getOrganizationsLimitsNamespace) | **GET** /api/v2/organizations/limits/namespaces/{namespaceName} | Get the effective limits in a namespace for an organization
[**getOrganizationsLimitsNamespaceDefaults**](OrganizationApi#getOrganizationsLimitsNamespaceDefaults) | **GET** /api/v2/organizations/limits/namespaces/{namespaceName}/defaults | Get the default limits in a namespace for an organization
[**getOrganizationsLimitsNamespaces**](OrganizationApi#getOrganizationsLimitsNamespaces) | **GET** /api/v2/organizations/limits/namespaces | Get the available limit namespaces
[**getOrganizationsMe**](OrganizationApi#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**getOrganizationsWhitelist**](OrganizationApi#getOrganizationsWhitelist) | **GET** /api/v2/organizations/whitelist | This route is deprecated, please use /api/v2/organizations/authentication/settings instead
[**patchOrganizationsAuthenticationSettings**](OrganizationApi#patchOrganizationsAuthenticationSettings) | **PATCH** /api/v2/organizations/authentication/settings | Update the organization's settings
[**patchOrganizationsFeature**](OrganizationApi#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**putOrganizationsEmbeddedintegration**](OrganizationApi#putOrganizationsEmbeddedintegration) | **PUT** /api/v2/organizations/embeddedintegration | Update the list of domains that will be allowed to embed PureCloud applications
[**putOrganizationsIpaddressauthentication**](OrganizationApi#putOrganizationsIpaddressauthentication) | **PUT** /api/v2/organizations/ipaddressauthentication | Update organization IP address whitelist settings
[**putOrganizationsMe**](OrganizationApi#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
[**putOrganizationsWhitelist**](OrganizationApi#putOrganizationsWhitelist) | **PUT** /api/v2/organizations/whitelist | This route is deprecated, please use /api/v2/organizations/authentication/settings instead



## getFieldconfig

> FieldConfig getFieldconfig(type, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/fieldconfig

Fetch field config for an entity type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let type = "type_example"; // String | Field type
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFieldconfig(type, opts)
  .then((data) => {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFieldconfig');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Field type | <br />**Values**: person, group, org |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FieldConfig**


## getOrganizationsAuthenticationSettings

> OrgAuthSettings getOrganizationsAuthenticationSettings(opts)


GET /api/v2/organizations/authentication/settings

Gets the organization's settings

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsAuthenticationSettings(opts)
  .then((data) => {
    console.log(`getOrganizationsAuthenticationSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsAuthenticationSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrgAuthSettings**


## getOrganizationsEmbeddedintegration

> EmbeddedIntegration getOrganizationsEmbeddedintegration(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/organizations/embeddedintegration

Get the list of domains that will be allowed to embed PureCloud applications

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsEmbeddedintegration(opts)
  .then((data) => {
    console.log(`getOrganizationsEmbeddedintegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsEmbeddedintegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EmbeddedIntegration**


## getOrganizationsIpaddressauthentication

> IpAddressAuthentication getOrganizationsIpaddressauthentication(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/organizations/ipaddressauthentication

Get organization IP address whitelist settings

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsIpaddressauthentication(opts)
  .then((data) => {
    console.log(`getOrganizationsIpaddressauthentication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsIpaddressauthentication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IpAddressAuthentication**


## getOrganizationsLimitsChangerequest

> LimitChangeRequestDetails getOrganizationsLimitsChangerequest(requestId, opts)


GET /api/v2/organizations/limits/changerequests/{requestId}

Get a limit change request

Requires ANY permissions:

* limits:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let requestId = "requestId_example"; // String | Unique id for the limit change request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsChangerequest(requestId, opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsChangerequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsChangerequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **requestId** | **String** | Unique id for the limit change request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LimitChangeRequestDetails**


## getOrganizationsLimitsChangerequests

> LimitChangeRequestsEntityListing getOrganizationsLimitsChangerequests(opts)


GET /api/v2/organizations/limits/changerequests

Get the available limit change requests

Timestamp interval defaults to the last 365 days if both query parameters are omitted. If only one parameter is omitted, the interval will default to a 180 day range in the specified direction.

Requires ANY permissions:

* limits:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'after': 3.4, // Number | Timestamp indicating the date to begin after when searching for requests.
  'before': 3.4, // Number | Timestamp indicating the date to end before when searching for requests.
  'status': "status_example", // String | Status of the request to be filtered by
  'pageSize': 25, // Number | Page Size
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsChangerequests(opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsChangerequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsChangerequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **Number** | Timestamp indicating the date to begin after when searching for requests. | [optional]  |
 **before** | **Number** | Timestamp indicating the date to end before when searching for requests. | [optional]  |
 **status** | **String** | Status of the request to be filtered by | [optional] <br />**Values**: Approved, Rejected, Rollback, Pending, Open, SecondaryApprovalNamespacesAdded, ReviewerApproved, ReviewerRejected, ReviewerRollback, ImplementingChange, ChangeImplemented, ImplementingRollback, RollbackImplemented |
 **pageSize** | **Number** | Page Size | [optional] [default to 25] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: statusHistory |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LimitChangeRequestsEntityListing**


## getOrganizationsLimitsDocs

> LimitDocumentation getOrganizationsLimitsDocs(opts)


GET /api/v2/organizations/limits/docs

Get limit documentation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsDocs(opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsDocs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsDocs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LimitDocumentation**


## getOrganizationsLimitsDocsFreetrial

> FreeTrialLimitDocs getOrganizationsLimitsDocsFreetrial(opts)


GET /api/v2/organizations/limits/docs/freetrial

Get free trial limit documentation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsDocsFreetrial(opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsDocsFreetrial success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsDocsFreetrial');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FreeTrialLimitDocs**


## getOrganizationsLimitsNamespace

> LimitsEntityListing getOrganizationsLimitsNamespace(namespaceName, opts)


GET /api/v2/organizations/limits/namespaces/{namespaceName}

Get the effective limits in a namespace for an organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let namespaceName = "namespaceName_example"; // String | The namespace to fetch limits for
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsNamespace(namespaceName, opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsNamespace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsNamespace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **namespaceName** | **String** | The namespace to fetch limits for |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LimitsEntityListing**


## getOrganizationsLimitsNamespaceDefaults

> LimitsEntityListing getOrganizationsLimitsNamespaceDefaults(namespaceName, opts)


GET /api/v2/organizations/limits/namespaces/{namespaceName}/defaults

Get the default limits in a namespace for an organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let namespaceName = "namespaceName_example"; // String | The namespace to fetch defaults limits for
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsNamespaceDefaults(namespaceName, opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsNamespaceDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsNamespaceDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **namespaceName** | **String** | The namespace to fetch defaults limits for |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LimitsEntityListing**


## getOrganizationsLimitsNamespaces

> **Object** getOrganizationsLimitsNamespaces(opts)


GET /api/v2/organizations/limits/namespaces

Get the available limit namespaces

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'pageSize': 100, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsLimitsNamespaces(opts)
  .then((data) => {
    console.log(`getOrganizationsLimitsNamespaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsNamespaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 100] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## getOrganizationsMe

> Organization getOrganizationsMe(opts)


GET /api/v2/organizations/me

Get organization.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsMe(opts)
  .then((data) => {
    console.log(`getOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Organization**


## getOrganizationsWhitelist

> OrgWhitelistSettings getOrganizationsWhitelist(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/organizations/whitelist

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getOrganizationsWhitelist(opts)
  .then((data) => {
    console.log(`getOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsWhitelist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrgWhitelistSettings**


## patchOrganizationsAuthenticationSettings

> OrgAuthSettings patchOrganizationsAuthenticationSettings(body, opts)


PATCH /api/v2/organizations/authentication/settings

Update the organization's settings

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Org settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchOrganizationsAuthenticationSettings(body, opts)
  .then((data) => {
    console.log(`patchOrganizationsAuthenticationSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchOrganizationsAuthenticationSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Org settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrgAuthSettings**


## patchOrganizationsFeature

> OrganizationFeatures patchOrganizationsFeature(featureName, enabled, opts)


PATCH /api/v2/organizations/features/{featureName}

Update organization

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let featureName = "featureName_example"; // String | Organization feature
let enabled = {}; // Object | New state of feature
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchOrganizationsFeature(featureName, enabled, opts)
  .then((data) => {
    console.log(`patchOrganizationsFeature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchOrganizationsFeature');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | Organization feature | <br />**Values**: realtimeCIC, purecloud, hipaa, ucEnabled, pci, purecloudVoice, xmppFederation, chat, informalPhotos, directory, contactCenter, unifiedCommunications, custserv |
 **enabled** | **Object** | New state of feature |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationFeatures**


## putOrganizationsEmbeddedintegration

> EmbeddedIntegration putOrganizationsEmbeddedintegration(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/organizations/embeddedintegration

Update the list of domains that will be allowed to embed PureCloud applications

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Whitelist settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putOrganizationsEmbeddedintegration(body, opts)
  .then((data) => {
    console.log(`putOrganizationsEmbeddedintegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsEmbeddedintegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Whitelist settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EmbeddedIntegration**


## putOrganizationsIpaddressauthentication

> IpAddressAuthentication putOrganizationsIpaddressauthentication(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/organizations/ipaddressauthentication

Update organization IP address whitelist settings

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | IP address Whitelist settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putOrganizationsIpaddressauthentication(body, opts)
  .then((data) => {
    console.log(`putOrganizationsIpaddressauthentication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsIpaddressauthentication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | IP address Whitelist settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IpAddressAuthentication**


## putOrganizationsMe

> Organization putOrganizationsMe(opts)


PUT /api/v2/organizations/me

Update organization.

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'body': {}, // Object | Organization
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putOrganizationsMe(opts)
  .then((data) => {
    console.log(`putOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Organization**


## putOrganizationsWhitelist

> OrgWhitelistSettings putOrganizationsWhitelist(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/organizations/whitelist

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Whitelist settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putOrganizationsWhitelist(body, opts)
  .then((data) => {
    console.log(`putOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsWhitelist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Whitelist settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrgWhitelistSettings**


_purecloud-platform-client-v2@251.0.0_
