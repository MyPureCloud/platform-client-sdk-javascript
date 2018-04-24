---
title: ArchitectApi
---
# platformClient.ArchitectApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteArchitectEmergencygroup**](ArchitectApi.html#deleteArchitectEmergencygroup) | **DELETE** /api/v2/architect/emergencygroups/{emergencyGroupId} | Deletes a emergency group by ID
[**deleteArchitectIvr**](ArchitectApi.html#deleteArchitectIvr) | **DELETE** /api/v2/architect/ivrs/{ivrId} | Delete an IVR Config.
[**deleteArchitectPrompt**](ArchitectApi.html#deleteArchitectPrompt) | **DELETE** /api/v2/architect/prompts/{promptId} | Delete specified user prompt
[**deleteArchitectPromptResource**](ArchitectApi.html#deleteArchitectPromptResource) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Delete specified user prompt resource
[**deleteArchitectPrompts**](ArchitectApi.html#deleteArchitectPrompts) | **DELETE** /api/v2/architect/prompts | Batch-delete a list of prompts
[**deleteArchitectSchedule**](ArchitectApi.html#deleteArchitectSchedule) | **DELETE** /api/v2/architect/schedules/{scheduleId} | Delete a schedule by id
[**deleteArchitectSchedulegroup**](ArchitectApi.html#deleteArchitectSchedulegroup) | **DELETE** /api/v2/architect/schedulegroups/{scheduleGroupId} | Deletes a schedule group by ID
[**deleteArchitectSystempromptResource**](ArchitectApi.html#deleteArchitectSystempromptResource) | **DELETE** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Delete a system prompt resource override.
[**deleteFlow**](ArchitectApi.html#deleteFlow) | **DELETE** /api/v2/flows/{flowId} | Delete flow
[**deleteFlows**](ArchitectApi.html#deleteFlows) | **DELETE** /api/v2/flows | Batch-delete a list of flows
[**deleteFlowsDatatable**](ArchitectApi.html#deleteFlowsDatatable) | **DELETE** /api/v2/flows/datatables/{datatableId} | deletes a specific datatable by id
[**deleteFlowsDatatableRow**](ArchitectApi.html#deleteFlowsDatatableRow) | **DELETE** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Delete a row entry
[**getArchitectDependencytracking**](ArchitectApi.html#getArchitectDependencytracking) | **GET** /api/v2/architect/dependencytracking | Get Dependency Tracking objects that have a given display name
[**getArchitectDependencytrackingBuild**](ArchitectApi.html#getArchitectDependencytrackingBuild) | **GET** /api/v2/architect/dependencytracking/build | Get Dependency Tracking build status for an organization
[**getArchitectDependencytrackingConsumedresources**](ArchitectApi.html#getArchitectDependencytrackingConsumedresources) | **GET** /api/v2/architect/dependencytracking/consumedresources | Get resources that are consumed by a given Dependency Tracking object
[**getArchitectDependencytrackingConsumingresources**](ArchitectApi.html#getArchitectDependencytrackingConsumingresources) | **GET** /api/v2/architect/dependencytracking/consumingresources | Get resources that consume a given Dependency Tracking object
[**getArchitectDependencytrackingDeletedresourceconsumers**](ArchitectApi.html#getArchitectDependencytrackingDeletedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/deletedresourceconsumers | Get Dependency Tracking objects that consume deleted resources
[**getArchitectDependencytrackingObject**](ArchitectApi.html#getArchitectDependencytrackingObject) | **GET** /api/v2/architect/dependencytracking/object | Get a Dependency Tracking object
[**getArchitectDependencytrackingType**](ArchitectApi.html#getArchitectDependencytrackingType) | **GET** /api/v2/architect/dependencytracking/types/{typeId} | Get a Dependency Tracking type.
[**getArchitectDependencytrackingTypes**](ArchitectApi.html#getArchitectDependencytrackingTypes) | **GET** /api/v2/architect/dependencytracking/types | Get Dependency Tracking types.
[**getArchitectDependencytrackingUpdatedresourceconsumers**](ArchitectApi.html#getArchitectDependencytrackingUpdatedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/updatedresourceconsumers | Get Dependency Tracking objects that depend on updated resources
[**getArchitectEmergencygroup**](ArchitectApi.html#getArchitectEmergencygroup) | **GET** /api/v2/architect/emergencygroups/{emergencyGroupId} | Gets a emergency group by ID
[**getArchitectEmergencygroups**](ArchitectApi.html#getArchitectEmergencygroups) | **GET** /api/v2/architect/emergencygroups | Get a list of emergency groups.
[**getArchitectIvr**](ArchitectApi.html#getArchitectIvr) | **GET** /api/v2/architect/ivrs/{ivrId} | Get an IVR config.
[**getArchitectIvrs**](ArchitectApi.html#getArchitectIvrs) | **GET** /api/v2/architect/ivrs | Get IVR configs.
[**getArchitectPrompt**](ArchitectApi.html#getArchitectPrompt) | **GET** /api/v2/architect/prompts/{promptId} | Get specified user prompt
[**getArchitectPromptHistoryHistoryId**](ArchitectApi.html#getArchitectPromptHistoryHistoryId) | **GET** /api/v2/architect/prompts/{promptId}/history/{historyId} | Get generated prompt history
[**getArchitectPromptResource**](ArchitectApi.html#getArchitectPromptResource) | **GET** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Get specified user prompt resource
[**getArchitectPromptResources**](ArchitectApi.html#getArchitectPromptResources) | **GET** /api/v2/architect/prompts/{promptId}/resources | Get a pageable list of user prompt resources
[**getArchitectPrompts**](ArchitectApi.html#getArchitectPrompts) | **GET** /api/v2/architect/prompts | Get a pageable list of user prompts
[**getArchitectSchedule**](ArchitectApi.html#getArchitectSchedule) | **GET** /api/v2/architect/schedules/{scheduleId} | Get a schedule by ID
[**getArchitectSchedulegroup**](ArchitectApi.html#getArchitectSchedulegroup) | **GET** /api/v2/architect/schedulegroups/{scheduleGroupId} | Gets a schedule group by ID
[**getArchitectSchedulegroups**](ArchitectApi.html#getArchitectSchedulegroups) | **GET** /api/v2/architect/schedulegroups | Get a list of schedule groups.
[**getArchitectSchedules**](ArchitectApi.html#getArchitectSchedules) | **GET** /api/v2/architect/schedules | Get a list of schedules.
[**getArchitectSystemprompt**](ArchitectApi.html#getArchitectSystemprompt) | **GET** /api/v2/architect/systemprompts/{promptId} | Get a system prompt
[**getArchitectSystempromptHistoryHistoryId**](ArchitectApi.html#getArchitectSystempromptHistoryHistoryId) | **GET** /api/v2/architect/systemprompts/{promptId}/history/{historyId} | Get generated prompt history
[**getArchitectSystempromptResource**](ArchitectApi.html#getArchitectSystempromptResource) | **GET** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Get a system prompt resource.
[**getArchitectSystempromptResources**](ArchitectApi.html#getArchitectSystempromptResources) | **GET** /api/v2/architect/systemprompts/{promptId}/resources | Get system prompt resources.
[**getArchitectSystemprompts**](ArchitectApi.html#getArchitectSystemprompts) | **GET** /api/v2/architect/systemprompts | Get System Prompts
[**getFlow**](ArchitectApi.html#getFlow) | **GET** /api/v2/flows/{flowId} | Get flow
[**getFlowHistoryHistoryId**](ArchitectApi.html#getFlowHistoryHistoryId) | **GET** /api/v2/flows/{flowId}/history/{historyId} | Get generated flow history
[**getFlowLatestconfiguration**](ArchitectApi.html#getFlowLatestconfiguration) | **GET** /api/v2/flows/{flowId}/latestconfiguration | Get the latest configuration for flow
[**getFlowVersion**](ArchitectApi.html#getFlowVersion) | **GET** /api/v2/flows/{flowId}/versions/{versionId} | Get flow version
[**getFlowVersionConfiguration**](ArchitectApi.html#getFlowVersionConfiguration) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/configuration | Create flow version configuration
[**getFlowVersions**](ArchitectApi.html#getFlowVersions) | **GET** /api/v2/flows/{flowId}/versions | Get flow version list
[**getFlows**](ArchitectApi.html#getFlows) | **GET** /api/v2/flows | Get a pageable list of flows, filtered by query parameters
[**getFlowsDatatable**](ArchitectApi.html#getFlowsDatatable) | **GET** /api/v2/flows/datatables/{datatableId} | Returns a specific datatable by id
[**getFlowsDatatableRow**](ArchitectApi.html#getFlowsDatatableRow) | **GET** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Returns a specific row for the datatable
[**getFlowsDatatableRows**](ArchitectApi.html#getFlowsDatatableRows) | **GET** /api/v2/flows/datatables/{datatableId}/rows | Returns the rows for the datatable
[**getFlowsDatatables**](ArchitectApi.html#getFlowsDatatables) | **GET** /api/v2/flows/datatables | Retrieve a list of datatables for the org
[**postArchitectDependencytrackingBuild**](ArchitectApi.html#postArchitectDependencytrackingBuild) | **POST** /api/v2/architect/dependencytracking/build | Rebuild Dependency Tracking data for an organization
[**postArchitectEmergencygroups**](ArchitectApi.html#postArchitectEmergencygroups) | **POST** /api/v2/architect/emergencygroups | Creates a new emergency group
[**postArchitectIvrs**](ArchitectApi.html#postArchitectIvrs) | **POST** /api/v2/architect/ivrs | Create IVR config.
[**postArchitectPromptHistory**](ArchitectApi.html#postArchitectPromptHistory) | **POST** /api/v2/architect/prompts/{promptId}/history | Generate prompt history
[**postArchitectPromptResources**](ArchitectApi.html#postArchitectPromptResources) | **POST** /api/v2/architect/prompts/{promptId}/resources | Create a new user prompt resource
[**postArchitectPrompts**](ArchitectApi.html#postArchitectPrompts) | **POST** /api/v2/architect/prompts | Create a new user prompt
[**postArchitectSchedulegroups**](ArchitectApi.html#postArchitectSchedulegroups) | **POST** /api/v2/architect/schedulegroups | Creates a new schedule group
[**postArchitectSchedules**](ArchitectApi.html#postArchitectSchedules) | **POST** /api/v2/architect/schedules | Create a new schedule.
[**postArchitectSystempromptHistory**](ArchitectApi.html#postArchitectSystempromptHistory) | **POST** /api/v2/architect/systemprompts/{promptId}/history | Generate system prompt history
[**postArchitectSystempromptResources**](ArchitectApi.html#postArchitectSystempromptResources) | **POST** /api/v2/architect/systemprompts/{promptId}/resources | Create system prompt resource override.
[**postFlowVersions**](ArchitectApi.html#postFlowVersions) | **POST** /api/v2/flows/{flowId}/versions | Create flow version
[**postFlows**](ArchitectApi.html#postFlows) | **POST** /api/v2/flows | Create flow
[**postFlowsActionsCheckin**](ArchitectApi.html#postFlowsActionsCheckin) | **POST** /api/v2/flows/actions/checkin | Check-in flow
[**postFlowsActionsCheckout**](ArchitectApi.html#postFlowsActionsCheckout) | **POST** /api/v2/flows/actions/checkout | Check-out flow
[**postFlowsActionsDeactivate**](ArchitectApi.html#postFlowsActionsDeactivate) | **POST** /api/v2/flows/actions/deactivate | Deactivate flow
[**postFlowsActionsPublish**](ArchitectApi.html#postFlowsActionsPublish) | **POST** /api/v2/flows/actions/publish | Publish flow
[**postFlowsActionsRevert**](ArchitectApi.html#postFlowsActionsRevert) | **POST** /api/v2/flows/actions/revert | Revert flow
[**postFlowsActionsUnlock**](ArchitectApi.html#postFlowsActionsUnlock) | **POST** /api/v2/flows/actions/unlock | Unlock flow
[**postFlowsDatatableRows**](ArchitectApi.html#postFlowsDatatableRows) | **POST** /api/v2/flows/datatables/{datatableId}/rows | Create a new row entry
[**postFlowsDatatables**](ArchitectApi.html#postFlowsDatatables) | **POST** /api/v2/flows/datatables | Create a new datatable with the specified json-schema definition
[**putArchitectEmergencygroup**](ArchitectApi.html#putArchitectEmergencygroup) | **PUT** /api/v2/architect/emergencygroups/{emergencyGroupId} | Updates a emergency group by ID
[**putArchitectIvr**](ArchitectApi.html#putArchitectIvr) | **PUT** /api/v2/architect/ivrs/{ivrId} | Update an IVR Config.
[**putArchitectPrompt**](ArchitectApi.html#putArchitectPrompt) | **PUT** /api/v2/architect/prompts/{promptId} | Update specified user prompt
[**putArchitectPromptResource**](ArchitectApi.html#putArchitectPromptResource) | **PUT** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Update specified user prompt resource
[**putArchitectSchedule**](ArchitectApi.html#putArchitectSchedule) | **PUT** /api/v2/architect/schedules/{scheduleId} | Update schedule by ID
[**putArchitectSchedulegroup**](ArchitectApi.html#putArchitectSchedulegroup) | **PUT** /api/v2/architect/schedulegroups/{scheduleGroupId} | Updates a schedule group by ID
[**putArchitectSystempromptResource**](ArchitectApi.html#putArchitectSystempromptResource) | **PUT** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Updates a system prompt resource override.
[**putFlow**](ArchitectApi.html#putFlow) | **PUT** /api/v2/flows/{flowId} | Update flow
[**putFlowsDatatable**](ArchitectApi.html#putFlowsDatatable) | **PUT** /api/v2/flows/datatables/{datatableId} | Updates a specific datatable by id
[**putFlowsDatatableRow**](ArchitectApi.html#putFlowsDatatableRow) | **PUT** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Update a row entry
{: class="table table-striped"}

<a name="deleteArchitectEmergencygroup"></a>

# void deleteArchitectEmergencygroup(emergencyGroupId)

DELETE /api/v2/architect/emergencygroups/{emergencyGroupId}

Deletes a emergency group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID

apiInstance.deleteArchitectEmergencygroup(emergencyGroupId)
  .then(function() {
    console.log('deleteArchitectEmergencygroup returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectEmergencygroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emergencyGroupId** | **String** | Emergency group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectIvr"></a>

# void deleteArchitectIvr(ivrId)

DELETE /api/v2/architect/ivrs/{ivrId}

Delete an IVR Config.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var ivrId = "ivrId_example"; // String | IVR id

apiInstance.deleteArchitectIvr(ivrId)
  .then(function() {
    console.log('deleteArchitectIvr returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectIvr');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectPrompt"></a>

# void deleteArchitectPrompt(promptId, opts)

DELETE /api/v2/architect/prompts/{promptId}

Delete specified user prompt



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'allResources': true // Boolean | Whether or not to delete all the prompt resources
};
apiInstance.deleteArchitectPrompt(promptId, opts)
  .then(function() {
    console.log('deleteArchitectPrompt returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectPrompt');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **allResources** | **Boolean** | Whether or not to delete all the prompt resources | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectPromptResource"></a>

# void deleteArchitectPromptResource(promptId, languageCode)

DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Delete specified user prompt resource



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectPromptResource(promptId, languageCode)
  .then(function() {
    console.log('deleteArchitectPromptResource returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectPromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectPrompts"></a>

# Operation deleteArchitectPrompts(id)

DELETE /api/v2/architect/prompts

Batch-delete a list of prompts

Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = ["id_example"]; // [String] | List of Prompt IDs

apiInstance.deleteArchitectPrompts(id)
  .then(function(data) {
    console.log(`deleteArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectPrompts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | List of Prompt IDs |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="deleteArchitectSchedule"></a>

# void deleteArchitectSchedule(scheduleId)

DELETE /api/v2/architect/schedules/{scheduleId}

Delete a schedule by id



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteArchitectSchedule(scheduleId)
  .then(function() {
    console.log('deleteArchitectSchedule returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectSchedulegroup"></a>

# void deleteArchitectSchedulegroup(scheduleGroupId)

DELETE /api/v2/architect/schedulegroups/{scheduleGroupId}

Deletes a schedule group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID

apiInstance.deleteArchitectSchedulegroup(scheduleGroupId)
  .then(function() {
    console.log('deleteArchitectSchedulegroup returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectSchedulegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleGroupId** | **String** | Schedule group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectSystempromptResource"></a>

# void deleteArchitectSystempromptResource(promptId, languageCode)

DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Delete a system prompt resource override.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectSystempromptResource(promptId, languageCode)
  .then(function() {
    console.log('deleteArchitectSystempromptResource returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteArchitectSystempromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteFlow"></a>

# void deleteFlow(flowId)

DELETE /api/v2/flows/{flowId}

Delete flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

apiInstance.deleteFlow(flowId)
  .then(function() {
    console.log('deleteFlow returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteFlow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteFlows"></a>

# Operation deleteFlows(id)

DELETE /api/v2/flows

Batch-delete a list of flows

Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = ["id_example"]; // [String] | List of Flow IDs

apiInstance.deleteFlows(id)
  .then(function(data) {
    console.log(`deleteFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteFlows');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | List of Flow IDs |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="deleteFlowsDatatable"></a>

# void deleteFlowsDatatable(datatableId, opts)

DELETE /api/v2/flows/datatables/{datatableId}

deletes a specific datatable by id

deletes an entire datatable (including schema and data) with a given id)

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var opts = { 
  'force': false // Boolean | force delete, even if in use
};
apiInstance.deleteFlowsDatatable(datatableId, opts)
  .then(function() {
    console.log('deleteFlowsDatatable returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteFlowsDatatable');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **force** | **Boolean** | force delete, even if in use | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteFlowsDatatableRow"></a>

# void deleteFlowsDatatableRow(datatableId, rowId)

DELETE /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Delete a row entry

Deletes a row with a given rowId.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var rowId = "rowId_example"; // String | the key for the row

apiInstance.deleteFlowsDatatableRow(datatableId, rowId)
  .then(function() {
    console.log('deleteFlowsDatatableRow returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteFlowsDatatableRow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **rowId** | **String** | the key for the row |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getArchitectDependencytracking"></a>

# DependencyObjectEntityListing getArchitectDependencytracking(name, opts)

GET /api/v2/architect/dependencytracking

Get Dependency Tracking objects that have a given display name



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var name = "name_example"; // String | Object name to search for

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': true, // Boolean | Include resources each result item consumes
  'consumingResources': true, // Boolean | Include resources that consume each result item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"] // [String] | Types of consuming resources to return, if consuming resources are requested
};
apiInstance.getArchitectDependencytracking(name, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytracking success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytracking');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Object name to search for |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean** | Include resources each result item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume each result item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectDependencytrackingBuild"></a>

# DependencyStatus getArchitectDependencytrackingBuild()

GET /api/v2/architect/dependencytracking/build

Get Dependency Tracking build status for an organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();
apiInstance.getArchitectDependencytrackingBuild()
  .then(function(data) {
    console.log(`getArchitectDependencytrackingBuild success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingBuild');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DependencyStatus**

<a name="getArchitectDependencytrackingConsumedresources"></a>

# ConsumedResourcesEntityListing getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)

GET /api/v2/architect/dependencytracking/consumedresources

Get resources that are consumed by a given Dependency Tracking object



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Consuming object ID

var version = "version_example"; // String | Consuming object version

var objectType = "objectType_example"; // String | Consuming object type.  Only versioned types are allowed here.

var opts = { 
  'resourceType': ["resourceType_example"] // [String] | Types of consumed resources to show
};
apiInstance.getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingConsumedresources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingConsumedresources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Consuming object ID |  |
 **version** | **String** | Consuming object version |  |
 **objectType** | **String** | Consuming object type.  Only versioned types are allowed here. | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **resourceType** | **[String]** | Types of consumed resources to show | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

**ConsumedResourcesEntityListing**

<a name="getArchitectDependencytrackingConsumingresources"></a>

# ConsumingResourcesEntityListing getArchitectDependencytrackingConsumingresources(id, objectType, opts)

GET /api/v2/architect/dependencytracking/consumingresources

Get resources that consume a given Dependency Tracking object



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Consumed object ID

var objectType = "objectType_example"; // String | Consumed object type

var opts = { 
  'resourceType': ["resourceType_example"] // [String] | Types of consuming resources to show.  Only versioned types are allowed here.
};
apiInstance.getArchitectDependencytrackingConsumingresources(id, objectType, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingConsumingresources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingConsumingresources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Consumed object ID |  |
 **objectType** | **String** | Consumed object type | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **resourceType** | **[String]** | Types of consuming resources to show.  Only versioned types are allowed here. | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

**ConsumingResourcesEntityListing**

<a name="getArchitectDependencytrackingDeletedresourceconsumers"></a>

# DependencyObjectEntityListing getArchitectDependencytrackingDeletedresourceconsumers(opts)

GET /api/v2/architect/dependencytracking/deletedresourceconsumers

Get Dependency Tracking objects that consume deleted resources



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'flowFilter': "flowFilter_example", // String | Show only checkedIn or published flows
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingDeletedresourceconsumers(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingDeletedresourceconsumers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingDeletedresourceconsumers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Name to search for | [optional]  |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **flowFilter** | **String** | Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectDependencytrackingObject"></a>

# DependencyObject getArchitectDependencytrackingObject(id, opts)

GET /api/v2/architect/dependencytracking/object

Get a Dependency Tracking object



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Object ID

var opts = { 
  'version': "version_example", // String | Object version
  'objectType': "objectType_example", // String | Object type
  'consumedResources': true, // Boolean | Include resources this item consumes
  'consumingResources': true, // Boolean | Include resources that consume this item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"] // [String] | Types of consuming resources to return, if consuming resources are requested
};
apiInstance.getArchitectDependencytrackingObject(id, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingObject success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingObject');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Object ID |  |
 **version** | **String** | Object version | [optional]  |
 **objectType** | **String** | Object type | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean** | Include resources this item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume this item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

**DependencyObject**

<a name="getArchitectDependencytrackingType"></a>

# DependencyType getArchitectDependencytrackingType(typeId)

GET /api/v2/architect/dependencytracking/types/{typeId}

Get a Dependency Tracking type.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var typeId = "typeId_example"; // String | Type ID

apiInstance.getArchitectDependencytrackingType(typeId)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingType');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String** | Type ID |  |
{: class="table table-striped"}

### Return type

**DependencyType**

<a name="getArchitectDependencytrackingTypes"></a>

# DependencyTypeEntityListing getArchitectDependencytrackingTypes(opts)

GET /api/v2/architect/dependencytracking/types

Get Dependency Tracking types.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingTypes(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingTypes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DependencyTypeEntityListing**

<a name="getArchitectDependencytrackingUpdatedresourceconsumers"></a>

# DependencyObjectEntityListing getArchitectDependencytrackingUpdatedresourceconsumers(opts)

GET /api/v2/architect/dependencytracking/updatedresourceconsumers

Get Dependency Tracking objects that depend on updated resources



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingUpdatedresourceconsumers(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingUpdatedresourceconsumers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectDependencytrackingUpdatedresourceconsumers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Name to search for | [optional]  |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, EMAILROUTE, EMERGENCYGROUP, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, LEXBOT, LEXBOTALIAS, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SURVEYINVITEFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectEmergencygroup"></a>

# EmergencyGroup getArchitectEmergencygroup(emergencyGroupId)

GET /api/v2/architect/emergencygroups/{emergencyGroupId}

Gets a emergency group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID

apiInstance.getArchitectEmergencygroup(emergencyGroupId)
  .then(function(data) {
    console.log(`getArchitectEmergencygroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectEmergencygroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emergencyGroupId** | **String** | Emergency group ID |  |
{: class="table table-striped"}

### Return type

**EmergencyGroup**

<a name="getArchitectEmergencygroups"></a>

# EmergencyGroupListing getArchitectEmergencygroups(opts)

GET /api/v2/architect/emergencygroups

Get a list of emergency groups.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example" // String | Name of the Emergency Group to filter by.
};
apiInstance.getArchitectEmergencygroups(opts)
  .then(function(data) {
    console.log(`getArchitectEmergencygroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectEmergencygroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the Emergency Group to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyGroupListing**

<a name="getArchitectIvr"></a>

# IVR getArchitectIvr(ivrId)

GET /api/v2/architect/ivrs/{ivrId}

Get an IVR config.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var ivrId = "ivrId_example"; // String | IVR id

apiInstance.getArchitectIvr(ivrId)
  .then(function(data) {
    console.log(`getArchitectIvr success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectIvr');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |
{: class="table table-striped"}

### Return type

**IVR**

<a name="getArchitectIvrs"></a>

# IVREntityListing getArchitectIvrs(opts)

GET /api/v2/architect/ivrs

Get IVR configs.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example" // String | Name of the IVR to filter by.
};
apiInstance.getArchitectIvrs(opts)
  .then(function(data) {
    console.log(`getArchitectIvrs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectIvrs');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the IVR to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**IVREntityListing**

<a name="getArchitectPrompt"></a>

# Prompt getArchitectPrompt(promptId)

GET /api/v2/architect/prompts/{promptId}

Get specified user prompt



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

apiInstance.getArchitectPrompt(promptId)
  .then(function(data) {
    console.log(`getArchitectPrompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectPrompt');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
{: class="table table-striped"}

### Return type

**Prompt**

<a name="getArchitectPromptHistoryHistoryId"></a>

# HistoryListing getArchitectPromptHistoryHistoryId(promptId, historyId, opts)

GET /api/v2/architect/prompts/{promptId}/history/{historyId}

Get generated prompt history



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var historyId = "historyId_example"; // String | History request ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};
apiInstance.getArchitectPromptHistoryHistoryId(promptId, historyId, opts)
  .then(function(data) {
    console.log(`getArchitectPromptHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectPromptHistoryHistoryId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **historyId** | **String** | History request ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortOrder** | **String** | Sort order | [optional] [default to desc] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp]<br />**Values**: action, timestamp, user |
 **action** | **[String]** | Flow actions to include (omit to include all) | [optional] <br />**Values**: checkin, checkout, create, deactivate, debug, delete, publish, revert, save |
{: class="table table-striped"}

### Return type

**HistoryListing**

<a name="getArchitectPromptResource"></a>

# PromptAsset getArchitectPromptResource(promptId, languageCode)

GET /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Get specified user prompt resource



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectPromptResource(promptId, languageCode)
  .then(function(data) {
    console.log(`getArchitectPromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectPromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

**PromptAsset**

<a name="getArchitectPromptResources"></a>

# PromptAssetEntityListing getArchitectPromptResources(promptId, opts)

GET /api/v2/architect/prompts/{promptId}/resources

Get a pageable list of user prompt resources

The returned list is pageable, and query parameters can be used for filtering.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectPromptResources(promptId, opts)
  .then(function(data) {
    console.log(`getArchitectPromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectPromptResources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**PromptAssetEntityListing**

<a name="getArchitectPrompts"></a>

# PromptEntityListing getArchitectPrompts(opts)

GET /api/v2/architect/prompts

Get a pageable list of user prompts

The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};
apiInstance.getArchitectPrompts(opts)
  .then(function(data) {
    console.log(`getArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectPrompts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
{: class="table table-striped"}

### Return type

**PromptEntityListing**

<a name="getArchitectSchedule"></a>

# Schedule getArchitectSchedule(scheduleId)

GET /api/v2/architect/schedules/{scheduleId}

Get a schedule by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getArchitectSchedule(scheduleId)
  .then(function(data) {
    console.log(`getArchitectSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**Schedule**

<a name="getArchitectSchedulegroup"></a>

# ScheduleGroup getArchitectSchedulegroup(scheduleGroupId)

GET /api/v2/architect/schedulegroups/{scheduleGroupId}

Gets a schedule group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID

apiInstance.getArchitectSchedulegroup(scheduleGroupId)
  .then(function(data) {
    console.log(`getArchitectSchedulegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSchedulegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleGroupId** | **String** | Schedule group ID |  |
{: class="table table-striped"}

### Return type

**ScheduleGroup**

<a name="getArchitectSchedulegroups"></a>

# ScheduleGroupEntityListing getArchitectSchedulegroups(opts)

GET /api/v2/architect/schedulegroups

Get a list of schedule groups.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example" // String | Name of the Schedule Group to filter by.
};
apiInstance.getArchitectSchedulegroups(opts)
  .then(function(data) {
    console.log(`getArchitectSchedulegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSchedulegroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the Schedule Group to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleGroupEntityListing**

<a name="getArchitectSchedules"></a>

# ScheduleEntityListing getArchitectSchedules(opts)

GET /api/v2/architect/schedules

Get a list of schedules.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example" // String | Name of the Schedule to filter by.
};
apiInstance.getArchitectSchedules(opts)
  .then(function(data) {
    console.log(`getArchitectSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSchedules');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the Schedule to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleEntityListing**

<a name="getArchitectSystemprompt"></a>

# SystemPrompt getArchitectSystemprompt(promptId)

GET /api/v2/architect/systemprompts/{promptId}

Get a system prompt



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | promptId

apiInstance.getArchitectSystemprompt(promptId)
  .then(function(data) {
    console.log(`getArchitectSystemprompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSystemprompt');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | promptId |  |
{: class="table table-striped"}

### Return type

**SystemPrompt**

<a name="getArchitectSystempromptHistoryHistoryId"></a>

# HistoryListing getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts)

GET /api/v2/architect/systemprompts/{promptId}/history/{historyId}

Get generated prompt history



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | promptId

var historyId = "historyId_example"; // String | History request ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};
apiInstance.getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts)
  .then(function(data) {
    console.log(`getArchitectSystempromptHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSystempromptHistoryHistoryId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | promptId |  |
 **historyId** | **String** | History request ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortOrder** | **String** | Sort order | [optional] [default to desc] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp]<br />**Values**: action, timestamp, user |
 **action** | **[String]** | Flow actions to include (omit to include all) | [optional] <br />**Values**: checkin, checkout, create, deactivate, debug, delete, publish, revert, save |
{: class="table table-striped"}

### Return type

**HistoryListing**

<a name="getArchitectSystempromptResource"></a>

# SystemPromptAsset getArchitectSystempromptResource(promptId, languageCode)

GET /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Get a system prompt resource.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectSystempromptResource(promptId, languageCode)
  .then(function(data) {
    console.log(`getArchitectSystempromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSystempromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

**SystemPromptAsset**

<a name="getArchitectSystempromptResources"></a>

# SystemPromptAssetEntityListing getArchitectSystempromptResources(promptId, opts)

GET /api/v2/architect/systemprompts/{promptId}/resources

Get system prompt resources.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};
apiInstance.getArchitectSystempromptResources(promptId, opts)
  .then(function(data) {
    console.log(`getArchitectSystempromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSystempromptResources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
{: class="table table-striped"}

### Return type

**SystemPromptAssetEntityListing**

<a name="getArchitectSystemprompts"></a>

# SystemPromptEntityListing getArchitectSystemprompts(opts)

GET /api/v2/architect/systemprompts

Get System Prompts



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example" // String | Name or description
};
apiInstance.getArchitectSystemprompts(opts)
  .then(function(data) {
    console.log(`getArchitectSystemprompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getArchitectSystemprompts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
{: class="table table-striped"}

### Return type

**SystemPromptEntityListing**

<a name="getFlow"></a>

# Flow getFlow(flowId, opts)

GET /api/v2/flows/{flowId}

Get flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'deleted': false // Boolean | Include deleted flows
};
apiInstance.getFlow(flowId, opts)
  .then(function(data) {
    console.log(`getFlow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **deleted** | **Boolean** | Include deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Flow**

<a name="getFlowHistoryHistoryId"></a>

# HistoryListing getFlowHistoryHistoryId(flowId, historyId, opts)

GET /api/v2/flows/{flowId}/history/{historyId}

Get generated flow history



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var historyId = "historyId_example"; // String | History request ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};
apiInstance.getFlowHistoryHistoryId(flowId, historyId, opts)
  .then(function(data) {
    console.log(`getFlowHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowHistoryHistoryId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **historyId** | **String** | History request ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortOrder** | **String** | Sort order | [optional] [default to desc] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp]<br />**Values**: action, timestamp, user |
 **action** | **[String]** | Flow actions to include (omit to include all) | [optional] <br />**Values**: checkin, checkout, create, deactivate, debug, delete, publish, revert, save |
{: class="table table-striped"}

### Return type

**HistoryListing**

<a name="getFlowLatestconfiguration"></a>

# **Object** getFlowLatestconfiguration(flowId, opts)

GET /api/v2/flows/{flowId}/latestconfiguration

Get the latest configuration for flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'deleted': false // Boolean | Include deleted flows
};
apiInstance.getFlowLatestconfiguration(flowId, opts)
  .then(function(data) {
    console.log(`getFlowLatestconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowLatestconfiguration');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **deleted** | **Boolean** | Include deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersion"></a>

# FlowVersion getFlowVersion(flowId, versionId, opts)

GET /api/v2/flows/{flowId}/versions/{versionId}

Get flow version



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var versionId = "versionId_example"; // String | Version ID

var opts = { 
  'deleted': "deleted_example" // String | Include deleted flows
};
apiInstance.getFlowVersion(flowId, versionId, opts)
  .then(function(data) {
    console.log(`getFlowVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowVersion');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **versionId** | **String** | Version ID |  |
 **deleted** | **String** | Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**FlowVersion**

<a name="getFlowVersionConfiguration"></a>

# **Object** getFlowVersionConfiguration(flowId, versionId, opts)

GET /api/v2/flows/{flowId}/versions/{versionId}/configuration

Create flow version configuration



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var versionId = "versionId_example"; // String | Version ID

var opts = { 
  'deleted': "deleted_example" // String | Include deleted flows
};
apiInstance.getFlowVersionConfiguration(flowId, versionId, opts)
  .then(function(data) {
    console.log(`getFlowVersionConfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowVersionConfiguration');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **versionId** | **String** | Version ID |  |
 **deleted** | **String** | Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersions"></a>

# FlowVersionEntityListing getFlowVersions(flowId, opts)

GET /api/v2/flows/{flowId}/versions

Get flow version list



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': true // Boolean | Include deleted flows
};
apiInstance.getFlowVersions(flowId, opts)
  .then(function(data) {
    console.log(`getFlowVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowVersions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **deleted** | **Boolean** | Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**FlowVersionEntityListing**

<a name="getFlows"></a>

# FlowEntityListing getFlows(type, opts)

GET /api/v2/flows

Get a pageable list of flows, filtered by query parameters

Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var type = "type_example"; // String | Type

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'publishVersionId': "publishVersionId_example", // String | Publish version ID
  'editableBy': "editableBy_example", // String | Editable by
  'lockedBy': "lockedBy_example", // String | Locked by
  'secure': "secure_example", // String | Secure
  'deleted': false, // Boolean | Include deleted
  'includeSchemas': false, // Boolean | Include variable schemas
  'publishedAfter': "2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01", // String | Published after
  'publishedBefore': "2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01" // String | Published before
};
apiInstance.getFlows(type, opts)
  .then(function(data) {
    console.log(`getFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlows');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Type | <br />**Values**: inboundcall, inboundemail, inboundshortmessage, outboundcall, inqueuecall, speech, securecall, surveyinvite, workflow |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
 **publishVersionId** | **String** | Publish version ID | [optional]  |
 **editableBy** | **String** | Editable by | [optional]  |
 **lockedBy** | **String** | Locked by | [optional]  |
 **secure** | **String** | Secure | [optional] <br />**Values**: any, checkedin, published |
 **deleted** | **Boolean** | Include deleted | [optional] [default to false] |
 **includeSchemas** | **Boolean** | Include variable schemas | [optional] [default to false] |
 **publishedAfter** | **String** | Published after | [optional]  |
 **publishedBefore** | **String** | Published before | [optional]  |
{: class="table table-striped"}

### Return type

**FlowEntityListing**

<a name="getFlowsDatatable"></a>

# DataTable getFlowsDatatable(datatableId, opts)

GET /api/v2/flows/datatables/{datatableId}

Returns a specific datatable by id

Given a datableid returns the schema associated with it.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var opts = { 
  'expand': "expand_example" // String | Expand instructions for the result
};
apiInstance.getFlowsDatatable(datatableId, opts)
  .then(function(data) {
    console.log(`getFlowsDatatable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowsDatatable');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="getFlowsDatatableRow"></a>

# **{&#39;String&#39;: Object}** getFlowsDatatableRow(datatableId, rowId, opts)

GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Returns a specific row for the datatable

Given a datatable id and a rowId (key)  will return the full row contents for that rowId.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var rowId = "rowId_example"; // String | The key for the row

var opts = { 
  'showbrief': true // Boolean | if true returns just the key field for the row
};
apiInstance.getFlowsDatatableRow(datatableId, rowId, opts)
  .then(function(data) {
    console.log(`getFlowsDatatableRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowsDatatableRow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **rowId** | **String** | The key for the row |  |
 **showbrief** | **Boolean** | if true returns just the key field for the row | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="getFlowsDatatableRows"></a>

# DataTableRowEntityListing getFlowsDatatableRows(datatableId, opts)

GET /api/v2/flows/datatables/{datatableId}/rows

Returns the rows for the datatable

Returns all of the rows for the datatable with the given id.  By default this will just be a shortened list returning the key for each row.  Set expand to all to return all of the row contents.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'showbrief': true // Boolean | If true returns just the key value of the row
};
apiInstance.getFlowsDatatableRows(datatableId, opts)
  .then(function(data) {
    console.log(`getFlowsDatatableRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowsDatatableRows');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **showbrief** | **Boolean** | If true returns just the key value of the row | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**DataTableRowEntityListing**

<a name="getFlowsDatatables"></a>

# DataTablesDomainEntityListing getFlowsDatatables(opts)

GET /api/v2/flows/datatables

Retrieve a list of datatables for the org

Returns a metadata list of the datatables associated with this org, including ID, name and description.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'expand': "expand_example", // String | Expand instructions for the result
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "ascending" // String | Sort order
};
apiInstance.getFlowsDatatables(opts)
  .then(function(data) {
    console.log(`getFlowsDatatables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFlowsDatatables');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id]<br />**Values**: id, name |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

**DataTablesDomainEntityListing**

<a name="postArchitectDependencytrackingBuild"></a>

# void postArchitectDependencytrackingBuild()

POST /api/v2/architect/dependencytracking/build

Rebuild Dependency Tracking data for an organization

Asynchronous.  Notification topic: v2.architect.dependencytracking.build

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();
apiInstance.postArchitectDependencytrackingBuild()
  .then(function() {
    console.log('postArchitectDependencytrackingBuild returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectDependencytrackingBuild');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postArchitectEmergencygroups"></a>

# EmergencyGroup postArchitectEmergencygroups(opts)

POST /api/v2/architect/emergencygroups

Creates a new emergency group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectEmergencygroups(opts)
  .then(function(data) {
    console.log(`postArchitectEmergencygroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectEmergencygroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyGroup**

<a name="postArchitectIvrs"></a>

# IVR postArchitectIvrs(opts)

POST /api/v2/architect/ivrs

Create IVR config.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectIvrs(opts)
  .then(function(data) {
    console.log(`postArchitectIvrs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectIvrs');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**IVR**

<a name="postArchitectPromptHistory"></a>

# Operation postArchitectPromptHistory(promptId)

POST /api/v2/architect/prompts/{promptId}/history

Generate prompt history

Asynchronous.  Notification topic: v2.architect.prompts.{promptId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

apiInstance.postArchitectPromptHistory(promptId)
  .then(function(data) {
    console.log(`postArchitectPromptHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectPromptHistory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postArchitectPromptResources"></a>

# PromptAsset postArchitectPromptResources(promptId, opts)

POST /api/v2/architect/prompts/{promptId}/resources

Create a new user prompt resource



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectPromptResources(promptId, opts)
  .then(function(data) {
    console.log(`postArchitectPromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectPromptResources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**PromptAsset**

<a name="postArchitectPrompts"></a>

# Prompt postArchitectPrompts(opts)

POST /api/v2/architect/prompts

Create a new user prompt



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectPrompts(opts)
  .then(function(data) {
    console.log(`postArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectPrompts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Prompt**

<a name="postArchitectSchedulegroups"></a>

# ScheduleGroup postArchitectSchedulegroups(opts)

POST /api/v2/architect/schedulegroups

Creates a new schedule group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectSchedulegroups(opts)
  .then(function(data) {
    console.log(`postArchitectSchedulegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectSchedulegroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleGroup**

<a name="postArchitectSchedules"></a>

# Schedule postArchitectSchedules(opts)

POST /api/v2/architect/schedules

Create a new schedule.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectSchedules(opts)
  .then(function(data) {
    console.log(`postArchitectSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectSchedules');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Schedule**

<a name="postArchitectSystempromptHistory"></a>

# Operation postArchitectSystempromptHistory(promptId)

POST /api/v2/architect/systemprompts/{promptId}/history

Generate system prompt history

Asynchronous.  Notification topic: v2.architect.systemprompts.{systemPromptId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | promptId

apiInstance.postArchitectSystempromptHistory(promptId)
  .then(function(data) {
    console.log(`postArchitectSystempromptHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectSystempromptHistory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | promptId |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postArchitectSystempromptResources"></a>

# SystemPromptAsset postArchitectSystempromptResources(promptId, opts)

POST /api/v2/architect/systemprompts/{promptId}/resources

Create system prompt resource override.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.postArchitectSystempromptResources(promptId, opts)
  .then(function(data) {
    console.log(`postArchitectSystempromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postArchitectSystempromptResources');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SystemPromptAsset**

<a name="postFlowVersions"></a>

# FlowVersion postFlowVersions(flowId, opts)

POST /api/v2/flows/{flowId}/versions

Create flow version



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'body': null // Object | 
};
apiInstance.postFlowVersions(flowId, opts)
  .then(function(data) {
    console.log(`postFlowVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowVersions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**FlowVersion**

<a name="postFlows"></a>

# Flow postFlows(opts)

POST /api/v2/flows

Create flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postFlows(opts)
  .then(function(data) {
    console.log(`postFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlows');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsCheckin"></a>

# Flow postFlowsActionsCheckin(flow)

POST /api/v2/flows/actions/checkin

Check-in flow

Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckin(flow)
  .then(function(data) {
    console.log(`postFlowsActionsCheckin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsCheckin');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsCheckout"></a>

# Flow postFlowsActionsCheckout(flow)

POST /api/v2/flows/actions/checkout

Check-out flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckout(flow)
  .then(function(data) {
    console.log(`postFlowsActionsCheckout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsCheckout');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsDeactivate"></a>

# Flow postFlowsActionsDeactivate(flow)

POST /api/v2/flows/actions/deactivate

Deactivate flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsDeactivate(flow)
  .then(function(data) {
    console.log(`postFlowsActionsDeactivate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsDeactivate');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsPublish"></a>

# Operation postFlowsActionsPublish(flow, opts)

POST /api/v2/flows/actions/publish

Publish flow

Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

var opts = { 
  'version': "version_example" // String | version
};
apiInstance.postFlowsActionsPublish(flow, opts)
  .then(function(data) {
    console.log(`postFlowsActionsPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsPublish');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
 **version** | **String** | version | [optional]  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postFlowsActionsRevert"></a>

# Flow postFlowsActionsRevert(flow)

POST /api/v2/flows/actions/revert

Revert flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsRevert(flow)
  .then(function(data) {
    console.log(`postFlowsActionsRevert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsRevert');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsUnlock"></a>

# Flow postFlowsActionsUnlock(flow)

POST /api/v2/flows/actions/unlock

Unlock flow

Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsUnlock(flow)
  .then(function(data) {
    console.log(`postFlowsActionsUnlock success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsActionsUnlock');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsDatatableRows"></a>

# **{&#39;String&#39;: Object}** postFlowsDatatableRows(datatableId, dataTableRow)

POST /api/v2/flows/datatables/{datatableId}/rows

Create a new row entry

Will add the passed in row entry to the datatable with the given id after verifying it against the schema.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var dataTableRow = null; // Object | 

apiInstance.postFlowsDatatableRows(datatableId, dataTableRow)
  .then(function(data) {
    console.log(`postFlowsDatatableRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsDatatableRows');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **dataTableRow** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="postFlowsDatatables"></a>

# DataTable postFlowsDatatables(body)

POST /api/v2/flows/datatables

Create a new datatable with the specified json-schema definition

This will create a new datatable with fields that match the property definitions in the JSON schema.  The name of the table from the title field of the json-schema.  See also http://json-schema.org/

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var body = {}; // Object | datatable json-schema

apiInstance.postFlowsDatatables(body)
  .then(function(data) {
    console.log(`postFlowsDatatables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postFlowsDatatables');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | datatable json-schema |  |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="putArchitectEmergencygroup"></a>

# EmergencyGroup putArchitectEmergencygroup(emergencyGroupId, opts)

PUT /api/v2/architect/emergencygroups/{emergencyGroupId}

Updates a emergency group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectEmergencygroup(emergencyGroupId, opts)
  .then(function(data) {
    console.log(`putArchitectEmergencygroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectEmergencygroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emergencyGroupId** | **String** | Emergency group ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyGroup**

<a name="putArchitectIvr"></a>

# IVR putArchitectIvr(ivrId, opts)

PUT /api/v2/architect/ivrs/{ivrId}

Update an IVR Config.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var ivrId = "ivrId_example"; // String | IVR id

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectIvr(ivrId, opts)
  .then(function(data) {
    console.log(`putArchitectIvr success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectIvr');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**IVR**

<a name="putArchitectPrompt"></a>

# Prompt putArchitectPrompt(promptId, opts)

PUT /api/v2/architect/prompts/{promptId}

Update specified user prompt



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectPrompt(promptId, opts)
  .then(function(data) {
    console.log(`putArchitectPrompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectPrompt');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Prompt**

<a name="putArchitectPromptResource"></a>

# PromptAsset putArchitectPromptResource(promptId, languageCode, opts)

PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Update specified user prompt resource



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectPromptResource(promptId, languageCode, opts)
  .then(function(data) {
    console.log(`putArchitectPromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectPromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**PromptAsset**

<a name="putArchitectSchedule"></a>

# Schedule putArchitectSchedule(scheduleId, opts)

PUT /api/v2/architect/schedules/{scheduleId}

Update schedule by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectSchedule(scheduleId, opts)
  .then(function(data) {
    console.log(`putArchitectSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Schedule**

<a name="putArchitectSchedulegroup"></a>

# ScheduleGroup putArchitectSchedulegroup(scheduleGroupId, opts)

PUT /api/v2/architect/schedulegroups/{scheduleGroupId}

Updates a schedule group by ID



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectSchedulegroup(scheduleGroupId, opts)
  .then(function(data) {
    console.log(`putArchitectSchedulegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectSchedulegroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleGroupId** | **String** | Schedule group ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleGroup**

<a name="putArchitectSystempromptResource"></a>

# SystemPromptAsset putArchitectSystempromptResource(promptId, languageCode, opts)

PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Updates a system prompt resource override.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

var opts = { 
  'body': {} // Object | 
};
apiInstance.putArchitectSystempromptResource(promptId, languageCode, opts)
  .then(function(data) {
    console.log(`putArchitectSystempromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putArchitectSystempromptResource');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SystemPromptAsset**

<a name="putFlow"></a>

# Flow putFlow(flowId, opts)

PUT /api/v2/flows/{flowId}

Update flow



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putFlow(flowId, opts)
  .then(function(data) {
    console.log(`putFlow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putFlow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="putFlowsDatatable"></a>

# DataTable putFlowsDatatable(datatableId, opts)

PUT /api/v2/flows/datatables/{datatableId}

Updates a specific datatable by id

Updates a schema for a datatable with the given id - updates are additive only, no changes or removals of existing fields.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var opts = { 
  'expand': "expand_example", // String | Expand instructions for the result
  'body': {} // Object | datatable json-schema
};
apiInstance.putFlowsDatatable(datatableId, opts)
  .then(function(data) {
    console.log(`putFlowsDatatable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putFlowsDatatable');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
 **body** | **Object** | datatable json-schema | [optional]  |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="putFlowsDatatableRow"></a>

# **{&#39;String&#39;: Object}** putFlowsDatatableRow(datatableId, rowId, opts)

PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Update a row entry

Updates a row with the given to the new values.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var datatableId = "datatableId_example"; // String | id of datatable

var rowId = "rowId_example"; // String | the key for the row

var opts = { 
  'body': null // Object | datatable row
};
apiInstance.putFlowsDatatableRow(datatableId, rowId, opts)
  .then(function(data) {
    console.log(`putFlowsDatatableRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putFlowsDatatableRow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **rowId** | **String** | the key for the row |  |
 **body** | **Object** | datatable row | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

