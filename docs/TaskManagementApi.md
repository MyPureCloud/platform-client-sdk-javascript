# TaskManagementApi

# platformClient.TaskManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTaskmanagementWorkbin**](TaskManagementApi#deleteTaskmanagementWorkbin) | **DELETE** /api/v2/taskmanagement/workbins/{workbinId} | Delete a workbin
[**deleteTaskmanagementWorkitem**](TaskManagementApi#deleteTaskmanagementWorkitem) | **DELETE** /api/v2/taskmanagement/workitems/{workitemId} | Delete a workitem
[**deleteTaskmanagementWorkitemsBulkAddJob**](TaskManagementApi#deleteTaskmanagementWorkitemsBulkAddJob) | **DELETE** /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId} | Delete a bulk add job
[**deleteTaskmanagementWorkitemsBulkTerminateJob**](TaskManagementApi#deleteTaskmanagementWorkitemsBulkTerminateJob) | **DELETE** /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId} | Delete a Bulk job
[**deleteTaskmanagementWorkitemsSchema**](TaskManagementApi#deleteTaskmanagementWorkitemsSchema) | **DELETE** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Delete a schema
[**deleteTaskmanagementWorktype**](TaskManagementApi#deleteTaskmanagementWorktype) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId} | Delete a worktype
[**deleteTaskmanagementWorktypeFlowsDatebasedRule**](TaskManagementApi#deleteTaskmanagementWorktypeFlowsDatebasedRule) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId} | Delete a date based rule
[**deleteTaskmanagementWorktypeFlowsOnattributechangeRule**](TaskManagementApi#deleteTaskmanagementWorktypeFlowsOnattributechangeRule) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId} | Delete a rule
[**deleteTaskmanagementWorktypeFlowsOncreateRule**](TaskManagementApi#deleteTaskmanagementWorktypeFlowsOncreateRule) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId} | Delete a rule
[**deleteTaskmanagementWorktypeStatus**](TaskManagementApi#deleteTaskmanagementWorktypeStatus) | **DELETE** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Delete a status
[**getTaskmanagementWorkbin**](TaskManagementApi#getTaskmanagementWorkbin) | **GET** /api/v2/taskmanagement/workbins/{workbinId} | Get a workbin
[**getTaskmanagementWorkbinHistory**](TaskManagementApi#getTaskmanagementWorkbinHistory) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/history | Get a listing of a workbin's attribute change history
[**getTaskmanagementWorkbinVersion**](TaskManagementApi#getTaskmanagementWorkbinVersion) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/versions/{entityVersion} | Get a version of a workbin
[**getTaskmanagementWorkbinVersions**](TaskManagementApi#getTaskmanagementWorkbinVersions) | **GET** /api/v2/taskmanagement/workbins/{workbinId}/versions | Get all versions of a workbin
[**getTaskmanagementWorkitem**](TaskManagementApi#getTaskmanagementWorkitem) | **GET** /api/v2/taskmanagement/workitems/{workitemId} | Get a workitem
[**getTaskmanagementWorkitemHistory**](TaskManagementApi#getTaskmanagementWorkitemHistory) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/history | Get a listing of a workitem's attribute change history
[**getTaskmanagementWorkitemUserWrapups**](TaskManagementApi#getTaskmanagementWorkitemUserWrapups) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups | Get all wrapup codes added for the given user for a workitem.
[**getTaskmanagementWorkitemVersion**](TaskManagementApi#getTaskmanagementWorkitemVersion) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/versions/{entityVersion} | Get a version of a workitem
[**getTaskmanagementWorkitemVersions**](TaskManagementApi#getTaskmanagementWorkitemVersions) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/versions | Get all versions of a workitem
[**getTaskmanagementWorkitemWrapups**](TaskManagementApi#getTaskmanagementWorkitemWrapups) | **GET** /api/v2/taskmanagement/workitems/{workitemId}/wrapups | Get all wrapup codes added for all users for a workitem.
[**getTaskmanagementWorkitemsBulkAddJob**](TaskManagementApi#getTaskmanagementWorkitemsBulkAddJob) | **GET** /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId} | Get the bulk add job associated with the job id.
[**getTaskmanagementWorkitemsBulkAddJobResults**](TaskManagementApi#getTaskmanagementWorkitemsBulkAddJobResults) | **GET** /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}/results | Get bulk add job results.
[**getTaskmanagementWorkitemsBulkJobsUsersMe**](TaskManagementApi#getTaskmanagementWorkitemsBulkJobsUsersMe) | **GET** /api/v2/taskmanagement/workitems/bulk/jobs/users/me | Get bulk jobs created by the currently logged in user.
[**getTaskmanagementWorkitemsBulkTerminateJob**](TaskManagementApi#getTaskmanagementWorkitemsBulkTerminateJob) | **GET** /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId} | Get the bulk job associated with the job id.
[**getTaskmanagementWorkitemsBulkTerminateJobResults**](TaskManagementApi#getTaskmanagementWorkitemsBulkTerminateJobResults) | **GET** /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}/results | Get bulk terminate job results.
[**getTaskmanagementWorkitemsQueryJob**](TaskManagementApi#getTaskmanagementWorkitemsQueryJob) | **GET** /api/v2/taskmanagement/workitems/query/jobs/{jobId} | Get the workitem query job associated with the job id.
[**getTaskmanagementWorkitemsQueryJobResults**](TaskManagementApi#getTaskmanagementWorkitemsQueryJobResults) | **GET** /api/v2/taskmanagement/workitems/query/jobs/{jobId}/results | Get results from for workitem query job 
[**getTaskmanagementWorkitemsSchema**](TaskManagementApi#getTaskmanagementWorkitemsSchema) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Get a schema
[**getTaskmanagementWorkitemsSchemaVersion**](TaskManagementApi#getTaskmanagementWorkitemsSchemaVersion) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getTaskmanagementWorkitemsSchemaVersions**](TaskManagementApi#getTaskmanagementWorkitemsSchemaVersions) | **GET** /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions | Get all versions of a schema
[**getTaskmanagementWorkitemsSchemas**](TaskManagementApi#getTaskmanagementWorkitemsSchemas) | **GET** /api/v2/taskmanagement/workitems/schemas | Get a list of schemas.
[**getTaskmanagementWorkitemsSchemasCoretype**](TaskManagementApi#getTaskmanagementWorkitemsSchemasCoretype) | **GET** /api/v2/taskmanagement/workitems/schemas/coretypes/{coreTypeName} | Get a specific named core type.
[**getTaskmanagementWorkitemsSchemasCoretypes**](TaskManagementApi#getTaskmanagementWorkitemsSchemasCoretypes) | **GET** /api/v2/taskmanagement/workitems/schemas/coretypes | Get the core types from which all schemas are built.
[**getTaskmanagementWorkitemsSchemasLimits**](TaskManagementApi#getTaskmanagementWorkitemsSchemasLimits) | **GET** /api/v2/taskmanagement/workitems/schemas/limits | Get quantitative limits on schemas
[**getTaskmanagementWorktype**](TaskManagementApi#getTaskmanagementWorktype) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId} | Get a worktype
[**getTaskmanagementWorktypeFlowsDatebasedRule**](TaskManagementApi#getTaskmanagementWorktypeFlowsDatebasedRule) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId} | Get a date based rule
[**getTaskmanagementWorktypeFlowsDatebasedRules**](TaskManagementApi#getTaskmanagementWorktypeFlowsDatebasedRules) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules | Get all date based rules for a worktype
[**getTaskmanagementWorktypeFlowsOnattributechangeRule**](TaskManagementApi#getTaskmanagementWorktypeFlowsOnattributechangeRule) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId} | Get an attribute change rule
[**getTaskmanagementWorktypeFlowsOnattributechangeRules**](TaskManagementApi#getTaskmanagementWorktypeFlowsOnattributechangeRules) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules | Get all attribute-change rules for a worktype
[**getTaskmanagementWorktypeFlowsOncreateRule**](TaskManagementApi#getTaskmanagementWorktypeFlowsOncreateRule) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId} | Get an on-create rule
[**getTaskmanagementWorktypeFlowsOncreateRules**](TaskManagementApi#getTaskmanagementWorktypeFlowsOncreateRules) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules | Get all on-create rules for a worktype
[**getTaskmanagementWorktypeHistory**](TaskManagementApi#getTaskmanagementWorktypeHistory) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/history | Get a listing of a worktype's attribute change history
[**getTaskmanagementWorktypeStatus**](TaskManagementApi#getTaskmanagementWorktypeStatus) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Get a status
[**getTaskmanagementWorktypeStatuses**](TaskManagementApi#getTaskmanagementWorktypeStatuses) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses | Get list of statuses for this worktype.
[**getTaskmanagementWorktypeVersion**](TaskManagementApi#getTaskmanagementWorktypeVersion) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/versions/{entityVersion} | Get a version of a worktype
[**getTaskmanagementWorktypeVersions**](TaskManagementApi#getTaskmanagementWorktypeVersions) | **GET** /api/v2/taskmanagement/worktypes/{worktypeId}/versions | Get all versions of a worktype
[**patchTaskmanagementWorkbin**](TaskManagementApi#patchTaskmanagementWorkbin) | **PATCH** /api/v2/taskmanagement/workbins/{workbinId} | Update the attributes of a workbin
[**patchTaskmanagementWorkitem**](TaskManagementApi#patchTaskmanagementWorkitem) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId} | Update the attributes of a workitem
[**patchTaskmanagementWorkitemAssignment**](TaskManagementApi#patchTaskmanagementWorkitemAssignment) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/assignment | Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
[**patchTaskmanagementWorkitemUserWrapups**](TaskManagementApi#patchTaskmanagementWorkitemUserWrapups) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups | Add/Remove a wrapup code for a given user in a workitem.
[**patchTaskmanagementWorkitemUsersMeWrapups**](TaskManagementApi#patchTaskmanagementWorkitemUsersMeWrapups) | **PATCH** /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups | Add/Remove a wrapup code for the current user in a workitem.
[**patchTaskmanagementWorkitemsBulkAddJob**](TaskManagementApi#patchTaskmanagementWorkitemsBulkAddJob) | **PATCH** /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId} | Update workitem bulk add job.
[**patchTaskmanagementWorkitemsBulkTerminateJob**](TaskManagementApi#patchTaskmanagementWorkitemsBulkTerminateJob) | **PATCH** /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId} | Update workitem bulk terminate job.
[**patchTaskmanagementWorktype**](TaskManagementApi#patchTaskmanagementWorktype) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId} | Update the attributes of a worktype
[**patchTaskmanagementWorktypeFlowsDatebasedRule**](TaskManagementApi#patchTaskmanagementWorktypeFlowsDatebasedRule) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId} | Update the attributes of a date based rule
[**patchTaskmanagementWorktypeFlowsOnattributechangeRule**](TaskManagementApi#patchTaskmanagementWorktypeFlowsOnattributechangeRule) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId} | Update the attributes of a rule
[**patchTaskmanagementWorktypeFlowsOncreateRule**](TaskManagementApi#patchTaskmanagementWorktypeFlowsOncreateRule) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId} | Update the attributes of a rule
[**patchTaskmanagementWorktypeStatus**](TaskManagementApi#patchTaskmanagementWorktypeStatus) | **PATCH** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId} | Update the attributes of a status
[**postTaskmanagementWorkbins**](TaskManagementApi#postTaskmanagementWorkbins) | **POST** /api/v2/taskmanagement/workbins | Create a workbin
[**postTaskmanagementWorkbinsQuery**](TaskManagementApi#postTaskmanagementWorkbinsQuery) | **POST** /api/v2/taskmanagement/workbins/query | Query for workbins
[**postTaskmanagementWorkitemAcdCancel**](TaskManagementApi#postTaskmanagementWorkitemAcdCancel) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/acd/cancel | Cancel the assignment process for a workitem that is currently queued for assignment through ACD.
[**postTaskmanagementWorkitemDisconnect**](TaskManagementApi#postTaskmanagementWorkitemDisconnect) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/disconnect | Disconnect the assignee of the workitem
[**postTaskmanagementWorkitemTerminate**](TaskManagementApi#postTaskmanagementWorkitemTerminate) | **POST** /api/v2/taskmanagement/workitems/{workitemId}/terminate | Terminate a workitem
[**postTaskmanagementWorkitems**](TaskManagementApi#postTaskmanagementWorkitems) | **POST** /api/v2/taskmanagement/workitems | Create a workitem
[**postTaskmanagementWorkitemsBulkAddJobs**](TaskManagementApi#postTaskmanagementWorkitemsBulkAddJobs) | **POST** /api/v2/taskmanagement/workitems/bulk/add/jobs | Create a workitem bulk add job.
[**postTaskmanagementWorkitemsBulkTerminateJobs**](TaskManagementApi#postTaskmanagementWorkitemsBulkTerminateJobs) | **POST** /api/v2/taskmanagement/workitems/bulk/terminate/jobs | Create a workitem bulk terminate job.
[**postTaskmanagementWorkitemsQuery**](TaskManagementApi#postTaskmanagementWorkitemsQuery) | **POST** /api/v2/taskmanagement/workitems/query | Query for workitems
[**postTaskmanagementWorkitemsQueryJobs**](TaskManagementApi#postTaskmanagementWorkitemsQueryJobs) | **POST** /api/v2/taskmanagement/workitems/query/jobs | Create a workitem query job
[**postTaskmanagementWorkitemsSchemas**](TaskManagementApi#postTaskmanagementWorkitemsSchemas) | **POST** /api/v2/taskmanagement/workitems/schemas | Create a schema
[**postTaskmanagementWorktypeFlowsDatebasedRules**](TaskManagementApi#postTaskmanagementWorktypeFlowsDatebasedRules) | **POST** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules | Add a date based rule to a worktype
[**postTaskmanagementWorktypeFlowsOnattributechangeRules**](TaskManagementApi#postTaskmanagementWorktypeFlowsOnattributechangeRules) | **POST** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules | Add an attribute-change rule to a worktype
[**postTaskmanagementWorktypeFlowsOncreateRules**](TaskManagementApi#postTaskmanagementWorktypeFlowsOncreateRules) | **POST** /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules | Add an on-create rule to a worktype
[**postTaskmanagementWorktypeStatuses**](TaskManagementApi#postTaskmanagementWorktypeStatuses) | **POST** /api/v2/taskmanagement/worktypes/{worktypeId}/statuses | Add a status to a worktype
[**postTaskmanagementWorktypes**](TaskManagementApi#postTaskmanagementWorktypes) | **POST** /api/v2/taskmanagement/worktypes | Create a worktype
[**postTaskmanagementWorktypesQuery**](TaskManagementApi#postTaskmanagementWorktypesQuery) | **POST** /api/v2/taskmanagement/worktypes/query | Query for worktypes
[**putTaskmanagementWorkitemsSchema**](TaskManagementApi#putTaskmanagementWorkitemsSchema) | **PUT** /api/v2/taskmanagement/workitems/schemas/{schemaId} | Update a schema



## deleteTaskmanagementWorkbin

> void deleteTaskmanagementWorkbin(workbinId)


DELETE /api/v2/taskmanagement/workbins/{workbinId}

Delete a workbin

Requires ANY permissions:

* workitems:workbin:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteTaskmanagementWorkitem

> void deleteTaskmanagementWorkitem(workitemId)


DELETE /api/v2/taskmanagement/workitems/{workitemId}

Delete a workitem

Requires ANY permissions:

* workitems:workitem:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteTaskmanagementWorkitemsBulkAddJob

> void deleteTaskmanagementWorkitemsBulkAddJob(bulkJobId)


DELETE /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}

Delete a bulk add job

Requires ANY permissions:

* workitems:bulkAddJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.deleteTaskmanagementWorkitemsBulkAddJob(bulkJobId)
  .then(() => {
    console.log('deleteTaskmanagementWorkitemsBulkAddJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorkitemsBulkAddJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

void (no response body)


## deleteTaskmanagementWorkitemsBulkTerminateJob

> void deleteTaskmanagementWorkitemsBulkTerminateJob(bulkJobId)


DELETE /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}

Delete a Bulk job

Requires ALL permissions:

* workitems:bulkTerminateJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.deleteTaskmanagementWorkitemsBulkTerminateJob(bulkJobId)
  .then(() => {
    console.log('deleteTaskmanagementWorkitemsBulkTerminateJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorkitemsBulkTerminateJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

void (no response body)


## deleteTaskmanagementWorkitemsSchema

> void deleteTaskmanagementWorkitemsSchema(schemaId)


DELETE /api/v2/taskmanagement/workitems/schemas/{schemaId}

Delete a schema

Requires ANY permissions:

* workitems:workitemSchema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteTaskmanagementWorktype

> void deleteTaskmanagementWorktype(worktypeId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}

Delete a worktype

Requires ANY permissions:

* workitems:worktype:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteTaskmanagementWorktypeFlowsDatebasedRule

> void deleteTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}

Delete a date based rule

Requires ANY permissions:

* workitems:flowRuleDateBased:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.deleteTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId)
  .then(() => {
    console.log('deleteTaskmanagementWorktypeFlowsDatebasedRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorktypeFlowsDatebasedRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

void (no response body)


## deleteTaskmanagementWorktypeFlowsOnattributechangeRule

> void deleteTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}

Delete a rule

Requires ANY permissions:

* workitems:flowRuleOnAttributeChange:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.deleteTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId)
  .then(() => {
    console.log('deleteTaskmanagementWorktypeFlowsOnattributechangeRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorktypeFlowsOnattributechangeRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

void (no response body)


## deleteTaskmanagementWorktypeFlowsOncreateRule

> void deleteTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}

Delete a rule

Requires ANY permissions:

* workitems:flowRuleOnCreate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.deleteTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId)
  .then(() => {
    console.log('deleteTaskmanagementWorktypeFlowsOncreateRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTaskmanagementWorktypeFlowsOncreateRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

void (no response body)


## deleteTaskmanagementWorktypeStatus

> void deleteTaskmanagementWorktypeStatus(worktypeId, statusId)


DELETE /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Delete a status

Requires ANY permissions:

* workitems:status:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getTaskmanagementWorkbin

> Workbin getTaskmanagementWorkbin(workbinId)


GET /api/v2/taskmanagement/workbins/{workbinId}

Get a workbin

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workbin**


## getTaskmanagementWorkbinHistory

> WorkbinChangeListing getTaskmanagementWorkbinHistory(workbinId, opts)


GET /api/v2/taskmanagement/workbins/{workbinId}/history

Get a listing of a workbin's attribute change history

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkbinChangeListing**


## getTaskmanagementWorkbinVersion

> WorkbinVersion getTaskmanagementWorkbinVersion(workbinId, entityVersion)


GET /api/v2/taskmanagement/workbins/{workbinId}/versions/{entityVersion}

Get a version of a workbin

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkbinVersion**


## getTaskmanagementWorkbinVersions

> WorkbinVersionListing getTaskmanagementWorkbinVersions(workbinId, opts)


GET /api/v2/taskmanagement/workbins/{workbinId}/versions

Get all versions of a workbin

Requires ANY permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkbinVersionListing**


## getTaskmanagementWorkitem

> Workitem getTaskmanagementWorkitem(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}

Get a workitem

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## getTaskmanagementWorkitemHistory

> WorkitemChangeListing getTaskmanagementWorkitemHistory(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/history

Get a listing of a workitem's attribute change history

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemChangeListing**


## getTaskmanagementWorkitemUserWrapups

> WorkitemWrapupEntityListing getTaskmanagementWorkitemUserWrapups(workitemId, userId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups

Get all wrapup codes added for the given user for a workitem.

Requires ANY permissions:

* workitems:wrapup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemWrapupEntityListing**


## getTaskmanagementWorkitemVersion

> WorkitemVersion getTaskmanagementWorkitemVersion(workitemId, entityVersion)


GET /api/v2/taskmanagement/workitems/{workitemId}/versions/{entityVersion}

Get a version of a workitem

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemVersion**


## getTaskmanagementWorkitemVersions

> WorkitemVersionListing getTaskmanagementWorkitemVersions(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/versions

Get all versions of a workitem

Requires ANY permissions:

* workitems:workitem:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemVersionListing**


## getTaskmanagementWorkitemWrapups

> WorkitemWrapupEntityListing getTaskmanagementWorkitemWrapups(workitemId, opts)


GET /api/v2/taskmanagement/workitems/{workitemId}/wrapups

Get all wrapup codes added for all users for a workitem.

Requires ANY permissions:

* workitems:wrapup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemWrapupEntityListing**


## getTaskmanagementWorkitemsBulkAddJob

> BulkJob getTaskmanagementWorkitemsBulkAddJob(bulkJobId)


GET /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}

Get the bulk add job associated with the job id.

Requires ANY permissions:

* workitems:bulkAddJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.getTaskmanagementWorkitemsBulkAddJob(bulkJobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsBulkAddJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsBulkAddJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

**BulkJob**


## getTaskmanagementWorkitemsBulkAddJobResults

> BulkJobAddResponse getTaskmanagementWorkitemsBulkAddJobResults(bulkJobId)


GET /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}/results

Get bulk add job results.

Requires ANY permissions:

* workitems:bulkAddJobResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.getTaskmanagementWorkitemsBulkAddJobResults(bulkJobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsBulkAddJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsBulkAddJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

**BulkJobAddResponse**


## getTaskmanagementWorkitemsBulkJobsUsersMe

> BulkJobsListing getTaskmanagementWorkitemsBulkJobsUsersMe(opts)


GET /api/v2/taskmanagement/workitems/bulk/jobs/users/me

Get bulk jobs created by the currently logged in user.

Requires ANY permissions:

* workitems:bulkJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending", // String | Ascending or descending sort order
  'action': "action_example" // String | The bulk job action.
};

apiInstance.getTaskmanagementWorkitemsBulkJobsUsersMe(opts)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsBulkJobsUsersMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsBulkJobsUsersMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to descending]<br />**Values**: ascending, descending |
 **action** | **String** | The bulk job action. | [optional] <br />**Values**: TerminateWorkitems, AddWorkitems |

### Return type

**BulkJobsListing**


## getTaskmanagementWorkitemsBulkTerminateJob

> BulkJob getTaskmanagementWorkitemsBulkTerminateJob(bulkJobId)


GET /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}

Get the bulk job associated with the job id.

Requires ALL permissions:

* workitems:bulkTerminateJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.getTaskmanagementWorkitemsBulkTerminateJob(bulkJobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsBulkTerminateJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsBulkTerminateJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

**BulkJob**


## getTaskmanagementWorkitemsBulkTerminateJobResults

> BulkJobTerminateResultsResponse getTaskmanagementWorkitemsBulkTerminateJobResults(bulkJobId)


GET /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}/results

Get bulk terminate job results.

Requires ALL permissions:

* workitems:bulkTerminateJobResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id

apiInstance.getTaskmanagementWorkitemsBulkTerminateJobResults(bulkJobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsBulkTerminateJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsBulkTerminateJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |

### Return type

**BulkJobTerminateResultsResponse**


## getTaskmanagementWorkitemsQueryJob

> WorkitemQueryJobResponse getTaskmanagementWorkitemsQueryJob(jobId)


GET /api/v2/taskmanagement/workitems/query/jobs/{jobId}

Get the workitem query job associated with the job id.

Requires ALL permissions:

* workitems:queryJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getTaskmanagementWorkitemsQueryJob(jobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsQueryJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsQueryJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**WorkitemQueryJobResponse**


## getTaskmanagementWorkitemsQueryJobResults

> WorkitemPagedEntityListing getTaskmanagementWorkitemsQueryJobResults(jobId)


GET /api/v2/taskmanagement/workitems/query/jobs/{jobId}/results

Get results from for workitem query job 

Requires ALL permissions:

* workitems:queryJobResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getTaskmanagementWorkitemsQueryJobResults(jobId)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsQueryJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsQueryJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**WorkitemPagedEntityListing**


## getTaskmanagementWorkitemsSchema

> DataSchema getTaskmanagementWorkitemsSchema(schemaId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}

Get a schema

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getTaskmanagementWorkitemsSchemaVersion

> DataSchema getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getTaskmanagementWorkitemsSchemaVersions

> DataSchemaListing getTaskmanagementWorkitemsSchemaVersions(schemaId)


GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions

Get all versions of a schema

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchemaListing**


## getTaskmanagementWorkitemsSchemas

> DataSchemaListing getTaskmanagementWorkitemsSchemas()


GET /api/v2/taskmanagement/workitems/schemas

Get a list of schemas.

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getTaskmanagementWorkitemsSchemasCoretype

> Coretype getTaskmanagementWorkitemsSchemasCoretype(coreTypeName)


GET /api/v2/taskmanagement/workitems/schemas/coretypes/{coreTypeName}

Get a specific named core type.

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let coreTypeName = "coreTypeName_example"; // String | Name of the core type

apiInstance.getTaskmanagementWorkitemsSchemasCoretype(coreTypeName)
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemasCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemasCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coreTypeName** | **String** | Name of the core type |  |

### Return type

**Coretype**


## getTaskmanagementWorkitemsSchemasCoretypes

> CoretypeListing getTaskmanagementWorkitemsSchemasCoretypes()


GET /api/v2/taskmanagement/workitems/schemas/coretypes

Get the core types from which all schemas are built.

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

apiInstance.getTaskmanagementWorkitemsSchemasCoretypes()
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemasCoretypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CoretypeListing**


## getTaskmanagementWorkitemsSchemasLimits

> SchemaQuantityLimits getTaskmanagementWorkitemsSchemasLimits()


GET /api/v2/taskmanagement/workitems/schemas/limits

Get quantitative limits on schemas

Requires ANY permissions:

* workitems:workitemSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

apiInstance.getTaskmanagementWorkitemsSchemasLimits()
  .then((data) => {
    console.log(`getTaskmanagementWorkitemsSchemasLimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorkitemsSchemasLimits');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SchemaQuantityLimits**


## getTaskmanagementWorktype

> Worktype getTaskmanagementWorktype(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}

Get a worktype

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expands** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: defaultQueue, defaultSkills, defaultLanguage, schema, flow, defaultScript |

### Return type

**Worktype**


## getTaskmanagementWorktypeFlowsDatebasedRule

> WorkitemDateBasedRule getTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}

Get a date based rule

Requires ANY permissions:

* workitems:flowRuleDateBased:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.getTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsDatebasedRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsDatebasedRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

**WorkitemDateBasedRule**


## getTaskmanagementWorktypeFlowsDatebasedRules

> WorkitemDateBasedRuleListing getTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules

Get all date based rules for a worktype

Requires ANY permissions:

* workitems:flowRuleDateBased:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
};

apiInstance.getTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsDatebasedRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsDatebasedRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |

### Return type

**WorkitemDateBasedRuleListing**


## getTaskmanagementWorktypeFlowsOnattributechangeRule

> WorkitemOnAttributeChangeRule getTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}

Get an attribute change rule

Requires ANY permissions:

* workitems:flowRuleOnAttributeChange:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.getTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsOnattributechangeRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsOnattributechangeRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

**WorkitemOnAttributeChangeRule**


## getTaskmanagementWorktypeFlowsOnattributechangeRules

> WorkitemOnAttributeChangeRuleListing getTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules

Get all attribute-change rules for a worktype

Requires ANY permissions:

* workitems:flowRuleOnAttributeChange:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
};

apiInstance.getTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsOnattributechangeRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsOnattributechangeRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |

### Return type

**WorkitemOnAttributeChangeRuleListing**


## getTaskmanagementWorktypeFlowsOncreateRule

> WorkitemOnCreateRule getTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}

Get an on-create rule

Requires ANY permissions:

* workitems:flowRuleOnCreate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId

apiInstance.getTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsOncreateRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsOncreateRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |

### Return type

**WorkitemOnCreateRule**


## getTaskmanagementWorktypeFlowsOncreateRules

> WorkitemOnCreateRuleListing getTaskmanagementWorktypeFlowsOncreateRules(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules

Get all on-create rules for a worktype

Requires ANY permissions:

* workitems:flowRuleOnCreate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25 // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
};

apiInstance.getTaskmanagementWorktypeFlowsOncreateRules(worktypeId, opts)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeFlowsOncreateRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeFlowsOncreateRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **Number** | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. | [optional] [default to 25] |

### Return type

**WorkitemOnCreateRuleListing**


## getTaskmanagementWorktypeHistory

> WorktypeChangeListing getTaskmanagementWorktypeHistory(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/history

Get a listing of a worktype's attribute change history

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': 25, // Number | Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200.
  'sortOrder': "descending", // String | Ascending or descending sort order
  'fields': ["fields_example"] // [String] | Comma-separated list of fields. The response will contain only versions created as a result of changes to these fields.
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
 **fields** | **[String]** | Comma-separated list of fields. The response will contain only versions created as a result of changes to these fields. | [optional] <br />**Values**: name, serviceLevelTarget, defaultWorkbinId, defaultDueDurationSeconds, defaultExpirationSeconds, defaultPriority, defaultLanguageId, defaultSkillIds, defaultQueueId, assignmentEnabled, defaultStatusId, statuses |

### Return type

**WorktypeChangeListing**


## getTaskmanagementWorktypeStatus

> WorkitemStatus getTaskmanagementWorktypeStatus(worktypeId, statusId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Get a status

Requires ANY permissions:

* workitems:status:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemStatus**


## getTaskmanagementWorktypeStatuses

> WorkitemStatusListing getTaskmanagementWorktypeStatuses(worktypeId)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/statuses

Get list of statuses for this worktype.

Requires ANY permissions:

* workitems:status:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id

apiInstance.getTaskmanagementWorktypeStatuses(worktypeId)
  .then((data) => {
    console.log(`getTaskmanagementWorktypeStatuses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTaskmanagementWorktypeStatuses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |

### Return type

**WorkitemStatusListing**


## getTaskmanagementWorktypeVersion

> WorktypeVersion getTaskmanagementWorktypeVersion(worktypeId, entityVersion)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/versions/{entityVersion}

Get a version of a worktype

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorktypeVersion**


## getTaskmanagementWorktypeVersions

> WorktypeVersionListing getTaskmanagementWorktypeVersions(worktypeId, opts)


GET /api/v2/taskmanagement/worktypes/{worktypeId}/versions

Get all versions of a worktype

Requires ANY permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorktypeVersionListing**


## patchTaskmanagementWorkbin

> Workbin patchTaskmanagementWorkbin(workbinId, body)


PATCH /api/v2/taskmanagement/workbins/{workbinId}

Update the attributes of a workbin

Requires ANY permissions:

* workitems:workbin:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workbin**


## patchTaskmanagementWorkitem

> Workitem patchTaskmanagementWorkitem(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}

Update the attributes of a workitem

Requires ANY permissions:

* workitems:workitem:edit
* workitems:workitem:accept

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## patchTaskmanagementWorkitemAssignment

> void patchTaskmanagementWorkitemAssignment(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/assignment

Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.

Requires ANY permissions:

* workitems:workitem:pull
* workitems:workitem:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## patchTaskmanagementWorkitemUserWrapups

> WorkitemWrapup patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups

Add/Remove a wrapup code for a given user in a workitem.

Requires ANY permissions:

* workitems:wrapup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemWrapup**


## patchTaskmanagementWorkitemUsersMeWrapups

> WorkitemWrapup patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body)


PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups

Add/Remove a wrapup code for the current user in a workitem.

Requires ANY permissions:

* workitems:wrapupSelf:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemWrapup**


## patchTaskmanagementWorkitemsBulkAddJob

> BulkJob patchTaskmanagementWorkitemsBulkAddJob(bulkJobId, body)


PATCH /api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}

Update workitem bulk add job.

Requires ANY permissions:

* workitems:bulkAddJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id
let body = {}; // Object | Bulk add job update request

apiInstance.patchTaskmanagementWorkitemsBulkAddJob(bulkJobId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkitemsBulkAddJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitemsBulkAddJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |
 **body** | **Object** | Bulk add job update request |  |

### Return type

**BulkJob**


## patchTaskmanagementWorkitemsBulkTerminateJob

> BulkJob patchTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, body)


PATCH /api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}

Update workitem bulk terminate job.

Requires ALL permissions:

* workitems:bulkTerminateJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let bulkJobId = "bulkJobId_example"; // String | Bulk job id
let body = {}; // Object | Bulk job update request

apiInstance.patchTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorkitemsBulkTerminateJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorkitemsBulkTerminateJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bulkJobId** | **String** | Bulk job id |  |
 **body** | **Object** | Bulk job update request |  |

### Return type

**BulkJob**


## patchTaskmanagementWorktype

> Worktype patchTaskmanagementWorktype(worktypeId, body)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}

Update the attributes of a worktype

Requires ALL permissions:

* workitems:worktype:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let body = {}; // Object | Worktype

apiInstance.patchTaskmanagementWorktype(worktypeId, body)
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
 **body** | **Object** | Worktype |  |

### Return type

**Worktype**


## patchTaskmanagementWorktypeFlowsDatebasedRule

> WorkitemDateBasedRule patchTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, body)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}

Update the attributes of a date based rule

Requires ANY permissions:

* workitems:flowRuleDateBased:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId
let body = {}; // Object | Rule

apiInstance.patchTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorktypeFlowsDatebasedRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorktypeFlowsDatebasedRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemDateBasedRule**


## patchTaskmanagementWorktypeFlowsOnattributechangeRule

> WorkitemOnAttributeChangeRule patchTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, body)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}

Update the attributes of a rule

Requires ANY permissions:

* workitems:flowRuleOnAttributeChange:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId
let body = {}; // Object | Rule

apiInstance.patchTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorktypeFlowsOnattributechangeRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorktypeFlowsOnattributechangeRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemOnAttributeChangeRule**


## patchTaskmanagementWorktypeFlowsOncreateRule

> WorkitemOnCreateRule patchTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, body)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}

Update the attributes of a rule

Requires ANY permissions:

* workitems:flowRuleOnCreate:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let ruleId = "ruleId_example"; // String | ruleId
let body = {}; // Object | Rule

apiInstance.patchTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, body)
  .then((data) => {
    console.log(`patchTaskmanagementWorktypeFlowsOncreateRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTaskmanagementWorktypeFlowsOncreateRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **ruleId** | **String** | ruleId |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemOnCreateRule**


## patchTaskmanagementWorktypeStatus

> WorkitemStatus patchTaskmanagementWorktypeStatus(worktypeId, statusId, body)


PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}

Update the attributes of a status

Requires ANY permissions:

* workitems:status:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let statusId = "statusId_example"; // String | Status id
let body = {}; // Object | Status

apiInstance.patchTaskmanagementWorktypeStatus(worktypeId, statusId, body)
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
 **body** | **Object** | Status |  |

### Return type

**WorkitemStatus**


## postTaskmanagementWorkbins

> Workbin postTaskmanagementWorkbins(body)


POST /api/v2/taskmanagement/workbins

Create a workbin

Requires ANY permissions:

* workitems:workbin:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Workbin

apiInstance.postTaskmanagementWorkbins(body)
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
 **body** | **Object** | Workbin |  |

### Return type

**Workbin**


## postTaskmanagementWorkbinsQuery

> WorkbinQueryEntityListing postTaskmanagementWorkbinsQuery(body)


POST /api/v2/taskmanagement/workbins/query

Query for workbins

Requires ALL permissions:

* workitems:workbin:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkbinQueryEntityListing**


## postTaskmanagementWorkitemAcdCancel

> Workitem postTaskmanagementWorkitemAcdCancel(workitemId)


POST /api/v2/taskmanagement/workitems/{workitemId}/acd/cancel

Cancel the assignment process for a workitem that is currently queued for assignment through ACD.

Requires ANY permissions:

* workitems:workitem:cancelRouting

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## postTaskmanagementWorkitemDisconnect

> Workitem postTaskmanagementWorkitemDisconnect(workitemId)


POST /api/v2/taskmanagement/workitems/{workitemId}/disconnect

Disconnect the assignee of the workitem

Requires ANY permissions:

* workitems:workitem:disconnect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## postTaskmanagementWorkitemTerminate

> Workitem postTaskmanagementWorkitemTerminate(workitemId, opts)


POST /api/v2/taskmanagement/workitems/{workitemId}/terminate

Terminate a workitem

Requires ANY permissions:

* workitems:workitem:terminate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## postTaskmanagementWorkitems

> Workitem postTaskmanagementWorkitems(body)


POST /api/v2/taskmanagement/workitems

Create a workitem

Requires ANY permissions:

* workitems:workitem:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Workitem**


## postTaskmanagementWorkitemsBulkAddJobs

> BulkJob postTaskmanagementWorkitemsBulkAddJobs(body)


POST /api/v2/taskmanagement/workitems/bulk/add/jobs

Create a workitem bulk add job.

Requires ANY permissions:

* workitems:bulkAddJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Bulk job definition.

apiInstance.postTaskmanagementWorkitemsBulkAddJobs(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemsBulkAddJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemsBulkAddJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Bulk job definition. |  |

### Return type

**BulkJob**


## postTaskmanagementWorkitemsBulkTerminateJobs

> BulkJob postTaskmanagementWorkitemsBulkTerminateJobs(body)


POST /api/v2/taskmanagement/workitems/bulk/terminate/jobs

Create a workitem bulk terminate job.

Requires ALL permissions:

* workitems:bulkTerminateJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Bulk job definition.

apiInstance.postTaskmanagementWorkitemsBulkTerminateJobs(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemsBulkTerminateJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemsBulkTerminateJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Bulk job definition. |  |

### Return type

**BulkJob**


## postTaskmanagementWorkitemsQuery

> WorkitemPostQueryEntityListing postTaskmanagementWorkitemsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkitemPostQueryEntityListing**


## postTaskmanagementWorkitemsQueryJobs

> WorkitemQueryJobResponse postTaskmanagementWorkitemsQueryJobs(body)


POST /api/v2/taskmanagement/workitems/query/jobs

Create a workitem query job

Requires ANY permissions:

* workitems:queryJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | WorkitemQueryJobCreate

apiInstance.postTaskmanagementWorkitemsQueryJobs(body)
  .then((data) => {
    console.log(`postTaskmanagementWorkitemsQueryJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorkitemsQueryJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WorkitemQueryJobCreate |  |

### Return type

**WorkitemQueryJobResponse**


## postTaskmanagementWorkitemsSchemas

> DataSchema postTaskmanagementWorkitemsSchemas(body)


POST /api/v2/taskmanagement/workitems/schemas

Create a schema

Requires ANY permissions:

* workitems:workitemSchema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## postTaskmanagementWorktypeFlowsDatebasedRules

> WorkitemDateBasedRule postTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, body)


POST /api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules

Add a date based rule to a worktype

Requires ANY permissions:

* workitems:flowRuleDateBased:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let body = {}; // Object | Rule

apiInstance.postTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, body)
  .then((data) => {
    console.log(`postTaskmanagementWorktypeFlowsDatebasedRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypeFlowsDatebasedRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemDateBasedRule**


## postTaskmanagementWorktypeFlowsOnattributechangeRules

> WorkitemOnAttributeChangeRule postTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, body)


POST /api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules

Add an attribute-change rule to a worktype

Requires ANY permissions:

* workitems:flowRuleOnAttributeChange:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let body = {}; // Object | Rule

apiInstance.postTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, body)
  .then((data) => {
    console.log(`postTaskmanagementWorktypeFlowsOnattributechangeRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypeFlowsOnattributechangeRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemOnAttributeChangeRule**


## postTaskmanagementWorktypeFlowsOncreateRules

> WorkitemOnCreateRule postTaskmanagementWorktypeFlowsOncreateRules(worktypeId, body)


POST /api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules

Add an on-create rule to a worktype

Requires ANY permissions:

* workitems:flowRuleOnCreate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let body = {}; // Object | Rule

apiInstance.postTaskmanagementWorktypeFlowsOncreateRules(worktypeId, body)
  .then((data) => {
    console.log(`postTaskmanagementWorktypeFlowsOncreateRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTaskmanagementWorktypeFlowsOncreateRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **worktypeId** | **String** | Worktype id |  |
 **body** | **Object** | Rule |  |

### Return type

**WorkitemOnCreateRule**


## postTaskmanagementWorktypeStatuses

> WorkitemStatus postTaskmanagementWorktypeStatuses(worktypeId, body)


POST /api/v2/taskmanagement/worktypes/{worktypeId}/statuses

Add a status to a worktype

Requires ANY permissions:

* workitems:status:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let worktypeId = "worktypeId_example"; // String | Worktype id
let body = {}; // Object | Status

apiInstance.postTaskmanagementWorktypeStatuses(worktypeId, body)
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
 **body** | **Object** | Status |  |

### Return type

**WorkitemStatus**


## postTaskmanagementWorktypes

> Worktype postTaskmanagementWorktypes(body)


POST /api/v2/taskmanagement/worktypes

Create a worktype

Requires ANY permissions:

* workitems:worktype:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TaskManagementApi();

let body = {}; // Object | Worktype

apiInstance.postTaskmanagementWorktypes(body)
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
 **body** | **Object** | Worktype |  |

### Return type

**Worktype**


## postTaskmanagementWorktypesQuery

> WorktypeQueryEntityListing postTaskmanagementWorktypesQuery(body)


POST /api/v2/taskmanagement/worktypes/query

Query for worktypes

Requires ALL permissions:

* workitems:worktype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorktypeQueryEntityListing**


## putTaskmanagementWorkitemsSchema

> DataSchema putTaskmanagementWorkitemsSchema(schemaId, body)


PUT /api/v2/taskmanagement/workitems/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* workitems:workitemSchema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


_purecloud-platform-client-v2@229.1.0_
