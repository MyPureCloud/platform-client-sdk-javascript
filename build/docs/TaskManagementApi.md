---
title: TaskManagementApi
---
# platformClient.TaskManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTaskmanagementWorkbin**](TaskManagementApi.html#deleteTaskmanagementWorkbin) | **DELETE** /api/v2/taskmanagement/workbins/{workbinId} | Delete a workbin
[**deleteTaskmanagementWorkitem**](TaskManagementApi.html#deleteTaskmanagementWorkitem) | **DELETE** /api/v2/taskmanagement/workitems/{workitemId} | Delete a workitem
[**deleteTaskmanagementWorkitemsSchema**](TaskManagementApi.html#deleteTaskmanagementWorkitemsSchema) | **DELETE** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Delete a schema
[**deleteTaskmanagementWorktype**](TaskManagementApi.html#deleteTaskmanagementWorktype) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId} | Delete a worktype
[**deleteTaskmanagementWorktypeStatus**](TaskManagementApi.html#deleteTaskmanagementWorktypeStatus) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Delete a status
[**getTaskmanagementWorkbin**](TaskManagementApi.html#getTaskmanagementWorkbin) | **GET** /api/v2/taskmanagement/workbins/{workbinId} | Get a workbin
[**getTaskmanagementWorkbinHistory**](TaskManagementApi.html#getTaskmanagementWorkbinHistory) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/history | Get a listing of a workbin's attribute change history
[**getTaskmanagementWorkbinVersion**](TaskManagementApi.html#getTaskmanagementWorkbinVersion) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/versions/{entityVersion} | Get a version of a workbin
[**getTaskmanagementWorkbinVersions**](TaskManagementApi.html#getTaskmanagementWorkbinVersions) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/versions | Get all versions of a workbin
[**getTaskmanagementWorkitem**](TaskManagementApi.html#getTaskmanagementWorkitem) | **GET** /api/v2/taskmanagement/workitems/{workitemId} | Get a workitem
[**getTaskmanagementWorkitemHistory**](TaskManagementApi.html#getTaskmanagementWorkitemHistory) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/history | Get a listing of a workitem's attribute change history
[**getTaskmanagementWorkitemUserWrapups**](TaskManagementApi.html#getTaskmanagementWorkitemUserWrapups) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups | Get all wrapup codes added for the given user for a workitem.
[**getTaskmanagementWorkitemVersion**](TaskManagementApi.html#getTaskmanagementWorkitemVersion) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/versions/{entityVersion} | Get a version of a workitem
[**getTaskmanagementWorkitemVersions**](TaskManagementApi.html#getTaskmanagementWorkitemVersions) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/versions | Get all versions of a workitem
[**getTaskmanagementWorkitemWrapups**](TaskManagementApi.html#getTaskmanagementWorkitemWrapups) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/wrapups | Get all wrapup codes added for all users for a workitem.
[**getTaskmanagementWorkitemsSchema**](TaskManagementApi.html#getTaskmanagementWorkitemsSchema) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Get a schema
[**getTaskmanagementWorkitemsSchemaVersion**](TaskManagementApi.html#getTaskmanagementWorkitemsSchemaVersion) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getTaskmanagementWorkitemsSchemaVersions**](TaskManagementApi.html#getTaskmanagementWorkitemsSchemaVersions) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions | Get all versions of a schema
[**getTaskmanagementWorkitemsSchemas**](TaskManagementApi.html#getTaskmanagementWorkitemsSchemas) | **GET** /api/v2/taskmanagement/workitems/schemas | Get a list of schemas.
[**getTaskmanagementWorktype**](TaskManagementApi.html#getTaskmanagementWorktype) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId} | Get a worktype
[**getTaskmanagementWorktypeHistory**](TaskManagementApi.html#getTaskmanagementWorktypeHistory) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/history | Get a listing of a worktype's attribute change history
[**getTaskmanagementWorktypeStatus**](TaskManagementApi.html#getTaskmanagementWorktypeStatus) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Get a status
[**getTaskmanagementWorktypeVersion**](TaskManagementApi.html#getTaskmanagementWorktypeVersion) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/versions/{entityVersion} | Get a version of a worktype
[**getTaskmanagementWorktypeVersions**](TaskManagementApi.html#getTaskmanagementWorktypeVersions) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/versions | Get all versions of a worktype
[**patchTaskmanagementWorkbin**](TaskManagementApi.html#patchTaskmanagementWorkbin) | **PATCH** /api/v2/taskmanagement/workbins/{workbinId} | Update the attributes of a workbin
[**patchTaskmanagementWorkitem**](TaskManagementApi.html#patchTaskmanagementWorkitem) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId} | Update the attributes of a workitem
[**patchTaskmanagementWorkitemAssignment**](TaskManagementApi.html#patchTaskmanagementWorkitemAssignment) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/assignment | Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
[**patchTaskmanagementWorkitemUserWrapups**](TaskManagementApi.html#patchTaskmanagementWorkitemUserWrapups) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups | Add/Remove a wrapup code for a given user in a workitem.
[**patchTaskmanagementWorkitemUsersMeWrapups**](TaskManagementApi.html#patchTaskmanagementWorkitemUsersMeWrapups) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups | Add/Remove a wrapup code for the current user in a workitem.
[**patchTaskmanagementWorktype**](TaskManagementApi.html#patchTaskmanagementWorktype) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId} | Update the attributes of a worktype
[**patchTaskmanagementWorktypeStatus**](TaskManagementApi.html#patchTaskmanagementWorktypeStatus) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Update the attributes of a status
[**postTaskmanagementWorkbins**](TaskManagementApi.html#postTaskmanagementWorkbins) | **POST** /api/v2/taskmanagement/workbins | Create a workbin
[**postTaskmanagementWorkbinsQuery**](TaskManagementApi.html#postTaskmanagementWorkbinsQuery) | **POST** /api/v2/taskmanagement/workbins/query | Query for workbins
[**postTaskmanagementWorkitemAcdCancel**](TaskManagementApi.html#postTaskmanagementWorkitemAcdCancel) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/acd/cancel | Cancel the assignment process for a workitem that is currently queued for assignment through ACD.
[**postTaskmanagementWorkitemDisconnect**](TaskManagementApi.html#postTaskmanagementWorkitemDisconnect) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/disconnect | Disconnect the assignee of the workitem
[**postTaskmanagementWorkitemTerminate**](TaskManagementApi.html#postTaskmanagementWorkitemTerminate) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/terminate | Terminate a workitem
[**postTaskmanagementWorkitems**](TaskManagementApi.html#postTaskmanagementWorkitems) | **POST** /api/v2/taskmanagement/workitems | Create a workitem
[**postTaskmanagementWorkitemsQuery**](TaskManagementApi.html#postTaskmanagementWorkitemsQuery) | **POST** /api/v2/taskmanagement/workitems/query | Query for workitems
[**postTaskmanagementWorkitemsSchemas**](TaskManagementApi.html#postTaskmanagementWorkitemsSchemas) | **POST** /api/v2/taskmanagement/workitems/schemas | Create a schema
[**postTaskmanagementWorktypeStatuses**](TaskManagementApi.html#postTaskmanagementWorktypeStatuses) | **POST** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses | Add a status to a worktype
[**postTaskmanagementWorktypes**](TaskManagementApi.html#postTaskmanagementWorktypes) | **POST** /api/v2/taskmanagement/worktypes | Create a worktype
[**postTaskmanagementWorktypesQuery**](TaskManagementApi.html#postTaskmanagementWorktypesQuery) | **POST** /api/v2/taskmanagement/worktypes/query | Query for worktypes
[**putTaskmanagementWorkitemsSchema**](TaskManagementApi.html#putTaskmanagementWorkitemsSchema) | **PUT** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Update a schema
{: class="table table-striped"}

<a name="deleteTaskmanagementWorkbin"></a>

# void deleteTaskmanagementWorkbin(workbinId)


DELETE /api/v2/taskmanagement/workbins/{workbinId}

Delete a workbin

deleteTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID

apiInstance.deleteTaskmanagementWorkbin(workbinId)
  .then(() => {
    console.log('deleteTaskmanagementWorkbin returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorkbin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTaskmanagementWorkitem"></a>

# void deleteTaskmanagementWorkitem(workitemId)


DELETE /api/v2/taskmanagement/workitems/{workitemId}

Delete a workitem

deleteTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID

apiInstance.deleteTaskmanagementWorkitem(workitemId)
  .then(() => {
    console.log('deleteTaskmanagementWorkitem returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorkitem');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTaskmanagementWorkitemsSchema"></a>

# void deleteTaskmanagementWorkitemsSchema(schemaId)


DELETE /api/v2/taskmanagement/workitems/schemas/{schemaId}

Delete a schema

deleteTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.deleteTaskmanagementWorkitemsSchema(schemaId)
  .then(() => {
    console.log('deleteTaskmanagementWorkitemsSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorkitemsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTaskmanagementWorktype"></a>

# void deleteTaskmanagementWorktype(worktypeId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}

Delete a worktype

deleteTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id

apiInstance.deleteTaskmanagementWorktype(worktypeId)
  .then(() => {
    console.log('deleteTaskmanagementWorktype returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorktype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTaskmanagementWorktypeStatus"></a>

# void deleteTaskmanagementWorktypeStatus(worktypeId, statusId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Delete a status

deleteTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:status:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let statusId = "statusId_example"; // String | Status id

apiInstance.deleteTaskmanagementWorktypeStatus(worktypeId, statusId)
  .then(() => {
    console.log('deleteTaskmanagementWorktypeStatus returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorktypeStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **statusId** | **String** | Status id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getTaskmanagementWorkbin"></a>

# Workbin getTaskmanagementWorkbin(workbinId)


GET /api/v2/taskmanagement/workbins/{workbinId}

Get a workbin

getTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID

apiInstance.getTaskmanagementWorkbin(workbinId)
  .then((data) => {
    console.log(`getTaskmanagementWorkbin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkbin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
{: class="table table-striped"}

### Return type

**Workbin**

<a name="getTaskmanagementWorkbinHistory"></a>

# WorkbinChangeListing getTaskmanagementWorkbinHistory(workbinId, opts)


GET /api/v2/taskmanagement/workbins/{workbinId}/history

Get a listing of a workbin's attribute change history

getTaskmanagementWorkbinHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkbinHistory(workbinId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkbinHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkbinHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkbinChangeListing**

<a name="getTaskmanagementWorkbinVersion"></a>

# WorkbinVersion getTaskmanagementWorkbinVersion(workbinId, entityVersion)


GET /api/v2/taskmanagement/workbins/{workbinId}/versions/{entityVersion}

Get a version of a workbin

getTaskmanagementWorkbinVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID
let entityVersion = 3.4; // Number | Workbin version

apiInstance.getTaskmanagementWorkbinVersion(workbinId, entityVersion)
  .then((data) => {
    console.log(`getTaskmanagementWorkbinVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkbinVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
 **entityVersion** | **Number** | Workbin version |  |
{: class="table table-striped"}

### Return type

**WorkbinVersion**

<a name="getTaskmanagementWorkbinVersions"></a>

# WorkbinVersionListing getTaskmanagementWorkbinVersions(workbinId, opts)


GET /api/v2/taskmanagement/workbins/{workbinId}/versions

Get all versions of a workbin

getTaskmanagementWorkbinVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkbinVersions(workbinId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkbinVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkbinVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkbinVersionListing**

<a name="getTaskmanagementWorkitem"></a>

# Workitem getTaskmanagementWorkitem(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}

Get a workitem

getTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let opts = { 
  'expands': "expands_example" // String | Which fields to expand. Comma separated if more than one.
};

apiInstance.getTaskmanagementWorkitem(workitemId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitem success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitem');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **expands** | **String** | Which fields to expand. Comma separated if more than one. | [optional] <br />**Values**: type, workbin, status, queue, assignee |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="getTaskmanagementWorkitemHistory"></a>

# WorkitemChangeListing getTaskmanagementWorkitemHistory(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/history

Get a listing of a workitem's attribute change history

getTaskmanagementWorkitemHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkitemHistory(workitemId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkitemChangeListing**

<a name="getTaskmanagementWorkitemUserWrapups"></a>

# WorkitemWrapup getTaskmanagementWorkitemUserWrapups(workitemId, userId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups

Get all wrapup codes added for the given user for a workitem.

getTaskmanagementWorkitemUserWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:wrapup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | The ID of the Workitem.
let userId = "userId_example"; // String | The ID of the user
let opts = { 
  'expands': "expands_example", // String | Which fields, if any, to expand.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkitemUserWrapups(workitemId, userId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemUserWrapups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemUserWrapups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | The ID of the Workitem. |  |
 **userId** | **String** | The ID of the user |  |
 **expands** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: wrapupCode |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkitemWrapup**

<a name="getTaskmanagementWorkitemVersion"></a>

# WorkitemVersion getTaskmanagementWorkitemVersion(workitemId, entityVersion)


GET /api/v2/taskmanagement/workitems/{workitemId}/versions/{entityVersion}

Get a version of a workitem

getTaskmanagementWorkitemVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let entityVersion = 3.4; // Number | Workitem version

apiInstance.getTaskmanagementWorkitemVersion(workitemId, entityVersion)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **entityVersion** | **Number** | Workitem version |  |
{: class="table table-striped"}

### Return type

**WorkitemVersion**

<a name="getTaskmanagementWorkitemVersions"></a>

# WorkitemVersionListing getTaskmanagementWorkitemVersions(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/versions

Get all versions of a workitem

getTaskmanagementWorkitemVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkitemVersions(workitemId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkitemVersionListing**

<a name="getTaskmanagementWorkitemWrapups"></a>

# WorkitemWrapupEntityListing getTaskmanagementWorkitemWrapups(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/wrapups

Get all wrapup codes added for all users for a workitem.

getTaskmanagementWorkitemWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:wrapup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | The ID of the Workitem.
let opts = { 
  'expands': "expands_example", // String | Which fields, if any, to expand.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorkitemWrapups(workitemId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemWrapups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemWrapups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | The ID of the Workitem. |  |
 **expands** | **String** | Which fields, if any, to expand. | [optional] <br />**Values**: wrapupCode |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorkitemWrapupEntityListing**

<a name="getTaskmanagementWorkitemsSchema"></a>

# DataSchema getTaskmanagementWorkitemsSchema(schemaId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}

Get a schema

getTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getTaskmanagementWorkitemsSchema(schemaId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getTaskmanagementWorkitemsSchemaVersion"></a>

# DataSchema getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema

getTaskmanagementWorkitemsSchemaVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let schemaId = "schemaId_example"; // String | Schema ID
let versionId = "versionId_example"; // String | Schema version

apiInstance.getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **versionId** | **String** | Schema version |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getTaskmanagementWorkitemsSchemaVersions"></a>

# DataSchema getTaskmanagementWorkitemsSchemaVersions(schemaId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions

Get all versions of a schema

getTaskmanagementWorkitemsSchemaVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getTaskmanagementWorkitemsSchemaVersions(schemaId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getTaskmanagementWorkitemsSchemas"></a>

# DataSchemaListing getTaskmanagementWorkitemsSchemas()


GET /api/v2/taskmanagement/workitems/schemas

Get a list of schemas.

getTaskmanagementWorkitemsSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

apiInstance.getTaskmanagementWorkitemsSchemas()
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DataSchemaListing**

<a name="getTaskmanagementWorktype"></a>

# Worktype getTaskmanagementWorktype(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}

Get a worktype

getTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'expands': ["expands_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getTaskmanagementWorktype(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **expands** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: defaultQueue, defaultSkills, defaultLanguage, schema |
{: class="table table-striped"}

### Return type

**Worktype**

<a name="getTaskmanagementWorktypeHistory"></a>

# WorktypeChangeListing getTaskmanagementWorktypeHistory(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/history

Get a listing of a worktype's attribute change history

getTaskmanagementWorktypeHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorktypeHistory(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorktypeChangeListing**

<a name="getTaskmanagementWorktypeStatus"></a>

# WorkitemStatus getTaskmanagementWorktypeStatus(worktypeId, statusId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Get a status

getTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:status:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let statusId = "statusId_example"; // String | Status id

apiInstance.getTaskmanagementWorktypeStatus(worktypeId, statusId)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **statusId** | **String** | Status id |  |
{: class="table table-striped"}

### Return type

**WorkitemStatus**

<a name="getTaskmanagementWorktypeVersion"></a>

# WorktypeVersion getTaskmanagementWorktypeVersion(worktypeId, entityVersion)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/versions/{entityVersion}

Get a version of a worktype

getTaskmanagementWorktypeVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let entityVersion = 3.4; // Number | Worktype version

apiInstance.getTaskmanagementWorktypeVersion(worktypeId, entityVersion)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **entityVersion** | **Number** | Worktype version |  |
{: class="table table-striped"}

### Return type

**WorktypeVersion**

<a name="getTaskmanagementWorktypeVersions"></a>

# WorktypeVersionListing getTaskmanagementWorktypeVersions(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/versions

Get all versions of a worktype

getTaskmanagementWorktypeVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending" // String | Ascending or descending sort order
};

apiInstance.getTaskmanagementWorktypeVersions(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**WorktypeVersionListing**

<a name="patchTaskmanagementWorkbin"></a>

# Workbin patchTaskmanagementWorkbin(workbinId, body)


PATCH /api/v2/taskmanagement/workbins/{workbinId}

Update the attributes of a workbin

patchTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workbinId = "workbinId_example"; // String | Workbin ID
let body = {}; // Object | Json with attributes and their new values: {description:new description, name:new name}.

apiInstance.patchTaskmanagementWorkbin(workbinId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkbin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkbin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workbinId** | **String** | Workbin ID |  |
 **body** | **Object** | Json with attributes and their new values: {description:new description, name:new name}. |  |
{: class="table table-striped"}

### Return type

**Workbin**

<a name="patchTaskmanagementWorkitem"></a>

# Workitem patchTaskmanagementWorkitem(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}

Update the attributes of a workitem

patchTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:edit
* workitems:workitem:accept

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let body = {}; // Object | Workitem

apiInstance.patchTaskmanagementWorkitem(workitemId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkitem success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitem');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **body** | **Object** | Workitem |  |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="patchTaskmanagementWorkitemAssignment"></a>

# void patchTaskmanagementWorkitemAssignment(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/assignment

Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.

patchTaskmanagementWorkitemAssignment is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:pull
* workitems:workitem:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let body = {}; // Object | Targeted user

apiInstance.patchTaskmanagementWorkitemAssignment(workitemId, body)
  .then(() => {
    console.log('patchTaskmanagementWorkitemAssignment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitemAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **body** | **Object** | Targeted user |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchTaskmanagementWorkitemUserWrapups"></a>

# WorkitemWrapup patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups

Add/Remove a wrapup code for a given user in a workitem.

patchTaskmanagementWorkitemUserWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:wrapup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | The ID of the Workitem.
let userId = "userId_example"; // String | The ID of the user
let body = {}; // Object | Request body to add/remove a wrapup code for a workitem

apiInstance.patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkitemUserWrapups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitemUserWrapups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | The ID of the Workitem. |  |
 **userId** | **String** | The ID of the user |  |
 **body** | **Object** | Request body to add/remove a wrapup code for a workitem |  |
{: class="table table-striped"}

### Return type

**WorkitemWrapup**

<a name="patchTaskmanagementWorkitemUsersMeWrapups"></a>

# WorkitemWrapup patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups

Add/Remove a wrapup code for the current user in a workitem.

patchTaskmanagementWorkitemUsersMeWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:wrapupSelf:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | The ID of the Workitem.
let body = {}; // Object | Request body to add/remove the wrapup code for workitem

apiInstance.patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkitemUsersMeWrapups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitemUsersMeWrapups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | The ID of the Workitem. |  |
 **body** | **Object** | Request body to add/remove the wrapup code for workitem |  |
{: class="table table-striped"}

### Return type

**WorkitemWrapup**

<a name="patchTaskmanagementWorktype"></a>

# Worktype patchTaskmanagementWorktype(worktypeId, opts)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}

Update the attributes of a worktype

patchTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* workitems:worktype:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchTaskmanagementWorktype(worktypeId, opts)
  .then((data) => {
    console.log(`patchTaskmanagementWorktype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorktype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**Worktype**

<a name="patchTaskmanagementWorktypeStatus"></a>

# WorkitemStatus patchTaskmanagementWorktypeStatus(worktypeId, statusId, opts)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Update the attributes of a status

patchTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:status:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let statusId = "statusId_example"; // String | Status id
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchTaskmanagementWorktypeStatus(worktypeId, statusId, opts)
  .then((data) => {
    console.log(`patchTaskmanagementWorktypeStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorktypeStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **statusId** | **String** | Status id |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkitemStatus**

<a name="postTaskmanagementWorkbins"></a>

# Workbin postTaskmanagementWorkbins(opts)


POST /api/v2/taskmanagement/workbins

Create a workbin

postTaskmanagementWorkbins is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workbin:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postTaskmanagementWorkbins(opts)
  .then((data) => {
    console.log(`postTaskmanagementWorkbins success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkbins');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**Workbin**

<a name="postTaskmanagementWorkbinsQuery"></a>

# WorkbinQueryEntityListing postTaskmanagementWorkbinsQuery(body)


POST /api/v2/taskmanagement/workbins/query

Query for workbins

postTaskmanagementWorkbinsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | QueryPostRequest

apiInstance.postTaskmanagementWorkbinsQuery(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkbinsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkbinsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | QueryPostRequest |  |
{: class="table table-striped"}

### Return type

**WorkbinQueryEntityListing**

<a name="postTaskmanagementWorkitemAcdCancel"></a>

# Workitem postTaskmanagementWorkitemAcdCancel(workitemId)


POST /api/v2/taskmanagement/workitems/{workitemId}/acd/cancel

Cancel the assignment process for a workitem that is currently queued for assignment through ACD.

postTaskmanagementWorkitemAcdCancel is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:cancelRouting

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID

apiInstance.postTaskmanagementWorkitemAcdCancel(workitemId)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemAcdCancel success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemAcdCancel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="postTaskmanagementWorkitemDisconnect"></a>

# Workitem postTaskmanagementWorkitemDisconnect(workitemId)


POST /api/v2/taskmanagement/workitems/{workitemId}/disconnect

Disconnect the assignee of the workitem

postTaskmanagementWorkitemDisconnect is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID

apiInstance.postTaskmanagementWorkitemDisconnect(workitemId)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemDisconnect success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemDisconnect');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="postTaskmanagementWorkitemTerminate"></a>

# Workitem postTaskmanagementWorkitemTerminate(workitemId, opts)


POST /api/v2/taskmanagement/workitems/{workitemId}/terminate

Terminate a workitem

postTaskmanagementWorkitemTerminate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:terminate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let workitemId = "workitemId_example"; // String | Workitem ID
let opts = { 
  'body': {} // Object | Terminated request
};

apiInstance.postTaskmanagementWorkitemTerminate(workitemId, opts)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemTerminate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemTerminate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workitemId** | **String** | Workitem ID |  |
 **body** | **Object** | Terminated request | [optional]  |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="postTaskmanagementWorkitems"></a>

# Workitem postTaskmanagementWorkitems(body)


POST /api/v2/taskmanagement/workitems

Create a workitem

postTaskmanagementWorkitems is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Workitem

apiInstance.postTaskmanagementWorkitems(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitems success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitems');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Workitem |  |
{: class="table table-striped"}

### Return type

**Workitem**

<a name="postTaskmanagementWorkitemsQuery"></a>

# WorkitemPostQueryEntityListing postTaskmanagementWorkitemsQuery(body)


POST /api/v2/taskmanagement/workitems/query

Query for workitems

This query requires at least one EQ filter on the workbinId, assigneeId or typeId attributes.

postTaskmanagementWorkitemsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | WorkitemQueryPostRequest

apiInstance.postTaskmanagementWorkitemsQuery(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WorkitemQueryPostRequest |  |
{: class="table table-striped"}

### Return type

**WorkitemPostQueryEntityListing**

<a name="postTaskmanagementWorkitemsSchemas"></a>

# DataSchema postTaskmanagementWorkitemsSchemas(body)


POST /api/v2/taskmanagement/workitems/schemas

Create a schema

postTaskmanagementWorkitemsSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Schema

apiInstance.postTaskmanagementWorkitemsSchemas(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="postTaskmanagementWorktypeStatuses"></a>

# WorkitemStatus postTaskmanagementWorktypeStatuses(worktypeId, opts)


POST /api/v2/taskmanagement/worktypes/{worktypeId}/statuses

Add a status to a worktype

postTaskmanagementWorktypeStatuses is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:status:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'body': {} // Object | body
};

apiInstance.postTaskmanagementWorktypeStatuses(worktypeId, opts)
  .then((data) => {
    console.log(`postTaskmanagementWorktypeStatuses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypeStatuses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkitemStatus**

<a name="postTaskmanagementWorktypes"></a>

# Worktype postTaskmanagementWorktypes(opts)


POST /api/v2/taskmanagement/worktypes

Create a worktype

postTaskmanagementWorktypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:worktype:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postTaskmanagementWorktypes(opts)
  .then((data) => {
    console.log(`postTaskmanagementWorktypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**Worktype**

<a name="postTaskmanagementWorktypesQuery"></a>

# WorktypeQueryEntityListing postTaskmanagementWorktypesQuery(body)


POST /api/v2/taskmanagement/worktypes/query

Query for worktypes

postTaskmanagementWorktypesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | QueryPostRequest

apiInstance.postTaskmanagementWorktypesQuery(body)
  .then((data) => {
    console.log(`postTaskmanagementWorktypesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | QueryPostRequest |  |
{: class="table table-striped"}

### Return type

**WorktypeQueryEntityListing**

<a name="putTaskmanagementWorkitemsSchema"></a>

# DataSchema putTaskmanagementWorkitemsSchema(schemaId, body)


PUT /api/v2/taskmanagement/workitems/schemas/{schemaId}

Update a schema

putTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* workitems:workitemSchema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Data Schema

apiInstance.putTaskmanagementWorkitemsSchema(schemaId, body)
  .then((data) => {
    console.log(`putTaskmanagementWorkitemsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTaskmanagementWorkitemsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Data Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

