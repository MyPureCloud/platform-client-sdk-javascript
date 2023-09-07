---
title: ArchitectApi
---
# platformClient.ArchitectApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteArchitectEmergencygroup**](ArchitectApi.html#deleteArchitectEmergencygroup) | **DELETE** /api/v2/architect/emergencygroups/{emergencyGroupId} | Deletes a emergency group by ID
[**deleteArchitectGrammar**](ArchitectApi.html#deleteArchitectGrammar) | **DELETE** /api/v2/architect/grammars/{grammarId} | Delete a grammar.
[**deleteArchitectGrammarLanguage**](ArchitectApi.html#deleteArchitectGrammarLanguage) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode} | Delete specified grammar language
[**deleteArchitectGrammarLanguageFilesDtmf**](ArchitectApi.html#deleteArchitectGrammarLanguageFilesDtmf) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf | Clear the DTMF mode file for the grammar language if there is one
[**deleteArchitectGrammarLanguageFilesVoice**](ArchitectApi.html#deleteArchitectGrammarLanguageFilesVoice) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice | Clear the voice mode file for the grammar language if there is one
[**deleteArchitectIvr**](ArchitectApi.html#deleteArchitectIvr) | **DELETE** /api/v2/architect/ivrs/{ivrId} | Delete an IVR Config.
[**deleteArchitectPrompt**](ArchitectApi.html#deleteArchitectPrompt) | **DELETE** /api/v2/architect/prompts/{promptId} | Delete specified user prompt
[**deleteArchitectPromptResource**](ArchitectApi.html#deleteArchitectPromptResource) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Delete specified user prompt resource
[**deleteArchitectPromptResourceAudio**](ArchitectApi.html#deleteArchitectPromptResourceAudio) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio | Delete specified user prompt resource audio
[**deleteArchitectPrompts**](ArchitectApi.html#deleteArchitectPrompts) | **DELETE** /api/v2/architect/prompts | Batch-delete a list of prompts
[**deleteArchitectSchedule**](ArchitectApi.html#deleteArchitectSchedule) | **DELETE** /api/v2/architect/schedules/{scheduleId} | Delete a schedule by id
[**deleteArchitectSchedulegroup**](ArchitectApi.html#deleteArchitectSchedulegroup) | **DELETE** /api/v2/architect/schedulegroups/{scheduleGroupId} | Deletes a schedule group by ID
[**deleteArchitectSystempromptResource**](ArchitectApi.html#deleteArchitectSystempromptResource) | **DELETE** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Delete a system prompt resource override.
[**deleteFlow**](ArchitectApi.html#deleteFlow) | **DELETE** /api/v2/flows/{flowId} | Delete flow
[**deleteFlows**](ArchitectApi.html#deleteFlows) | **DELETE** /api/v2/flows | Batch-delete a list of flows
[**deleteFlowsDatatable**](ArchitectApi.html#deleteFlowsDatatable) | **DELETE** /api/v2/flows/datatables/{datatableId} | deletes a specific datatable by id
[**deleteFlowsDatatableRow**](ArchitectApi.html#deleteFlowsDatatableRow) | **DELETE** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Delete a row entry
[**deleteFlowsMilestone**](ArchitectApi.html#deleteFlowsMilestone) | **DELETE** /api/v2/flows/milestones/{milestoneId} | Delete a flow milestone.
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
[**getArchitectEmergencygroupsDivisionviews**](ArchitectApi.html#getArchitectEmergencygroupsDivisionviews) | **GET** /api/v2/architect/emergencygroups/divisionviews | Get a pageable list of basic emergency group objects filterable by query parameters.
[**getArchitectGrammar**](ArchitectApi.html#getArchitectGrammar) | **GET** /api/v2/architect/grammars/{grammarId} | Get a grammar
[**getArchitectGrammarLanguage**](ArchitectApi.html#getArchitectGrammarLanguage) | **GET** /api/v2/architect/grammars/{grammarId}/languages/{languageCode} | Get a grammar language.
[**getArchitectGrammars**](ArchitectApi.html#getArchitectGrammars) | **GET** /api/v2/architect/grammars | Get a pageable list of grammars, filtered by query parameters
[**getArchitectIvr**](ArchitectApi.html#getArchitectIvr) | **GET** /api/v2/architect/ivrs/{ivrId} | Get an IVR config.
[**getArchitectIvrs**](ArchitectApi.html#getArchitectIvrs) | **GET** /api/v2/architect/ivrs | Get IVR configs.
[**getArchitectIvrsDivisionviews**](ArchitectApi.html#getArchitectIvrsDivisionviews) | **GET** /api/v2/architect/ivrs/divisionviews | Get a pageable list of basic ivr configuration information objects filterable by query parameters.
[**getArchitectPrompt**](ArchitectApi.html#getArchitectPrompt) | **GET** /api/v2/architect/prompts/{promptId} | Get specified user prompt
[**getArchitectPromptHistoryHistoryId**](ArchitectApi.html#getArchitectPromptHistoryHistoryId) | **GET** /api/v2/architect/prompts/{promptId}/history/{historyId} | Get generated prompt history
[**getArchitectPromptResource**](ArchitectApi.html#getArchitectPromptResource) | **GET** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Get specified user prompt resource
[**getArchitectPromptResources**](ArchitectApi.html#getArchitectPromptResources) | **GET** /api/v2/architect/prompts/{promptId}/resources | Get a pageable list of user prompt resources
[**getArchitectPrompts**](ArchitectApi.html#getArchitectPrompts) | **GET** /api/v2/architect/prompts | Get a pageable list of user prompts
[**getArchitectSchedule**](ArchitectApi.html#getArchitectSchedule) | **GET** /api/v2/architect/schedules/{scheduleId} | Get a schedule by ID
[**getArchitectSchedulegroup**](ArchitectApi.html#getArchitectSchedulegroup) | **GET** /api/v2/architect/schedulegroups/{scheduleGroupId} | Gets a schedule group by ID
[**getArchitectSchedulegroups**](ArchitectApi.html#getArchitectSchedulegroups) | **GET** /api/v2/architect/schedulegroups | Get a list of schedule groups.
[**getArchitectSchedulegroupsDivisionviews**](ArchitectApi.html#getArchitectSchedulegroupsDivisionviews) | **GET** /api/v2/architect/schedulegroups/divisionviews | Get a pageable list of basic schedule group configuration information objects filterable by query parameters.
[**getArchitectSchedules**](ArchitectApi.html#getArchitectSchedules) | **GET** /api/v2/architect/schedules | Get a list of schedules.
[**getArchitectSchedulesDivisionviews**](ArchitectApi.html#getArchitectSchedulesDivisionviews) | **GET** /api/v2/architect/schedules/divisionviews | Get a pageable list of basic schedule configuration information objects filterable by query parameters.
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
[**getFlowsDatatableExportJob**](ArchitectApi.html#getFlowsDatatableExportJob) | **GET** /api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId} | Returns the state information about an export job
[**getFlowsDatatableImportJob**](ArchitectApi.html#getFlowsDatatableImportJob) | **GET** /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId} | Returns the state information about an import job
[**getFlowsDatatableImportJobs**](ArchitectApi.html#getFlowsDatatableImportJobs) | **GET** /api/v2/flows/datatables/{datatableId}/import/jobs | Get all recent import jobs
[**getFlowsDatatableRow**](ArchitectApi.html#getFlowsDatatableRow) | **GET** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Returns a specific row for the datatable
[**getFlowsDatatableRows**](ArchitectApi.html#getFlowsDatatableRows) | **GET** /api/v2/flows/datatables/{datatableId}/rows | Returns the rows for the datatable with the given id
[**getFlowsDatatables**](ArchitectApi.html#getFlowsDatatables) | **GET** /api/v2/flows/datatables | Retrieve a list of datatables for the org
[**getFlowsDatatablesDivisionview**](ArchitectApi.html#getFlowsDatatablesDivisionview) | **GET** /api/v2/flows/datatables/divisionviews/{datatableId} | Returns a specific datatable by id
[**getFlowsDatatablesDivisionviews**](ArchitectApi.html#getFlowsDatatablesDivisionviews) | **GET** /api/v2/flows/datatables/divisionviews | Retrieve a list of datatables for the org
[**getFlowsDivisionviews**](ArchitectApi.html#getFlowsDivisionviews) | **GET** /api/v2/flows/divisionviews | Get a pageable list of basic flow information objects filterable by query parameters.
[**getFlowsExecution**](ArchitectApi.html#getFlowsExecution) | **GET** /api/v2/flows/executions/{flowExecutionId} | Get a flow execution's details. Flow execution details are available for several days after the flow is started.
[**getFlowsInstance**](ArchitectApi.html#getFlowsInstance) | **GET** /api/v2/flows/instances/{instanceId} | Start a process (job) to prepare a download of a singular flow execution data instance by Id
[**getFlowsInstancesJob**](ArchitectApi.html#getFlowsInstancesJob) | **GET** /api/v2/flows/instances/jobs/{jobId} | Get the status and/or results of an asynchronous flow execution data retrieval job
[**getFlowsInstancesQuerycapabilities**](ArchitectApi.html#getFlowsInstancesQuerycapabilities) | **GET** /api/v2/flows/instances/querycapabilities | Retrieve a list of capabilities that the org can use to query for execution data
[**getFlowsJob**](ArchitectApi.html#getFlowsJob) | **GET** /api/v2/flows/jobs/{jobId} | Fetch Architect Job Status
[**getFlowsMilestone**](ArchitectApi.html#getFlowsMilestone) | **GET** /api/v2/flows/milestones/{milestoneId} | Get a flow milestone
[**getFlowsMilestones**](ArchitectApi.html#getFlowsMilestones) | **GET** /api/v2/flows/milestones | Get a pageable list of flow milestones, filtered by query parameters
[**getFlowsMilestonesDivisionviews**](ArchitectApi.html#getFlowsMilestonesDivisionviews) | **GET** /api/v2/flows/milestones/divisionviews | Get a pageable list of basic flow milestone information objects filterable by query parameters.
[**getFlowsOutcome**](ArchitectApi.html#getFlowsOutcome) | **GET** /api/v2/flows/outcomes/{flowOutcomeId} | Get a flow outcome
[**getFlowsOutcomes**](ArchitectApi.html#getFlowsOutcomes) | **GET** /api/v2/flows/outcomes | Get a pageable list of flow outcomes, filtered by query parameters
[**getFlowsOutcomesDivisionviews**](ArchitectApi.html#getFlowsOutcomesDivisionviews) | **GET** /api/v2/flows/outcomes/divisionviews | Get a pageable list of basic flow outcome information objects filterable by query parameters.
[**patchArchitectGrammar**](ArchitectApi.html#patchArchitectGrammar) | **PATCH** /api/v2/architect/grammars/{grammarId} | Updates a grammar
[**postArchitectDependencytrackingBuild**](ArchitectApi.html#postArchitectDependencytrackingBuild) | **POST** /api/v2/architect/dependencytracking/build | Rebuild Dependency Tracking data for an organization
[**postArchitectEmergencygroups**](ArchitectApi.html#postArchitectEmergencygroups) | **POST** /api/v2/architect/emergencygroups | Creates a new emergency group
[**postArchitectGrammarLanguageFilesDtmf**](ArchitectApi.html#postArchitectGrammarLanguageFilesDtmf) | **POST** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf | Creates a presigned URL for uploading a grammar DTMF mode file
[**postArchitectGrammarLanguageFilesVoice**](ArchitectApi.html#postArchitectGrammarLanguageFilesVoice) | **POST** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice | Creates a presigned URL for uploading a grammar voice mode file
[**postArchitectGrammarLanguages**](ArchitectApi.html#postArchitectGrammarLanguages) | **POST** /api/v2/architect/grammars/{grammarId}/languages | Create a new language for a given grammar
[**postArchitectGrammars**](ArchitectApi.html#postArchitectGrammars) | **POST** /api/v2/architect/grammars | Create a new grammar
[**postArchitectIvrs**](ArchitectApi.html#postArchitectIvrs) | **POST** /api/v2/architect/ivrs | Create IVR config.
[**postArchitectPromptHistory**](ArchitectApi.html#postArchitectPromptHistory) | **POST** /api/v2/architect/prompts/{promptId}/history | Generate prompt history
[**postArchitectPromptResources**](ArchitectApi.html#postArchitectPromptResources) | **POST** /api/v2/architect/prompts/{promptId}/resources | Create a new user prompt resource
[**postArchitectPrompts**](ArchitectApi.html#postArchitectPrompts) | **POST** /api/v2/architect/prompts | Create a new user prompt
[**postArchitectSchedulegroups**](ArchitectApi.html#postArchitectSchedulegroups) | **POST** /api/v2/architect/schedulegroups | Creates a new schedule group
[**postArchitectSchedules**](ArchitectApi.html#postArchitectSchedules) | **POST** /api/v2/architect/schedules | Create a new schedule.
[**postArchitectSystempromptHistory**](ArchitectApi.html#postArchitectSystempromptHistory) | **POST** /api/v2/architect/systemprompts/{promptId}/history | Generate system prompt history
[**postArchitectSystempromptResources**](ArchitectApi.html#postArchitectSystempromptResources) | **POST** /api/v2/architect/systemprompts/{promptId}/resources | Create system prompt resource override.
[**postFlowHistory**](ArchitectApi.html#postFlowHistory) | **POST** /api/v2/flows/{flowId}/history | Generate flow history
[**postFlowVersions**](ArchitectApi.html#postFlowVersions) | **POST** /api/v2/flows/{flowId}/versions | Create flow version
[**postFlows**](ArchitectApi.html#postFlows) | **POST** /api/v2/flows | Create flow
[**postFlowsActionsCheckin**](ArchitectApi.html#postFlowsActionsCheckin) | **POST** /api/v2/flows/actions/checkin | Check-in flow
[**postFlowsActionsCheckout**](ArchitectApi.html#postFlowsActionsCheckout) | **POST** /api/v2/flows/actions/checkout | Check-out flow
[**postFlowsActionsDeactivate**](ArchitectApi.html#postFlowsActionsDeactivate) | **POST** /api/v2/flows/actions/deactivate | Deactivate flow
[**postFlowsActionsPublish**](ArchitectApi.html#postFlowsActionsPublish) | **POST** /api/v2/flows/actions/publish | Publish flow
[**postFlowsActionsRevert**](ArchitectApi.html#postFlowsActionsRevert) | **POST** /api/v2/flows/actions/revert | Revert flow
[**postFlowsActionsUnlock**](ArchitectApi.html#postFlowsActionsUnlock) | **POST** /api/v2/flows/actions/unlock | Unlock flow
[**postFlowsDatatableExportJobs**](ArchitectApi.html#postFlowsDatatableExportJobs) | **POST** /api/v2/flows/datatables/{datatableId}/export/jobs | Begin an export process for exporting all rows from a datatable
[**postFlowsDatatableImportJobs**](ArchitectApi.html#postFlowsDatatableImportJobs) | **POST** /api/v2/flows/datatables/{datatableId}/import/jobs | Begin an import process for importing rows into a datatable
[**postFlowsDatatableRows**](ArchitectApi.html#postFlowsDatatableRows) | **POST** /api/v2/flows/datatables/{datatableId}/rows | Create a new row entry for the datatable.
[**postFlowsDatatables**](ArchitectApi.html#postFlowsDatatables) | **POST** /api/v2/flows/datatables | Create a new datatable with the specified json-schema definition
[**postFlowsExecutions**](ArchitectApi.html#postFlowsExecutions) | **POST** /api/v2/flows/executions | Launch an instance of a flow definition, for flow types that support it such as the 'workflow' type.
[**postFlowsInstancesJobs**](ArchitectApi.html#postFlowsInstancesJobs) | **POST** /api/v2/flows/instances/jobs | Start a process (job) that will prepare a list of execution data IDs for download.
[**postFlowsInstancesQuery**](ArchitectApi.html#postFlowsInstancesQuery) | **POST** /api/v2/flows/instances/query | Query the database of existing flow histories to look for particular flow criteria
[**postFlowsJobs**](ArchitectApi.html#postFlowsJobs) | **POST** /api/v2/flows/jobs | Register Architect Job. Returns a URL where a file, such as an Architect flow YAML file, can be PUT which will then initiate the job.
[**postFlowsMilestones**](ArchitectApi.html#postFlowsMilestones) | **POST** /api/v2/flows/milestones | Create a flow milestone
[**postFlowsOutcomes**](ArchitectApi.html#postFlowsOutcomes) | **POST** /api/v2/flows/outcomes | Create a flow outcome
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
[**putFlowsMilestone**](ArchitectApi.html#putFlowsMilestone) | **PUT** /api/v2/flows/milestones/{milestoneId} | Updates a flow milestone
[**putFlowsOutcome**](ArchitectApi.html#putFlowsOutcome) | **PUT** /api/v2/flows/outcomes/{flowOutcomeId} | Updates a flow outcome
{: class="table table-striped"}

<a name="deleteArchitectEmergencygroup"></a>

# void deleteArchitectEmergencygroup(emergencyGroupId)


DELETE /api/v2/architect/emergencygroups/{emergencyGroupId}

Deletes a emergency group by ID

Requires ALL permissions:

* routing:emergencyGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID

apiInstance.deleteArchitectEmergencygroup(emergencyGroupId)
  .then(() => {
    console.log('deleteArchitectEmergencygroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectEmergencygroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emergencyGroupId** | **String** | Emergency group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectGrammar"></a>

# **Object** deleteArchitectGrammar(grammarId)


DELETE /api/v2/architect/grammars/{grammarId}

Delete a grammar.

deleteArchitectGrammar is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | grammar ID

apiInstance.deleteArchitectGrammar(grammarId)
  .then((data) => {
    console.log(`deleteArchitectGrammar success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectGrammar');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | grammar ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="deleteArchitectGrammarLanguage"></a>

# void deleteArchitectGrammarLanguage(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}

Delete specified grammar language

deleteArchitectGrammarLanguage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectGrammarLanguage(grammarId, languageCode)
  .then(() => {
    console.log('deleteArchitectGrammarLanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectGrammarLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectGrammarLanguageFilesDtmf"></a>

# void deleteArchitectGrammarLanguageFilesDtmf(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf

Clear the DTMF mode file for the grammar language if there is one

deleteArchitectGrammarLanguageFilesDtmf is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectGrammarLanguageFilesDtmf(grammarId, languageCode)
  .then(() => {
    console.log('deleteArchitectGrammarLanguageFilesDtmf returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectGrammarLanguageFilesDtmf');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectGrammarLanguageFilesVoice"></a>

# void deleteArchitectGrammarLanguageFilesVoice(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice

Clear the voice mode file for the grammar language if there is one

deleteArchitectGrammarLanguageFilesVoice is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectGrammarLanguageFilesVoice(grammarId, languageCode)
  .then(() => {
    console.log('deleteArchitectGrammarLanguageFilesVoice returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectGrammarLanguageFilesVoice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectIvr"></a>

# void deleteArchitectIvr(ivrId)


DELETE /api/v2/architect/ivrs/{ivrId}

Delete an IVR Config.

Requires ALL permissions:

* routing:callRoute:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let ivrId = "ivrId_example"; // String | IVR id

apiInstance.deleteArchitectIvr(ivrId)
  .then(() => {
    console.log('deleteArchitectIvr returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectIvr');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let opts = { 
  'allResources': true // Boolean | Whether or not to delete all the prompt resources
};

apiInstance.deleteArchitectPrompt(promptId, opts)
  .then(() => {
    console.log('deleteArchitectPrompt returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectPrompt');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectPromptResource(promptId, languageCode)
  .then(() => {
    console.log('deleteArchitectPromptResource returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectPromptResource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteArchitectPromptResourceAudio"></a>

# void deleteArchitectPromptResourceAudio(promptId, languageCode)


DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio

Delete specified user prompt resource audio

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectPromptResourceAudio(promptId, languageCode)
  .then(() => {
    console.log('deleteArchitectPromptResourceAudio returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectPromptResourceAudio');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let id = ["id_example"]; // [String] | List of Prompt IDs

apiInstance.deleteArchitectPrompts(id)
  .then((data) => {
    console.log(`deleteArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectPrompts');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:schedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteArchitectSchedule(scheduleId)
  .then(() => {
    console.log('deleteArchitectSchedule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectSchedule');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:scheduleGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID

apiInstance.deleteArchitectSchedulegroup(scheduleGroupId)
  .then(() => {
    console.log('deleteArchitectSchedulegroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectSchedulegroup');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:systemPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectSystempromptResource(promptId, languageCode)
  .then(() => {
    console.log('deleteArchitectSystempromptResource returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteArchitectSystempromptResource');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID

apiInstance.deleteFlow(flowId)
  .then(() => {
    console.log('deleteFlow returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlow');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let id = ["id_example"]; // [String] | List of Flow IDs

apiInstance.deleteFlows(id)
  .then((data) => {
    console.log(`deleteFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlows');
    console.error(err);
  });
```

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

Deletes an entire datatable (including the schema and data) with a given datatableId

Requires ANY permissions:

* architect:datatable:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let opts = { 
  'force': false // Boolean | force delete, even if in use
};

apiInstance.deleteFlowsDatatable(datatableId, opts)
  .then(() => {
    console.log('deleteFlowsDatatable returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlowsDatatable');
    console.error(err);
  });
```

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

Deletes a row with a given rowId (the value of the key field).

Requires ANY permissions:

* architect:datatable:delete
* architect:datatableRow:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let rowId = "rowId_example"; // String | the key for the row

apiInstance.deleteFlowsDatatableRow(datatableId, rowId)
  .then(() => {
    console.log('deleteFlowsDatatableRow returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlowsDatatableRow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **rowId** | **String** | the key for the row |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteFlowsMilestone"></a>

# **Object** deleteFlowsMilestone(milestoneId)


DELETE /api/v2/flows/milestones/{milestoneId}

Delete a flow milestone.

Requires ALL permissions:

* architect:flowMilestone:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let milestoneId = "milestoneId_example"; // String | flow milestone ID

apiInstance.deleteFlowsMilestone(milestoneId)
  .then((data) => {
    console.log(`deleteFlowsMilestone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlowsMilestone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **milestoneId** | **String** | flow milestone ID |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getArchitectDependencytracking"></a>

# DependencyObjectEntityListing getArchitectDependencytracking(name, opts)


GET /api/v2/architect/dependencytracking

Get Dependency Tracking objects that have a given display name

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let name = "name_example"; // String | Object name to search for
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': true, // Boolean | Include resources each result item consumes
  'consumingResources': true, // Boolean | Include resources that consume each result item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"] // [String] | Types of consuming resources to return, if consuming resources are requested
};

apiInstance.getArchitectDependencytracking(name, opts)
  .then((data) => {
    console.log(`getArchitectDependencytracking success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytracking');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Object name to search for |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumedResources** | **Boolean** | Include resources each result item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume each result item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectDependencytrackingBuild"></a>

# DependencyStatus getArchitectDependencytrackingBuild()


GET /api/v2/architect/dependencytracking/build

Get Dependency Tracking build status for an organization

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.getArchitectDependencytrackingBuild()
  .then((data) => {
    console.log(`getArchitectDependencytrackingBuild success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingBuild');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DependencyStatus**

<a name="getArchitectDependencytrackingConsumedresources"></a>

# ConsumedResourcesEntityListing getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)


GET /api/v2/architect/dependencytracking/consumedresources

Get resources that are consumed by a given Dependency Tracking object

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let id = "id_example"; // String | Consuming object ID
let version = "version_example"; // String | Consuming object version
let objectType = "objectType_example"; // String | Consuming object type.  Only versioned types are allowed here.
let opts = { 
  'resourceType': ["resourceType_example"], // [String] | Types of consumed resources to show
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingConsumedresources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingConsumedresources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Consuming object ID |  |
 **version** | **String** | Consuming object version |  |
 **objectType** | **String** | Consuming object type.  Only versioned types are allowed here. | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **resourceType** | **[String]** | Types of consumed resources to show | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ConsumedResourcesEntityListing**

<a name="getArchitectDependencytrackingConsumingresources"></a>

# ConsumingResourcesEntityListing getArchitectDependencytrackingConsumingresources(id, objectType, opts)


GET /api/v2/architect/dependencytracking/consumingresources

Get resources that consume a given Dependency Tracking object

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let id = "id_example"; // String | Consumed object ID
let objectType = "objectType_example"; // String | Consumed object type
let opts = { 
  'resourceType': ["resourceType_example"], // [String] | Types of consuming resources to show.  Only versioned types are allowed here.
  'version': "version_example", // String | Object version
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'flowFilter': "flowFilter_example" // String | Show only checkedIn or published flows
};

apiInstance.getArchitectDependencytrackingConsumingresources(id, objectType, opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingConsumingresources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingConsumingresources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Consumed object ID |  |
 **objectType** | **String** | Consumed object type | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **resourceType** | **[String]** | Types of consuming resources to show.  Only versioned types are allowed here. | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **version** | **String** | Object version | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **flowFilter** | **String** | Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |
{: class="table table-striped"}

### Return type

**ConsumingResourcesEntityListing**

<a name="getArchitectDependencytrackingDeletedresourceconsumers"></a>

# DependencyObjectEntityListing getArchitectDependencytrackingDeletedresourceconsumers(opts)


GET /api/v2/architect/dependencytracking/deletedresourceconsumers

Get Dependency Tracking objects that consume deleted resources

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'flowFilter': "flowFilter_example", // String | Show only checkedIn or published flows
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getArchitectDependencytrackingDeletedresourceconsumers(opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingDeletedresourceconsumers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingDeletedresourceconsumers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Name to search for | [optional]  |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **flowFilter** | **String** | Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectDependencytrackingObject"></a>

# DependencyObject getArchitectDependencytrackingObject(id, opts)


GET /api/v2/architect/dependencytracking/object

Get a Dependency Tracking object

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let id = "id_example"; // String | Object ID
let opts = { 
  'version': "version_example", // String | Object version
  'objectType': "objectType_example", // String | Object type
  'consumedResources': true, // Boolean | Include resources this item consumes
  'consumingResources': true, // Boolean | Include resources that consume this item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"], // [String] | Types of consuming resources to return, if consuming resources are requested
  'consumedResourceRequest': true // Boolean | Indicate that this is going to look up a consumed resource object
};

apiInstance.getArchitectDependencytrackingObject(id, opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingObject success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingObject');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String** | Object ID |  |
 **version** | **String** | Object version | [optional]  |
 **objectType** | **String** | Object type | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumedResources** | **Boolean** | Include resources this item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume this item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumedResourceRequest** | **Boolean** | Indicate that this is going to look up a consumed resource object | [optional]  |
{: class="table table-striped"}

### Return type

**DependencyObject**

<a name="getArchitectDependencytrackingType"></a>

# DependencyType getArchitectDependencytrackingType(typeId)


GET /api/v2/architect/dependencytracking/types/{typeId}

Get a Dependency Tracking type.

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let typeId = "typeId_example"; // String | Type ID

apiInstance.getArchitectDependencytrackingType(typeId)
  .then((data) => {
    console.log(`getArchitectDependencytrackingType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingType');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getArchitectDependencytrackingTypes(opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingTypes');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:dependencyTracking:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getArchitectDependencytrackingUpdatedresourceconsumers(opts)
  .then((data) => {
    console.log(`getArchitectDependencytrackingUpdatedresourceconsumers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectDependencytrackingUpdatedresourceconsumers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String** | Name to search for | [optional]  |
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, DATATABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTFLOW, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, STTENGINE, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, VOICEFLOW, VOICEMAILFLOW, WIDGET, WORKFLOW, WORKITEMFLOW |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DependencyObjectEntityListing**

<a name="getArchitectEmergencygroup"></a>

# EmergencyGroup getArchitectEmergencygroup(emergencyGroupId)


GET /api/v2/architect/emergencygroups/{emergencyGroupId}

Gets a emergency group by ID

Requires ALL permissions:

* routing:emergencyGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID

apiInstance.getArchitectEmergencygroup(emergencyGroupId)
  .then((data) => {
    console.log(`getArchitectEmergencygroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectEmergencygroup');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:emergencyGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example" // String | Name of the Emergency Group to filter by.
};

apiInstance.getArchitectEmergencygroups(opts)
  .then((data) => {
    console.log(`getArchitectEmergencygroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectEmergencygroups');
    console.error(err);
  });
```

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

<a name="getArchitectEmergencygroupsDivisionviews"></a>

# EmergencyGroupDivisionViewEntityListing getArchitectEmergencygroupsDivisionviews(opts)


GET /api/v2/architect/emergencygroups/divisionviews

Get a pageable list of basic emergency group objects filterable by query parameters.

This returns emergency groups consisting of name and division. If one or more IDs are specified, the search will fetch flow outcomes that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* routing:emergencyGroup:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'id': ["id_example"], // [String] | ID of the Emergency Groups to filter by.
  'name': "name_example", // String | Name of the Emergency Group to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectEmergencygroupsDivisionviews(opts)
  .then((data) => {
    console.log(`getArchitectEmergencygroupsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectEmergencygroupsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **id** | **[String]** | ID of the Emergency Groups to filter by. | [optional]  |
 **name** | **String** | Name of the Emergency Group to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyGroupDivisionViewEntityListing**

<a name="getArchitectGrammar"></a>

# Grammar getArchitectGrammar(grammarId, opts)


GET /api/v2/architect/grammars/{grammarId}

Get a grammar

Returns a specified grammar

getArchitectGrammar is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | grammar ID
let opts = { 
  'includeFileUrls': true // Boolean | Include grammar language file URLs
};

apiInstance.getArchitectGrammar(grammarId, opts)
  .then((data) => {
    console.log(`getArchitectGrammar success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectGrammar');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | grammar ID |  |
 **includeFileUrls** | **Boolean** | Include grammar language file URLs | [optional]  |
{: class="table table-striped"}

### Return type

**Grammar**

<a name="getArchitectGrammarLanguage"></a>

# GrammarLanguage getArchitectGrammarLanguage(grammarId, languageCode)


GET /api/v2/architect/grammars/{grammarId}/languages/{languageCode}

Get a grammar language.

getArchitectGrammarLanguage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectGrammarLanguage(grammarId, languageCode)
  .then((data) => {
    console.log(`getArchitectGrammarLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectGrammarLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
{: class="table table-striped"}

### Return type

**GrammarLanguage**

<a name="getArchitectGrammars"></a>

# GrammarListing getArchitectGrammars(opts)


GET /api/v2/architect/grammars

Get a pageable list of grammars, filtered by query parameters

Multiple IDs can be specified, in which case all matching grammars will be returned, and no other parameters will be evaluated.

getArchitectGrammars is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'includeFileUrls': true // Boolean | Include grammar language file URLs
};

apiInstance.getArchitectGrammars(opts)
  .then((data) => {
    console.log(`getArchitectGrammars success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectGrammars');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id]<br />**Values**: description, id, name |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
 **includeFileUrls** | **Boolean** | Include grammar language file URLs | [optional]  |
{: class="table table-striped"}

### Return type

**GrammarListing**

<a name="getArchitectIvr"></a>

# IVR getArchitectIvr(ivrId)


GET /api/v2/architect/ivrs/{ivrId}

Get an IVR config.

Requires ALL permissions:

* routing:callRoute:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let ivrId = "ivrId_example"; // String | IVR id

apiInstance.getArchitectIvr(ivrId)
  .then((data) => {
    console.log(`getArchitectIvr success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectIvr');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:callRoute:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name of the IVR to filter by.
  'dnis': "dnis_example", // String | The phone number of the IVR to filter by.
  'scheduleGroup': "scheduleGroup_example" // String | The Schedule Group of the IVR to filter by.
};

apiInstance.getArchitectIvrs(opts)
  .then((data) => {
    console.log(`getArchitectIvrs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectIvrs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the IVR to filter by. | [optional]  |
 **dnis** | **String** | The phone number of the IVR to filter by. | [optional]  |
 **scheduleGroup** | **String** | The Schedule Group of the IVR to filter by. | [optional]  |
{: class="table table-striped"}

### Return type

**IVREntityListing**

<a name="getArchitectIvrsDivisionviews"></a>

# IVRDivisionViewEntityListing getArchitectIvrsDivisionviews(opts)


GET /api/v2/architect/ivrs/divisionviews

Get a pageable list of basic ivr configuration information objects filterable by query parameters.

Requires ALL permissions:

* routing:callRoute:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'id': ["id_example"], // [String] | ID of the IVR to filter by.
  'name': "name_example", // String | Name of the IVR to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectIvrsDivisionviews(opts)
  .then((data) => {
    console.log(`getArchitectIvrsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectIvrsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **id** | **[String]** | ID of the IVR to filter by. | [optional]  |
 **name** | **String** | Name of the IVR to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**IVRDivisionViewEntityListing**

<a name="getArchitectPrompt"></a>

# Prompt getArchitectPrompt(promptId)


GET /api/v2/architect/prompts/{promptId}

Get specified user prompt

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID

apiInstance.getArchitectPrompt(promptId)
  .then((data) => {
    console.log(`getArchitectPrompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectPrompt');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let historyId = "historyId_example"; // String | History request ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};

apiInstance.getArchitectPromptHistoryHistoryId(promptId, historyId, opts)
  .then((data) => {
    console.log(`getArchitectPromptHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectPromptHistoryHistoryId');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectPromptResource(promptId, languageCode)
  .then((data) => {
    console.log(`getArchitectPromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectPromptResource');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getArchitectPromptResources(promptId, opts)
  .then((data) => {
    console.log(`getArchitectPromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectPromptResources');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': ["name_example"], // [String] | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getArchitectPrompts(opts)
  .then((data) => {
    console.log(`getArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectPrompts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **[String]** | Name | [optional]  |
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

Requires ALL permissions:

* routing:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getArchitectSchedule(scheduleId)
  .then((data) => {
    console.log(`getArchitectSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedule');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:scheduleGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID

apiInstance.getArchitectSchedulegroup(scheduleGroupId)
  .then((data) => {
    console.log(`getArchitectSchedulegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedulegroup');
    console.error(err);
  });
```

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

Requires ALL permissions:

* routing:scheduleGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name of the Schedule Group to filter by.
  'scheduleIds': "scheduleIds_example", // String | A comma-delimited list of Schedule IDs to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectSchedulegroups(opts)
  .then((data) => {
    console.log(`getArchitectSchedulegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedulegroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the Schedule Group to filter by. | [optional]  |
 **scheduleIds** | **String** | A comma-delimited list of Schedule IDs to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleGroupEntityListing**

<a name="getArchitectSchedulegroupsDivisionviews"></a>

# ScheduleGroupDivisionViewEntityListing getArchitectSchedulegroupsDivisionviews(opts)


GET /api/v2/architect/schedulegroups/divisionviews

Get a pageable list of basic schedule group configuration information objects filterable by query parameters.

Requires ALL permissions:

* routing:scheduleGroup:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'id': ["id_example"], // [String] | ID of the schedule group to filter by.
  'name': "name_example", // String | Name of the schedule group to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectSchedulegroupsDivisionviews(opts)
  .then((data) => {
    console.log(`getArchitectSchedulegroupsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedulegroupsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **id** | **[String]** | ID of the schedule group to filter by. | [optional]  |
 **name** | **String** | Name of the schedule group to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleGroupDivisionViewEntityListing**

<a name="getArchitectSchedules"></a>

# ScheduleEntityListing getArchitectSchedules(opts)


GET /api/v2/architect/schedules

Get a list of schedules.

Requires ALL permissions:

* routing:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name of the Schedule to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectSchedules(opts)
  .then((data) => {
    console.log(`getArchitectSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **name** | **String** | Name of the Schedule to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleEntityListing**

<a name="getArchitectSchedulesDivisionviews"></a>

# ScheduleDivisionViewEntityListing getArchitectSchedulesDivisionviews(opts)


GET /api/v2/architect/schedules/divisionviews

Get a pageable list of basic schedule configuration information objects filterable by query parameters.

Requires ALL permissions:

* routing:schedule:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'id': ["id_example"], // [String] | ID of the schedule group to filter by.
  'name': "name_example", // String | Name of the schedule group to filter by.
  'divisionId': ["divisionId_example"] // [String] | List of divisionIds on which to filter.
};

apiInstance.getArchitectSchedulesDivisionviews(opts)
  .then((data) => {
    console.log(`getArchitectSchedulesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSchedulesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **id** | **[String]** | ID of the schedule group to filter by. | [optional]  |
 **name** | **String** | Name of the schedule group to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |
{: class="table table-striped"}

### Return type

**ScheduleDivisionViewEntityListing**

<a name="getArchitectSystemprompt"></a>

# SystemPrompt getArchitectSystemprompt(promptId)


GET /api/v2/architect/systemprompts/{promptId}

Get a system prompt

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | promptId

apiInstance.getArchitectSystemprompt(promptId)
  .then((data) => {
    console.log(`getArchitectSystemprompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSystemprompt');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | promptId
let historyId = "historyId_example"; // String | History request ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};

apiInstance.getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts)
  .then((data) => {
    console.log(`getArchitectSystempromptHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSystempromptHistoryHistoryId');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectSystempromptResource(promptId, languageCode)
  .then((data) => {
    console.log(`getArchitectSystempromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSystempromptResource');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getArchitectSystempromptResources(promptId, opts)
  .then((data) => {
    console.log(`getArchitectSystempromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSystempromptResources');
    console.error(err);
  });
```

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

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example" // String | Name or description
};

apiInstance.getArchitectSystemprompts(opts)
  .then((data) => {
    console.log(`getArchitectSystemprompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectSystemprompts');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let opts = { 
  'deleted': false // Boolean | Deleted flows
};

apiInstance.getFlow(flowId, opts)
  .then((data) => {
    console.log(`getFlow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **deleted** | **Boolean** | Deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Flow**

<a name="getFlowHistoryHistoryId"></a>

# HistoryListing getFlowHistoryHistoryId(flowId, historyId, opts)


GET /api/v2/flows/{flowId}/history/{historyId}

Get generated flow history

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let historyId = "historyId_example"; // String | History request ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortOrder': "desc", // String | Sort order
  'sortBy': "timestamp", // String | Sort by
  'action': ["action_example"] // [String] | Flow actions to include (omit to include all)
};

apiInstance.getFlowHistoryHistoryId(flowId, historyId, opts)
  .then((data) => {
    console.log(`getFlowHistoryHistoryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowHistoryHistoryId');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let opts = { 
  'deleted': false // Boolean | Deleted flows
};

apiInstance.getFlowLatestconfiguration(flowId, opts)
  .then((data) => {
    console.log(`getFlowLatestconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowLatestconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **deleted** | **Boolean** | Deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersion"></a>

# FlowVersion getFlowVersion(flowId, versionId, opts)


GET /api/v2/flows/{flowId}/versions/{versionId}

Get flow version

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let versionId = "versionId_example"; // String | Version ID
let opts = { 
  'deleted': "deleted_example" // String | Deleted flows
};

apiInstance.getFlowVersion(flowId, versionId, opts)
  .then((data) => {
    console.log(`getFlowVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **versionId** | **String** | Version ID |  |
 **deleted** | **String** | Deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**FlowVersion**

<a name="getFlowVersionConfiguration"></a>

# **Object** getFlowVersionConfiguration(flowId, versionId, opts)


GET /api/v2/flows/{flowId}/versions/{versionId}/configuration

Create flow version configuration

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let versionId = "versionId_example"; // String | Version ID
let opts = { 
  'deleted': "deleted_example" // String | Deleted flows
};

apiInstance.getFlowVersionConfiguration(flowId, versionId, opts)
  .then((data) => {
    console.log(`getFlowVersionConfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersionConfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **versionId** | **String** | Version ID |  |
 **deleted** | **String** | Deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersions"></a>

# FlowVersionEntityListing getFlowVersions(flowId, opts)


GET /api/v2/flows/{flowId}/versions

Get flow version list

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': true // Boolean | Include Deleted flows
};

apiInstance.getFlowVersions(flowId, opts)
  .then((data) => {
    console.log(`getFlowVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **deleted** | **Boolean** | Include Deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**FlowVersionEntityListing**

<a name="getFlows"></a>

# FlowEntityListing getFlows(opts)


GET /api/v2/flows

Get a pageable list of flows, filtered by query parameters

If one or more IDs are specified, the search will fetch flows that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'type': ["type_example"], // [String] | Type
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
  'lockedByClientId': "lockedByClientId_example", // String | Locked by client ID
  'secure': "secure_example", // String | Secure
  'deleted': false, // Boolean | Include deleted
  'includeSchemas': false, // Boolean | Include variable schemas
  'publishedAfter': 2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01, // String | Published after
  'publishedBefore': 2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01, // String | Published before
  'divisionId': ["divisionId_example"] // [String] | division ID(s)
};

apiInstance.getFlows(opts)
  .then((data) => {
    console.log(`getFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **[String]** | Type | [optional] <br />**Values**: bot, commonmodule, digitalbot, inboundcall, inboundchat, inboundemail, inboundshortmessage, outboundcall, inqueuecall, inqueueemail, inqueueshortmessage, speech, securecall, surveyinvite, voice, voicemail, workflow, workitem |
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
 **lockedByClientId** | **String** | Locked by client ID | [optional]  |
 **secure** | **String** | Secure | [optional] <br />**Values**: any, checkedin, published |
 **deleted** | **Boolean** | Include deleted | [optional] [default to false] |
 **includeSchemas** | **Boolean** | Include variable schemas | [optional] [default to false] |
 **publishedAfter** | **String** | Published after | [optional]  |
 **publishedBefore** | **String** | Published before | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**FlowEntityListing**

<a name="getFlowsDatatable"></a>

# DataTable getFlowsDatatable(datatableId, opts)


GET /api/v2/flows/datatables/{datatableId}

Returns a specific datatable by id

Given a datatableId returns the datatable object and schema associated with it.

Requires ANY permissions:

* architect:datatable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the result
};

apiInstance.getFlowsDatatable(datatableId, opts)
  .then((data) => {
    console.log(`getFlowsDatatable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="getFlowsDatatableExportJob"></a>

# DataTableExportJob getFlowsDatatableExportJob(datatableId, exportJobId)


GET /api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId}

Returns the state information about an export job

Returns the state information about an export job.

Requires ANY permissions:

* architect:datatable:view
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let exportJobId = "exportJobId_example"; // String | id of export job

apiInstance.getFlowsDatatableExportJob(datatableId, exportJobId)
  .then((data) => {
    console.log(`getFlowsDatatableExportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatableExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **exportJobId** | **String** | id of export job |  |
{: class="table table-striped"}

### Return type

**DataTableExportJob**

<a name="getFlowsDatatableImportJob"></a>

# DataTableImportJob getFlowsDatatableImportJob(datatableId, importJobId)


GET /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}

Returns the state information about an import job

Returns the state information about an import job.

Requires ANY permissions:

* architect:datatable:view
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let importJobId = "importJobId_example"; // String | id of import job

apiInstance.getFlowsDatatableImportJob(datatableId, importJobId)
  .then((data) => {
    console.log(`getFlowsDatatableImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatableImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **importJobId** | **String** | id of import job |  |
{: class="table table-striped"}

### Return type

**DataTableImportJob**

<a name="getFlowsDatatableImportJobs"></a>

# DataTableImportEntityListing getFlowsDatatableImportJobs(datatableId, opts)


GET /api/v2/flows/datatables/{datatableId}/import/jobs

Get all recent import jobs

Get all recent import jobs

Requires ANY permissions:

* architect:datatable:edit
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getFlowsDatatableImportJobs(datatableId, opts)
  .then((data) => {
    console.log(`getFlowsDatatableImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatableImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DataTableImportEntityListing**

<a name="getFlowsDatatableRow"></a>

# **{&#39;String&#39;: Object}** getFlowsDatatableRow(datatableId, rowId, opts)


GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Returns a specific row for the datatable

Given a datatableId and a rowId (the value of the key field) this will return the full row contents for that rowId.

Requires ANY permissions:

* architect:datatable:view
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let rowId = "rowId_example"; // String | The key for the row
let opts = { 
  'showbrief': true // Boolean | if true returns just the key field for the row
};

apiInstance.getFlowsDatatableRow(datatableId, rowId, opts)
  .then((data) => {
    console.log(`getFlowsDatatableRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatableRow');
    console.error(err);
  });
```

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

Returns the rows for the datatable with the given id

Returns all of the rows for the datatable with the given datatableId.  By default this will just be a truncated list returning the key for each row. Set showBrief to false to return all of the row contents.

Requires ANY permissions:

* architect:datatable:view
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'showbrief': true, // Boolean | If true returns just the key value of the row
  'sortOrder': "ascending" // String | Sort order
};

apiInstance.getFlowsDatatableRows(datatableId, opts)
  .then((data) => {
    console.log(`getFlowsDatatableRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatableRows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **showbrief** | **Boolean** | If true returns just the key value of the row | [optional] [default to true] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**DataTableRowEntityListing**

<a name="getFlowsDatatables"></a>

# DataTablesDomainEntityListing getFlowsDatatables(opts)


GET /api/v2/flows/datatables

Retrieve a list of datatables for the org

Returns a metadata list of the datatables associated with this org, including datatableId, name and description.

Requires ANY permissions:

* architect:datatable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'expand': "expand_example", // String | Expand instructions for the result
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'divisionId': ["divisionId_example"], // [String] | division ID(s)
  'name': exactMatch, beginsWith*, *endsWith, *contains* // String | Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive.
};

apiInstance.getFlowsDatatables(opts)
  .then((data) => {
    console.log(`getFlowsDatatables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id]<br />**Values**: id, name |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
 **name** | **String** | Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive. | [optional]  |
{: class="table table-striped"}

### Return type

**DataTablesDomainEntityListing**

<a name="getFlowsDatatablesDivisionview"></a>

# DataTable getFlowsDatatablesDivisionview(datatableId, opts)


GET /api/v2/flows/datatables/divisionviews/{datatableId}

Returns a specific datatable by id

Given a datatableId returns the datatable object and schema associated with it.

Requires ALL permissions:

* architect:datatable:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the result
};

apiInstance.getFlowsDatatablesDivisionview(datatableId, opts)
  .then((data) => {
    console.log(`getFlowsDatatablesDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatablesDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="getFlowsDatatablesDivisionviews"></a>

# DataTablesDomainEntityListing getFlowsDatatablesDivisionviews(opts)


GET /api/v2/flows/datatables/divisionviews

Retrieve a list of datatables for the org

Returns a metadata list of the datatables associated with this org, including datatableId, name and description.

Requires ALL permissions:

* architect:datatable:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'expand': "expand_example", // String | Expand instructions for the result
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'divisionId': ["divisionId_example"], // [String] | division ID(s)
  'name': exactMatch, beginsWith*, *endsWith, *contains* // String | Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive.
};

apiInstance.getFlowsDatatablesDivisionviews(opts)
  .then((data) => {
    console.log(`getFlowsDatatablesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDatatablesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id]<br />**Values**: id, name |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
 **name** | **String** | Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive. | [optional]  |
{: class="table table-striped"}

### Return type

**DataTablesDomainEntityListing**

<a name="getFlowsDivisionviews"></a>

# FlowDivisionViewEntityListing getFlowsDivisionviews(opts)


GET /api/v2/flows/divisionviews

Get a pageable list of basic flow information objects filterable by query parameters.

This returns a simplified version of /flow consisting of name and type. If one or more IDs are specified, the search will fetch flows that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* architect:flow:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'type': ["type_example"], // [String] | Type
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'publishVersionId': "publishVersionId_example", // String | Publish version ID
  'publishedAfter': 2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01, // String | Published after
  'publishedBefore': 2015-01-01T12:00:00-0600, 2015-01-01T18:00:00Z, 2015-01-01T12:00:00.000-0600, 2015-01-01T18:00:00.000Z, 2015-01-01, // String | Published before
  'divisionId': ["divisionId_example"], // [String] | division ID(s)
  'includeSchemas': false // Boolean | Include variable schemas
};

apiInstance.getFlowsDivisionviews(opts)
  .then((data) => {
    console.log(`getFlowsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **[String]** | Type | [optional] <br />**Values**: bot, commonmodule, digitalbot, inboundcall, inboundchat, inboundemail, inboundshortmessage, outboundcall, inqueuecall, inqueueemail, inqueueshortmessage, speech, securecall, surveyinvite, voice, voicemail, workflow, workitem |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **publishVersionId** | **String** | Publish version ID | [optional]  |
 **publishedAfter** | **String** | Published after | [optional]  |
 **publishedBefore** | **String** | Published before | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
 **includeSchemas** | **Boolean** | Include variable schemas | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**FlowDivisionViewEntityListing**

<a name="getFlowsExecution"></a>

# FlowRuntimeExecution getFlowsExecution(flowExecutionId)


GET /api/v2/flows/executions/{flowExecutionId}

Get a flow execution's details. Flow execution details are available for several days after the flow is started.

Requires ANY permissions:

* architect:flowExecution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowExecutionId = "flowExecutionId_example"; // String | flow execution ID

apiInstance.getFlowsExecution(flowExecutionId)
  .then((data) => {
    console.log(`getFlowsExecution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsExecution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowExecutionId** | **String** | flow execution ID |  |
{: class="table table-striped"}

### Return type

**FlowRuntimeExecution**

<a name="getFlowsInstance"></a>

# GetFlowExecutionDataJobResult getFlowsInstance(instanceId, opts)


GET /api/v2/flows/instances/{instanceId}

Start a process (job) to prepare a download of a singular flow execution data instance by Id

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

getFlowsInstance is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let instanceId = "instanceId_example"; // String | Instance ID
let opts = { 
  'expand': "expand_example" // String | Expand various details.
};

apiInstance.getFlowsInstance(instanceId, opts)
  .then((data) => {
    console.log(`getFlowsInstance success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstance');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **instanceId** | **String** | Instance ID |  |
 **expand** | **String** | Expand various details. | [optional] <br />**Values**: bots, data |
{: class="table table-striped"}

### Return type

**GetFlowExecutionDataJobResult**

<a name="getFlowsInstancesJob"></a>

# GetFlowExecutionDataJobResult getFlowsInstancesJob(jobId)


GET /api/v2/flows/instances/jobs/{jobId}

Get the status and/or results of an asynchronous flow execution data retrieval job

getFlowsInstancesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getFlowsInstancesJob(jobId)
  .then((data) => {
    console.log(`getFlowsInstancesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**GetFlowExecutionDataJobResult**

<a name="getFlowsInstancesQuerycapabilities"></a>

# FlowsQueryCriteriaResponse getFlowsInstancesQuerycapabilities(opts)


GET /api/v2/flows/instances/querycapabilities

Retrieve a list of capabilities that the org can use to query for execution data

Returns the queryable parameters that can be used to build a query for execution data.

getFlowsInstancesQuerycapabilities is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* architect:flowInstance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'expand': "expand_example" // String | Expand various query types.
};

apiInstance.getFlowsInstancesQuerycapabilities(opts)
  .then((data) => {
    console.log(`getFlowsInstancesQuerycapabilities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesQuerycapabilities');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **String** | Expand various query types. | [optional] <br />**Values**: flow, action |
{: class="table table-striped"}

### Return type

**FlowsQueryCriteriaResponse**

<a name="getFlowsJob"></a>

# ArchitectJobStateResponse getFlowsJob(jobId, opts)


GET /api/v2/flows/jobs/{jobId}

Fetch Architect Job Status

Requires ALL permissions:

* architect:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let jobId = "jobId_example"; // String | Job ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getFlowsJob(jobId, opts)
  .then((data) => {
    console.log(`getFlowsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: messages |
{: class="table table-striped"}

### Return type

**ArchitectJobStateResponse**

<a name="getFlowsMilestone"></a>

# FlowMilestone getFlowsMilestone(milestoneId)


GET /api/v2/flows/milestones/{milestoneId}

Get a flow milestone

Returns a specified flow milestone

Requires ALL permissions:

* architect:flowMilestone:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let milestoneId = "milestoneId_example"; // String | flow milestone ID

apiInstance.getFlowsMilestone(milestoneId)
  .then((data) => {
    console.log(`getFlowsMilestone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsMilestone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **milestoneId** | **String** | flow milestone ID |  |
{: class="table table-striped"}

### Return type

**FlowMilestone**

<a name="getFlowsMilestones"></a>

# FlowMilestoneListing getFlowsMilestones(opts)


GET /api/v2/flows/milestones

Get a pageable list of flow milestones, filtered by query parameters

Multiple IDs can be specified, in which case all matching flow milestones will be returned, and no other parameters will be evaluated.

Requires ALL permissions:

* architect:flowMilestone:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'divisionId': ["divisionId_example"] // [String] | division ID(s)
};

apiInstance.getFlowsMilestones(opts)
  .then((data) => {
    console.log(`getFlowsMilestones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsMilestones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**FlowMilestoneListing**

<a name="getFlowsMilestonesDivisionviews"></a>

# FlowMilestoneDivisionViewEntityListing getFlowsMilestonesDivisionviews(opts)


GET /api/v2/flows/milestones/divisionviews

Get a pageable list of basic flow milestone information objects filterable by query parameters.

This returns flow milestones consisting of name and division. If one or more IDs are specified, the search will fetch flow milestones that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* architect:flowMilestone:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'divisionId': ["divisionId_example"] // [String] | division ID(s)
};

apiInstance.getFlowsMilestonesDivisionviews(opts)
  .then((data) => {
    console.log(`getFlowsMilestonesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsMilestonesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**FlowMilestoneDivisionViewEntityListing**

<a name="getFlowsOutcome"></a>

# FlowOutcome getFlowsOutcome(flowOutcomeId)


GET /api/v2/flows/outcomes/{flowOutcomeId}

Get a flow outcome

Returns a specified flow outcome

Requires ALL permissions:

* architect:flowOutcome:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowOutcomeId = "flowOutcomeId_example"; // String | flow outcome ID

apiInstance.getFlowsOutcome(flowOutcomeId)
  .then((data) => {
    console.log(`getFlowsOutcome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsOutcome');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowOutcomeId** | **String** | flow outcome ID |  |
{: class="table table-striped"}

### Return type

**FlowOutcome**

<a name="getFlowsOutcomes"></a>

# FlowOutcomeListing getFlowsOutcomes(opts)


GET /api/v2/flows/outcomes

Get a pageable list of flow outcomes, filtered by query parameters

Multiple IDs can be specified, in which case all matching flow outcomes will be returned, and no other parameters will be evaluated.

Requires ALL permissions:

* architect:flowOutcome:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'divisionId': ["divisionId_example"] // [String] | division ID(s)
};

apiInstance.getFlowsOutcomes(opts)
  .then((data) => {
    console.log(`getFlowsOutcomes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsOutcomes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **description** | **String** | Description | [optional]  |
 **nameOrDescription** | **String** | Name or description | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**FlowOutcomeListing**

<a name="getFlowsOutcomesDivisionviews"></a>

# FlowOutcomeDivisionViewEntityListing getFlowsOutcomesDivisionviews(opts)


GET /api/v2/flows/outcomes/divisionviews

Get a pageable list of basic flow outcome information objects filterable by query parameters.

This returns flow outcomes consisting of name and division. If one or more IDs are specified, the search will fetch flow outcomes that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* architect:flowOutcome:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'divisionId': ["divisionId_example"] // [String] | division ID(s)
};

apiInstance.getFlowsOutcomesDivisionviews(opts)
  .then((data) => {
    console.log(`getFlowsOutcomesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsOutcomesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Sort by | [optional] [default to id] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **id** | **[String]** | ID | [optional]  |
 **name** | **String** | Name | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**FlowOutcomeDivisionViewEntityListing**

<a name="patchArchitectGrammar"></a>

# Grammar patchArchitectGrammar(grammarId, opts)


PATCH /api/v2/architect/grammars/{grammarId}

Updates a grammar

patchArchitectGrammar is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | grammar ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchArchitectGrammar(grammarId, opts)
  .then((data) => {
    console.log(`patchArchitectGrammar success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchArchitectGrammar');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | grammar ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Grammar**

<a name="postArchitectDependencytrackingBuild"></a>

# void postArchitectDependencytrackingBuild()


POST /api/v2/architect/dependencytracking/build

Rebuild Dependency Tracking data for an organization

Asynchronous.  Notification topic: v2.architect.dependencytracking.build

Requires ALL permissions:

* architect:dependencyTracking:rebuild

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.postArchitectDependencytrackingBuild()
  .then(() => {
    console.log('postArchitectDependencytrackingBuild returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectDependencytrackingBuild');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="postArchitectEmergencygroups"></a>

# EmergencyGroup postArchitectEmergencygroups(body)


POST /api/v2/architect/emergencygroups

Creates a new emergency group

Requires ALL permissions:

* routing:emergencyGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectEmergencygroups(body)
  .then((data) => {
    console.log(`postArchitectEmergencygroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectEmergencygroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**EmergencyGroup**

<a name="postArchitectGrammarLanguageFilesDtmf"></a>

# UploadUrlResponse postArchitectGrammarLanguageFilesDtmf(grammarId, languageCode, body)


POST /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf

Creates a presigned URL for uploading a grammar DTMF mode file

postArchitectGrammarLanguageFilesDtmf is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language
let body = {}; // Object | query

apiInstance.postArchitectGrammarLanguageFilesDtmf(grammarId, languageCode, body)
  .then((data) => {
    console.log(`postArchitectGrammarLanguageFilesDtmf success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectGrammarLanguageFilesDtmf');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postArchitectGrammarLanguageFilesVoice"></a>

# UploadUrlResponse postArchitectGrammarLanguageFilesVoice(grammarId, languageCode, body)


POST /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice

Creates a presigned URL for uploading a grammar voice mode file

postArchitectGrammarLanguageFilesVoice is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language
let body = {}; // Object | query

apiInstance.postArchitectGrammarLanguageFilesVoice(grammarId, languageCode, body)
  .then((data) => {
    console.log(`postArchitectGrammarLanguageFilesVoice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectGrammarLanguageFilesVoice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postArchitectGrammarLanguages"></a>

# GrammarLanguage postArchitectGrammarLanguages(grammarId, body)


POST /api/v2/architect/grammars/{grammarId}/languages

Create a new language for a given grammar

postArchitectGrammarLanguages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let body = {}; // Object | 

apiInstance.postArchitectGrammarLanguages(grammarId, body)
  .then((data) => {
    console.log(`postArchitectGrammarLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectGrammarLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**GrammarLanguage**

<a name="postArchitectGrammars"></a>

# Grammar postArchitectGrammars(body)


POST /api/v2/architect/grammars

Create a new grammar

postArchitectGrammars is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:grammar:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectGrammars(body)
  .then((data) => {
    console.log(`postArchitectGrammars success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectGrammars');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Grammar**

<a name="postArchitectIvrs"></a>

# IVR postArchitectIvrs(body)


POST /api/v2/architect/ivrs

Create IVR config.

Requires ALL permissions:

* routing:callRoute:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectIvrs(body)
  .then((data) => {
    console.log(`postArchitectIvrs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectIvrs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**IVR**

<a name="postArchitectPromptHistory"></a>

# Operation postArchitectPromptHistory(promptId)


POST /api/v2/architect/prompts/{promptId}/history

Generate prompt history

Asynchronous.  Notification topic: v2.architect.prompts.{promptId}

Requires ALL permissions:

* architect:userPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID

apiInstance.postArchitectPromptHistory(promptId)
  .then((data) => {
    console.log(`postArchitectPromptHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectPromptHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postArchitectPromptResources"></a>

# PromptAsset postArchitectPromptResources(promptId, body)


POST /api/v2/architect/prompts/{promptId}/resources

Create a new user prompt resource

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let body = {}; // Object | 

apiInstance.postArchitectPromptResources(promptId, body)
  .then((data) => {
    console.log(`postArchitectPromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectPromptResources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**PromptAsset**

<a name="postArchitectPrompts"></a>

# Prompt postArchitectPrompts(body)


POST /api/v2/architect/prompts

Create a new user prompt

Requires ALL permissions:

* architect:userPrompt:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectPrompts(body)
  .then((data) => {
    console.log(`postArchitectPrompts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectPrompts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Prompt**

<a name="postArchitectSchedulegroups"></a>

# ScheduleGroup postArchitectSchedulegroups(body)


POST /api/v2/architect/schedulegroups

Creates a new schedule group

Requires ALL permissions:

* routing:scheduleGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectSchedulegroups(body)
  .then((data) => {
    console.log(`postArchitectSchedulegroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectSchedulegroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**ScheduleGroup**

<a name="postArchitectSchedules"></a>

# Schedule postArchitectSchedules(body)


POST /api/v2/architect/schedules

Create a new schedule.

Requires ALL permissions:

* routing:schedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postArchitectSchedules(body)
  .then((data) => {
    console.log(`postArchitectSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Schedule**

<a name="postArchitectSystempromptHistory"></a>

# Operation postArchitectSystempromptHistory(promptId)


POST /api/v2/architect/systemprompts/{promptId}/history

Generate system prompt history

Asynchronous.  Notification topic: v2.architect.systemprompts.{systemPromptId}

Requires ALL permissions:

* architect:systemPrompt:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | promptId

apiInstance.postArchitectSystempromptHistory(promptId)
  .then((data) => {
    console.log(`postArchitectSystempromptHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectSystempromptHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | promptId |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postArchitectSystempromptResources"></a>

# SystemPromptAsset postArchitectSystempromptResources(promptId, body)


POST /api/v2/architect/systemprompts/{promptId}/resources

Create system prompt resource override.

Requires ALL permissions:

* architect:systemPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let body = {}; // Object | 

apiInstance.postArchitectSystempromptResources(promptId, body)
  .then((data) => {
    console.log(`postArchitectSystempromptResources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectSystempromptResources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**SystemPromptAsset**

<a name="postFlowHistory"></a>

# Operation postFlowHistory(flowId)


POST /api/v2/flows/{flowId}/history

Generate flow history

Asynchronous.  Notification topic: v2.flows.{flowId}

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID

apiInstance.postFlowHistory(flowId)
  .then((data) => {
    console.log(`postFlowHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowHistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postFlowVersions"></a>

# FlowVersion postFlowVersions(flowId, body)


POST /api/v2/flows/{flowId}/versions

Create flow version

Requires ANY permissions:

* architect:flow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let body = null; // {String: Object} | 

apiInstance.postFlowVersions(flowId, body)
  .then((data) => {
    console.log(`postFlowVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **body** | **{String: Object}** |  |  |
{: class="table table-striped"}

### Return type

**FlowVersion**

<a name="postFlows"></a>

# Flow postFlows(body, opts)


POST /api/v2/flows

Create flow

Requires ANY permissions:

* architect:flow:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 
let opts = { 
  'language': "language_example" // String | Language
};

apiInstance.postFlows(body, opts)
  .then((data) => {
    console.log(`postFlows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
 **language** | **String** | Language | [optional]  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsActionsCheckin"></a>

# Operation postFlowsActionsCheckin(flow)


POST /api/v2/flows/actions/checkin

Check-in flow

Asynchronous.  Notification topic: v2.flows.{flowId}

Requires ANY permissions:

* architect:flow:edit
* architect:flow:unlock

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckin(flow)
  .then((data) => {
    console.log(`postFlowsActionsCheckin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsCheckin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Operation**

<a name="postFlowsActionsCheckout"></a>

# Flow postFlowsActionsCheckout(flow)


POST /api/v2/flows/actions/checkout

Check-out flow

Requires ANY permissions:

* architect:flow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckout(flow)
  .then((data) => {
    console.log(`postFlowsActionsCheckout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsCheckout');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsDeactivate(flow)
  .then((data) => {
    console.log(`postFlowsActionsDeactivate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsDeactivate');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:unlock
* architect:flow:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID
let opts = { 
  'version': "version_example" // String | version
};

apiInstance.postFlowsActionsPublish(flow, opts)
  .then((data) => {
    console.log(`postFlowsActionsPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsPublish');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsRevert(flow)
  .then((data) => {
    console.log(`postFlowsActionsRevert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsRevert');
    console.error(err);
  });
```

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

Requires ANY permissions:

* architect:flow:unlock

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsUnlock(flow)
  .then((data) => {
    console.log(`postFlowsActionsUnlock success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsActionsUnlock');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String** | Flow ID |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="postFlowsDatatableExportJobs"></a>

# DataTableExportJob postFlowsDatatableExportJobs(datatableId)


POST /api/v2/flows/datatables/{datatableId}/export/jobs

Begin an export process for exporting all rows from a datatable

Create an export job for exporting rows. The caller can then poll for status of the export using the token returned in the response

Requires ANY permissions:

* architect:datatable:view
* architect:datatableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable

apiInstance.postFlowsDatatableExportJobs(datatableId)
  .then((data) => {
    console.log(`postFlowsDatatableExportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsDatatableExportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
{: class="table table-striped"}

### Return type

**DataTableExportJob**

<a name="postFlowsDatatableImportJobs"></a>

# DataTableImportJob postFlowsDatatableImportJobs(datatableId, body)


POST /api/v2/flows/datatables/{datatableId}/import/jobs

Begin an import process for importing rows into a datatable

Create an import job for importing rows. The caller can then poll for status of the import using the token returned in the response

Requires ANY permissions:

* architect:datatable:edit
* architect:datatableRow:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let body = {}; // Object | import job information

apiInstance.postFlowsDatatableImportJobs(datatableId, body)
  .then((data) => {
    console.log(`postFlowsDatatableImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsDatatableImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **body** | **Object** | import job information |  |
{: class="table table-striped"}

### Return type

**DataTableImportJob**

<a name="postFlowsDatatableRows"></a>

# **{&#39;String&#39;: Object}** postFlowsDatatableRows(datatableId, dataTableRow)


POST /api/v2/flows/datatables/{datatableId}/rows

Create a new row entry for the datatable.

Will add the passed in row entry to the datatable with the given datatableId after verifying it against the schema.  The DataTableRow should be a json-ized stream of key -> value pairs {      "Field1": "XYZZY",      "Field2": false,      "KEY": "27272"  }

Requires ANY permissions:

* architect:datatable:add
* architect:datatableRow:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let dataTableRow = null; // {String: Object} | 

apiInstance.postFlowsDatatableRows(datatableId, dataTableRow)
  .then((data) => {
    console.log(`postFlowsDatatableRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsDatatableRows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **dataTableRow** | **{String: Object}** |  |  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="postFlowsDatatables"></a>

# DataTable postFlowsDatatables(body)


POST /api/v2/flows/datatables

Create a new datatable with the specified json-schema definition

This will create a new datatable with fields that match the property definitions in the JSON schema.  The schemas title field will be overridden by the name field in the DataTable object.  See also http://json-schema.org/

Requires ANY permissions:

* architect:datatable:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | datatable json-schema

apiInstance.postFlowsDatatables(body)
  .then((data) => {
    console.log(`postFlowsDatatables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsDatatables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | datatable json-schema |  |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="postFlowsExecutions"></a>

# FlowExecutionLaunchResponse postFlowsExecutions(flowLaunchRequest)


POST /api/v2/flows/executions

Launch an instance of a flow definition, for flow types that support it such as the 'workflow' type.

The launch is asynchronous, it returns as soon as the flow starts. You can use the returned ID to query its status if you need.

Requires ANY permissions:

* architect:flow:launch

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowLaunchRequest = {}; // Object | 

apiInstance.postFlowsExecutions(flowLaunchRequest)
  .then((data) => {
    console.log(`postFlowsExecutions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsExecutions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowLaunchRequest** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**FlowExecutionLaunchResponse**

<a name="postFlowsInstancesJobs"></a>

# GetFlowExecutionDataJobResult postFlowsInstancesJobs(body, opts)


POST /api/v2/flows/instances/jobs

Start a process (job) that will prepare a list of execution data IDs for download.

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

postFlowsInstancesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | Requested Flow Ids
let opts = { 
  'expand': "expand_example" // String | Expand various query types.
};

apiInstance.postFlowsInstancesJobs(body, opts)
  .then((data) => {
    console.log(`postFlowsInstancesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsInstancesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Requested Flow Ids |  |
 **expand** | **String** | Expand various query types. | [optional] <br />**Values**: bots, data |
{: class="table table-striped"}

### Return type

**GetFlowExecutionDataJobResult**

<a name="postFlowsInstancesQuery"></a>

# FlowResultEntityListing postFlowsInstancesQuery(body, opts)


POST /api/v2/flows/instances/query

Query the database of existing flow histories to look for particular flow criteria

Returns a list of matching flow histories up to 200 max.

postFlowsInstancesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* architect:flowInstance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | query
let opts = { 
  'indexOnly': true // Boolean | indexes only
};

apiInstance.postFlowsInstancesQuery(body, opts)
  .then((data) => {
    console.log(`postFlowsInstancesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsInstancesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **indexOnly** | **Boolean** | indexes only | [optional]  |
{: class="table table-striped"}

### Return type

**FlowResultEntityListing**

<a name="postFlowsJobs"></a>

# RegisterArchitectJobResponse postFlowsJobs()


POST /api/v2/flows/jobs

Register Architect Job. Returns a URL where a file, such as an Architect flow YAML file, can be PUT which will then initiate the job.

Requires ALL permissions:

* architect:job:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.postFlowsJobs()
  .then((data) => {
    console.log(`postFlowsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsJobs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**RegisterArchitectJobResponse**

<a name="postFlowsMilestones"></a>

# FlowMilestone postFlowsMilestones(opts)


POST /api/v2/flows/milestones

Create a flow milestone

Requires ALL permissions:

* architect:flowMilestone:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postFlowsMilestones(opts)
  .then((data) => {
    console.log(`postFlowsMilestones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsMilestones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**FlowMilestone**

<a name="postFlowsOutcomes"></a>

# FlowOutcome postFlowsOutcomes(opts)


POST /api/v2/flows/outcomes

Create a flow outcome

Asynchronous.  Notification topic: v2.flows.outcomes.{flowOutcomeId}

Requires ALL permissions:

* architect:flowOutcome:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postFlowsOutcomes(opts)
  .then((data) => {
    console.log(`postFlowsOutcomes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsOutcomes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**FlowOutcome**

<a name="putArchitectEmergencygroup"></a>

# EmergencyGroup putArchitectEmergencygroup(emergencyGroupId, body)


PUT /api/v2/architect/emergencygroups/{emergencyGroupId}

Updates a emergency group by ID

Requires ALL permissions:

* routing:emergencyGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let emergencyGroupId = "emergencyGroupId_example"; // String | Emergency group ID
let body = {}; // Object | 

apiInstance.putArchitectEmergencygroup(emergencyGroupId, body)
  .then((data) => {
    console.log(`putArchitectEmergencygroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectEmergencygroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **emergencyGroupId** | **String** | Emergency group ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**EmergencyGroup**

<a name="putArchitectIvr"></a>

# IVR putArchitectIvr(ivrId, body)


PUT /api/v2/architect/ivrs/{ivrId}

Update an IVR Config.

Requires ALL permissions:

* routing:callRoute:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let ivrId = "ivrId_example"; // String | IVR id
let body = {}; // Object | 

apiInstance.putArchitectIvr(ivrId, body)
  .then((data) => {
    console.log(`putArchitectIvr success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectIvr');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**IVR**

<a name="putArchitectPrompt"></a>

# Prompt putArchitectPrompt(promptId, body)


PUT /api/v2/architect/prompts/{promptId}

Update specified user prompt

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let body = {}; // Object | 

apiInstance.putArchitectPrompt(promptId, body)
  .then((data) => {
    console.log(`putArchitectPrompt success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectPrompt');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Prompt**

<a name="putArchitectPromptResource"></a>

# PromptAsset putArchitectPromptResource(promptId, languageCode, body)


PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Update specified user prompt resource

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language
let body = {}; // Object | 

apiInstance.putArchitectPromptResource(promptId, languageCode, body)
  .then((data) => {
    console.log(`putArchitectPromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectPromptResource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**PromptAsset**

<a name="putArchitectSchedule"></a>

# Schedule putArchitectSchedule(scheduleId, body)


PUT /api/v2/architect/schedules/{scheduleId}

Update schedule by ID

Requires ALL permissions:

* routing:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID
let body = {}; // Object | 

apiInstance.putArchitectSchedule(scheduleId, body)
  .then((data) => {
    console.log(`putArchitectSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Schedule**

<a name="putArchitectSchedulegroup"></a>

# ScheduleGroup putArchitectSchedulegroup(scheduleGroupId, body)


PUT /api/v2/architect/schedulegroups/{scheduleGroupId}

Updates a schedule group by ID

Requires ALL permissions:

* routing:scheduleGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let scheduleGroupId = "scheduleGroupId_example"; // String | Schedule group ID
let body = {}; // Object | 

apiInstance.putArchitectSchedulegroup(scheduleGroupId, body)
  .then((data) => {
    console.log(`putArchitectSchedulegroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectSchedulegroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleGroupId** | **String** | Schedule group ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**ScheduleGroup**

<a name="putArchitectSystempromptResource"></a>

# SystemPromptAsset putArchitectSystempromptResource(promptId, languageCode, body)


PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Updates a system prompt resource override.

Requires ALL permissions:

* architect:systemPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language
let body = {}; // Object | 

apiInstance.putArchitectSystempromptResource(promptId, languageCode, body)
  .then((data) => {
    console.log(`putArchitectSystempromptResource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectSystempromptResource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**SystemPromptAsset**

<a name="putFlow"></a>

# Flow putFlow(flowId, body)


PUT /api/v2/flows/{flowId}

Update flow

Requires ANY permissions:

* architect:flow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID
let body = {}; // Object | 

apiInstance.putFlow(flowId, body)
  .then((data) => {
    console.log(`putFlow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Flow**

<a name="putFlowsDatatable"></a>

# DataTable putFlowsDatatable(datatableId, body, opts)


PUT /api/v2/flows/datatables/{datatableId}

Updates a specific datatable by id

Updates a schema for a datatable with the given datatableId -updates allow only new fields to be added in the schema, no changes or removals of existing fields.

Requires ANY permissions:

* architect:datatable:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let body = {}; // Object | datatable json-schema
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the result
};

apiInstance.putFlowsDatatable(datatableId, body, opts)
  .then((data) => {
    console.log(`putFlowsDatatable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowsDatatable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **body** | **Object** | datatable json-schema |  |
 **expand** | **String** | Expand instructions for the result | [optional] <br />**Values**: schema |
{: class="table table-striped"}

### Return type

**DataTable**

<a name="putFlowsDatatableRow"></a>

# **{&#39;String&#39;: Object}** putFlowsDatatableRow(datatableId, rowId, opts)


PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Update a row entry

Updates a row with the given rowId (the value of the key field) to the new values.  The DataTableRow should be a json-ized stream of key -> value pairs {     "Field1": "XYZZY",     "Field2": false,     "KEY": "27272" }

Requires ANY permissions:

* architect:datatable:edit
* architect:datatableRow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let datatableId = "datatableId_example"; // String | id of datatable
let rowId = "rowId_example"; // String | the key for the row
let opts = { 
  'body': null // {String: Object} | datatable row
};

apiInstance.putFlowsDatatableRow(datatableId, rowId, opts)
  .then((data) => {
    console.log(`putFlowsDatatableRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowsDatatableRow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **datatableId** | **String** | id of datatable |  |
 **rowId** | **String** | the key for the row |  |
 **body** | **{String: Object}** | datatable row | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

<a name="putFlowsMilestone"></a>

# FlowMilestone putFlowsMilestone(milestoneId, opts)


PUT /api/v2/flows/milestones/{milestoneId}

Updates a flow milestone

Requires ALL permissions:

* architect:flowMilestone:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let milestoneId = "milestoneId_example"; // String | flow milestone ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putFlowsMilestone(milestoneId, opts)
  .then((data) => {
    console.log(`putFlowsMilestone success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowsMilestone');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **milestoneId** | **String** | flow milestone ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**FlowMilestone**

<a name="putFlowsOutcome"></a>

# Operation putFlowsOutcome(flowOutcomeId, opts)


PUT /api/v2/flows/outcomes/{flowOutcomeId}

Updates a flow outcome

Updates a flow outcome.  Asynchronous.  Notification topic: v2.flowoutcomes.{flowoutcomeId}

Requires ALL permissions:

* architect:flowOutcome:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowOutcomeId = "flowOutcomeId_example"; // String | flow outcome ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putFlowsOutcome(flowOutcomeId, opts)
  .then((data) => {
    console.log(`putFlowsOutcome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowsOutcome');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowOutcomeId** | **String** | flow outcome ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Operation**

