# ObjectsApi

# platformClient.ObjectsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationDivision**](ObjectsApi#deleteAuthorizationDivision) | **DELETE** /api/v2/authorization/divisions/{divisionId} | Delete a division.
[**getAuthorizationDivision**](ObjectsApi#getAuthorizationDivision) | **GET** /api/v2/authorization/divisions/{divisionId} | Returns an authorization division.
[**getAuthorizationDivisions**](ObjectsApi#getAuthorizationDivisions) | **GET** /api/v2/authorization/divisions | Retrieve a list of all divisions defined for the organization
[**getAuthorizationDivisionsDeleted**](ObjectsApi#getAuthorizationDivisionsDeleted) | **GET** /api/v2/authorization/divisions/deleted | Get a list of soft deleted divisions for the org
[**getAuthorizationDivisionsHome**](ObjectsApi#getAuthorizationDivisionsHome) | **GET** /api/v2/authorization/divisions/home | Retrieve the home division for the organization.
[**getAuthorizationDivisionsLimit**](ObjectsApi#getAuthorizationDivisionsLimit) | **GET** /api/v2/authorization/divisions/limit | Returns the maximum allowed number of divisions.
[**getAuthorizationDivisionsQuery**](ObjectsApi#getAuthorizationDivisionsQuery) | **GET** /api/v2/authorization/divisions/query | Retrieve a list of all divisions defined for the organization with cursor
[**postAuthorizationDivisionObject**](ObjectsApi#postAuthorizationDivisionObject) | **POST** /api/v2/authorization/divisions/{divisionId}/objects/{objectType} | Assign a list of objects to a division
[**postAuthorizationDivisionRestore**](ObjectsApi#postAuthorizationDivisionRestore) | **POST** /api/v2/authorization/divisions/{divisionId}/restore | Recreate a previously deleted division.
[**postAuthorizationDivisions**](ObjectsApi#postAuthorizationDivisions) | **POST** /api/v2/authorization/divisions | Create a division.
[**putAuthorizationDivision**](ObjectsApi#putAuthorizationDivision) | **PUT** /api/v2/authorization/divisions/{divisionId} | Update a division.



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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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

let apiInstance = new platformClient.ObjectsApi();

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


_purecloud-platform-client-v2@229.1.0_
