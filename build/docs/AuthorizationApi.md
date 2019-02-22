---
title: AuthorizationApi
---
# platformClient.AuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationDivision**](AuthorizationApi.html#deleteAuthorizationDivision) | **DELETE** /api/v2/authorization/divisions/{divisionId} | Delete a division.
[**deleteAuthorizationRole**](AuthorizationApi.html#deleteAuthorizationRole) | **DELETE** /api/v2/authorization/roles/{roleId} | Delete an organization role.
[**deleteAuthorizationSubjectDivisionRole**](AuthorizationApi.html#deleteAuthorizationSubjectDivisionRole) | **DELETE** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Delete a grant of a role in a division
[**deleteUserRoles**](AuthorizationApi.html#deleteUserRoles) | **DELETE** /api/v2/users/{userId}/roles | Removes all the roles from the user.
[**getAuthorizationDivision**](AuthorizationApi.html#getAuthorizationDivision) | **GET** /api/v2/authorization/divisions/{divisionId} | Returns an authorization division.
[**getAuthorizationDivisions**](AuthorizationApi.html#getAuthorizationDivisions) | **GET** /api/v2/authorization/divisions | Retrieve a list of all divisions defined for the organization
[**getAuthorizationDivisionsHome**](AuthorizationApi.html#getAuthorizationDivisionsHome) | **GET** /api/v2/authorization/divisions/home | Retrieve the home division for the organization.
[**getAuthorizationDivisionsLimit**](AuthorizationApi.html#getAuthorizationDivisionsLimit) | **GET** /api/v2/authorization/divisions/limit | Returns the maximum allowed number of divisions.
[**getAuthorizationDivisionspermittedMe**](AuthorizationApi.html#getAuthorizationDivisionspermittedMe) | **GET** /api/v2/authorization/divisionspermitted/me | Returns whether or not current user can perform the specified action(s).
[**getAuthorizationDivisionspermittedSubjectId**](AuthorizationApi.html#getAuthorizationDivisionspermittedSubjectId) | **GET** /api/v2/authorization/divisionspermitted/{subjectId} | Returns whether or not specified user can perform the specified action(s).
[**getAuthorizationPermissions**](AuthorizationApi.html#getAuthorizationPermissions) | **GET** /api/v2/authorization/permissions | Get all permissions.
[**getAuthorizationProducts**](AuthorizationApi.html#getAuthorizationProducts) | **GET** /api/v2/authorization/products | Get the list of enabled products
[**getAuthorizationRole**](AuthorizationApi.html#getAuthorizationRole) | **GET** /api/v2/authorization/roles/{roleId} | Get a single organization role.
[**getAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#getAuthorizationRoleComparedefaultRightRoleId) | **GET** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an org role to default role comparison
[**getAuthorizationRoleSubjectgrants**](AuthorizationApi.html#getAuthorizationRoleSubjectgrants) | **GET** /api/v2/authorization/roles/{roleId}/subjectgrants | Get the subjects&#39; granted divisions in the specified role.
[**getAuthorizationRoleUsers**](AuthorizationApi.html#getAuthorizationRoleUsers) | **GET** /api/v2/authorization/roles/{roleId}/users | Get a list of the users in a specified role.
[**getAuthorizationRoles**](AuthorizationApi.html#getAuthorizationRoles) | **GET** /api/v2/authorization/roles | Retrieve a list of all roles defined for the organization
[**getAuthorizationSubject**](AuthorizationApi.html#getAuthorizationSubject) | **GET** /api/v2/authorization/subjects/{subjectId} | Returns a listing of roles and permissions for a user.
[**getAuthorizationSubjectsMe**](AuthorizationApi.html#getAuthorizationSubjectsMe) | **GET** /api/v2/authorization/subjects/me | Returns a listing of roles and permissions for the currently authenticated user.
[**getAuthorizationSubjectsRolecounts**](AuthorizationApi.html#getAuthorizationSubjectsRolecounts) | **GET** /api/v2/authorization/subjects/rolecounts | Get the count of roles granted to a list of subjects
[**getUserRoles**](AuthorizationApi.html#getUserRoles) | **GET** /api/v2/users/{userId}/roles | Returns a listing of roles and permissions for a user.
[**patchAuthorizationRole**](AuthorizationApi.html#patchAuthorizationRole) | **PATCH** /api/v2/authorization/roles/{roleId} | Patch Organization Role for needsUpdate Field
[**postAuthorizationDivisionObject**](AuthorizationApi.html#postAuthorizationDivisionObject) | **POST** /api/v2/authorization/divisions/{divisionId}/objects/{objectType} | Assign a list of objects to a division
[**postAuthorizationDivisions**](AuthorizationApi.html#postAuthorizationDivisions) | **POST** /api/v2/authorization/divisions | Create a division.
[**postAuthorizationRole**](AuthorizationApi.html#postAuthorizationRole) | **POST** /api/v2/authorization/roles/{roleId} | Bulk-grant subjects and divisions with an organization role.
[**postAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#postAuthorizationRoleComparedefaultRightRoleId) | **POST** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an unsaved org role to default role comparison
[**postAuthorizationRoles**](AuthorizationApi.html#postAuthorizationRoles) | **POST** /api/v2/authorization/roles | Create an organization role.
[**postAuthorizationRolesDefault**](AuthorizationApi.html#postAuthorizationRolesDefault) | **POST** /api/v2/authorization/roles/default | Restores all default roles
[**postAuthorizationSubjectDivisionRole**](AuthorizationApi.html#postAuthorizationSubjectDivisionRole) | **POST** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Make a grant of a role in a division
[**putAuthorizationDivision**](AuthorizationApi.html#putAuthorizationDivision) | **PUT** /api/v2/authorization/divisions/{divisionId} | Update a division.
[**putAuthorizationRole**](AuthorizationApi.html#putAuthorizationRole) | **PUT** /api/v2/authorization/roles/{roleId} | Update an organization role.
[**putAuthorizationRoleUsersAdd**](AuthorizationApi.html#putAuthorizationRoleUsersAdd) | **PUT** /api/v2/authorization/roles/{roleId}/users/add | Sets the users for the role
[**putAuthorizationRoleUsersRemove**](AuthorizationApi.html#putAuthorizationRoleUsersRemove) | **PUT** /api/v2/authorization/roles/{roleId}/users/remove | Removes the users from the role
[**putAuthorizationRolesDefault**](AuthorizationApi.html#putAuthorizationRolesDefault) | **PUT** /api/v2/authorization/roles/default | Restore specified default roles
[**putUserRoles**](AuthorizationApi.html#putUserRoles) | **PUT** /api/v2/users/{userId}/roles | Sets the user&#39;s roles
{: class="table table-striped"}

<a name="deleteAuthorizationDivision"></a>

# void deleteAuthorizationDivision(divisionId)



DELETE /api/v2/authorization/divisions/{divisionId}

Delete a division.



Requires ANY permissions: 

* authorization:division:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID

apiInstance.deleteAuthorizationDivision(divisionId)
  .then(() => {
    console.log('deleteAuthorizationDivision returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAuthorizationDivision');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAuthorizationRole"></a>

# void deleteAuthorizationRole(roleId)



DELETE /api/v2/authorization/roles/{roleId}

Delete an organization role.



Requires ANY permissions: 

* admin
* role_manager
* authorization:role:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID

apiInstance.deleteAuthorizationRole(roleId)
  .then(() => {
    console.log('deleteAuthorizationRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAuthorizationRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAuthorizationSubjectDivisionRole"></a>

# void deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)



DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Delete a grant of a role in a division



Requires ANY permissions: 

* authorization:grant:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let divisionId = "divisionId_example"; // String | the id of the division of the grant
let roleId = "roleId_example"; // String | the id of the role of the grant

apiInstance.deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)
  .then(() => {
    console.log('deleteAuthorizationSubjectDivisionRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAuthorizationSubjectDivisionRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **divisionId** | **String** | the id of the division of the grant |  |
 **roleId** | **String** | the id of the role of the grant |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoles"></a>

# void deleteUserRoles(userId)



DELETE /api/v2/users/{userId}/roles

Removes all the roles from the user.



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteUserRoles(userId)
  .then(() => {
    console.log('deleteUserRoles returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserRoles');
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

<a name="getAuthorizationDivision"></a>

# AuthzDivision getAuthorizationDivision(divisionId, opts)



GET /api/v2/authorization/divisions/{divisionId}

Returns an authorization division.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let opts = { 
  'objectCount': false // Boolean | Get count of objects in this division, grouped by type
};

apiInstance.getAuthorizationDivision(divisionId, opts)
  .then((data) => {
    console.log(`getAuthorizationDivision success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivision');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **objectCount** | **Boolean** | Get count of objects in this division, grouped by type | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="getAuthorizationDivisions"></a>

# AuthzDivisionEntityListing getAuthorizationDivisions(opts)



GET /api/v2/authorization/divisions

Retrieve a list of all divisions defined for the organization

Request specific divisions by id using a query param \&quot;id\&quot;, e.g.  ?id=5f777167-63be-4c24-ad41-374155d9e28b&amp;id=72e9fb25-c484-488d-9312-7acba82435b3

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'objectCount': false, // Boolean | Include the count of objects contained in the division
  'id': ["id_example"], // [String] | Optionally request specific divisions by their IDs
  'name': "name_example" // String | Search term to filter by division name
};

apiInstance.getAuthorizationDivisions(opts)
  .then((data) => {
    console.log(`getAuthorizationDivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **objectCount** | **Boolean** | Include the count of objects contained in the division | [optional] [default to false] |
 **id** | **[String]** | Optionally request specific divisions by their IDs | [optional]  |
 **name** | **String** | Search term to filter by division name | [optional]  |
{: class="table table-striped"}

### Return type

**AuthzDivisionEntityListing**

<a name="getAuthorizationDivisionsHome"></a>

# AuthzDivision getAuthorizationDivisionsHome()



GET /api/v2/authorization/divisions/home

Retrieve the home division for the organization.

Will not include object counts.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationDivisionsHome()
  .then((data) => {
    console.log(`getAuthorizationDivisionsHome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionsHome');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="getAuthorizationDivisionsLimit"></a>

# **&#39;Number&#39;** getAuthorizationDivisionsLimit()



GET /api/v2/authorization/divisions/limit

Returns the maximum allowed number of divisions.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationDivisionsLimit()
  .then((data) => {
    console.log(`getAuthorizationDivisionsLimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionsLimit');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**&#39;Number&#39;**

<a name="getAuthorizationDivisionspermittedMe"></a>

# [AuthzDivision] getAuthorizationDivisionspermittedMe(permission, opts)



GET /api/v2/authorization/divisionspermitted/me

Returns whether or not current user can perform the specified action(s).



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'name': "name_example" // String | Search term to filter by division name
};

apiInstance.getAuthorizationDivisionspermittedMe(permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **name** | **String** | Search term to filter by division name | [optional]  |
{: class="table table-striped"}

### Return type

**[AuthzDivision]**

<a name="getAuthorizationDivisionspermittedSubjectId"></a>

# [AuthzDivision] getAuthorizationDivisionspermittedSubjectId(subjectId, permission, opts)



GET /api/v2/authorization/divisionspermitted/{subjectId}

Returns whether or not specified user can perform the specified action(s).



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'name': "name_example" // String | Search term to filter by division name
};

apiInstance.getAuthorizationDivisionspermittedSubjectId(subjectId, permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedSubjectId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **name** | **String** | Search term to filter by division name | [optional]  |
{: class="table table-striped"}

### Return type

**[AuthzDivision]**

<a name="getAuthorizationPermissions"></a>

# PermissionCollectionEntityListing getAuthorizationPermissions(opts)



GET /api/v2/authorization/permissions

Get all permissions.

Retrieve a list of all permission defined in the system.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getAuthorizationPermissions(opts)
  .then((data) => {
    console.log(`getAuthorizationPermissions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPermissions');
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

**PermissionCollectionEntityListing**

<a name="getAuthorizationProducts"></a>

# OrganizationProductEntityListing getAuthorizationProducts()



GET /api/v2/authorization/products

Get the list of enabled products

Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationProducts()
  .then((data) => {
    console.log(`getAuthorizationProducts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationProducts');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OrganizationProductEntityListing**

<a name="getAuthorizationRole"></a>

# DomainOrganizationRole getAuthorizationRole(roleId)



GET /api/v2/authorization/roles/{roleId}

Get a single organization role.

Get the organization role specified by its ID.

Requires ANY permissions: 

* authorization:role:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID

apiInstance.getAuthorizationRole(roleId)
  .then((data) => {
    console.log(`getAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="getAuthorizationRoleComparedefaultRightRoleId"></a>

# DomainOrgRoleDifference getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)



GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an org role to default role comparison

Compares any organization role to a default role id and show differences

Requires ANY permissions: 

* authorization:role:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let leftRoleId = "leftRoleId_example"; // String | Left Role ID
let rightRoleId = "rightRoleId_example"; // String | Right Role id

apiInstance.getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)
  .then((data) => {
    console.log(`getAuthorizationRoleComparedefaultRightRoleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRoleComparedefaultRightRoleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String** | Left Role ID |  |
 **rightRoleId** | **String** | Right Role id |  |
{: class="table table-striped"}

### Return type

**DomainOrgRoleDifference**

<a name="getAuthorizationRoleSubjectgrants"></a>

# SubjectDivisionGrantsEntityListing getAuthorizationRoleSubjectgrants(roleId, opts)



GET /api/v2/authorization/roles/{roleId}/subjectgrants

Get the subjects&#39; granted divisions in the specified role.

Includes the divisions for which the subject has a grant.

Requires ANY permissions: 

* authorization:role:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getAuthorizationRoleSubjectgrants(roleId, opts)
  .then((data) => {
    console.log(`getAuthorizationRoleSubjectgrants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRoleSubjectgrants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**SubjectDivisionGrantsEntityListing**

<a name="getAuthorizationRoleUsers"></a>

# UserEntityListing getAuthorizationRoleUsers(roleId, opts)



GET /api/v2/authorization/roles/{roleId}/users

Get a list of the users in a specified role.

Get an array of the UUIDs of the users in the specified role.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getAuthorizationRoleUsers(roleId, opts)
  .then((data) => {
    console.log(`getAuthorizationRoleUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRoleUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getAuthorizationRoles"></a>

# OrganizationRoleEntityListing getAuthorizationRoles(opts)



GET /api/v2/authorization/roles

Retrieve a list of all roles defined for the organization



Requires ANY permissions: 

* authorization:role:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | 
  'permission': ["permission_example"], // [String] | 
  'defaultRoleId': ["defaultRoleId_example"], // [String] | 
  'userCount': true, // Boolean | 
  'id': ["id_example"] // [String] | id
};

apiInstance.getAuthorizationRoles(opts)
  .then((data) => {
    console.log(`getAuthorizationRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **name** | **String** |  | [optional]  |
 **permission** | **[String]** |  | [optional]  |
 **defaultRoleId** | **[String]** |  | [optional]  |
 **userCount** | **Boolean** |  | [optional] [default to true] |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="getAuthorizationSubject"></a>

# AuthzSubject getAuthorizationSubject(subjectId)



GET /api/v2/authorization/subjects/{subjectId}

Returns a listing of roles and permissions for a user.



Requires ANY permissions: 

* authorization:grant:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)

apiInstance.getAuthorizationSubject(subjectId)
  .then((data) => {
    console.log(`getAuthorizationSubject success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubject');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
{: class="table table-striped"}

### Return type

**AuthzSubject**

<a name="getAuthorizationSubjectsMe"></a>

# AuthzSubject getAuthorizationSubjectsMe()



GET /api/v2/authorization/subjects/me

Returns a listing of roles and permissions for the currently authenticated user.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationSubjectsMe()
  .then((data) => {
    console.log(`getAuthorizationSubjectsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubjectsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**AuthzSubject**

<a name="getAuthorizationSubjectsRolecounts"></a>

# **{&#39;String&#39;: Object}** getAuthorizationSubjectsRolecounts(opts)



GET /api/v2/authorization/subjects/rolecounts

Get the count of roles granted to a list of subjects



Requires ANY permissions: 

* authorization:grant:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'id': ["id_example"] // [String] | id
};

apiInstance.getAuthorizationSubjectsRolecounts(opts)
  .then((data) => {
    console.log(`getAuthorizationSubjectsRolecounts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubjectsRolecounts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getUserRoles"></a>

# UserAuthorization getUserRoles(userId)



GET /api/v2/users/{userId}/roles

Returns a listing of roles and permissions for a user.



Requires ANY permissions: 

* authorization:grant:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserRoles(userId)
  .then((data) => {
    console.log(`getUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="patchAuthorizationRole"></a>

# DomainOrganizationRole patchAuthorizationRole(roleId, body)



PATCH /api/v2/authorization/roles/{roleId}

Patch Organization Role for needsUpdate Field

Patch Organization Role for needsUpdate Field

Requires ANY permissions: 

* admin
* role_manager
* authorization:role:edit


### Request Body Schema

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DomainOrganizationRole <a href="#" onclick="return copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "memberCount": Number, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundMessagingAddresses": { 
            "smsAddress": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "certifications": [String], 
            "biography": { 
              "biography": String, 
              "interests": [String], 
              "hobbies": [String], 
              "spouse": String, 
            },  
            "employerInfo": { 
              "officialName": String, 
              "employeeId": String, 
              "employeeType": String, 
              "dateHire": String, 
            },  
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "languagePreference": String, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "memberCount": Number, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundMessagingAddresses": { 
              "smsAddress": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "memberCount": Number, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundMessagingAddresses": { 
                "smsAddress": UriReference, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "certifications": [String], 
                "biography": Biography, 
                "employerInfo": EmployerInfo, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "skills": [UserRoutingSkill], 
                "languages": [UserRoutingLanguage], 
                "acdAutoAnswer": Boolean, 
                "languagePreference": String, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "memberCount": Number, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundMessagingAddresses": QueueMessagingAddresses, 
                "outboundEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = {}; // Object | Organization role

apiInstance.patchAuthorizationRole(roleId, body)
  .then((data) => {
    console.log(`patchAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAuthorizationRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="postAuthorizationDivisionObject"></a>

# void postAuthorizationDivisionObject(divisionId, objectType, body)



POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}

Assign a list of objects to a division

Set the division of a specified list of objects. The objects must all be of the same type, one of:  CAMPAIGN, MANAGEMENTUNIT, FLOW, QUEUE, or USER.  The body of the request is a list of object IDs, which are expected to be  GUIDs, e.g. [\&quot;206ce31f-61ec-40ed-a8b1-be6f06303998\&quot;,\&quot;250a754e-f5e4-4f51-800f-a92f09d3bf8c\&quot;]

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let objectType = "objectType_example"; // String | The type of the objects. Must be one of the valid object types
let body = [{}]; // Object | Object Id List

apiInstance.postAuthorizationDivisionObject(divisionId, objectType, body)
  .then(() => {
    console.log('postAuthorizationDivisionObject returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationDivisionObject');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **objectType** | **String** | The type of the objects. Must be one of the valid object types | <br />**Values**: QUEUE, CAMPAIGN, CONTACTLIST, DNCLIST, MANAGEMENTUNIT, FLOW, USER |
 **body** | **Object** | Object Id List |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationDivisions"></a>

# AuthzDivision postAuthorizationDivisions(body)



POST /api/v2/authorization/divisions

Create a division.



Requires ALL permissions: 

* authorization:division:add
* authorization:grant:add


### Request Body Schema

<script type="text/javascript">
	function copyAuthzDivisionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AuthzDivisionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AuthzDivision <a href="#" onclick="return copyAuthzDivisionExample()">Copy</a>

<div id="AuthzDivisionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "homeDivision": Boolean, 
  "objectCounts": {String: Number}, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let body = {}; // Object | Division

apiInstance.postAuthorizationDivisions(body)
  .then((data) => {
    console.log(`postAuthorizationDivisions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationDivisions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Division |  |
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="postAuthorizationRole"></a>

# void postAuthorizationRole(roleId, body, opts)



POST /api/v2/authorization/roles/{roleId}

Bulk-grant subjects and divisions with an organization role.



Requires ANY permissions: 

* authorization:grant:add


### Request Body Schema

<script type="text/javascript">
	function copySubjectDivisionsExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SubjectDivisionsExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SubjectDivisions <a href="#" onclick="return copySubjectDivisionsExample()">Copy</a>

<div id="SubjectDivisionsExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "subjectIds": [String], 
  "divisionIds": [String], 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = {}; // Object | Subjects and Divisions
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is, PC_GROUP or PC_USER
};

apiInstance.postAuthorizationRole(roleId, body, opts)
  .then(() => {
    console.log('postAuthorizationRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | Subjects and Divisions |  |
 **subjectType** | **String** | what the type of the subject is, PC_GROUP or PC_USER | [optional] [default to PC_USER] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationRoleComparedefaultRightRoleId"></a>

# DomainOrgRoleDifference postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)



POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an unsaved org role to default role comparison

Allows users to compare their existing roles in an unsaved state to its default role

Requires ANY permissions: 

* authorization:role:view


### Request Body Schema

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DomainOrganizationRole <a href="#" onclick="return copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "memberCount": Number, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundMessagingAddresses": { 
            "smsAddress": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "certifications": [String], 
            "biography": { 
              "biography": String, 
              "interests": [String], 
              "hobbies": [String], 
              "spouse": String, 
            },  
            "employerInfo": { 
              "officialName": String, 
              "employeeId": String, 
              "employeeType": String, 
              "dateHire": String, 
            },  
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "languagePreference": String, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "memberCount": Number, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundMessagingAddresses": { 
              "smsAddress": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "memberCount": Number, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundMessagingAddresses": { 
                "smsAddress": UriReference, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "certifications": [String], 
                "biography": Biography, 
                "employerInfo": EmployerInfo, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "skills": [UserRoutingSkill], 
                "languages": [UserRoutingLanguage], 
                "acdAutoAnswer": Boolean, 
                "languagePreference": String, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "memberCount": Number, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundMessagingAddresses": QueueMessagingAddresses, 
                "outboundEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let leftRoleId = "leftRoleId_example"; // String | Left Role ID
let rightRoleId = "rightRoleId_example"; // String | Right Role id
let body = {}; // Object | Organization role

apiInstance.postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)
  .then((data) => {
    console.log(`postAuthorizationRoleComparedefaultRightRoleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationRoleComparedefaultRightRoleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String** | Left Role ID |  |
 **rightRoleId** | **String** | Right Role id |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrgRoleDifference**

<a name="postAuthorizationRoles"></a>

# DomainOrganizationRole postAuthorizationRoles(body)



POST /api/v2/authorization/roles

Create an organization role.



Requires ANY permissions: 

* authorization:role:add


### Request Body Schema

<script type="text/javascript">
	function copyDomainOrganizationRoleCreateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DomainOrganizationRoleCreateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DomainOrganizationRoleCreate <a href="#" onclick="return copyDomainOrganizationRoleCreateExample()">Copy</a>

<div id="DomainOrganizationRoleCreateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "memberCount": Number, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundMessagingAddresses": { 
            "smsAddress": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "certifications": [String], 
            "biography": { 
              "biography": String, 
              "interests": [String], 
              "hobbies": [String], 
              "spouse": String, 
            },  
            "employerInfo": { 
              "officialName": String, 
              "employeeId": String, 
              "employeeType": String, 
              "dateHire": String, 
            },  
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "languagePreference": String, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "memberCount": Number, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundMessagingAddresses": { 
              "smsAddress": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "memberCount": Number, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundMessagingAddresses": { 
                "smsAddress": UriReference, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "certifications": [String], 
                "biography": Biography, 
                "employerInfo": EmployerInfo, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "skills": [UserRoutingSkill], 
                "languages": [UserRoutingLanguage], 
                "acdAutoAnswer": Boolean, 
                "languagePreference": String, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "memberCount": Number, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundMessagingAddresses": QueueMessagingAddresses, 
                "outboundEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let body = {}; // Object | Organization role

apiInstance.postAuthorizationRoles(body)
  .then((data) => {
    console.log(`postAuthorizationRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="postAuthorizationRolesDefault"></a>

# OrganizationRoleEntityListing postAuthorizationRolesDefault(opts)



POST /api/v2/authorization/roles/default

Restores all default roles

This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.

Requires ANY permissions: 

* authorization:role:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'force': false // Boolean | Restore default roles
};

apiInstance.postAuthorizationRolesDefault(opts)
  .then((data) => {
    console.log(`postAuthorizationRolesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationRolesDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **force** | **Boolean** | Restore default roles | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="postAuthorizationSubjectDivisionRole"></a>

# void postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)



POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Make a grant of a role in a division



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let divisionId = "divisionId_example"; // String | the id of the division to which to make the grant
let roleId = "roleId_example"; // String | the id of the role to grant
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is, PC_GROUP or PC_USER
};

apiInstance.postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)
  .then(() => {
    console.log('postAuthorizationSubjectDivisionRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectDivisionRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **divisionId** | **String** | the id of the division to which to make the grant |  |
 **roleId** | **String** | the id of the role to grant |  |
 **subjectType** | **String** | what the type of the subject is, PC_GROUP or PC_USER | [optional] [default to PC_USER] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putAuthorizationDivision"></a>

# AuthzDivision putAuthorizationDivision(divisionId, body)



PUT /api/v2/authorization/divisions/{divisionId}

Update a division.



Requires ANY permissions: 

* authorization:division:edit


### Request Body Schema

<script type="text/javascript">
	function copyAuthzDivisionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AuthzDivisionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AuthzDivision <a href="#" onclick="return copyAuthzDivisionExample()">Copy</a>

<div id="AuthzDivisionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "homeDivision": Boolean, 
  "objectCounts": {String: Number}, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let body = {}; // Object | Updated division data

apiInstance.putAuthorizationDivision(divisionId, body)
  .then((data) => {
    console.log(`putAuthorizationDivision success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationDivision');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **body** | **Object** | Updated division data |  |
{: class="table table-striped"}

### Return type

**AuthzDivision**

<a name="putAuthorizationRole"></a>

# DomainOrganizationRole putAuthorizationRole(roleId, body)



PUT /api/v2/authorization/roles/{roleId}

Update an organization role.

Update

Requires ANY permissions: 

* admin
* role_manager
* authorization:role:edit


### Request Body Schema

<script type="text/javascript">
	function copyDomainOrganizationRoleUpdateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DomainOrganizationRoleUpdateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DomainOrganizationRoleUpdate <a href="#" onclick="return copyDomainOrganizationRoleUpdateExample()">Copy</a>

<div id="DomainOrganizationRoleUpdateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "memberCount": Number, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundMessagingAddresses": { 
            "smsAddress": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "certifications": [String], 
            "biography": { 
              "biography": String, 
              "interests": [String], 
              "hobbies": [String], 
              "spouse": String, 
            },  
            "employerInfo": { 
              "officialName": String, 
              "employeeId": String, 
              "employeeType": String, 
              "dateHire": String, 
            },  
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "languagePreference": String, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "memberCount": Number, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundMessagingAddresses": { 
              "smsAddress": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "memberCount": Number, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundMessagingAddresses": { 
                "smsAddress": UriReference, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "certifications": [String], 
                "biography": Biography, 
                "employerInfo": EmployerInfo, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "skills": [UserRoutingSkill], 
                "languages": [UserRoutingLanguage], 
                "acdAutoAnswer": Boolean, 
                "languagePreference": String, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "memberCount": Number, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundMessagingAddresses": QueueMessagingAddresses, 
                "outboundEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = {}; // Object | Organization role

apiInstance.putAuthorizationRole(roleId, body)
  .then((data) => {
    console.log(`putAuthorizationRole success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | Organization role |  |
{: class="table table-striped"}

### Return type

**DomainOrganizationRole**

<a name="putAuthorizationRoleUsersAdd"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersAdd(roleId, body)



PUT /api/v2/authorization/roles/{roleId}/users/add

Sets the users for the role



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = [{}]; // Object | List of user IDs

apiInstance.putAuthorizationRoleUsersAdd(roleId, body)
  .then((data) => {
    console.log(`putAuthorizationRoleUsersAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationRoleUsersAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRoleUsersRemove"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersRemove(roleId, body)



PUT /api/v2/authorization/roles/{roleId}/users/remove

Removes the users from the role



Requires ANY permissions: 

* authorization:grant:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = [{}]; // Object | List of user IDs

apiInstance.putAuthorizationRoleUsersRemove(roleId, body)
  .then((data) => {
    console.log(`putAuthorizationRoleUsersRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationRoleUsersRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String** | Role ID |  |
 **body** | **Object** | List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRolesDefault"></a>

# OrganizationRoleEntityListing putAuthorizationRolesDefault(body)



PUT /api/v2/authorization/roles/default

Restore specified default roles



Requires ANY permissions: 

* authorization:role:edit


### Request Body Schema

<script type="text/javascript">
	function copyDomainOrganizationRoleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DomainOrganizationRoleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DomainOrganizationRole <a href="#" onclick="return copyDomainOrganizationRoleExample()">Copy</a>

<div id="DomainOrganizationRoleExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "defaultRoleId": String, 
  "permissions": [String], 
  "permissionPolicies": { 
    "domain": String, 
    "entityName": String, 
    "policyName": String, 
    "policyDescription": String, 
    "actionSet": [String], 
    "namedResources": [String], 
    "allowConditions": Boolean, 
    "resourceConditionNode": { 
      "variableName": String, 
      "operator": String, 
      "operands": { 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "queue": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "memberCount": Number, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundMessagingAddresses": { 
            "smsAddress": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
        "value": String, 
        "type": String, 
      },  
      "conjunction": String, 
      "terms": { 
        "variableName": String, 
        "operator": String, 
        "operands": { 
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "certifications": [String], 
            "biography": { 
              "biography": String, 
              "interests": [String], 
              "hobbies": [String], 
              "spouse": String, 
            },  
            "employerInfo": { 
              "officialName": String, 
              "employeeId": String, 
              "employeeType": String, 
              "dateHire": String, 
            },  
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "languagePreference": String, 
            "selfUri": String, 
          },  
          "queue": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "description": String, 
            "dateCreated": Date, 
            "dateModified": Date, 
            "modifiedBy": String, 
            "createdBy": String, 
            "memberCount": Number, 
            "mediaSettings": { 
              "alertingTimeoutSeconds": Number, 
              "serviceLevel": { 
                "percentage": Number, 
                "durationMs": Number, 
              },  
            },  
            "bullseye": { 
              "rings": { 
                "expansionCriteria": [ExpansionCriterium], 
                "actions": Actions, 
              },  
            },  
            "acwSettings": { 
              "wrapupPrompt": String, 
              "timeoutMs": Number, 
            },  
            "skillEvaluationMethod": String, 
            "queueFlow": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "whisperPrompt": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "autoAnswerOnly": Boolean, 
            "callingPartyName": String, 
            "callingPartyNumber": String, 
            "defaultScripts": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "publishedDate": Date, 
              "versionDate": Date, 
              "startPageId": String, 
              "startPageName": String, 
              "features": Object, 
              "variables": Object, 
              "customActions": Object, 
              "pages": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "rootContainer": {String: Object}, 
                "properties": {String: Object}, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "outboundMessagingAddresses": { 
              "smsAddress": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
            },  
            "outboundEmailAddress": { 
              "domain": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "route": { 
                "id": String, 
                "name": String, 
                "pattern": String, 
                "queue": UriReference, 
                "priority": Number, 
                "skills": [UriReference], 
                "language": UriReference, 
                "fromName": String, 
                "fromEmail": String, 
                "flow": UriReference, 
                "replyEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
            },  
            "selfUri": String, 
          },  
          "value": String, 
          "type": String, 
        },  
        "conjunction": String, 
        "terms": { 
          "variableName": String, 
          "operator": String, 
          "operands": { 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "queue": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "description": String, 
              "dateCreated": Date, 
              "dateModified": Date, 
              "modifiedBy": String, 
              "createdBy": String, 
              "memberCount": Number, 
              "mediaSettings": { 
                "alertingTimeoutSeconds": Number, 
                "serviceLevel": ServiceLevel, 
              },  
              "bullseye": { 
                "rings": [Ring], 
              },  
              "acwSettings": { 
                "wrapupPrompt": String, 
                "timeoutMs": Number, 
              },  
              "skillEvaluationMethod": String, 
              "queueFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "whisperPrompt": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "autoAnswerOnly": Boolean, 
              "callingPartyName": String, 
              "callingPartyNumber": String, 
              "defaultScripts": { 
                "id": String, 
                "name": String, 
                "versionId": String, 
                "createdDate": Date, 
                "modifiedDate": Date, 
                "publishedDate": Date, 
                "versionDate": Date, 
                "startPageId": String, 
                "startPageName": String, 
                "features": Object, 
                "variables": Object, 
                "customActions": Object, 
                "pages": [Page], 
                "selfUri": String, 
              },  
              "outboundMessagingAddresses": { 
                "smsAddress": UriReference, 
              },  
              "outboundEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
            "value": String, 
            "type": String, 
          },  
          "conjunction": String, 
          "terms": { 
            "variableName": String, 
            "operator": String, 
            "operands": { 
              "user": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "certifications": [String], 
                "biography": Biography, 
                "employerInfo": EmployerInfo, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "skills": [UserRoutingSkill], 
                "languages": [UserRoutingLanguage], 
                "acdAutoAnswer": Boolean, 
                "languagePreference": String, 
                "selfUri": String, 
              },  
              "queue": { 
                "id": String, 
                "name": String, 
                "division": Division, 
                "description": String, 
                "dateCreated": Date, 
                "dateModified": Date, 
                "modifiedBy": String, 
                "createdBy": String, 
                "memberCount": Number, 
                "mediaSettings": {String: MediaSetting}, 
                "bullseye": Bullseye, 
                "acwSettings": AcwSettings, 
                "skillEvaluationMethod": String, 
                "queueFlow": UriReference, 
                "whisperPrompt": UriReference, 
                "autoAnswerOnly": Boolean, 
                "callingPartyName": String, 
                "callingPartyNumber": String, 
                "defaultScripts": {String: Script}, 
                "outboundMessagingAddresses": QueueMessagingAddresses, 
                "outboundEmailAddress": QueueEmailAddress, 
                "selfUri": String, 
              },  
              "value": String, 
              "type": String, 
            },  
            "conjunction": String, 
            "terms": { 
              "variableName": String, 
              "operator": String, 
              "operands": { 
                "user": User, 
                "queue": Queue, 
                "value": String, 
                "type": String, 
              },  
              "conjunction": String, 
              "terms": { 
                "variableName": String, 
                "operator": String, 
                "operands": [DomainResourceConditionValue], 
                "conjunction": String, 
                "terms": [DomainResourceConditionNode], 
              },  
            },  
          },  
        },  
      },  
    },  
  },  
  "userCount": Number, 
  "roleNeedsUpdate": Boolean, 
  "default": Boolean, 
  "base": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let body = [{}]; // Object | Organization roles list

apiInstance.putAuthorizationRolesDefault(body)
  .then((data) => {
    console.log(`putAuthorizationRolesDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationRolesDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization roles list |  |
{: class="table table-striped"}

### Return type

**OrganizationRoleEntityListing**

<a name="putUserRoles"></a>

# UserAuthorization putUserRoles(userId, body)



PUT /api/v2/users/{userId}/roles

Sets the user&#39;s roles



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | List of roles

apiInstance.putUserRoles(userId, body)
  .then((data) => {
    console.log(`putUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

