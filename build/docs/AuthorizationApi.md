# AuthorizationApi

# platformClient.AuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationDivision**](AuthorizationApi#deleteAuthorizationDivision) | **DELETE** /api/v2/authorization/divisions/{divisionId} | Delete a division.
[**deleteAuthorizationPoliciesTargetSubjectSubjectId**](AuthorizationApi#deleteAuthorizationPoliciesTargetSubjectSubjectId) | **DELETE** /api/v2/authorization/policies/targets/{targetName}/subject/{subjectId} | Delete an access control policy
[**deleteAuthorizationRole**](AuthorizationApi#deleteAuthorizationRole) | **DELETE** /api/v2/authorization/roles/{roleId} | Delete an organization role.
[**deleteAuthorizationSubjectDivisionRole**](AuthorizationApi#deleteAuthorizationSubjectDivisionRole) | **DELETE** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Delete a grant of a role in a division
[**getAuthorizationDivision**](AuthorizationApi#getAuthorizationDivision) | **GET** /api/v2/authorization/divisions/{divisionId} | Returns an authorization division.
[**getAuthorizationDivisionGrants**](AuthorizationApi#getAuthorizationDivisionGrants) | **GET** /api/v2/authorization/divisions/{divisionId}/grants | Gets all grants for a given division.
[**getAuthorizationDivisions**](AuthorizationApi#getAuthorizationDivisions) | **GET** /api/v2/authorization/divisions | Retrieve a list of all divisions defined for the organization
[**getAuthorizationDivisionsDeleted**](AuthorizationApi#getAuthorizationDivisionsDeleted) | **GET** /api/v2/authorization/divisions/deleted | Get a list of soft deleted divisions for the org
[**getAuthorizationDivisionsHome**](AuthorizationApi#getAuthorizationDivisionsHome) | **GET** /api/v2/authorization/divisions/home | Retrieve the home division for the organization.
[**getAuthorizationDivisionsLimit**](AuthorizationApi#getAuthorizationDivisionsLimit) | **GET** /api/v2/authorization/divisions/limit | Returns the maximum allowed number of divisions.
[**getAuthorizationDivisionsQuery**](AuthorizationApi#getAuthorizationDivisionsQuery) | **GET** /api/v2/authorization/divisions/query | Retrieve a list of all divisions defined for the organization with cursor
[**getAuthorizationDivisionspermittedMe**](AuthorizationApi#getAuthorizationDivisionspermittedMe) | **GET** /api/v2/authorization/divisionspermitted/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedMe**](AuthorizationApi#getAuthorizationDivisionspermittedPagedMe) | **GET** /api/v2/authorization/divisionspermitted/paged/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedSubjectId**](AuthorizationApi#getAuthorizationDivisionspermittedPagedSubjectId) | **GET** /api/v2/authorization/divisionspermitted/paged/{subjectId} | Returns which divisions the specified user has the given permission in.
[**getAuthorizationPermissions**](AuthorizationApi#getAuthorizationPermissions) | **GET** /api/v2/authorization/permissions | Get all permissions.
[**getAuthorizationPolicies**](AuthorizationApi#getAuthorizationPolicies) | **GET** /api/v2/authorization/policies | Get a page of access policies for an organization
[**getAuthorizationPoliciesSubjectSubjectId**](AuthorizationApi#getAuthorizationPoliciesSubjectSubjectId) | **GET** /api/v2/authorization/policies/subject/{subjectId} | Get a page of access policies for a given subject
[**getAuthorizationPoliciesTarget**](AuthorizationApi#getAuthorizationPoliciesTarget) | **GET** /api/v2/authorization/policies/targets/{targetName} | Get a page of access policies for a given policy target
[**getAuthorizationPoliciesTargetSubjectSubjectId**](AuthorizationApi#getAuthorizationPoliciesTargetSubjectSubjectId) | **GET** /api/v2/authorization/policies/targets/{targetName}/subject/{subjectId} | Get an access control policy for a specified resource target and subject
[**getAuthorizationPoliciesTargets**](AuthorizationApi#getAuthorizationPoliciesTargets) | **GET** /api/v2/authorization/policies/targets | Get a map of policy targets to valid attributes for those targets
[**getAuthorizationPolicy**](AuthorizationApi#getAuthorizationPolicy) | **GET** /api/v2/authorization/policies/{policyId} | Get an access control policy with the specified policy ID
[**getAuthorizationPolicyAttributes**](AuthorizationApi#getAuthorizationPolicyAttributes) | **GET** /api/v2/authorization/policies/{policyId}/attributes | Get the list of attributes used to evaluate an access control policy with the specified policy ID
[**getAuthorizationProducts**](AuthorizationApi#getAuthorizationProducts) | **GET** /api/v2/authorization/products | Get the list of enabled products
[**getAuthorizationRole**](AuthorizationApi#getAuthorizationRole) | **GET** /api/v2/authorization/roles/{roleId} | Get a single organization role.
[**getAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi#getAuthorizationRoleComparedefaultRightRoleId) | **GET** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an org role to default role comparison
[**getAuthorizationRoleSubjectgrants**](AuthorizationApi#getAuthorizationRoleSubjectgrants) | **GET** /api/v2/authorization/roles/{roleId}/subjectgrants | Get the subjects' granted divisions in the specified role.
[**getAuthorizationRoleUsers**](AuthorizationApi#getAuthorizationRoleUsers) | **GET** /api/v2/authorization/roles/{roleId}/users | Get a list of the users in a specified role.
[**getAuthorizationRoles**](AuthorizationApi#getAuthorizationRoles) | **GET** /api/v2/authorization/roles | Retrieve a list of all roles defined for the organization
[**getAuthorizationRolesSettings**](AuthorizationApi#getAuthorizationRolesSettings) | **GET** /api/v2/authorization/roles/settings | Get authorization role settings
[**getAuthorizationSettings**](AuthorizationApi#getAuthorizationSettings) | **GET** /api/v2/authorization/settings | Get authorization settings
[**getAuthorizationSubject**](AuthorizationApi#getAuthorizationSubject) | **GET** /api/v2/authorization/subjects/{subjectId} | Returns a listing of roles and permissions for a user.
[**getAuthorizationSubjectsMe**](AuthorizationApi#getAuthorizationSubjectsMe) | **GET** /api/v2/authorization/subjects/me | Returns a listing of roles and permissions for the currently authenticated user.
[**getAuthorizationSubjectsRolecounts**](AuthorizationApi#getAuthorizationSubjectsRolecounts) | **GET** /api/v2/authorization/subjects/rolecounts | Get the count of roles granted to a list of subjects
[**getUserRoles**](AuthorizationApi#getUserRoles) | **GET** /api/v2/users/{subjectId}/roles | Returns a listing of roles and permissions for a user.
[**patchAuthorizationRole**](AuthorizationApi#patchAuthorizationRole) | **PATCH** /api/v2/authorization/roles/{roleId} | Patch Organization Role for needsUpdate Field
[**patchAuthorizationSettings**](AuthorizationApi#patchAuthorizationSettings) | **PATCH** /api/v2/authorization/settings | Change authorization settings
[**postAuthorizationDivisionObject**](AuthorizationApi#postAuthorizationDivisionObject) | **POST** /api/v2/authorization/divisions/{divisionId}/objects/{objectType} | Assign a list of objects to a division
[**postAuthorizationDivisionRestore**](AuthorizationApi#postAuthorizationDivisionRestore) | **POST** /api/v2/authorization/divisions/{divisionId}/restore | Recreate a previously deleted division.
[**postAuthorizationDivisions**](AuthorizationApi#postAuthorizationDivisions) | **POST** /api/v2/authorization/divisions | Create a division.
[**postAuthorizationPoliciesTarget**](AuthorizationApi#postAuthorizationPoliciesTarget) | **POST** /api/v2/authorization/policies/targets/{targetName} | Add an access control policy for a specified resource target and subject
[**postAuthorizationPoliciesTargetValidate**](AuthorizationApi#postAuthorizationPoliciesTargetValidate) | **POST** /api/v2/authorization/policies/targets/{targetName}/validate | Validate the conditions and attributes of an access control policy for a specified resource target
[**postAuthorizationPolicySimulate**](AuthorizationApi#postAuthorizationPolicySimulate) | **POST** /api/v2/authorization/policies/{policyId}/simulate | Simulate a request and evaluate the specified policy ID against the provided values
[**postAuthorizationRole**](AuthorizationApi#postAuthorizationRole) | **POST** /api/v2/authorization/roles/{roleId} | Bulk-grant subjects and divisions with an organization role.
[**postAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi#postAuthorizationRoleComparedefaultRightRoleId) | **POST** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an unsaved org role to default role comparison
[**postAuthorizationRoles**](AuthorizationApi#postAuthorizationRoles) | **POST** /api/v2/authorization/roles | Create an organization role.
[**postAuthorizationRolesDefault**](AuthorizationApi#postAuthorizationRolesDefault) | **POST** /api/v2/authorization/roles/default | Restores all default roles
[**postAuthorizationSubjectBulkadd**](AuthorizationApi#postAuthorizationSubjectBulkadd) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkadd | Bulk-grant roles and divisions to a subject.
[**postAuthorizationSubjectBulkremove**](AuthorizationApi#postAuthorizationSubjectBulkremove) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkremove | Bulk-remove grants from a subject.
[**postAuthorizationSubjectBulkreplace**](AuthorizationApi#postAuthorizationSubjectBulkreplace) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkreplace | Replace subject's roles and divisions with the exact list supplied in the request.
[**postAuthorizationSubjectDivisionRole**](AuthorizationApi#postAuthorizationSubjectDivisionRole) | **POST** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Make a grant of a role in a division
[**putAuthorizationDivision**](AuthorizationApi#putAuthorizationDivision) | **PUT** /api/v2/authorization/divisions/{divisionId} | Update a division.
[**putAuthorizationPoliciesTarget**](AuthorizationApi#putAuthorizationPoliciesTarget) | **PUT** /api/v2/authorization/policies/targets/{targetName} | Add an access control policy for a specified resource target and subject, overwriting any existing policy
[**putAuthorizationPolicy**](AuthorizationApi#putAuthorizationPolicy) | **PUT** /api/v2/authorization/policies/{policyId} | Update an access control policy with a given ID
[**putAuthorizationRole**](AuthorizationApi#putAuthorizationRole) | **PUT** /api/v2/authorization/roles/{roleId} | Update an organization role.
[**putAuthorizationRoleUsersAdd**](AuthorizationApi#putAuthorizationRoleUsersAdd) | **PUT** /api/v2/authorization/roles/{roleId}/users/add | Sets the users for the role
[**putAuthorizationRoleUsersRemove**](AuthorizationApi#putAuthorizationRoleUsersRemove) | **PUT** /api/v2/authorization/roles/{roleId}/users/remove | Removes the users from the role
[**putAuthorizationRolesDefault**](AuthorizationApi#putAuthorizationRolesDefault) | **PUT** /api/v2/authorization/roles/default | Restore specified default roles
[**putAuthorizationRolesSettings**](AuthorizationApi#putAuthorizationRolesSettings) | **PUT** /api/v2/authorization/roles/settings | Change authorization role settings
[**putUserRoles**](AuthorizationApi#putUserRoles) | **PUT** /api/v2/users/{subjectId}/roles | Sets the user's roles



## deleteAuthorizationDivision

> void deleteAuthorizationDivision(divisionId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let opts = { 
  'force': false // Boolean | DEPRECATED -  Force delete this division. Warning: This option may cause any remaining objects in this division to be inaccessible.
};

apiInstance.deleteAuthorizationDivision(divisionId, opts)
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
 **force** | **Boolean** | DEPRECATED -  Force delete this division. Warning: This option may cause any remaining objects in this division to be inaccessible. | [optional] [default to false] |

### Return type

void (no response body)


## deleteAuthorizationPoliciesTargetSubjectSubjectId

> void deleteAuthorizationPoliciesTargetSubjectSubjectId(targetName, subjectId)


DELETE /api/v2/authorization/policies/targets/{targetName}/subject/{subjectId}

Delete an access control policy

deleteAuthorizationPoliciesTargetSubjectSubjectId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action target to which the policy is applied
let subjectId = "subjectId_example"; // String | The ID of the subject to which the policy is applied

apiInstance.deleteAuthorizationPoliciesTargetSubjectSubjectId(targetName, subjectId)
  .then(() => {
    console.log('deleteAuthorizationPoliciesTargetSubjectSubjectId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAuthorizationPoliciesTargetSubjectSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action target to which the policy is applied |  |
 **subjectId** | **String** | The ID of the subject to which the policy is applied |  |

### Return type

void (no response body)


## deleteAuthorizationRole

> void deleteAuthorizationRole(roleId)


DELETE /api/v2/authorization/roles/{roleId}

Delete an organization role.

Requires ANY permissions:

* authorization:role:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteAuthorizationSubjectDivisionRole

> void deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)


DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Delete a grant of a role in a division

Requires ALL permissions:

* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getAuthorizationDivision

> AuthzDivision getAuthorizationDivision(divisionId, opts)


GET /api/v2/authorization/divisions/{divisionId}

Returns an authorization division.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectCount** | **Boolean** | Get count of objects in this division, grouped by type | [optional] [default to false]<br />**Values**: true, false |

### Return type

**AuthzDivision**


## getAuthorizationDivisionGrants

> AuthzDivisionGrantEntityListing getAuthorizationDivisionGrants(divisionId, opts)


GET /api/v2/authorization/divisions/{divisionId}/grants

Gets all grants for a given division.

Returns all grants assigned to a given division. Maximum page size is 500.

Requires ANY permissions:

* authorization:grant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionGrants(divisionId, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionGrants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionGrants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**AuthzDivisionGrantEntityListing**


## getAuthorizationDivisions

> AuthzDivisionEntityListing getAuthorizationDivisions(opts)


GET /api/v2/authorization/divisions

Retrieve a list of all divisions defined for the organization

Request specific divisions by id using a query param "id", e.g.  ?id=5f777167-63be-4c24-ad41-374155d9e28b&id=72e9fb25-c484-488d-9312-7acba82435b3

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AuthzDivisionEntityListing**


## getAuthorizationDivisionsDeleted

> AuthzDivisionEntityListing getAuthorizationDivisionsDeleted(opts)


GET /api/v2/authorization/divisions/deleted

Get a list of soft deleted divisions for the org

Requires ANY permissions:

* authorization:divisionDeleted:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionsDeleted(opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionsDeleted success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionsDeleted');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**AuthzDivisionEntityListing**


## getAuthorizationDivisionsHome

> AuthzDivision getAuthorizationDivisionsHome()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AuthzDivision**


## getAuthorizationDivisionsLimit

> **&#39;Number&#39;** getAuthorizationDivisionsLimit()


GET /api/v2/authorization/divisions/limit

Returns the maximum allowed number of divisions.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;Number&#39;**


## getAuthorizationDivisionsQuery

> AuthzDivisionCursorListing getAuthorizationDivisionsQuery(opts)


GET /api/v2/authorization/divisions/query

Retrieve a list of all divisions defined for the organization with cursor

Use "after" and "before" param to fetch next/previous page}

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'id': ["id_example"], // [String] | Optionally request specific divisions by their IDs
  'name': "name_example" // String | Optionally request specific divisions by division name
};

apiInstance.getAuthorizationDivisionsQuery(opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **id** | **[String]** | Optionally request specific divisions by their IDs | [optional]  |
 **name** | **String** | Optionally request specific divisions by division name | [optional]  |

### Return type

**AuthzDivisionCursorListing**


## getAuthorizationDivisionspermittedMe

> [AuthzDivision] getAuthorizationDivisionspermittedMe(permission, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/authorization/divisionspermitted/me

Returns which divisions the current user has the given permission in.

This route is deprecated, use authorization/divisionspermitted/paged/me instead.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[AuthzDivision]**


## getAuthorizationDivisionspermittedPagedMe

> DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedMe(permission, opts)


GET /api/v2/authorization/divisionspermitted/paged/me

Returns which divisions the current user has the given permission in.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionspermittedPagedMe(permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedPagedMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedPagedMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**DivsPermittedEntityListing**


## getAuthorizationDivisionspermittedPagedSubjectId

> DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/authorization/divisionspermitted/paged/{subjectId}

Returns which divisions the specified user has the given permission in.

This route is deprecated, use authorization/divisionspermitted/paged/me instead.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedPagedSubjectId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedPagedSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**DivsPermittedEntityListing**


## getAuthorizationPermissions

> PermissionCollectionEntityListing getAuthorizationPermissions(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'queryType': "queryType_example", // String | Query filter type
  'query': "query_example" // String | Comma-separated list of permissions or domains to query
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
 **queryType** | **String** | Query filter type | [optional] <br />**Values**: domain, permission |
 **query** | **String** | Comma-separated list of permissions or domains to query | [optional]  |

### Return type

**PermissionCollectionEntityListing**


## getAuthorizationPolicies

> AuthorizationPolicyEntityListing getAuthorizationPolicies(opts)


GET /api/v2/authorization/policies

Get a page of access policies for an organization

getAuthorizationPolicies is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getAuthorizationPolicies(opts)
  .then((data) => {
    console.log(`getAuthorizationPolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPolicies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional] [default to 25] |

### Return type

**AuthorizationPolicyEntityListing**


## getAuthorizationPoliciesSubjectSubjectId

> AuthorizationPolicyEntityListing getAuthorizationPoliciesSubjectSubjectId(subjectId, opts)


GET /api/v2/authorization/policies/subject/{subjectId}

Get a page of access policies for a given subject

getAuthorizationPoliciesSubjectSubjectId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | The ID of the subject to which policies are applied
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getAuthorizationPoliciesSubjectSubjectId(subjectId, opts)
  .then((data) => {
    console.log(`getAuthorizationPoliciesSubjectSubjectId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPoliciesSubjectSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | The ID of the subject to which policies are applied |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional] [default to 25] |

### Return type

**AuthorizationPolicyEntityListing**


## getAuthorizationPoliciesTarget

> AuthorizationPolicyEntityListing getAuthorizationPoliciesTarget(targetName, opts)


GET /api/v2/authorization/policies/targets/{targetName}

Get a page of access policies for a given policy target

getAuthorizationPoliciesTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action resource target to which policies are applied
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getAuthorizationPoliciesTarget(targetName, opts)
  .then((data) => {
    console.log(`getAuthorizationPoliciesTarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPoliciesTarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action resource target to which policies are applied |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional] [default to 25] |

### Return type

**AuthorizationPolicyEntityListing**


## getAuthorizationPoliciesTargetSubjectSubjectId

> AuthorizationPolicy getAuthorizationPoliciesTargetSubjectSubjectId(targetName, subjectId)


GET /api/v2/authorization/policies/targets/{targetName}/subject/{subjectId}

Get an access control policy for a specified resource target and subject

getAuthorizationPoliciesTargetSubjectSubjectId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action resource target to which the policy is applied
let subjectId = "subjectId_example"; // String | The ID of the subject to which the policy is applied

apiInstance.getAuthorizationPoliciesTargetSubjectSubjectId(targetName, subjectId)
  .then((data) => {
    console.log(`getAuthorizationPoliciesTargetSubjectSubjectId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPoliciesTargetSubjectSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action resource target to which the policy is applied |  |
 **subjectId** | **String** | The ID of the subject to which the policy is applied |  |

### Return type

**AuthorizationPolicy**


## getAuthorizationPoliciesTargets

> TargetAttributes getAuthorizationPoliciesTargets()


GET /api/v2/authorization/policies/targets

Get a map of policy targets to valid attributes for those targets

getAuthorizationPoliciesTargets is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationPoliciesTargets()
  .then((data) => {
    console.log(`getAuthorizationPoliciesTargets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPoliciesTargets');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**TargetAttributes**


## getAuthorizationPolicy

> AuthorizationPolicy getAuthorizationPolicy(policyId)


GET /api/v2/authorization/policies/{policyId}

Get an access control policy with the specified policy ID

getAuthorizationPolicy is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let policyId = "policyId_example"; // String | The ID of the policy to retrieve

apiInstance.getAuthorizationPolicy(policyId)
  .then((data) => {
    console.log(`getAuthorizationPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | The ID of the policy to retrieve |  |

### Return type

**AuthorizationPolicy**


## getAuthorizationPolicyAttributes

> PolicyAttributeSet getAuthorizationPolicyAttributes(policyId)


GET /api/v2/authorization/policies/{policyId}/attributes

Get the list of attributes used to evaluate an access control policy with the specified policy ID

getAuthorizationPolicyAttributes is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let policyId = "policyId_example"; // String | The ID of the policy to retrieve attributes

apiInstance.getAuthorizationPolicyAttributes(policyId)
  .then((data) => {
    console.log(`getAuthorizationPolicyAttributes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationPolicyAttributes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | The ID of the policy to retrieve attributes |  |

### Return type

**PolicyAttributeSet**


## getAuthorizationProducts

> OrganizationProductEntityListing getAuthorizationProducts()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OrganizationProductEntityListing**


## getAuthorizationRole

> DomainOrganizationRole getAuthorizationRole(roleId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let opts = { 
  'userCount': true, // Boolean | Fetch the count of users who have this role granted in at least one division. Setting this value or defaulting to 'true' can lead to slower load times or timeouts for role queries with large member counts.
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand. unusedPermissions returns the permissions not used for the role
};

apiInstance.getAuthorizationRole(roleId, opts)
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
 **userCount** | **Boolean** | Fetch the count of users who have this role granted in at least one division. Setting this value or defaulting to 'true' can lead to slower load times or timeouts for role queries with large member counts. | [optional] [default to true]<br />**Values**: true, false |
 **expand** | **[String]** | Which fields, if any, to expand. unusedPermissions returns the permissions not used for the role | [optional] <br />**Values**: unusedPermissions |

### Return type

**DomainOrganizationRole**


## getAuthorizationRoleComparedefaultRightRoleId

> DomainOrgRoleDifference getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainOrgRoleDifference**


## getAuthorizationRoleSubjectgrants

> SubjectDivisionGrantsEntityListing getAuthorizationRoleSubjectgrants(roleId, opts)


GET /api/v2/authorization/roles/{roleId}/subjectgrants

Get the subjects' granted divisions in the specified role.

Includes the divisions for which the subject has a grant.

Requires ANY permissions:

* authorization:role:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SubjectDivisionGrantsEntityListing**


## getAuthorizationRoleUsers

> UserReferenceEntityListing getAuthorizationRoleUsers(roleId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserReferenceEntityListing**


## getAuthorizationRoles

> OrganizationRoleEntityListing getAuthorizationRoles(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OrganizationRoleEntityListing**


## getAuthorizationRolesSettings

> RoleSettings getAuthorizationRolesSettings()


GET /api/v2/authorization/roles/settings

Get authorization role settings

Requires ANY permissions:

* directory:organization:admin
* authorization:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationRolesSettings()
  .then((data) => {
    console.log(`getAuthorizationRolesSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationRolesSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**RoleSettings**


## getAuthorizationSettings

> AuthorizationSettings getAuthorizationSettings()


GET /api/v2/authorization/settings

Get authorization settings

Requires ANY permissions:

* directory:organization:admin
* authorization:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

apiInstance.getAuthorizationSettings()
  .then((data) => {
    console.log(`getAuthorizationSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AuthorizationSettings**


## getAuthorizationSubject

> AuthzSubject getAuthorizationSubject(subjectId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let opts = { 
  'includeDuplicates': false // Boolean | Include multiple entries with the same role and division but different subjects
};

apiInstance.getAuthorizationSubject(subjectId, opts)
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
 **includeDuplicates** | **Boolean** | Include multiple entries with the same role and division but different subjects | [optional] [default to false]<br />**Values**: true, false |

### Return type

**AuthzSubject**


## getAuthorizationSubjectsMe

> AuthzSubject getAuthorizationSubjectsMe(opts)


GET /api/v2/authorization/subjects/me

Returns a listing of roles and permissions for the currently authenticated user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let opts = { 
  'includeDuplicates': false // Boolean | Include multiple entries with the same role and division but different subjects
};

apiInstance.getAuthorizationSubjectsMe(opts)
  .then((data) => {
    console.log(`getAuthorizationSubjectsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubjectsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeDuplicates** | **Boolean** | Include multiple entries with the same role and division but different subjects | [optional] [default to false]<br />**Values**: true, false |

### Return type

**AuthzSubject**


## getAuthorizationSubjectsRolecounts

> **{&#39;String&#39;: Object}** getAuthorizationSubjectsRolecounts(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**{&#39;String&#39;: Object}**


## getUserRoles

> UserAuthorization getUserRoles(subjectId)


GET /api/v2/users/{subjectId}/roles

Returns a listing of roles and permissions for a user.

Requires ANY permissions:

* authorization:grant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | User ID

apiInstance.getUserRoles(subjectId)
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
 **subjectId** | **String** | User ID |  |

### Return type

**UserAuthorization**


## patchAuthorizationRole

> DomainOrganizationRole patchAuthorizationRole(roleId, body)


PATCH /api/v2/authorization/roles/{roleId}

Patch Organization Role for needsUpdate Field

Patch Organization Role for needsUpdate Field

Requires ANY permissions:

* authorization:role:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainOrganizationRole**


## patchAuthorizationSettings

> AuthorizationSettings patchAuthorizationSettings(body)


PATCH /api/v2/authorization/settings

Change authorization settings

Change authorization settings

Requires ANY permissions:

* directory:organization:admin
* authorization:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let body = {}; // Object | Authorization Settings

apiInstance.patchAuthorizationSettings(body)
  .then((data) => {
    console.log(`patchAuthorizationSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAuthorizationSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Authorization Settings |  |

### Return type

**AuthorizationSettings**


## postAuthorizationDivisionObject

> void postAuthorizationDivisionObject(divisionId, objectType, body)


POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}

Assign a list of objects to a division

Set the division of a specified list of objects. The objects must all be of the same type, one of:  CAMPAIGN, MANAGEMENTUNIT, FLOW, QUEUE, DATATABLES or USER.  The body of the request is a list of object IDs, which are expected to be  GUIDs, e.g. ["206ce31f-61ec-40ed-a8b1-be6f06303998","250a754e-f5e4-4f51-800f-a92f09d3bf8c"]

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let objectType = "objectType_example"; // String | The type of the objects. Must be one of the valid object types
let body = ["body_example"]; // [String] | Object Id List

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
 **objectType** | **String** | The type of the objects. Must be one of the valid object types | <br />**Values**: QUEUE, CAMPAIGN, CONTACTLIST, DNCLIST, EMAILCAMPAIGN, MESSAGINGCAMPAIGN, MANAGEMENTUNIT, BUSINESSUNIT, FLOW, FLOWMILESTONE, FLOWOUTCOME, USER, CALLROUTE, EMERGENCYGROUPS, ROUTINGSCHEDULES, ROUTINGSCHEDULEGROUPS, DATATABLES, TEAM, WORKBIN, WORKTYPE, EXTENSIONPOOL, SKILLGROUP, SCRIPT |
 **body** | **[String]** | Object Id List |  |

### Return type

void (no response body)


## postAuthorizationDivisionRestore

> AuthzDivision postAuthorizationDivisionRestore(divisionId, body)


POST /api/v2/authorization/divisions/{divisionId}/restore

Recreate a previously deleted division.

Requires ANY permissions:

* authorization:division:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let divisionId = "divisionId_example"; // String | Division ID
let body = {}; // Object | Recreated division data

apiInstance.postAuthorizationDivisionRestore(divisionId, body)
  .then((data) => {
    console.log(`postAuthorizationDivisionRestore success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationDivisionRestore');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | Division ID |  |
 **body** | **Object** | Recreated division data |  |

### Return type

**AuthzDivision**


## postAuthorizationDivisions

> AuthzDivision postAuthorizationDivisions(body)


POST /api/v2/authorization/divisions

Create a division.

Requires ALL permissions:

* authorization:division:add
* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AuthzDivision**


## postAuthorizationPoliciesTarget

> AuthorizationPolicy postAuthorizationPoliciesTarget(targetName, body)


POST /api/v2/authorization/policies/targets/{targetName}

Add an access control policy for a specified resource target and subject

postAuthorizationPoliciesTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action target to which the policy will be applied
let body = {}; // Object | Access control policy

apiInstance.postAuthorizationPoliciesTarget(targetName, body)
  .then((data) => {
    console.log(`postAuthorizationPoliciesTarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationPoliciesTarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action target to which the policy will be applied |  |
 **body** | **Object** | Access control policy |  |

### Return type

**AuthorizationPolicy**


## postAuthorizationPoliciesTargetValidate

> ValidationErrorListing postAuthorizationPoliciesTargetValidate(targetName, body)


POST /api/v2/authorization/policies/targets/{targetName}/validate

Validate the conditions and attributes of an access control policy for a specified resource target

postAuthorizationPoliciesTargetValidate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action target to which the policy will be applied
let body = {}; // Object | Access control policy

apiInstance.postAuthorizationPoliciesTargetValidate(targetName, body)
  .then((data) => {
    console.log(`postAuthorizationPoliciesTargetValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationPoliciesTargetValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action target to which the policy will be applied |  |
 **body** | **Object** | Access control policy |  |

### Return type

**ValidationErrorListing**


## postAuthorizationPolicySimulate

> PolicyTestResult postAuthorizationPolicySimulate(policyId, body)


POST /api/v2/authorization/policies/{policyId}/simulate

Simulate a request and evaluate the specified policy ID against the provided values

postAuthorizationPolicySimulate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let policyId = "policyId_example"; // String | The ID of the policy to test the simulated data against
let body = {}; // Object | A map of attribute names to type and simulated data value

apiInstance.postAuthorizationPolicySimulate(policyId, body)
  .then((data) => {
    console.log(`postAuthorizationPolicySimulate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationPolicySimulate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | The ID of the policy to test the simulated data against |  |
 **body** | **Object** | A map of attribute names to type and simulated data value |  |

### Return type

**PolicyTestResult**


## postAuthorizationRole

> void postAuthorizationRole(roleId, body, opts)


POST /api/v2/authorization/roles/{roleId}

Bulk-grant subjects and divisions with an organization role.

Requires ALL permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = {}; // Object | Subjects and Divisions
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subjects are (PC_GROUP, PC_USER or PC_OAUTH_CLIENT)
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
 **subjectType** | **String** | what the type of the subjects are (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) | [optional] [default to PC_USER] |

### Return type

void (no response body)


## postAuthorizationRoleComparedefaultRightRoleId

> DomainOrgRoleDifference postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)


POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an unsaved org role to default role comparison

Allows users to compare their existing roles in an unsaved state to its default role

Requires ANY permissions:

* authorization:role:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainOrgRoleDifference**


## postAuthorizationRoles

> DomainOrganizationRole postAuthorizationRoles(body)


POST /api/v2/authorization/roles

Create an organization role.

Requires ANY permissions:

* authorization:role:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainOrganizationRole**


## postAuthorizationRolesDefault

> OrganizationRoleEntityListing postAuthorizationRolesDefault(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OrganizationRoleEntityListing**


## postAuthorizationSubjectBulkadd

> void postAuthorizationSubjectBulkadd(subjectId, body, opts)


POST /api/v2/authorization/subjects/{subjectId}/bulkadd

Bulk-grant roles and divisions to a subject.

Requires ALL permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT)
};

apiInstance.postAuthorizationSubjectBulkadd(subjectId, body, opts)
  .then(() => {
    console.log('postAuthorizationSubjectBulkadd returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkadd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |
 **subjectType** | **String** | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) | [optional] [default to PC_USER] |

### Return type

void (no response body)


## postAuthorizationSubjectBulkremove

> void postAuthorizationSubjectBulkremove(subjectId, body)


POST /api/v2/authorization/subjects/{subjectId}/bulkremove

Bulk-remove grants from a subject.

Requires ALL permissions:

* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs

apiInstance.postAuthorizationSubjectBulkremove(subjectId, body)
  .then(() => {
    console.log('postAuthorizationSubjectBulkremove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkremove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |

### Return type

void (no response body)


## postAuthorizationSubjectBulkreplace

> void postAuthorizationSubjectBulkreplace(subjectId, body, opts)


POST /api/v2/authorization/subjects/{subjectId}/bulkreplace

Replace subject's roles and divisions with the exact list supplied in the request.

This operation will not remove grants that are inherited from group membership. It will only set the grants directly applied to the subject.

Requires ALL permissions:

* authorization:grant:add
* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT)
};

apiInstance.postAuthorizationSubjectBulkreplace(subjectId, body, opts)
  .then(() => {
    console.log('postAuthorizationSubjectBulkreplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkreplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |
 **subjectType** | **String** | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) | [optional] [default to PC_USER] |

### Return type

void (no response body)


## postAuthorizationSubjectDivisionRole

> void postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)


POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Make a grant of a role in a division

Requires ALL permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let divisionId = "divisionId_example"; // String | the id of the division to which to make the grant
let roleId = "roleId_example"; // String | the id of the role to grant
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is: PC_GROUP, PC_USER or PC_OAUTH_CLIENT (note: for cross-org authorization, please use the Organization Authorization endpoints)
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
 **subjectType** | **String** | what the type of the subject is: PC_GROUP, PC_USER or PC_OAUTH_CLIENT (note: for cross-org authorization, please use the Organization Authorization endpoints) | [optional] [default to PC_USER] |

### Return type

void (no response body)


## putAuthorizationDivision

> AuthzDivision putAuthorizationDivision(divisionId, body)


PUT /api/v2/authorization/divisions/{divisionId}

Update a division.

Requires ANY permissions:

* authorization:division:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AuthzDivision**


## putAuthorizationPoliciesTarget

> AuthorizationPolicy putAuthorizationPoliciesTarget(targetName, body)


PUT /api/v2/authorization/policies/targets/{targetName}

Add an access control policy for a specified resource target and subject, overwriting any existing policy

putAuthorizationPoliciesTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:edit
* authorization:policy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let targetName = "targetName_example"; // String | The domain:entity:action target to which the policy will be applied
let body = {}; // Object | Access control policy

apiInstance.putAuthorizationPoliciesTarget(targetName, body)
  .then((data) => {
    console.log(`putAuthorizationPoliciesTarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationPoliciesTarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetName** | **String** | The domain:entity:action target to which the policy will be applied |  |
 **body** | **Object** | Access control policy |  |

### Return type

**AuthorizationPolicy**


## putAuthorizationPolicy

> AuthorizationPolicy putAuthorizationPolicy(policyId, body)


PUT /api/v2/authorization/policies/{policyId}

Update an access control policy with a given ID

putAuthorizationPolicy is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* authorization:policy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let policyId = "policyId_example"; // String | The ID of the policy to update
let body = {}; // Object | Access control policy

apiInstance.putAuthorizationPolicy(policyId, body)
  .then((data) => {
    console.log(`putAuthorizationPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | The ID of the policy to update |  |
 **body** | **Object** | Access control policy |  |

### Return type

**AuthorizationPolicy**


## putAuthorizationRole

> DomainOrganizationRole putAuthorizationRole(roleId, body)


PUT /api/v2/authorization/roles/{roleId}

Update an organization role.

Update

Requires ANY permissions:

* authorization:role:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DomainOrganizationRole**


## putAuthorizationRoleUsersAdd

> **[&#39;String&#39;]** putAuthorizationRoleUsersAdd(roleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = ["body_example"]; // [String] | List of user IDs

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
 **body** | **[String]** | List of user IDs |  |

### Return type

**[&#39;String&#39;]**


## putAuthorizationRoleUsersRemove

> **[&#39;String&#39;]** putAuthorizationRoleUsersRemove(roleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let roleId = "roleId_example"; // String | Role ID
let body = ["body_example"]; // [String] | List of user IDs

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
 **body** | **[String]** | List of user IDs |  |

### Return type

**[&#39;String&#39;]**


## putAuthorizationRolesDefault

> OrganizationRoleEntityListing putAuthorizationRolesDefault(body)


PUT /api/v2/authorization/roles/default

Restore specified default roles

Requires ANY permissions:

* authorization:role:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OrganizationRoleEntityListing**


## putAuthorizationRolesSettings

> RoleSettings putAuthorizationRolesSettings(body)


PUT /api/v2/authorization/roles/settings

Change authorization role settings

Change role settings

Requires ANY permissions:

* directory:organization:admin
* authorization:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuthorizationApi();

let body = {}; // Object | Authorization Role Settings

apiInstance.putAuthorizationRolesSettings(body)
  .then((data) => {
    console.log(`putAuthorizationRolesSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAuthorizationRolesSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Authorization Role Settings |  |

### Return type

**RoleSettings**


## putUserRoles

> UserAuthorization putUserRoles(subjectId, body)


PUT /api/v2/users/{subjectId}/roles

Sets the user's roles

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

let apiInstance = new platformClient.AuthorizationApi();

let subjectId = "subjectId_example"; // String | User ID
let body = ["body_example"]; // [String] | List of roles

apiInstance.putUserRoles(subjectId, body)
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
 **subjectId** | **String** | User ID |  |
 **body** | **[String]** | List of roles |  |

### Return type

**UserAuthorization**


_purecloud-platform-client-v2@229.1.0_
