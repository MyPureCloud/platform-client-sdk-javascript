---
title: OrganizationAuthorizationApi
---
# platformClient.OrganizationAuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustee) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrusteeCloneduser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeCloneduser) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers/{trusteeUserId} | Deletes cloned user
[**deleteOrgauthorizationTrusteeGroup**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeGroup) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId} | Delete Trustee Group
[**deleteOrgauthorizationTrusteeGroupRoles**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeGroupRoles) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles | Delete Trustee Group Roles
[**deleteOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUser) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Delete Trustee User
[**deleteOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUserRoles) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Delete Trustee User Roles
[**deleteOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustees) | **DELETE** /api/v2/orgauthorization/trustees | Delete Bulk Org Trustees
[**deleteOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustor) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrustorCloneduser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustorCloneduser) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId} | Delete Cloned User
[**deleteOrgauthorizationTrustorGroup**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustorGroup) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId} | Delete Trustee Group
[**deleteOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustorUser) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Delete Trustee User
[**deleteOrgauthorizationTrustors**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustors) | **DELETE** /api/v2/orgauthorization/trustors | Delete Bulk Org Trustors
[**getOrgauthorizationPairing**](OrganizationAuthorizationApi.html#getOrgauthorizationPairing) | **GET** /api/v2/orgauthorization/pairings/{pairingId} | Get Pairing Info
[**getOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustee) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Get Org Trust
[**getOrgauthorizationTrusteeClonedusers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeClonedusers) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers | The list of cloned users from the trustee organization (i.e. users with a native user record).
[**getOrgauthorizationTrusteeGroup**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeGroup) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId} | Get Trustee Group
[**getOrgauthorizationTrusteeGroupRoles**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeGroupRoles) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles | Get Trustee Group Roles
[**getOrgauthorizationTrusteeGroups**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeGroups) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups | The list of trustee groups for this organization (i.e. groups granted access to this organization).
[**getOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUser) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUserRoles) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Get Trustee User Roles
[**getOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUsers) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | The list of trustee users for this organization (i.e. users granted access to this organization).
[**getOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustees) | **GET** /api/v2/orgauthorization/trustees | The list of trustees for this organization (i.e. organizations granted access to this organization).
[**getOrgauthorizationTrusteesDefault**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteesDefault) | **GET** /api/v2/orgauthorization/trustees/default | Get organization authorization trust with Customer Care, if one exists.
[**getOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustor) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId} | Get Org Trust
[**getOrgauthorizationTrustorCloneduser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorCloneduser) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId} | Get Cloned User
[**getOrgauthorizationTrustorClonedusers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorClonedusers) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers | The list of cloned users in the trustor organization (i.e. users with a native user record).
[**getOrgauthorizationTrustorGroup**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorGroup) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId} | Get Trustee Group
[**getOrgauthorizationTrustorGroups**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorGroups) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/groups | The list of groups in the trustor organization (i.e. groups granted access).
[**getOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUser) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrustorUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUsers) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users | The list of users in the trustor organization (i.e. users granted access).
[**getOrgauthorizationTrustors**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustors) | **GET** /api/v2/orgauthorization/trustors | The list of organizations that have authorized/trusted your organization.
[**postOrgauthorizationPairings**](OrganizationAuthorizationApi.html#postOrgauthorizationPairings) | **POST** /api/v2/orgauthorization/pairings | A pairing id is created by the trustee and given to the trustor to create a trust.
[**postOrgauthorizationTrusteeGroups**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteeGroups) | **POST** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups | Add a group to the trust.
[**postOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteeUsers) | **POST** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | Add a user to the trust.
[**postOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustees) | **POST** /api/v2/orgauthorization/trustees | Create a new organization authorization trust. This is required to grant other organizations access to your organization.
[**postOrgauthorizationTrusteesAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteesAudits) | **POST** /api/v2/orgauthorization/trustees/audits | Get Org Trustee Audits
[**postOrgauthorizationTrusteesDefault**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteesDefault) | **POST** /api/v2/orgauthorization/trustees/default | Create a new organization authorization trust with Customer Care. This is required to grant your regional Customer Care organization access to your organization.
[**postOrgauthorizationTrustorAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustorAudits) | **POST** /api/v2/orgauthorization/trustor/audits | Get Org Trustor Audits
[**putOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustee) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Update Org Trust
[**putOrgauthorizationTrusteeGroupRoledivisions**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeGroupRoledivisions) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roledivisions | Update Trustee Group Roles
[**putOrgauthorizationTrusteeGroupRoles**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeGroupRoles) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles | Update Trustee Group Roles
[**putOrgauthorizationTrusteeUserRoledivisions**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeUserRoledivisions) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions | Update Trustee User Roles
[**putOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeUserRoles) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Update Trustee User Roles
[**putOrgauthorizationTrustorCloneduser**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustorCloneduser) | **PUT** /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId} | Creates a clone of the trustee user in the trustor org.
[**putOrgauthorizationTrustorGroup**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustorGroup) | **PUT** /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId} | Add a Trustee Group to the trust.
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

<a name="deleteOrgauthorizationTrusteeCloneduser"></a>

# void deleteOrgauthorizationTrusteeCloneduser(trusteeOrgId, trusteeUserId)


DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers/{trusteeUserId}

Deletes cloned user

Requires ANY permissions:

* directory:user:delete

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
let trusteeUserId = "trusteeUserId_example"; // String | Id of the cloned user to delete

apiInstance.deleteOrgauthorizationTrusteeCloneduser(trusteeOrgId, trusteeUserId)
  .then(() => {
    console.log('deleteOrgauthorizationTrusteeCloneduser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrusteeCloneduser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Id of the cloned user to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeGroup"></a>

# void deleteOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId)


DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}

Delete Trustee Group

Requires ANY permissions:

* authorization:orgTrusteeGroup:delete

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id

apiInstance.deleteOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId)
  .then(() => {
    console.log('deleteOrgauthorizationTrusteeGroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrusteeGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeGroupRoles"></a>

# void deleteOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId)


DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles

Delete Trustee Group Roles

Requires ANY permissions:

* authorization:orgTrusteeGroup:delete

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id

apiInstance.deleteOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId)
  .then(() => {
    console.log('deleteOrgauthorizationTrusteeGroupRoles returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrusteeGroupRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
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

<a name="deleteOrgauthorizationTrustees"></a>

# void deleteOrgauthorizationTrustees(id)


DELETE /api/v2/orgauthorization/trustees

Delete Bulk Org Trustees

deleteOrgauthorizationTrustees is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let id = ["id_example"]; // [String] | Comma separated list of trustee ids to remove

apiInstance.deleteOrgauthorizationTrustees(id)
  .then(() => {
    console.log('deleteOrgauthorizationTrustees returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustees');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma separated list of trustee ids to remove |  |
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

<a name="deleteOrgauthorizationTrustorCloneduser"></a>

# void deleteOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)


DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}

Delete Cloned User

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

apiInstance.deleteOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)
  .then(() => {
    console.log('deleteOrgauthorizationTrustorCloneduser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustorCloneduser');
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

<a name="deleteOrgauthorizationTrustorGroup"></a>

# void deleteOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)


DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}

Delete Trustee Group

Requires ANY permissions:

* authorization:orgTrusteeGroup:delete

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
let trustorGroupId = "trustorGroupId_example"; // String | Trustor Group Id

apiInstance.deleteOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)
  .then(() => {
    console.log('deleteOrgauthorizationTrustorGroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustorGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trustorGroupId** | **String** | Trustor Group Id |  |
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

<a name="deleteOrgauthorizationTrustors"></a>

# void deleteOrgauthorizationTrustors(id)


DELETE /api/v2/orgauthorization/trustors

Delete Bulk Org Trustors

deleteOrgauthorizationTrustors is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let id = ["id_example"]; // [String] | Comma separated list of trustor ids to remove

apiInstance.deleteOrgauthorizationTrustors(id)
  .then(() => {
    console.log('deleteOrgauthorizationTrustors returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrgauthorizationTrustors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma separated list of trustor ids to remove |  |
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

<a name="getOrgauthorizationTrusteeClonedusers"></a>

# ClonedUserEntityListing getOrgauthorizationTrusteeClonedusers(trusteeOrgId)


GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers

The list of cloned users from the trustee organization (i.e. users with a native user record).

There can be no more than 5 cloned users per organization, so results are represented as simple list and not paged

Requires ANY permissions:

* directory:user:view

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

apiInstance.getOrgauthorizationTrusteeClonedusers(trusteeOrgId)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeClonedusers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeClonedusers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
{: class="table table-striped"}

### Return type

**ClonedUserEntityListing**

<a name="getOrgauthorizationTrusteeGroup"></a>

# TrustGroup getOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId)


GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}

Get Trustee Group

Requires ANY permissions:

* authorization:orgTrusteeGroup:view

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id

apiInstance.getOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
{: class="table table-striped"}

### Return type

**TrustGroup**

<a name="getOrgauthorizationTrusteeGroupRoles"></a>

# UserAuthorization getOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId)


GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles

Get Trustee Group Roles

Requires ANY permissions:

* authorization:orgTrusteeGroup:view

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id

apiInstance.getOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeGroupRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeGroupRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="getOrgauthorizationTrusteeGroups"></a>

# TrustGroupEntityListing getOrgauthorizationTrusteeGroups(trusteeOrgId, opts)


GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups

The list of trustee groups for this organization (i.e. groups granted access to this organization).

Requires ANY permissions:

* authorization:orgTrusteeGroup:view

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

apiInstance.getOrgauthorizationTrusteeGroups(trusteeOrgId, opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrusteeGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteeGroups');
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

**TrustGroupEntityListing**

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

<a name="getOrgauthorizationTrusteesDefault"></a>

# Trustee getOrgauthorizationTrusteesDefault()


GET /api/v2/orgauthorization/trustees/default

Get organization authorization trust with Customer Care, if one exists.

Requires ANY permissions:

* authorization:orgTrustee:view
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

apiInstance.getOrgauthorizationTrusteesDefault()
  .then((data) => {
    console.log(`getOrgauthorizationTrusteesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrusteesDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**Trustee**

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

<a name="getOrgauthorizationTrustorCloneduser"></a>

# ClonedUser getOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)


GET /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}

Get Cloned User

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

apiInstance.getOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorCloneduser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorCloneduser');
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

**ClonedUser**

<a name="getOrgauthorizationTrustorClonedusers"></a>

# ClonedUserEntityListing getOrgauthorizationTrustorClonedusers(trustorOrgId)


GET /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers

The list of cloned users in the trustor organization (i.e. users with a native user record).

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

apiInstance.getOrgauthorizationTrustorClonedusers(trustorOrgId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorClonedusers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorClonedusers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
{: class="table table-striped"}

### Return type

**ClonedUserEntityListing**

<a name="getOrgauthorizationTrustorGroup"></a>

# TrustGroup getOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)


GET /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}

Get Trustee Group

Requires ANY permissions:

* authorization:orgTrusteeGroup:view

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
let trustorGroupId = "trustorGroupId_example"; // String | Trustor Group Id

apiInstance.getOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trustorGroupId** | **String** | Trustor Group Id |  |
{: class="table table-striped"}

### Return type

**TrustGroup**

<a name="getOrgauthorizationTrustorGroups"></a>

# TrustGroupEntityListing getOrgauthorizationTrustorGroups(trustorOrgId, opts)


GET /api/v2/orgauthorization/trustors/{trustorOrgId}/groups

The list of groups in the trustor organization (i.e. groups granted access).

Requires ANY permissions:

* authorization:orgTrusteeGroup:view

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

apiInstance.getOrgauthorizationTrustorGroups(trustorOrgId, opts)
  .then((data) => {
    console.log(`getOrgauthorizationTrustorGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrgauthorizationTrustorGroups');
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

**TrustGroupEntityListing**

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

<a name="postOrgauthorizationTrusteeGroups"></a>

# TrustGroup postOrgauthorizationTrusteeGroups(trusteeOrgId, body)


POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups

Add a group to the trust.

Requires ANY permissions:

* authorization:orgTrusteeGroup:add

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

apiInstance.postOrgauthorizationTrusteeGroups(trusteeOrgId, body)
  .then((data) => {
    console.log(`postOrgauthorizationTrusteeGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrusteeGroups');
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

**TrustGroup**

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

# **Object** postOrgauthorizationTrusteesAudits(body, opts)


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

**Object**

<a name="postOrgauthorizationTrusteesDefault"></a>

# Trustee postOrgauthorizationTrusteesDefault(opts)


POST /api/v2/orgauthorization/trustees/default

Create a new organization authorization trust with Customer Care. This is required to grant your regional Customer Care organization access to your organization.

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

let opts = { 
  'assignDefaultRole': true, // Boolean | Assign Admin role to default pairing with Customer Care
  'autoExpire': true // Boolean | Automatically expire pairing after 30 days
};

apiInstance.postOrgauthorizationTrusteesDefault(opts)
  .then((data) => {
    console.log(`postOrgauthorizationTrusteesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOrgauthorizationTrusteesDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignDefaultRole** | **Boolean** | Assign Admin role to default pairing with Customer Care | [optional]  |
 **autoExpire** | **Boolean** | Automatically expire pairing after 30 days | [optional]  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="postOrgauthorizationTrustorAudits"></a>

# **Object** postOrgauthorizationTrustorAudits(body, opts)


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

**Object**

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

<a name="putOrgauthorizationTrusteeGroupRoledivisions"></a>

# UserAuthorization putOrgauthorizationTrusteeGroupRoledivisions(trusteeOrgId, trusteeGroupId, body)


PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roledivisions

Update Trustee Group Roles

Requires ANY permissions:

* authorization:orgTrusteeGroup:edit

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id
let body = {}; // Object | Set of roles with corresponding divisions to apply

apiInstance.putOrgauthorizationTrusteeGroupRoledivisions(trusteeOrgId, trusteeGroupId, body)
  .then((data) => {
    console.log(`putOrgauthorizationTrusteeGroupRoledivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrusteeGroupRoledivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
 **body** | **Object** | Set of roles with corresponding divisions to apply |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putOrgauthorizationTrusteeGroupRoles"></a>

# UserAuthorization putOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId, body)


PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles

Update Trustee Group Roles

Requires ANY permissions:

* authorization:orgTrusteeGroup:edit

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
let trusteeGroupId = "trusteeGroupId_example"; // String | Trustee Group Id
let body = ["body_example"]; // [String] | List of roles

apiInstance.putOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId, body)
  .then((data) => {
    console.log(`putOrgauthorizationTrusteeGroupRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrusteeGroupRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeGroupId** | **String** | Trustee Group Id |  |
 **body** | **[String]** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

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
let body = ["body_example"]; // [String] | List of roles

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
 **body** | **[String]** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putOrgauthorizationTrustorCloneduser"></a>

# ClonedUser putOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)


PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}

Creates a clone of the trustee user in the trustor org.

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

apiInstance.putOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId)
  .then((data) => {
    console.log(`putOrgauthorizationTrustorCloneduser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrustorCloneduser');
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

**ClonedUser**

<a name="putOrgauthorizationTrustorGroup"></a>

# TrustGroup putOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)


PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}

Add a Trustee Group to the trust.

Requires ALL permissions:

* authorization:orgTrusteeGroup:add

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
let trustorGroupId = "trustorGroupId_example"; // String | Trustor Group Id

apiInstance.putOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId)
  .then((data) => {
    console.log(`putOrgauthorizationTrustorGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrgauthorizationTrustorGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trustorGroupId** | **String** | Trustor Group Id |  |
{: class="table table-striped"}

### Return type

**TrustGroup**

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

