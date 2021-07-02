---
title: OrganizationAuthorizationApi
---
# platformClient.OrganizationAuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustee) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUser) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Delete Trustee User
[**deleteOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUserRoles) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Delete Trustee User Roles
[**deleteOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustor) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustorUser) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Delete Trustee User
[**getOrgauthorizationPairing**](OrganizationAuthorizationApi.html#getOrgauthorizationPairing) | **GET** /api/v2/orgauthorization/pairings/{pairingId} | Get Pairing Info
[**getOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustee) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Get Org Trust
[**getOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUser) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUserRoles) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Get Trustee User Roles
[**getOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUsers) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | The list of trustee users for this organization (i.e. users granted access to this organization).
[**getOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustees) | **GET** /api/v2/orgauthorization/trustees | The list of trustees for this organization (i.e. organizations granted access to this organization).
[**getOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustor) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId} | Get Org Trust
[**getOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUser) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrustorUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUsers) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users | The list of users in the trustor organization (i.e. users granted access).
[**getOrgauthorizationTrustors**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustors) | **GET** /api/v2/orgauthorization/trustors | The list of organizations that have authorized/trusted your organization.
[**postOrgauthorizationPairings**](OrganizationAuthorizationApi.html#postOrgauthorizationPairings) | **POST** /api/v2/orgauthorization/pairings | A pairing id is created by the trustee and given to the trustor to create a trust.
[**postOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteeUsers) | **POST** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | Add a user to the trust.
[**postOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustees) | **POST** /api/v2/orgauthorization/trustees | Create a new organization authorization trust. This is required to grant other organizations access to your organization.
[**postOrgauthorizationTrusteesAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteesAudits) | **POST** /api/v2/orgauthorization/trustees/audits | Get Org Trustee Audits
[**postOrgauthorizationTrustorAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustorAudits) | **POST** /api/v2/orgauthorization/trustor/audits | Get Org Trustor Audits
[**putOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustee) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Update Org Trust
[**putOrgauthorizationTrusteeUserRoledivisions**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeUserRoledivisions) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions | Update Trustee User Roles
[**putOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeUserRoles) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Update Trustee User Roles
[**putOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustorUser) | **PUT** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Add a Trustee user to the trust.
{: class="table table-striped"}

<a name="deleteOrgauthorizationTrustee"></a>

# void deleteOrgauthorizationTrustee(trusteeOrgId)



DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}

Delete Org Trust



Requires ANY permissions: 

* authorization:orgTrustee:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

apiInstance.deleteOrgauthorizationTrustee(trusteeOrgId)
  .then(() => {
    console.log('deleteOrgauthorizationTrustee returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustee');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeUser"></a>

# void deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)



DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}

Delete Trustee User



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)
  .then(() => {
    console.log('deleteOrgauthorizationTrusteeUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrusteeUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeUserRoles"></a>

# void deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)



DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Delete Trustee User Roles



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)
  .then(() => {
    console.log('deleteOrgauthorizationTrusteeUserRoles returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrustor"></a>

# void deleteOrgauthorizationTrustor(trustorOrgId)



DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}

Delete Org Trust



Requires ANY permissions: 

* authorization:orgTrustor:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

apiInstance.deleteOrgauthorizationTrustor(trustorOrgId)
  .then(() => {
    console.log('deleteOrgauthorizationTrustor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrustorUser"></a>

# void deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)



DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Delete Trustee User



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then(() => {
    console.log('deleteOrgauthorizationTrustorUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustorUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOrgauthorizationPairing"></a>

# TrustRequest getOrgauthorizationPairing(pairingId)



GET /api/v2/orgauthorization/pairings/{pairingId}

Get Pairing Info



Requires ANY permissions: 

* authorization:orgTrustee:view
* authorization:orgTrustor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let pairingId = "pairingId_example"; // String | Pairing Id

apiInstance.getOrgauthorizationPairing(pairingId)
  .then((data) => {
    console.log(`getOrgauthorizationPairing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationPairing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pairingId** | **String** | Pairing Id |  |
{: class="table table-striped"}

### Return type

**TrustRequest**

<a name="getOrgauthorizationTrustee"></a>

# Trustee getOrgauthorizationTrustee(trusteeOrgId)



GET /api/v2/orgauthorization/trustees/{trusteeOrgId}

Get Org Trust



Requires ANY permissions: 

* authorization:orgTrustee:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

apiInstance.getOrgauthorizationTrustee(trusteeOrgId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustee success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustee');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="getOrgauthorizationTrusteeUser"></a>

# TrustUser getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)



GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}

Get Trustee User



Requires ANY permissions: 

* authorization:orgTrusteeUser:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="getOrgauthorizationTrusteeUserRoles"></a>

# UserAuthorization getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)



GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Get Trustee User Roles



Requires ANY permissions: 

* authorization:orgTrusteeUser:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="getOrgauthorizationTrusteeUsers"></a>

# TrustUserEntityListing getOrgauthorizationTrusteeUsers(trusteeOrgId, opts)



GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users

The list of trustee users for this organization (i.e. users granted access to this organization).



Requires ANY permissions: 

* authorization:orgTrusteeUser:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getOrgauthorizationTrusteeUsers(trusteeOrgId, opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustUserEntityListing**

<a name="getOrgauthorizationTrustees"></a>

# TrustEntityListing getOrgauthorizationTrustees(opts)



GET /api/v2/orgauthorization/trustees

The list of trustees for this organization (i.e. organizations granted access to this organization).



Requires ANY permissions: 

* authorization:orgTrustee:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getOrgauthorizationTrustees(opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrustees success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustees');
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

**TrustEntityListing**

<a name="getOrgauthorizationTrustor"></a>

# Trustor getOrgauthorizationTrustor(trustorOrgId)



GET /api/v2/orgauthorization/trustors/{trustorOrgId}

Get Org Trust



Requires ANY permissions: 

* authorization:orgTrustor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

apiInstance.getOrgauthorizationTrustor(trustorOrgId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
{: class="table table-striped"}

### Return type

**Trustor**

<a name="getOrgauthorizationTrustorUser"></a>

# TrustUser getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)



GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Get Trustee User



Requires ANY permissions: 

* authorization:orgTrusteeUser:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="getOrgauthorizationTrustorUsers"></a>

# TrustUserEntityListing getOrgauthorizationTrustorUsers(trustorOrgId, opts)



GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users

The list of users in the trustor organization (i.e. users granted access).



Requires ANY permissions: 

* authorization:orgTrusteeUser:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustee Organization Id
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getOrgauthorizationTrustorUsers(trustorOrgId, opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustee Organization Id |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustUserEntityListing**

<a name="getOrgauthorizationTrustors"></a>

# TrustorEntityListing getOrgauthorizationTrustors(opts)



GET /api/v2/orgauthorization/trustors

The list of organizations that have authorized/trusted your organization.



Requires ANY permissions: 

* authorization:orgTrustor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getOrgauthorizationTrustors(opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrustors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustors');
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

**TrustorEntityListing**

<a name="postOrgauthorizationPairings"></a>

# TrustRequest postOrgauthorizationPairings(body)



POST /api/v2/orgauthorization/pairings

A pairing id is created by the trustee and given to the trustor to create a trust.



Requires ANY permissions: 

* authorization:orgTrustee:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let body = {}; // Object | Pairing Info

apiInstance.postOrgauthorizationPairings(body)
  .then((data) => {
    console.log(`postOrgauthorizationPairings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationPairings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Pairing Info |  |
{: class="table table-striped"}

### Return type

**TrustRequest**

<a name="postOrgauthorizationTrusteeUsers"></a>

# TrustUser postOrgauthorizationTrusteeUsers(trusteeOrgId, body)



POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/users

Add a user to the trust.



Requires ANY permissions: 

* authorization:orgTrusteeUser:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let body = {}; // Object | Trust

apiInstance.postOrgauthorizationTrusteeUsers(trusteeOrgId, body)
  .then((data) => {
    console.log(`postOrgauthorizationTrusteeUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrusteeUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **body** | **Object** | Trust |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="postOrgauthorizationTrustees"></a>

# Trustee postOrgauthorizationTrustees(body)



POST /api/v2/orgauthorization/trustees

Create a new organization authorization trust. This is required to grant other organizations access to your organization.



Requires ALL permissions: 

* authorization:orgTrustee:add
* authorization:orgTrusteeUser:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let body = {}; // Object | Trust

apiInstance.postOrgauthorizationTrustees(body)
  .then((data) => {
    console.log(`postOrgauthorizationTrustees success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrustees');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trust |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="postOrgauthorizationTrusteesAudits"></a>

# AuditQueryResponse postOrgauthorizationTrusteesAudits(body, opts)



POST /api/v2/orgauthorization/trustees/audits

Get Org Trustee Audits



Requires ANY permissions: 

* authorization:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let body = {}; // Object | Values to scope the request.
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "timestamp", // String | Sort by
  'sortOrder': "descending" // String | Sort order
};

apiInstance.postOrgauthorizationTrusteesAudits(body, opts)
  .then((data) => {
    console.log(`postOrgauthorizationTrusteesAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrusteesAudits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Values to scope the request. |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp] |
 **sortOrder** | **String** | Sort order | [optional] [default to descending] |
{: class="table table-striped"}

### Return type

**AuditQueryResponse**

<a name="postOrgauthorizationTrustorAudits"></a>

# AuditQueryResponse postOrgauthorizationTrustorAudits(body, opts)



POST /api/v2/orgauthorization/trustor/audits

Get Org Trustor Audits



Requires ANY permissions: 

* authorization:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let body = {}; // Object | Values to scope the request.
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "timestamp", // String | Sort by
  'sortOrder': "descending" // String | Sort order
};

apiInstance.postOrgauthorizationTrustorAudits(body, opts)
  .then((data) => {
    console.log(`postOrgauthorizationTrustorAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrustorAudits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Values to scope the request. |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp] |
 **sortOrder** | **String** | Sort order | [optional] [default to descending] |
{: class="table table-striped"}

### Return type

**AuditQueryResponse**

<a name="putOrgauthorizationTrustee"></a>

# Trustee putOrgauthorizationTrustee(trusteeOrgId, body)



PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}

Update Org Trust



Requires ANY permissions: 

* authorization:orgTrustee:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let body = {}; // Object | Client

apiInstance.putOrgauthorizationTrustee(trusteeOrgId, body)
  .then((data) => {
    console.log(`putOrgauthorizationTrustee success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrustee');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **body** | **Object** | Client |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="putOrgauthorizationTrusteeUserRoledivisions"></a>

# UserAuthorization putOrgauthorizationTrusteeUserRoledivisions(trusteeOrgId, trusteeUserId, body)



PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions

Update Trustee User Roles



Requires ANY permissions: 

* authorization:orgTrusteeUser:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id
let body = {}; // Object | Set of roles with corresponding divisions to apply

apiInstance.putOrgauthorizationTrusteeUserRoledivisions(trusteeOrgId, trusteeUserId, body)
  .then((data) => {
    console.log(`putOrgauthorizationTrusteeUserRoledivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrusteeUserRoledivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
 **body** | **Object** | Set of roles with corresponding divisions to apply |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putOrgauthorizationTrusteeUserRoles"></a>

# UserAuthorization putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body)



PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Update Trustee User Roles



Requires ANY permissions: 

* authorization:orgTrusteeUser:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id
let body = [{}]; // Object | List of roles

apiInstance.putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body)
  .then((data) => {
    console.log(`putOrgauthorizationTrusteeUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
 **body** | **Object** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putOrgauthorizationTrustorUser"></a>

# TrustUser putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)



PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Add a Trustee user to the trust.



Requires ALL permissions: 

* authorization:orgTrusteeUser:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationAuthorizationApi();

let trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id
let trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then((data) => {
    console.log(`putOrgauthorizationTrustorUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrustorUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

