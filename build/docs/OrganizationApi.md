---
title: OrganizationApi
---
# platformClient.OrganizationApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOrganizationsMe**](OrganizationApi.html#deleteOrganizationsMe) | **DELETE** /api/v2/organizations/me | Delete the organization.
[**getFieldconfig**](OrganizationApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsAuthenticationSettings**](OrganizationApi.html#getOrganizationsAuthenticationSettings) | **GET** /api/v2/organizations/authentication/settings | Gets the organization's settings
[**getOrganizationsEmbeddedintegration**](OrganizationApi.html#getOrganizationsEmbeddedintegration) | **GET** /api/v2/organizations/embeddedintegration | Get the list of domains that will be allowed to embed PureCloud applications
[**getOrganizationsEnforcescopes**](OrganizationApi.html#getOrganizationsEnforcescopes) | **GET** /api/v2/organizations/enforcescopes | Gets the setting for whether or not the organization enforces OAuth Scopes
[**getOrganizationsIpaddressauthentication**](OrganizationApi.html#getOrganizationsIpaddressauthentication) | **GET** /api/v2/organizations/ipaddressauthentication | Get organization IP address whitelist settings
[**getOrganizationsLimitsChangerequest**](OrganizationApi.html#getOrganizationsLimitsChangerequest) | **GET** /api/v2/organizations/limits/changerequests/{requestId} | Get a limit change request
[**getOrganizationsLimitsChangerequests**](OrganizationApi.html#getOrganizationsLimitsChangerequests) | **GET** /api/v2/organizations/limits/changerequests | Get the available limit change requests
[**getOrganizationsLimitsDocs**](OrganizationApi.html#getOrganizationsLimitsDocs) | **GET** /api/v2/organizations/limits/docs | Get a link to the limit documentation
[**getOrganizationsLimitsNamespace**](OrganizationApi.html#getOrganizationsLimitsNamespace) | **GET** /api/v2/organizations/limits/namespaces/{namespaceName} | Get the effective limits in a namespace for an organization
[**getOrganizationsLimitsNamespaceDefaults**](OrganizationApi.html#getOrganizationsLimitsNamespaceDefaults) | **GET** /api/v2/organizations/limits/namespaces/{namespaceName}/defaults | Get the default limits in a namespace for an organization
[**getOrganizationsLimitsNamespaces**](OrganizationApi.html#getOrganizationsLimitsNamespaces) | **GET** /api/v2/organizations/limits/namespaces | Get the available limit namespaces
[**getOrganizationsMe**](OrganizationApi.html#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**getOrganizationsMigration**](OrganizationApi.html#getOrganizationsMigration) | **GET** /api/v2/organizations/migrations/{migrationName} | Get a migration
[**getOrganizationsMigrationState**](OrganizationApi.html#getOrganizationsMigrationState) | **GET** /api/v2/organizations/migrations/{migrationName}/state | Get a migrations state
[**getOrganizationsMigrations**](OrganizationApi.html#getOrganizationsMigrations) | **GET** /api/v2/organizations/migrations | Get all migrations
[**getOrganizationsPasswordrequirements**](OrganizationApi.html#getOrganizationsPasswordrequirements) | **GET** /api/v2/organizations/passwordrequirements | Gets the password requirement settings for the organization
[**getOrganizationsWhitelist**](OrganizationApi.html#getOrganizationsWhitelist) | **GET** /api/v2/organizations/whitelist | This route is deprecated, please use /api/v2/organizations/authentication/settings instead
[**patchOrganizationsAuthenticationSettings**](OrganizationApi.html#patchOrganizationsAuthenticationSettings) | **PATCH** /api/v2/organizations/authentication/settings | Update the organization's settings
[**patchOrganizationsFeature**](OrganizationApi.html#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**patchOrganizationsLimitsChangerequest**](OrganizationApi.html#patchOrganizationsLimitsChangerequest) | **PATCH** /api/v2/organizations/limits/changerequests/{requestId} | Update a limit change request
[**patchOrganizationsMigration**](OrganizationApi.html#patchOrganizationsMigration) | **PATCH** /api/v2/organizations/migrations/{migrationName} | Update a migration
[**postOrganizations**](OrganizationApi.html#postOrganizations) | **POST** /api/v2/organizations | Create an organization.
[**postOrganizationsLimitsChangerequests**](OrganizationApi.html#postOrganizationsLimitsChangerequests) | **POST** /api/v2/organizations/limits/changerequests | Create a limit change request
[**putOrganizationsEmbeddedintegration**](OrganizationApi.html#putOrganizationsEmbeddedintegration) | **PUT** /api/v2/organizations/embeddedintegration | Update the list of domains that will be allowed to embed PureCloud applications
[**putOrganizationsEnforcescopes**](OrganizationApi.html#putOrganizationsEnforcescopes) | **PUT** /api/v2/organizations/enforcescopes | Update the setting for whether or not the organization enforces OAuth Scopes
[**putOrganizationsIpaddressauthentication**](OrganizationApi.html#putOrganizationsIpaddressauthentication) | **PUT** /api/v2/organizations/ipaddressauthentication | Update organization IP address whitelist settings
[**putOrganizationsMe**](OrganizationApi.html#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
[**putOrganizationsPasswordrequirements**](OrganizationApi.html#putOrganizationsPasswordrequirements) | **PUT** /api/v2/organizations/passwordrequirements | Updates the password requirement settings for the organization
[**putOrganizationsWhitelist**](OrganizationApi.html#putOrganizationsWhitelist) | **PUT** /api/v2/organizations/whitelist | This route is deprecated, please use /api/v2/organizations/authentication/settings instead
{: class="table table-striped"}

<a name="deleteOrganizationsMe"></a>

# void deleteOrganizationsMe()


DELETE /api/v2/organizations/me

Delete the organization.

Requires ANY permissions:

* internal:organization:terminate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.deleteOrganizationsMe()
  .then(() => {
    console.log('deleteOrganizationsMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrganizationsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/fieldconfig

Fetch field config for an entity type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
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
 **type** | **String** | Field type | <br />**Values**: person, group, org, externalContact |
{: class="table table-striped"}

### Return type

**FieldConfig**

<a name="getOrganizationsAuthenticationSettings"></a>

# OrgAuthSettings getOrganizationsAuthenticationSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsAuthenticationSettings()
  .then((data) => {
    console.log(`getOrganizationsAuthenticationSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsAuthenticationSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OrgAuthSettings**

<a name="getOrganizationsEmbeddedintegration"></a>

# EmbeddedIntegration getOrganizationsEmbeddedintegration()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsEmbeddedintegration()
  .then((data) => {
    console.log(`getOrganizationsEmbeddedintegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsEmbeddedintegration');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**EmbeddedIntegration**

<a name="getOrganizationsEnforcescopes"></a>

# EnforceScopesSetting getOrganizationsEnforcescopes()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/organizations/enforcescopes

Gets the setting for whether or not the organization enforces OAuth Scopes

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsEnforcescopes()
  .then((data) => {
    console.log(`getOrganizationsEnforcescopes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsEnforcescopes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**EnforceScopesSetting**

<a name="getOrganizationsIpaddressauthentication"></a>

# IpAddressAuthentication getOrganizationsIpaddressauthentication()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsIpaddressauthentication()
  .then((data) => {
    console.log(`getOrganizationsIpaddressauthentication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsIpaddressauthentication');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**IpAddressAuthentication**

<a name="getOrganizationsLimitsChangerequest"></a>

# LimitChangeRequestDetails getOrganizationsLimitsChangerequest(requestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let requestId = "requestId_example"; // String | Unique id for the limit change request

apiInstance.getOrganizationsLimitsChangerequest(requestId)
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
{: class="table table-striped"}

### Return type

**LimitChangeRequestDetails**

<a name="getOrganizationsLimitsChangerequests"></a>

# LimitChangeRequestsEntityListing getOrganizationsLimitsChangerequests(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'after': 3.4, // Number | Timestamp indicating the date to begin after when searching for requests.
  'before': 3.4, // Number | Timestamp indicating the date to end before when searching for requests.
  'status': "status_example", // String | Status of the request to be filtered by
  'pageSize': 25, // Number | Page Size
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
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
{: class="table table-striped"}

### Return type

**LimitChangeRequestsEntityListing**

<a name="getOrganizationsLimitsDocs"></a>

# UrlResponse getOrganizationsLimitsDocs()


GET /api/v2/organizations/limits/docs

Get a link to the limit documentation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsLimitsDocs()
  .then((data) => {
    console.log(`getOrganizationsLimitsDocs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsLimitsDocs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**UrlResponse**

<a name="getOrganizationsLimitsNamespace"></a>

# LimitsEntityListing getOrganizationsLimitsNamespace(namespaceName)


GET /api/v2/organizations/limits/namespaces/{namespaceName}

Get the effective limits in a namespace for an organization

Requires ANY permissions:

* limits:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let namespaceName = "namespaceName_example"; // String | The namespace to fetch limits for

apiInstance.getOrganizationsLimitsNamespace(namespaceName)
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
{: class="table table-striped"}

### Return type

**LimitsEntityListing**

<a name="getOrganizationsLimitsNamespaceDefaults"></a>

# LimitsEntityListing getOrganizationsLimitsNamespaceDefaults(namespaceName)


GET /api/v2/organizations/limits/namespaces/{namespaceName}/defaults

Get the default limits in a namespace for an organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let namespaceName = "namespaceName_example"; // String | The namespace to fetch defaults limits for

apiInstance.getOrganizationsLimitsNamespaceDefaults(namespaceName)
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
{: class="table table-striped"}

### Return type

**LimitsEntityListing**

<a name="getOrganizationsLimitsNamespaces"></a>

# **Object** getOrganizationsLimitsNamespaces(opts)


GET /api/v2/organizations/limits/namespaces

Get the available limit namespaces

Requires ANY permissions:

* limits:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'pageSize': 100, // Number | Page size
  'pageNumber': 1 // Number | Page number
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
{: class="table table-striped"}

### Return type

**Object**

<a name="getOrganizationsMe"></a>

# Organization getOrganizationsMe()


GET /api/v2/organizations/me

Get organization.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsMe()
  .then((data) => {
    console.log(`getOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**Organization**

<a name="getOrganizationsMigration"></a>

# Migration getOrganizationsMigration(migrationName, opts)


GET /api/v2/organizations/migrations/{migrationName}

Get a migration

Requires ANY permissions:

* migrations:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let migrationName = "migrationName_example"; // String | The name of the migration
let opts = { 
  'includeDetails': true // Boolean | Return additional properties for a Migration
};

apiInstance.getOrganizationsMigration(migrationName, opts)
  .then((data) => {
    console.log(`getOrganizationsMigration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMigration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **migrationName** | **String** | The name of the migration |  |
 **includeDetails** | **Boolean** | Return additional properties for a Migration | [optional]  |
{: class="table table-striped"}

### Return type

**Migration**

<a name="getOrganizationsMigrationState"></a>

# MigrationState getOrganizationsMigrationState(migrationName)


GET /api/v2/organizations/migrations/{migrationName}/state

Get a migrations state

Requires ANY permissions:

* migrations:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let migrationName = "migrationName_example"; // String | The name of the migration

apiInstance.getOrganizationsMigrationState(migrationName)
  .then((data) => {
    console.log(`getOrganizationsMigrationState success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMigrationState');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **migrationName** | **String** | The name of the migration |  |
{: class="table table-striped"}

### Return type

**MigrationState**

<a name="getOrganizationsMigrations"></a>

# MigrationListing getOrganizationsMigrations(opts)


GET /api/v2/organizations/migrations

Get all migrations

Requires ANY permissions:

* migrations:organization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'migrationType': "migrationType_example", // String | The type of migrations to query on
  'includeHidden': true, // Boolean | Return hidden migrations
  'includeDetails': true // Boolean | Return additional properties for a Migration
};

apiInstance.getOrganizationsMigrations(opts)
  .then((data) => {
    console.log(`getOrganizationsMigrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMigrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **migrationType** | **String** | The type of migrations to query on | [optional] <br />**Values**: Enabled, Disabled, All |
 **includeHidden** | **Boolean** | Return hidden migrations | [optional]  |
 **includeDetails** | **Boolean** | Return additional properties for a Migration | [optional]  |
{: class="table table-striped"}

### Return type

**MigrationListing**

<a name="getOrganizationsPasswordrequirements"></a>

# PasswordRequirements getOrganizationsPasswordrequirements()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/organizations/passwordrequirements

Gets the password requirement settings for the organization

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsPasswordrequirements()
  .then((data) => {
    console.log(`getOrganizationsPasswordrequirements success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsPasswordrequirements');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PasswordRequirements**

<a name="getOrganizationsWhitelist"></a>

# OrgWhitelistSettings getOrganizationsWhitelist()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/organizations/whitelist

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsWhitelist()
  .then((data) => {
    console.log(`getOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsWhitelist');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OrgWhitelistSettings**

<a name="patchOrganizationsAuthenticationSettings"></a>

# OrgAuthSettings patchOrganizationsAuthenticationSettings(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Org settings

apiInstance.patchOrganizationsAuthenticationSettings(body)
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
{: class="table table-striped"}

### Return type

**OrgAuthSettings**

<a name="patchOrganizationsFeature"></a>

# OrganizationFeatures patchOrganizationsFeature(featureName, enabled)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let featureName = "featureName_example"; // String | Organization feature
let enabled = {}; // Object | New state of feature

apiInstance.patchOrganizationsFeature(featureName, enabled)
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
{: class="table table-striped"}

### Return type

**OrganizationFeatures**

<a name="patchOrganizationsLimitsChangerequest"></a>

# LimitChangeRequestDetails patchOrganizationsLimitsChangerequest(requestId, body)


PATCH /api/v2/organizations/limits/changerequests/{requestId}

Update a limit change request

Requires ANY permissions:

* internal:limitChangeRequest:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let requestId = "requestId_example"; // String | Unique id for the limit change request
let body = {}; // Object | Change Request Update

apiInstance.patchOrganizationsLimitsChangerequest(requestId, body)
  .then((data) => {
    console.log(`patchOrganizationsLimitsChangerequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchOrganizationsLimitsChangerequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **requestId** | **String** | Unique id for the limit change request |  |
 **body** | **Object** | Change Request Update |  |
{: class="table table-striped"}

### Return type

**LimitChangeRequestDetails**

<a name="patchOrganizationsMigration"></a>

# **Object** patchOrganizationsMigration(migrationName, body)


PATCH /api/v2/organizations/migrations/{migrationName}

Update a migration

Requires ANY permissions:

* migrations:organization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let migrationName = "migrationName_example"; // String | The name of the migration
let body = {}; // Object | Migration State

apiInstance.patchOrganizationsMigration(migrationName, body)
  .then((data) => {
    console.log(`patchOrganizationsMigration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchOrganizationsMigration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **migrationName** | **String** | The name of the migration |  |
 **body** | **Object** | Migration State |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postOrganizations"></a>

# Organization postOrganizations(opts)


POST /api/v2/organizations

Create an organization.

Requires ANY permissions:

* internal:organization:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'body': {} // Object | Organization
};

apiInstance.postOrganizations(opts)
  .then((data) => {
    console.log(`postOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization | [optional]  |
{: class="table table-striped"}

### Return type

**Organization**

<a name="postOrganizationsLimitsChangerequests"></a>

# LimitChangeRequestDetails postOrganizationsLimitsChangerequests(body)


POST /api/v2/organizations/limits/changerequests

Create a limit change request

Requires ANY permissions:

* internal:limitChangeRequest:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Change Request

apiInstance.postOrganizationsLimitsChangerequests(body)
  .then((data) => {
    console.log(`postOrganizationsLimitsChangerequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrganizationsLimitsChangerequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Change Request |  |
{: class="table table-striped"}

### Return type

**LimitChangeRequestDetails**

<a name="putOrganizationsEmbeddedintegration"></a>

# EmbeddedIntegration putOrganizationsEmbeddedintegration(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Whitelist settings

apiInstance.putOrganizationsEmbeddedintegration(body)
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
{: class="table table-striped"}

### Return type

**EmbeddedIntegration**

<a name="putOrganizationsEnforcescopes"></a>

# EnforceScopesSetting putOrganizationsEnforcescopes(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/organizations/enforcescopes

Update the setting for whether or not the organization enforces OAuth Scopes

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Enforce scope setting

apiInstance.putOrganizationsEnforcescopes(body)
  .then((data) => {
    console.log(`putOrganizationsEnforcescopes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsEnforcescopes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Enforce scope setting |  |
{: class="table table-striped"}

### Return type

**EnforceScopesSetting**

<a name="putOrganizationsIpaddressauthentication"></a>

# IpAddressAuthentication putOrganizationsIpaddressauthentication(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | IP address Whitelist settings

apiInstance.putOrganizationsIpaddressauthentication(body)
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
{: class="table table-striped"}

### Return type

**IpAddressAuthentication**

<a name="putOrganizationsMe"></a>

# Organization putOrganizationsMe(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'body': {} // Object | Organization
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
{: class="table table-striped"}

### Return type

**Organization**

<a name="putOrganizationsPasswordrequirements"></a>

# PasswordRequirements putOrganizationsPasswordrequirements(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/organizations/passwordrequirements

Updates the password requirement settings for the organization

This route is deprecated, please use /api/v2/organizations/authentication/settings instead

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Password requirement settings

apiInstance.putOrganizationsPasswordrequirements(body)
  .then((data) => {
    console.log(`putOrganizationsPasswordrequirements success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsPasswordrequirements');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Password requirement settings |  |
{: class="table table-striped"}

### Return type

**PasswordRequirements**

<a name="putOrganizationsWhitelist"></a>

# OrgWhitelistSettings putOrganizationsWhitelist(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Whitelist settings

apiInstance.putOrganizationsWhitelist(body)
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
{: class="table table-striped"}

### Return type

**OrgWhitelistSettings**

