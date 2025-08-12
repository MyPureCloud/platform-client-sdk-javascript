# ArchitectApi

# platformClient.ArchitectApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteArchitectEmergencygroup**](ArchitectApi#deleteArchitectEmergencygroup) | **DELETE** /api/v2/architect/emergencygroups/{emergencyGroupId} | Deletes a emergency group by ID
[**deleteArchitectGrammar**](ArchitectApi#deleteArchitectGrammar) | **DELETE** /api/v2/architect/grammars/{grammarId} | Delete a grammar.
[**deleteArchitectGrammarLanguage**](ArchitectApi#deleteArchitectGrammarLanguage) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode} | Delete specified grammar language
[**deleteArchitectGrammarLanguageFilesDtmf**](ArchitectApi#deleteArchitectGrammarLanguageFilesDtmf) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf | Clear the DTMF mode file for the grammar language if there is one
[**deleteArchitectGrammarLanguageFilesVoice**](ArchitectApi#deleteArchitectGrammarLanguageFilesVoice) | **DELETE** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice | Clear the voice mode file for the grammar language if there is one
[**deleteArchitectIvr**](ArchitectApi#deleteArchitectIvr) | **DELETE** /api/v2/architect/ivrs/{ivrId} | Delete an IVR Config.
[**deleteArchitectPrompt**](ArchitectApi#deleteArchitectPrompt) | **DELETE** /api/v2/architect/prompts/{promptId} | Delete specified user prompt
[**deleteArchitectPromptResource**](ArchitectApi#deleteArchitectPromptResource) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Delete specified user prompt resource
[**deleteArchitectPromptResourceAudio**](ArchitectApi#deleteArchitectPromptResourceAudio) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio | Delete specified user prompt resource audio
[**deleteArchitectPrompts**](ArchitectApi#deleteArchitectPrompts) | **DELETE** /api/v2/architect/prompts | Batch-delete a list of prompts
[**deleteArchitectSchedule**](ArchitectApi#deleteArchitectSchedule) | **DELETE** /api/v2/architect/schedules/{scheduleId} | Delete a schedule by id
[**deleteArchitectSchedulegroup**](ArchitectApi#deleteArchitectSchedulegroup) | **DELETE** /api/v2/architect/schedulegroups/{scheduleGroupId} | Deletes a schedule group by ID
[**deleteArchitectSystempromptResource**](ArchitectApi#deleteArchitectSystempromptResource) | **DELETE** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Delete a system prompt resource override.
[**deleteFlow**](ArchitectApi#deleteFlow) | **DELETE** /api/v2/flows/{flowId} | Delete flow
[**deleteFlowInstancesSettingsLoglevels**](ArchitectApi#deleteFlowInstancesSettingsLoglevels) | **DELETE** /api/v2/flows/{flowId}/instances/settings/loglevels | Deletes a log level for a flow by flow id.
[**deleteFlows**](ArchitectApi#deleteFlows) | **DELETE** /api/v2/flows | Batch-delete a list of flows
[**deleteFlowsDatatable**](ArchitectApi#deleteFlowsDatatable) | **DELETE** /api/v2/flows/datatables/{datatableId} | deletes a specific datatable by id
[**deleteFlowsDatatableRow**](ArchitectApi#deleteFlowsDatatableRow) | **DELETE** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Delete a row entry
[**deleteFlowsInstancesSettingsLoglevelsDefault**](ArchitectApi#deleteFlowsInstancesSettingsLoglevelsDefault) | **DELETE** /api/v2/flows/instances/settings/loglevels/default | Resets the org log level to default, base
[**deleteFlowsMilestone**](ArchitectApi#deleteFlowsMilestone) | **DELETE** /api/v2/flows/milestones/{milestoneId} | Delete a flow milestone.
[**getArchitectDependencytracking**](ArchitectApi#getArchitectDependencytracking) | **GET** /api/v2/architect/dependencytracking | Get Dependency Tracking objects that have a given display name
[**getArchitectDependencytrackingBuild**](ArchitectApi#getArchitectDependencytrackingBuild) | **GET** /api/v2/architect/dependencytracking/build | Get Dependency Tracking build status for an organization
[**getArchitectDependencytrackingConsumedresources**](ArchitectApi#getArchitectDependencytrackingConsumedresources) | **GET** /api/v2/architect/dependencytracking/consumedresources | Get resources that are consumed by a given Dependency Tracking object
[**getArchitectDependencytrackingConsumingresources**](ArchitectApi#getArchitectDependencytrackingConsumingresources) | **GET** /api/v2/architect/dependencytracking/consumingresources | Get resources that consume a given Dependency Tracking object
[**getArchitectDependencytrackingDeletedresourceconsumers**](ArchitectApi#getArchitectDependencytrackingDeletedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/deletedresourceconsumers | Get Dependency Tracking objects that consume deleted resources
[**getArchitectDependencytrackingObject**](ArchitectApi#getArchitectDependencytrackingObject) | **GET** /api/v2/architect/dependencytracking/object | Get a Dependency Tracking object
[**getArchitectDependencytrackingType**](ArchitectApi#getArchitectDependencytrackingType) | **GET** /api/v2/architect/dependencytracking/types/{typeId} | Get a Dependency Tracking type.
[**getArchitectDependencytrackingTypes**](ArchitectApi#getArchitectDependencytrackingTypes) | **GET** /api/v2/architect/dependencytracking/types | Get Dependency Tracking types.
[**getArchitectDependencytrackingUpdatedresourceconsumers**](ArchitectApi#getArchitectDependencytrackingUpdatedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/updatedresourceconsumers | Get Dependency Tracking objects that depend on updated resources
[**getArchitectEmergencygroup**](ArchitectApi#getArchitectEmergencygroup) | **GET** /api/v2/architect/emergencygroups/{emergencyGroupId} | Gets a emergency group by ID
[**getArchitectEmergencygroups**](ArchitectApi#getArchitectEmergencygroups) | **GET** /api/v2/architect/emergencygroups | Get a list of emergency groups.
[**getArchitectEmergencygroupsDivisionviews**](ArchitectApi#getArchitectEmergencygroupsDivisionviews) | **GET** /api/v2/architect/emergencygroups/divisionviews | Get a pageable list of basic emergency group objects filterable by query parameters.
[**getArchitectGrammar**](ArchitectApi#getArchitectGrammar) | **GET** /api/v2/architect/grammars/{grammarId} | Get a grammar
[**getArchitectGrammarLanguage**](ArchitectApi#getArchitectGrammarLanguage) | **GET** /api/v2/architect/grammars/{grammarId}/languages/{languageCode} | Get a grammar language.
[**getArchitectGrammars**](ArchitectApi#getArchitectGrammars) | **GET** /api/v2/architect/grammars | Get a pageable list of grammars, filtered by query parameters
[**getArchitectIvr**](ArchitectApi#getArchitectIvr) | **GET** /api/v2/architect/ivrs/{ivrId} | Get an IVR config.
[**getArchitectIvrIdentityresolution**](ArchitectApi#getArchitectIvrIdentityresolution) | **GET** /api/v2/architect/ivrs/{ivrId}/identityresolution | Get an IVR IdentityResolutionConfig.
[**getArchitectIvrs**](ArchitectApi#getArchitectIvrs) | **GET** /api/v2/architect/ivrs | Get IVR configs.
[**getArchitectIvrsDivisionviews**](ArchitectApi#getArchitectIvrsDivisionviews) | **GET** /api/v2/architect/ivrs/divisionviews | Get a pageable list of basic ivr configuration information objects filterable by query parameters.
[**getArchitectPrompt**](ArchitectApi#getArchitectPrompt) | **GET** /api/v2/architect/prompts/{promptId} | Get specified user prompt
[**getArchitectPromptHistoryHistoryId**](ArchitectApi#getArchitectPromptHistoryHistoryId) | **GET** /api/v2/architect/prompts/{promptId}/history/{historyId} | Get generated prompt history
[**getArchitectPromptResource**](ArchitectApi#getArchitectPromptResource) | **GET** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Get specified user prompt resource
[**getArchitectPromptResources**](ArchitectApi#getArchitectPromptResources) | **GET** /api/v2/architect/prompts/{promptId}/resources | Get a pageable list of user prompt resources
[**getArchitectPrompts**](ArchitectApi#getArchitectPrompts) | **GET** /api/v2/architect/prompts | Get a pageable list of user prompts
[**getArchitectSchedule**](ArchitectApi#getArchitectSchedule) | **GET** /api/v2/architect/schedules/{scheduleId} | Get a schedule by ID
[**getArchitectSchedulegroup**](ArchitectApi#getArchitectSchedulegroup) | **GET** /api/v2/architect/schedulegroups/{scheduleGroupId} | Gets a schedule group by ID
[**getArchitectSchedulegroups**](ArchitectApi#getArchitectSchedulegroups) | **GET** /api/v2/architect/schedulegroups | Get a list of schedule groups.
[**getArchitectSchedulegroupsDivisionviews**](ArchitectApi#getArchitectSchedulegroupsDivisionviews) | **GET** /api/v2/architect/schedulegroups/divisionviews | Get a pageable list of basic schedule group configuration information objects filterable by query parameters.
[**getArchitectSchedules**](ArchitectApi#getArchitectSchedules) | **GET** /api/v2/architect/schedules | Get a list of schedules.
[**getArchitectSchedulesDivisionviews**](ArchitectApi#getArchitectSchedulesDivisionviews) | **GET** /api/v2/architect/schedules/divisionviews | Get a pageable list of basic schedule configuration information objects filterable by query parameters.
[**getArchitectSystemprompt**](ArchitectApi#getArchitectSystemprompt) | **GET** /api/v2/architect/systemprompts/{promptId} | Get a system prompt
[**getArchitectSystempromptHistoryHistoryId**](ArchitectApi#getArchitectSystempromptHistoryHistoryId) | **GET** /api/v2/architect/systemprompts/{promptId}/history/{historyId} | Get generated prompt history
[**getArchitectSystempromptResource**](ArchitectApi#getArchitectSystempromptResource) | **GET** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Get a system prompt resource.
[**getArchitectSystempromptResources**](ArchitectApi#getArchitectSystempromptResources) | **GET** /api/v2/architect/systemprompts/{promptId}/resources | Get system prompt resources.
[**getArchitectSystemprompts**](ArchitectApi#getArchitectSystemprompts) | **GET** /api/v2/architect/systemprompts | Get System Prompts
[**getFlow**](ArchitectApi#getFlow) | **GET** /api/v2/flows/{flowId} | Get flow
[**getFlowHistoryHistoryId**](ArchitectApi#getFlowHistoryHistoryId) | **GET** /api/v2/flows/{flowId}/history/{historyId} | Get generated flow history
[**getFlowInstancesSettingsLoglevels**](ArchitectApi#getFlowInstancesSettingsLoglevels) | **GET** /api/v2/flows/{flowId}/instances/settings/loglevels | Retrieves the log level for a flow by flow id.
[**getFlowLatestconfiguration**](ArchitectApi#getFlowLatestconfiguration) | **GET** /api/v2/flows/{flowId}/latestconfiguration | Get the latest configuration for flow
[**getFlowVersion**](ArchitectApi#getFlowVersion) | **GET** /api/v2/flows/{flowId}/versions/{versionId} | Get flow version
[**getFlowVersionConfiguration**](ArchitectApi#getFlowVersionConfiguration) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/configuration | Get flow version configuration
[**getFlowVersionHealth**](ArchitectApi#getFlowVersionHealth) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/health | Get overall health scores for all intents present in the NLU domain version associated with the bot flow version.
[**getFlowVersionIntentHealth**](ArchitectApi#getFlowVersionIntentHealth) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/health | Get health scores and other health metrics for a specific intent. This includes the health metrics for each utterance in an intent.
[**getFlowVersionIntentUtteranceHealth**](ArchitectApi#getFlowVersionIntentUtteranceHealth) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/utterances/{utteranceId}/health | Get health metrics associated with a specific utterance of an intent.
[**getFlowVersions**](ArchitectApi#getFlowVersions) | **GET** /api/v2/flows/{flowId}/versions | Get flow version list
[**getFlows**](ArchitectApi#getFlows) | **GET** /api/v2/flows | Get a pageable list of flows, filtered by query parameters
[**getFlowsDatatable**](ArchitectApi#getFlowsDatatable) | **GET** /api/v2/flows/datatables/{datatableId} | Returns a specific datatable by id
[**getFlowsDatatableExportJob**](ArchitectApi#getFlowsDatatableExportJob) | **GET** /api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId} | Returns the state information about an export job
[**getFlowsDatatableImportJob**](ArchitectApi#getFlowsDatatableImportJob) | **GET** /api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId} | Returns the state information about an import job
[**getFlowsDatatableImportJobs**](ArchitectApi#getFlowsDatatableImportJobs) | **GET** /api/v2/flows/datatables/{datatableId}/import/jobs | Get all recent import jobs
[**getFlowsDatatableRow**](ArchitectApi#getFlowsDatatableRow) | **GET** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Returns a specific row for the datatable
[**getFlowsDatatableRows**](ArchitectApi#getFlowsDatatableRows) | **GET** /api/v2/flows/datatables/{datatableId}/rows | Returns the rows for the datatable with the given id
[**getFlowsDatatables**](ArchitectApi#getFlowsDatatables) | **GET** /api/v2/flows/datatables | Retrieve a list of datatables for the org
[**getFlowsDatatablesDivisionview**](ArchitectApi#getFlowsDatatablesDivisionview) | **GET** /api/v2/flows/datatables/divisionviews/{datatableId} | Returns a specific datatable by id
[**getFlowsDatatablesDivisionviews**](ArchitectApi#getFlowsDatatablesDivisionviews) | **GET** /api/v2/flows/datatables/divisionviews | Retrieve a list of datatables for the org
[**getFlowsDivisionviews**](ArchitectApi#getFlowsDivisionviews) | **GET** /api/v2/flows/divisionviews | Get a pageable list of basic flow information objects filterable by query parameters.
[**getFlowsExecution**](ArchitectApi#getFlowsExecution) | **GET** /api/v2/flows/executions/{flowExecutionId} | Get a flow execution's details. Flow execution details are available for several days after the flow is started.
[**getFlowsExportJob**](ArchitectApi#getFlowsExportJob) | **GET** /api/v2/flows/export/jobs/{jobId} | Fetch Architect Export Job Status
[**getFlowsInstance**](ArchitectApi#getFlowsInstance) | **GET** /api/v2/flows/instances/{instanceId} | Start a process (job) to prepare a download of a singular flow execution data instance by Id
[**getFlowsInstancesJob**](ArchitectApi#getFlowsInstancesJob) | **GET** /api/v2/flows/instances/jobs/{jobId} | Get the status and/or results of an asynchronous flow execution data retrieval job
[**getFlowsInstancesQuerycapabilities**](ArchitectApi#getFlowsInstancesQuerycapabilities) | **GET** /api/v2/flows/instances/querycapabilities | Retrieve a list of capabilities that the org can use to query for execution data
[**getFlowsInstancesSettingsExecutiondata**](ArchitectApi#getFlowsInstancesSettingsExecutiondata) | **GET** /api/v2/flows/instances/settings/executiondata | Get the execution history enabled setting.
[**getFlowsInstancesSettingsLoglevels**](ArchitectApi#getFlowsInstancesSettingsLoglevels) | **GET** /api/v2/flows/instances/settings/loglevels | Retrieve a list of LogLevels for the organization.
[**getFlowsInstancesSettingsLoglevelsCharacteristics**](ArchitectApi#getFlowsInstancesSettingsLoglevelsCharacteristics) | **GET** /api/v2/flows/instances/settings/loglevels/characteristics | Gets the available flow log level characteristics for this organization.
[**getFlowsInstancesSettingsLoglevelsDefault**](ArchitectApi#getFlowsInstancesSettingsLoglevelsDefault) | **GET** /api/v2/flows/instances/settings/loglevels/default | Returns the flow default log level.
[**getFlowsJob**](ArchitectApi#getFlowsJob) | **GET** /api/v2/flows/jobs/{jobId} | Fetch Architect Job Status
[**getFlowsMilestone**](ArchitectApi#getFlowsMilestone) | **GET** /api/v2/flows/milestones/{milestoneId} | Get a flow milestone
[**getFlowsMilestones**](ArchitectApi#getFlowsMilestones) | **GET** /api/v2/flows/milestones | Get a pageable list of flow milestones, filtered by query parameters
[**getFlowsMilestonesDivisionviews**](ArchitectApi#getFlowsMilestonesDivisionviews) | **GET** /api/v2/flows/milestones/divisionviews | Get a pageable list of basic flow milestone information objects filterable by query parameters.
[**getFlowsOutcome**](ArchitectApi#getFlowsOutcome) | **GET** /api/v2/flows/outcomes/{flowOutcomeId} | Get a flow outcome
[**getFlowsOutcomes**](ArchitectApi#getFlowsOutcomes) | **GET** /api/v2/flows/outcomes | Get a pageable list of flow outcomes, filtered by query parameters
[**getFlowsOutcomesDivisionviews**](ArchitectApi#getFlowsOutcomesDivisionviews) | **GET** /api/v2/flows/outcomes/divisionviews | Get a pageable list of basic flow outcome information objects filterable by query parameters.
[**patchArchitectGrammar**](ArchitectApi#patchArchitectGrammar) | **PATCH** /api/v2/architect/grammars/{grammarId} | Updates a grammar
[**patchArchitectGrammarLanguage**](ArchitectApi#patchArchitectGrammarLanguage) | **PATCH** /api/v2/architect/grammars/{grammarId}/languages/{languageCode} | Updates a grammar language
[**patchFlowsInstancesSettingsExecutiondata**](ArchitectApi#patchFlowsInstancesSettingsExecutiondata) | **PATCH** /api/v2/flows/instances/settings/executiondata | Edit the execution history enabled setting.
[**postArchitectDependencytrackingBuild**](ArchitectApi#postArchitectDependencytrackingBuild) | **POST** /api/v2/architect/dependencytracking/build | Rebuild Dependency Tracking data for an organization
[**postArchitectEmergencygroups**](ArchitectApi#postArchitectEmergencygroups) | **POST** /api/v2/architect/emergencygroups | Creates a new emergency group
[**postArchitectGrammarLanguageFilesDtmf**](ArchitectApi#postArchitectGrammarLanguageFilesDtmf) | **POST** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf | Creates a presigned URL for uploading a grammar DTMF mode file
[**postArchitectGrammarLanguageFilesVoice**](ArchitectApi#postArchitectGrammarLanguageFilesVoice) | **POST** /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice | Creates a presigned URL for uploading a grammar voice mode file
[**postArchitectGrammarLanguages**](ArchitectApi#postArchitectGrammarLanguages) | **POST** /api/v2/architect/grammars/{grammarId}/languages | Create a new language for a given grammar
[**postArchitectGrammars**](ArchitectApi#postArchitectGrammars) | **POST** /api/v2/architect/grammars | Create a new grammar
[**postArchitectIvrs**](ArchitectApi#postArchitectIvrs) | **POST** /api/v2/architect/ivrs | Create IVR config.
[**postArchitectPromptHistory**](ArchitectApi#postArchitectPromptHistory) | **POST** /api/v2/architect/prompts/{promptId}/history | Generate prompt history
[**postArchitectPromptResourceUploads**](ArchitectApi#postArchitectPromptResourceUploads) | **POST** /api/v2/architect/prompts/{promptId}/resources/{languageCode}/uploads | Creates a presigned URL for uploading a user prompt file
[**postArchitectPromptResources**](ArchitectApi#postArchitectPromptResources) | **POST** /api/v2/architect/prompts/{promptId}/resources | Create a new user prompt resource
[**postArchitectPrompts**](ArchitectApi#postArchitectPrompts) | **POST** /api/v2/architect/prompts | Create a new user prompt
[**postArchitectSchedulegroups**](ArchitectApi#postArchitectSchedulegroups) | **POST** /api/v2/architect/schedulegroups | Creates a new schedule group
[**postArchitectSchedules**](ArchitectApi#postArchitectSchedules) | **POST** /api/v2/architect/schedules | Create a new schedule.
[**postArchitectSystempromptHistory**](ArchitectApi#postArchitectSystempromptHistory) | **POST** /api/v2/architect/systemprompts/{promptId}/history | Generate system prompt history
[**postArchitectSystempromptResourceUploads**](ArchitectApi#postArchitectSystempromptResourceUploads) | **POST** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}/uploads | Creates a presigned URL for uploading a system prompt file
[**postArchitectSystempromptResources**](ArchitectApi#postArchitectSystempromptResources) | **POST** /api/v2/architect/systemprompts/{promptId}/resources | Create system prompt resource override.
[**postFlowHistory**](ArchitectApi#postFlowHistory) | **POST** /api/v2/flows/{flowId}/history | Generate flow history
[**postFlowInstancesSettingsLoglevels**](ArchitectApi#postFlowInstancesSettingsLoglevels) | **POST** /api/v2/flows/{flowId}/instances/settings/loglevels | Set the logLevel for a particular flow id
[**postFlowVersions**](ArchitectApi#postFlowVersions) | **POST** /api/v2/flows/{flowId}/versions | Create flow version
[**postFlows**](ArchitectApi#postFlows) | **POST** /api/v2/flows | Create flow
[**postFlowsActionsCheckin**](ArchitectApi#postFlowsActionsCheckin) | **POST** /api/v2/flows/actions/checkin | Check-in flow
[**postFlowsActionsCheckout**](ArchitectApi#postFlowsActionsCheckout) | **POST** /api/v2/flows/actions/checkout | Check-out flow
[**postFlowsActionsDeactivate**](ArchitectApi#postFlowsActionsDeactivate) | **POST** /api/v2/flows/actions/deactivate | Deactivate flow
[**postFlowsActionsPublish**](ArchitectApi#postFlowsActionsPublish) | **POST** /api/v2/flows/actions/publish | Publish flow
[**postFlowsActionsRevert**](ArchitectApi#postFlowsActionsRevert) | **POST** /api/v2/flows/actions/revert | Revert flow
[**postFlowsActionsUnlock**](ArchitectApi#postFlowsActionsUnlock) | **POST** /api/v2/flows/actions/unlock | Unlock flow
[**postFlowsDatatableExportJobs**](ArchitectApi#postFlowsDatatableExportJobs) | **POST** /api/v2/flows/datatables/{datatableId}/export/jobs | Begin an export process for exporting all rows from a datatable
[**postFlowsDatatableImportJobs**](ArchitectApi#postFlowsDatatableImportJobs) | **POST** /api/v2/flows/datatables/{datatableId}/import/jobs | Begin an import process for importing rows into a datatable
[**postFlowsDatatableRows**](ArchitectApi#postFlowsDatatableRows) | **POST** /api/v2/flows/datatables/{datatableId}/rows | Create a new row entry for the datatable.
[**postFlowsDatatables**](ArchitectApi#postFlowsDatatables) | **POST** /api/v2/flows/datatables | Create a new datatable with the specified json-schema definition
[**postFlowsExecutions**](ArchitectApi#postFlowsExecutions) | **POST** /api/v2/flows/executions | Launch an instance of a flow definition, for flow types that support it such as the 'workflow' type.
[**postFlowsExportJobs**](ArchitectApi#postFlowsExportJobs) | **POST** /api/v2/flows/export/jobs | Register Architect Export Job
[**postFlowsInstancesJobs**](ArchitectApi#postFlowsInstancesJobs) | **POST** /api/v2/flows/instances/jobs | Start a process (job) that will prepare a list of execution data IDs for download.
[**postFlowsInstancesQuery**](ArchitectApi#postFlowsInstancesQuery) | **POST** /api/v2/flows/instances/query | Query the database of existing flow histories to look for particular flow criteria
[**postFlowsJobs**](ArchitectApi#postFlowsJobs) | **POST** /api/v2/flows/jobs | Register Architect Job. Returns a URL where a file, such as an Architect flow YAML file, can be PUT which will then initiate the job.
[**postFlowsMilestones**](ArchitectApi#postFlowsMilestones) | **POST** /api/v2/flows/milestones | Create a flow milestone
[**postFlowsOutcomes**](ArchitectApi#postFlowsOutcomes) | **POST** /api/v2/flows/outcomes | Create a flow outcome
[**putArchitectEmergencygroup**](ArchitectApi#putArchitectEmergencygroup) | **PUT** /api/v2/architect/emergencygroups/{emergencyGroupId} | Updates a emergency group by ID
[**putArchitectIvr**](ArchitectApi#putArchitectIvr) | **PUT** /api/v2/architect/ivrs/{ivrId} | Update an IVR Config.
[**putArchitectIvrIdentityresolution**](ArchitectApi#putArchitectIvrIdentityresolution) | **PUT** /api/v2/architect/ivrs/{ivrId}/identityresolution | Update an IVR IdentityResolutionConfig.
[**putArchitectPrompt**](ArchitectApi#putArchitectPrompt) | **PUT** /api/v2/architect/prompts/{promptId} | Update specified user prompt
[**putArchitectPromptResource**](ArchitectApi#putArchitectPromptResource) | **PUT** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Update specified user prompt resource
[**putArchitectSchedule**](ArchitectApi#putArchitectSchedule) | **PUT** /api/v2/architect/schedules/{scheduleId} | Update schedule by ID
[**putArchitectSchedulegroup**](ArchitectApi#putArchitectSchedulegroup) | **PUT** /api/v2/architect/schedulegroups/{scheduleGroupId} | Updates a schedule group by ID
[**putArchitectSystempromptResource**](ArchitectApi#putArchitectSystempromptResource) | **PUT** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Updates a system prompt resource override.
[**putFlow**](ArchitectApi#putFlow) | **PUT** /api/v2/flows/{flowId} | Update flow
[**putFlowInstancesSettingsLoglevels**](ArchitectApi#putFlowInstancesSettingsLoglevels) | **PUT** /api/v2/flows/{flowId}/instances/settings/loglevels | Edit the logLevel for a particular flow id
[**putFlowsDatatable**](ArchitectApi#putFlowsDatatable) | **PUT** /api/v2/flows/datatables/{datatableId} | Updates a specific datatable by id
[**putFlowsDatatableRow**](ArchitectApi#putFlowsDatatableRow) | **PUT** /api/v2/flows/datatables/{datatableId}/rows/{rowId} | Update a row entry
[**putFlowsInstancesSettingsLoglevelsDefault**](ArchitectApi#putFlowsInstancesSettingsLoglevelsDefault) | **PUT** /api/v2/flows/instances/settings/loglevels/default | Edit the flow default log level.
[**putFlowsMilestone**](ArchitectApi#putFlowsMilestone) | **PUT** /api/v2/flows/milestones/{milestoneId} | Updates a flow milestone
[**putFlowsOutcome**](ArchitectApi#putFlowsOutcome) | **PUT** /api/v2/flows/outcomes/{flowOutcomeId} | Updates a flow outcome



## deleteArchitectEmergencygroup

> void deleteArchitectEmergencygroup(emergencyGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectGrammar

> **Object** deleteArchitectGrammar(grammarId)


DELETE /api/v2/architect/grammars/{grammarId}

Delete a grammar.

Requires ALL permissions:

* architect:grammar:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteArchitectGrammarLanguage

> void deleteArchitectGrammarLanguage(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}

Delete specified grammar language

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectGrammarLanguageFilesDtmf

> void deleteArchitectGrammarLanguageFilesDtmf(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf

Clear the DTMF mode file for the grammar language if there is one

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectGrammarLanguageFilesVoice

> void deleteArchitectGrammarLanguageFilesVoice(grammarId, languageCode)


DELETE /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice

Clear the voice mode file for the grammar language if there is one

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectIvr

> void deleteArchitectIvr(ivrId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectPrompt

> void deleteArchitectPrompt(promptId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectPromptResource

> void deleteArchitectPromptResource(promptId, languageCode)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectPromptResourceAudio

> void deleteArchitectPromptResourceAudio(promptId, languageCode)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectPrompts

> Operation deleteArchitectPrompts(id)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## deleteArchitectSchedule

> void deleteArchitectSchedule(scheduleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectSchedulegroup

> void deleteArchitectSchedulegroup(scheduleGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteArchitectSystempromptResource

> void deleteArchitectSystempromptResource(promptId, languageCode)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteFlow

> void deleteFlow(flowId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteFlowInstancesSettingsLoglevels

> void deleteFlowInstancesSettingsLoglevels(flowId)


DELETE /api/v2/flows/{flowId}/instances/settings/loglevels

Deletes a log level for a flow by flow id.

Deletes the associated log level for a flow by flow id

Requires ALL permissions:

* architect:flowLogLevel:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | The flow id to delete the loglevel for

apiInstance.deleteFlowInstancesSettingsLoglevels(flowId)
  .then(() => {
    console.log('deleteFlowInstancesSettingsLoglevels returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlowInstancesSettingsLoglevels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | The flow id to delete the loglevel for |  |

### Return type

void (no response body)


## deleteFlows

> Operation deleteFlows(id)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## deleteFlowsDatatable

> void deleteFlowsDatatable(datatableId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteFlowsDatatableRow

> void deleteFlowsDatatableRow(datatableId, rowId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteFlowsInstancesSettingsLoglevelsDefault

> void deleteFlowsInstancesSettingsLoglevelsDefault()


DELETE /api/v2/flows/instances/settings/loglevels/default

Resets the org log level to default, base

Resets the org log level to default, base

Requires ANY permissions:

* architect:flowLogLevelDefault:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.deleteFlowsInstancesSettingsLoglevelsDefault()
  .then(() => {
    console.log('deleteFlowsInstancesSettingsLoglevelsDefault returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFlowsInstancesSettingsLoglevelsDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## deleteFlowsMilestone

> **Object** deleteFlowsMilestone(milestoneId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## getArchitectDependencytracking

> DependencyObjectEntityListing getArchitectDependencytracking(name, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumedResources** | **Boolean** | Include resources each result item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume each result item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |

### Return type

**DependencyObjectEntityListing**


## getArchitectDependencytrackingBuild

> DependencyStatus getArchitectDependencytrackingBuild()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getArchitectDependencytrackingConsumedresources

> ConsumedResourcesEntityListing getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **String** | Consuming object type.  Only versioned types are allowed here. | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **resourceType** | **[String]** | Types of consumed resources to show | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**ConsumedResourcesEntityListing**


## getArchitectDependencytrackingConsumingresources

> ConsumingResourcesEntityListing getArchitectDependencytrackingConsumingresources(id, objectType, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **String** | Consumed object type | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **resourceType** | **[String]** | Types of consuming resources to show.  Only versioned types are allowed here. | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **version** | **String** | Object version | [optional]  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **flowFilter** | **String** | Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |

### Return type

**ConsumingResourcesEntityListing**


## getArchitectDependencytrackingDeletedresourceconsumers

> DependencyObjectEntityListing getArchitectDependencytrackingDeletedresourceconsumers(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **flowFilter** | **String** | Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**DependencyObjectEntityListing**


## getArchitectDependencytrackingObject

> DependencyObject getArchitectDependencytrackingObject(id, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **String** | Object type | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumedResources** | **Boolean** | Include resources this item consumes | [optional]  |
 **consumingResources** | **Boolean** | Include resources that consume this item | [optional]  |
 **consumedResourceType** | **[String]** | Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumingResourceType** | **[String]** | Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumedResourceRequest** | **Boolean** | Indicate that this is going to look up a consumed resource object | [optional]  |

### Return type

**DependencyObject**


## getArchitectDependencytrackingType

> DependencyType getArchitectDependencytrackingType(typeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DependencyType**


## getArchitectDependencytrackingTypes

> DependencyTypeEntityListing getArchitectDependencytrackingTypes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DependencyTypeEntityListing**


## getArchitectDependencytrackingUpdatedresourceconsumers

> DependencyObjectEntityListing getArchitectDependencytrackingUpdatedresourceconsumers(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **objectType** | **[String]** | Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **consumedResources** | **Boolean** | Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | **[String]** | Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, AUDIOCONNECTORBOT, BOTCONNECTORBOT, BOTCONNECTORINTEGRATION, BOTFLOW, BRIDGEACTION, COMMONMODULEFLOW, COMPOSERSCRIPT, CONTACTLIST, CONVERSATIONCUSTOMATTRIBUTESCHEMA, DATAACTION, DATATABLE, DECISIONTABLE, DIALOGENGINEBOT, DIALOGENGINEBOTVERSION, DIALOGFLOWAGENT, DIALOGFLOWCXAGENT, DIGITALBOTCONNECTOR, DIGITALBOTCONNECTORINTEGRATION, DIGITALBOTFLOW, DIVISION, EMAILROUTE, EMERGENCYGROUP, FLOWACTION, FLOWDATATYPE, FLOWMILESTONE, FLOWOUTCOME, GRAMMAR, GROUP, GUIDE, GUIDEVERSION, IMAGE, INBOUNDCALLFLOW, INBOUNDCHATFLOW, INBOUNDEMAILFLOW, INBOUNDSHORTMESSAGEFLOW, INQUEUECALLFLOW, INQUEUEEMAILFLOW, INQUEUESHORTMESSAGEFLOW, IVRCONFIGURATION, KNOWLEDGEBASE, KNOWLEDGEBASEDOCUMENT, LANGUAGE, LEXBOT, LEXBOTALIAS, LEXV2BOT, LEXV2BOTALIAS, NLUDOMAIN, NUANCEMIXBOT, NUANCEMIXINTEGRATION, OAUTHCLIENT, OUTBOUNDCALLFLOW, QUEUE, RECORDINGPOLICY, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SMSPHONENUMBER, STTENGINE, SURVEYFORM, SURVEYINVITEFLOW, SYSTEMPROMPT, TTSENGINE, TTSVOICE, USER, USERPROMPT, UTILIZATIONLABEL, VOICEFLOW, VOICEMAILFLOW, VOICESURVEYFLOW, WIDGET, WORKFLOW, WORKITEMFLOW, WORKTYPE |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**DependencyObjectEntityListing**


## getArchitectEmergencygroup

> EmergencyGroup getArchitectEmergencygroup(emergencyGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyGroup**


## getArchitectEmergencygroups

> EmergencyGroupListing getArchitectEmergencygroups(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyGroupListing**


## getArchitectEmergencygroupsDivisionviews

> EmergencyGroupDivisionViewEntityListing getArchitectEmergencygroupsDivisionviews(opts)


GET /api/v2/architect/emergencygroups/divisionviews

Get a pageable list of basic emergency group objects filterable by query parameters.

This returns emergency groups consisting of name and division. If one or more IDs are specified, the search will fetch emergency groups that match the given ID(s) and not use any additional supplied query parameters in the search.

Requires ALL permissions:

* routing:emergencyGroup:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyGroupDivisionViewEntityListing**


## getArchitectGrammar

> Grammar getArchitectGrammar(grammarId, opts)


GET /api/v2/architect/grammars/{grammarId}

Get a grammar

Returns a specified grammar

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Grammar**


## getArchitectGrammarLanguage

> GrammarLanguage getArchitectGrammarLanguage(grammarId, languageCode)


GET /api/v2/architect/grammars/{grammarId}/languages/{languageCode}

Get a grammar language.

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GrammarLanguage**


## getArchitectGrammars

> GrammarListing getArchitectGrammars(opts)


GET /api/v2/architect/grammars

Get a pageable list of grammars, filtered by query parameters

Multiple IDs can be specified, in which case all matching grammars will be returned, and no other parameters will be evaluated.

Requires ALL permissions:

* architect:grammar:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GrammarListing**


## getArchitectIvr

> IVR getArchitectIvr(ivrId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IVR**


## getArchitectIvrIdentityresolution

> IdentityResolutionConfig getArchitectIvrIdentityresolution(ivrId)


GET /api/v2/architect/ivrs/{ivrId}/identityresolution

Get an IVR IdentityResolutionConfig.

Requires ALL permissions:

* routing:callRoute:view
* routing:identityResolution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let ivrId = "ivrId_example"; // String | IVR id

apiInstance.getArchitectIvrIdentityresolution(ivrId)
  .then((data) => {
    console.log(`getArchitectIvrIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getArchitectIvrIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |

### Return type

**IdentityResolutionConfig**


## getArchitectIvrs

> IVREntityListing getArchitectIvrs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "ASC", // String | Sort order
  'name': "name_example", // String | Name of the IVR to filter by.
  'dnis': "dnis_example", // String | The phone number of the IVR to filter by.
  'scheduleGroup': "scheduleGroup_example", // String | The Schedule Group of the IVR to filter by.
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: identityresolution |

### Return type

**IVREntityListing**


## getArchitectIvrsDivisionviews

> IVRDivisionViewEntityListing getArchitectIvrsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IVRDivisionViewEntityListing**


## getArchitectPrompt

> Prompt getArchitectPrompt(promptId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let opts = { 
  'includeMediaUris': true, // Boolean | Include the media URIs for each resource
  'includeResources': true, // Boolean | Include the resources for each system prompt
  'language': ["language_example"] // [String] | Filter the resources down to the provided languages
};

apiInstance.getArchitectPrompt(promptId, opts)
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
 **includeMediaUris** | **Boolean** | Include the media URIs for each resource | [optional] [default to true] |
 **includeResources** | **Boolean** | Include the resources for each system prompt | [optional] [default to true] |
 **language** | **[String]** | Filter the resources down to the provided languages | [optional]  |

### Return type

**Prompt**


## getArchitectPromptHistoryHistoryId

> HistoryListing getArchitectPromptHistoryHistoryId(promptId, historyId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**HistoryListing**


## getArchitectPromptResource

> PromptAsset getArchitectPromptResource(promptId, languageCode)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PromptAsset**


## getArchitectPromptResources

> PromptAssetEntityListing getArchitectPromptResources(promptId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PromptAssetEntityListing**


## getArchitectPrompts

> PromptEntityListing getArchitectPrompts(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': ["name_example"], // [String] | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'includeMediaUris': true, // Boolean | Include the media URIs for each resource
  'includeResources': true, // Boolean | Include the resources for each system prompt
  'language': ["language_example"] // [String] | Filter the resources down to the provided languages
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
 **includeMediaUris** | **Boolean** | Include the media URIs for each resource | [optional] [default to true] |
 **includeResources** | **Boolean** | Include the resources for each system prompt | [optional] [default to true] |
 **language** | **[String]** | Filter the resources down to the provided languages | [optional]  |

### Return type

**PromptEntityListing**


## getArchitectSchedule

> Schedule getArchitectSchedule(scheduleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Schedule**


## getArchitectSchedulegroup

> ScheduleGroup getArchitectSchedulegroup(scheduleGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGroup**


## getArchitectSchedulegroups

> ScheduleGroupEntityListing getArchitectSchedulegroups(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGroupEntityListing**


## getArchitectSchedulegroupsDivisionviews

> ScheduleGroupDivisionViewEntityListing getArchitectSchedulegroupsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGroupDivisionViewEntityListing**


## getArchitectSchedules

> ScheduleEntityListing getArchitectSchedules(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "name", // String | Sort by
  'sortOrder': "asc", // String | Sort order
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
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **name** | **String** | Name of the Schedule to filter by. | [optional]  |
 **divisionId** | **[String]** | List of divisionIds on which to filter. | [optional]  |

### Return type

**ScheduleEntityListing**


## getArchitectSchedulesDivisionviews

> ScheduleDivisionViewEntityListing getArchitectSchedulesDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleDivisionViewEntityListing**


## getArchitectSystemprompt

> SystemPrompt getArchitectSystemprompt(promptId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | promptId
let opts = { 
  'includeMediaUris': true, // Boolean | Include the media URIs for each resource
  'includeResources': true, // Boolean | Include the resources for each system prompt
  'language': ["language_example"] // [String] | Filter the resources down to the provided languages
};

apiInstance.getArchitectSystemprompt(promptId, opts)
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
 **includeMediaUris** | **Boolean** | Include the media URIs for each resource | [optional] [default to true] |
 **includeResources** | **Boolean** | Include the resources for each system prompt | [optional] [default to true] |
 **language** | **[String]** | Filter the resources down to the provided languages | [optional]  |

### Return type

**SystemPrompt**


## getArchitectSystempromptHistoryHistoryId

> HistoryListing getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**HistoryListing**


## getArchitectSystempromptResource

> SystemPromptAsset getArchitectSystempromptResource(promptId, languageCode)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SystemPromptAsset**


## getArchitectSystempromptResources

> SystemPromptAssetEntityListing getArchitectSystempromptResources(promptId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SystemPromptAssetEntityListing**


## getArchitectSystemprompts

> SystemPromptEntityListing getArchitectSystemprompts(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'includeMediaUris': true, // Boolean | Include the media URIs for each resource
  'includeResources': true, // Boolean | Include the resources for each system prompt
  'language': ["language_example"] // [String] | Filter the resources down to the provided languages
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
 **includeMediaUris** | **Boolean** | Include the media URIs for each resource | [optional] [default to true] |
 **includeResources** | **Boolean** | Include the resources for each system prompt | [optional] [default to true] |
 **language** | **[String]** | Filter the resources down to the provided languages | [optional]  |

### Return type

**SystemPromptEntityListing**


## getFlow

> Flow getFlow(flowId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## getFlowHistoryHistoryId

> HistoryListing getFlowHistoryHistoryId(flowId, historyId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**HistoryListing**


## getFlowInstancesSettingsLoglevels

> FlowSettingsResponse getFlowInstancesSettingsLoglevels(flowId, opts)


GET /api/v2/flows/{flowId}/instances/settings/loglevels

Retrieves the log level for a flow by flow id.

Retrieves the log level for a flow by flow id.

Requires ALL permissions:

* architect:flowLogLevel:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | The flow id to get the loglevel for
let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the result
};

apiInstance.getFlowInstancesSettingsLoglevels(flowId, opts)
  .then((data) => {
    console.log(`getFlowInstancesSettingsLoglevels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowInstancesSettingsLoglevels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | The flow id to get the loglevel for |  |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: name, type, logLevelCharacteristics.characteristics |

### Return type

**FlowSettingsResponse**


## getFlowLatestconfiguration

> **Object** getFlowLatestconfiguration(flowId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## getFlowVersion

> FlowVersion getFlowVersion(flowId, versionId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowVersion**


## getFlowVersionConfiguration

> **Object** getFlowVersionConfiguration(flowId, versionId, opts)


GET /api/v2/flows/{flowId}/versions/{versionId}/configuration

Get flow version configuration

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## getFlowVersionHealth

> FlowHealth getFlowVersionHealth(flowId, versionId, opts)


GET /api/v2/flows/{flowId}/versions/{versionId}/health

Get overall health scores for all intents present in the NLU domain version associated with the bot flow version.

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID.
let versionId = "versionId_example"; // String | Version ID.
let opts = { 
  'language': "language_example" // String | Language to filter for
};

apiInstance.getFlowVersionHealth(flowId, versionId, opts)
  .then((data) => {
    console.log(`getFlowVersionHealth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersionHealth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID. |  |
 **versionId** | **String** | Version ID. |  |
 **language** | **String** | Language to filter for | [optional] <br />**Values**: en-us, en-gb, en-au, en-za, en-nz, en-ie, fr-ca, fr-fr, es-us, es-es, es-mx, de-de, it-it, pt-br, pt-pt, nl-nl |

### Return type

**FlowHealth**


## getFlowVersionIntentHealth

> FlowHealthIntent getFlowVersionIntentHealth(flowId, versionId, intentId, language)


GET /api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/health

Get health scores and other health metrics for a specific intent. This includes the health metrics for each utterance in an intent.

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID.
let versionId = "versionId_example"; // String | Version ID.
let intentId = "intentId_example"; // String | Intent ID.
let language = "language_example"; // String | Language to filter for

apiInstance.getFlowVersionIntentHealth(flowId, versionId, intentId, language)
  .then((data) => {
    console.log(`getFlowVersionIntentHealth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersionIntentHealth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID. |  |
 **versionId** | **String** | Version ID. |  |
 **intentId** | **String** | Intent ID. |  |
 **language** | **String** | Language to filter for | <br />**Values**: en-us, en-gb, en-au, en-za, en-nz, en-ie, fr-ca, fr-fr, es-us, es-es, es-mx, de-de, it-it, pt-br, pt-pt, nl-nl |

### Return type

**FlowHealthIntent**


## getFlowVersionIntentUtteranceHealth

> FlowHealthUtterance getFlowVersionIntentUtteranceHealth(flowId, versionId, intentId, utteranceId, language)


GET /api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/utterances/{utteranceId}/health

Get health metrics associated with a specific utterance of an intent.

Requires ANY permissions:

* architect:flow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | Flow ID.
let versionId = "versionId_example"; // String | Version ID.
let intentId = "intentId_example"; // String | Intent ID.
let utteranceId = "utteranceId_example"; // String | Utterance ID.
let language = "language_example"; // String | Language to filter for

apiInstance.getFlowVersionIntentUtteranceHealth(flowId, versionId, intentId, utteranceId, language)
  .then((data) => {
    console.log(`getFlowVersionIntentUtteranceHealth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowVersionIntentUtteranceHealth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID. |  |
 **versionId** | **String** | Version ID. |  |
 **intentId** | **String** | Intent ID. |  |
 **utteranceId** | **String** | Utterance ID. |  |
 **language** | **String** | Language to filter for | <br />**Values**: en-us, en-gb, en-au, en-za, en-nz, en-ie, fr-ca, fr-fr, es-us, es-es, es-mx, de-de, it-it, pt-br, pt-pt, nl-nl |

### Return type

**FlowHealthUtterance**


## getFlowVersions

> FlowVersionEntityListing getFlowVersions(flowId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowVersionEntityListing**


## getFlows

> FlowEntityListing getFlows(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
  'virtualAgentEnabled': true, // Boolean | Include/exclude virtual agent flows
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
 **type** | **[String]** | Type | [optional] <br />**Values**: bot, commonmodule, digitalbot, inboundcall, inboundchat, inboundemail, inboundshortmessage, outboundcall, inqueuecall, inqueueemail, inqueueshortmessage, speech, securecall, surveyinvite, voice, voicemail, voicesurvey, workflow, workitem |
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
 **virtualAgentEnabled** | **Boolean** | Include/exclude virtual agent flows | [optional]  |
 **publishedAfter** | **String** | Published after | [optional]  |
 **publishedBefore** | **String** | Published before | [optional]  |
 **divisionId** | **[String]** | division ID(s) | [optional]  |

### Return type

**FlowEntityListing**


## getFlowsDatatable

> DataTable getFlowsDatatable(datatableId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTable**


## getFlowsDatatableExportJob

> DataTableExportJob getFlowsDatatableExportJob(datatableId, exportJobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableExportJob**


## getFlowsDatatableImportJob

> DataTableImportJob getFlowsDatatableImportJob(datatableId, importJobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableImportJob**


## getFlowsDatatableImportJobs

> DataTableImportEntityListing getFlowsDatatableImportJobs(datatableId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableImportEntityListing**


## getFlowsDatatableRow

> **{&#39;String&#39;: Object}** getFlowsDatatableRow(datatableId, rowId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**{&#39;String&#39;: Object}**


## getFlowsDatatableRows

> DataTableRowEntityListing getFlowsDatatableRows(datatableId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableRowEntityListing**


## getFlowsDatatables

> DataTablesDomainEntityListing getFlowsDatatables(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTablesDomainEntityListing**


## getFlowsDatatablesDivisionview

> DataTable getFlowsDatatablesDivisionview(datatableId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTable**


## getFlowsDatatablesDivisionviews

> DataTablesDomainEntityListing getFlowsDatatablesDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTablesDomainEntityListing**


## getFlowsDivisionviews

> FlowDivisionViewEntityListing getFlowsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **type** | **[String]** | Type | [optional] <br />**Values**: bot, commonmodule, digitalbot, inboundcall, inboundchat, inboundemail, inboundshortmessage, outboundcall, inqueuecall, inqueueemail, inqueueshortmessage, speech, securecall, surveyinvite, voice, voicemail, voicesurvey, workflow, workitem |
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

### Return type

**FlowDivisionViewEntityListing**


## getFlowsExecution

> FlowRuntimeExecution getFlowsExecution(flowExecutionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowRuntimeExecution**


## getFlowsExportJob

> ArchitectExportJobStateResponse getFlowsExportJob(jobId, opts)


GET /api/v2/flows/export/jobs/{jobId}

Fetch Architect Export Job Status

Requires ALL permissions:

* architect:jobExport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let jobId = "jobId_example"; // String | Job ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getFlowsExportJob(jobId, opts)
  .then((data) => {
    console.log(`getFlowsExportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsExportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: messages |

### Return type

**ArchitectExportJobStateResponse**


## getFlowsInstance

> GetFlowExecutionDataJobResult getFlowsInstance(instanceId, opts)


GET /api/v2/flows/instances/{instanceId}

Start a process (job) to prepare a download of a singular flow execution data instance by Id

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **String** | Expand various details. | [optional] <br />**Values**: bots, dataActions |

### Return type

**GetFlowExecutionDataJobResult**


## getFlowsInstancesJob

> GetFlowExecutionDataJobResult getFlowsInstancesJob(jobId)


GET /api/v2/flows/instances/jobs/{jobId}

Get the status and/or results of an asynchronous flow execution data retrieval job

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GetFlowExecutionDataJobResult**


## getFlowsInstancesQuerycapabilities

> FlowsQueryCriteriaResponse getFlowsInstancesQuerycapabilities(opts)


GET /api/v2/flows/instances/querycapabilities

Retrieve a list of capabilities that the org can use to query for execution data

Returns the queryable parameters that can be used to build a query for execution data.

Requires ANY permissions:

* architect:flowInstance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowsQueryCriteriaResponse**


## getFlowsInstancesSettingsExecutiondata

> ExecutionDataFlowSettingsResponse getFlowsInstancesSettingsExecutiondata()


GET /api/v2/flows/instances/settings/executiondata

Get the execution history enabled setting.

Get the execution history enabled setting.

Requires ANY permissions:

* architect:flowinstanceexecutiondata:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.getFlowsInstancesSettingsExecutiondata()
  .then((data) => {
    console.log(`getFlowsInstancesSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ExecutionDataFlowSettingsResponse**


## getFlowsInstancesSettingsLoglevels

> FlowSettingsResponseEntityListing getFlowsInstancesSettingsLoglevels(opts)


GET /api/v2/flows/instances/settings/loglevels

Retrieve a list of LogLevels for the organization.

Returns a paged set of LogLevels per flow id

Requires ALL permissions:

* architect:flowLogLevel:view
* architect:flow:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'expand': ["expand_example"], // [String] | Expand instructions for the result
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Number of entities to return. Maximum of 200.
};

apiInstance.getFlowsInstancesSettingsLoglevels(opts)
  .then((data) => {
    console.log(`getFlowsInstancesSettingsLoglevels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesSettingsLoglevels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: name, type, logLevelCharacteristics.characteristics |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Number of entities to return. Maximum of 200. | [optional] [default to 25] |

### Return type

**FlowSettingsResponseEntityListing**


## getFlowsInstancesSettingsLoglevelsCharacteristics

> FlowLogLevelCharacteristicsDefinitions getFlowsInstancesSettingsLoglevelsCharacteristics()


GET /api/v2/flows/instances/settings/loglevels/characteristics

Gets the available flow log level characteristics for this organization.

Log levels can be customized and this returns the set of available characteristics that can be enabled/disabled.

Requires ANY permissions:

* architect:flowLogLevel:view
* architect:flowLogLevelDefault:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

apiInstance.getFlowsInstancesSettingsLoglevelsCharacteristics()
  .then((data) => {
    console.log(`getFlowsInstancesSettingsLoglevelsCharacteristics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesSettingsLoglevelsCharacteristics');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**FlowLogLevelCharacteristicsDefinitions**


## getFlowsInstancesSettingsLoglevelsDefault

> FlowSettingsResponse getFlowsInstancesSettingsLoglevelsDefault(opts)


GET /api/v2/flows/instances/settings/loglevels/default

Returns the flow default log level.

Returns the flow default log level which will be used if no specific flow id log level is found.

Requires ANY permissions:

* architect:flowLogLevelDefault:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the result
};

apiInstance.getFlowsInstancesSettingsLoglevelsDefault(opts)
  .then((data) => {
    console.log(`getFlowsInstancesSettingsLoglevelsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFlowsInstancesSettingsLoglevelsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: logLevelCharacteristics.characteristics |

### Return type

**FlowSettingsResponse**


## getFlowsJob

> ArchitectJobStateResponse getFlowsJob(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ArchitectJobStateResponse**


## getFlowsMilestone

> FlowMilestone getFlowsMilestone(milestoneId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowMilestone**


## getFlowsMilestones

> FlowMilestoneListing getFlowsMilestones(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowMilestoneListing**


## getFlowsMilestonesDivisionviews

> FlowMilestoneDivisionViewEntityListing getFlowsMilestonesDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowMilestoneDivisionViewEntityListing**


## getFlowsOutcome

> FlowOutcome getFlowsOutcome(flowOutcomeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowOutcome**


## getFlowsOutcomes

> FlowOutcomeListing getFlowsOutcomes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowOutcomeListing**


## getFlowsOutcomesDivisionviews

> FlowOutcomeDivisionViewEntityListing getFlowsOutcomesDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowOutcomeDivisionViewEntityListing**


## patchArchitectGrammar

> Grammar patchArchitectGrammar(grammarId, opts)


PATCH /api/v2/architect/grammars/{grammarId}

Updates a grammar

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Grammar**


## patchArchitectGrammarLanguage

> GrammarLanguage patchArchitectGrammarLanguage(grammarId, languageCode, opts)


PATCH /api/v2/architect/grammars/{grammarId}/languages/{languageCode}

Updates a grammar language

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let grammarId = "grammarId_example"; // String | Grammar ID
let languageCode = "languageCode_example"; // String | Language
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchArchitectGrammarLanguage(grammarId, languageCode, opts)
  .then((data) => {
    console.log(`patchArchitectGrammarLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchArchitectGrammarLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **grammarId** | **String** | Grammar ID |  |
 **languageCode** | **String** | Language |  |
 **body** | **Object** |  | [optional]  |

### Return type

**GrammarLanguage**


## patchFlowsInstancesSettingsExecutiondata

> ExecutionDataFlowSettingsResponse patchFlowsInstancesSettingsExecutiondata(body)


PATCH /api/v2/flows/instances/settings/executiondata

Edit the execution history enabled setting.

Edit the execution history enabled setting.

Requires ANY permissions:

* architect:flowinstanceexecutiondata:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | New Execution Data Setting

apiInstance.patchFlowsInstancesSettingsExecutiondata(body)
  .then((data) => {
    console.log(`patchFlowsInstancesSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchFlowsInstancesSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | New Execution Data Setting |  |

### Return type

**ExecutionDataFlowSettingsResponse**


## postArchitectDependencytrackingBuild

> void postArchitectDependencytrackingBuild()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## postArchitectEmergencygroups

> EmergencyGroup postArchitectEmergencygroups(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyGroup**


## postArchitectGrammarLanguageFilesDtmf

> UploadUrlResponse postArchitectGrammarLanguageFilesDtmf(grammarId, languageCode, body)


POST /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf

Creates a presigned URL for uploading a grammar DTMF mode file

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UploadUrlResponse**


## postArchitectGrammarLanguageFilesVoice

> UploadUrlResponse postArchitectGrammarLanguageFilesVoice(grammarId, languageCode, body)


POST /api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice

Creates a presigned URL for uploading a grammar voice mode file

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UploadUrlResponse**


## postArchitectGrammarLanguages

> GrammarLanguage postArchitectGrammarLanguages(grammarId, body)


POST /api/v2/architect/grammars/{grammarId}/languages

Create a new language for a given grammar

Requires ALL permissions:

* architect:grammar:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**GrammarLanguage**


## postArchitectGrammars

> Grammar postArchitectGrammars(body)


POST /api/v2/architect/grammars

Create a new grammar

Requires ALL permissions:

* architect:grammar:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Grammar**


## postArchitectIvrs

> IVR postArchitectIvrs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IVR**


## postArchitectPromptHistory

> Operation postArchitectPromptHistory(promptId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## postArchitectPromptResourceUploads

> PromptAssetUpload postArchitectPromptResourceUploads(promptId, languageCode)


POST /api/v2/architect/prompts/{promptId}/resources/{languageCode}/uploads

Creates a presigned URL for uploading a user prompt file

postArchitectPromptResourceUploads is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:userPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.postArchitectPromptResourceUploads(promptId, languageCode)
  .then((data) => {
    console.log(`postArchitectPromptResourceUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectPromptResourceUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |

### Return type

**PromptAssetUpload**


## postArchitectPromptResources

> PromptAsset postArchitectPromptResources(promptId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PromptAsset**


## postArchitectPrompts

> Prompt postArchitectPrompts(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Prompt**


## postArchitectSchedulegroups

> ScheduleGroup postArchitectSchedulegroups(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGroup**


## postArchitectSchedules

> Schedule postArchitectSchedules(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Schedule**


## postArchitectSystempromptHistory

> Operation postArchitectSystempromptHistory(promptId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## postArchitectSystempromptResourceUploads

> PromptAssetUpload postArchitectSystempromptResourceUploads(promptId, languageCode)


POST /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}/uploads

Creates a presigned URL for uploading a system prompt file

postArchitectSystempromptResourceUploads is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* architect:systemPrompt:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let promptId = "promptId_example"; // String | Prompt ID
let languageCode = "languageCode_example"; // String | Language

apiInstance.postArchitectSystempromptResourceUploads(promptId, languageCode)
  .then((data) => {
    console.log(`postArchitectSystempromptResourceUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postArchitectSystempromptResourceUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String** | Prompt ID |  |
 **languageCode** | **String** | Language |  |

### Return type

**PromptAssetUpload**


## postArchitectSystempromptResources

> SystemPromptAsset postArchitectSystempromptResources(promptId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SystemPromptAsset**


## postFlowHistory

> Operation postFlowHistory(flowId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## postFlowInstancesSettingsLoglevels

> FlowSettingsResponse postFlowInstancesSettingsLoglevels(flowId, body, opts)


POST /api/v2/flows/{flowId}/instances/settings/loglevels

Set the logLevel for a particular flow id

Assigns a new loglevel to a flow id

Requires ALL permissions:

* architect:flowLogLevel:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | The flow id to set the loglevel for
let body = {}; // Object | New LogLevel settings
let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the result
};

apiInstance.postFlowInstancesSettingsLoglevels(flowId, body, opts)
  .then((data) => {
    console.log(`postFlowInstancesSettingsLoglevels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowInstancesSettingsLoglevels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | The flow id to set the loglevel for |  |
 **body** | **Object** | New LogLevel settings |  |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: name, type, logLevelCharacteristics.characteristics |

### Return type

**FlowSettingsResponse**


## postFlowVersions

> FlowVersion postFlowVersions(flowId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowVersion**


## postFlows

> Flow postFlows(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## postFlowsActionsCheckin

> Operation postFlowsActionsCheckin(flow)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## postFlowsActionsCheckout

> Flow postFlowsActionsCheckout(flow)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## postFlowsActionsDeactivate

> Flow postFlowsActionsDeactivate(flow)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## postFlowsActionsPublish

> Operation postFlowsActionsPublish(flow, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


## postFlowsActionsRevert

> Flow postFlowsActionsRevert(flow)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## postFlowsActionsUnlock

> Flow postFlowsActionsUnlock(flow)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## postFlowsDatatableExportJobs

> DataTableExportJob postFlowsDatatableExportJobs(datatableId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableExportJob**


## postFlowsDatatableImportJobs

> DataTableImportJob postFlowsDatatableImportJobs(datatableId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTableImportJob**


## postFlowsDatatableRows

> **{&#39;String&#39;: Object}** postFlowsDatatableRows(datatableId, dataTableRow)


POST /api/v2/flows/datatables/{datatableId}/rows

Create a new row entry for the datatable.

Will add the passed in row entry to the datatable with the given datatableId after verifying it against the schema.  When building the request body within API Explorer, Pro mode should be used. The DataTableRow should be a json-ized stream of key -> value pairs {      "Field1": "XYZZY",      "Field2": false,      "KEY": "27272"  }

Requires ANY permissions:

* architect:datatable:add
* architect:datatableRow:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**{&#39;String&#39;: Object}**


## postFlowsDatatables

> DataTable postFlowsDatatables(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTable**


## postFlowsExecutions

> FlowExecutionLaunchResponse postFlowsExecutions(flowLaunchRequest)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowExecutionLaunchResponse**


## postFlowsExportJobs

> RegisterArchitectExportJobResponse postFlowsExportJobs(body)


POST /api/v2/flows/export/jobs

Register Architect Export Job

Requires ALL permissions:

* architect:jobExport:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | 

apiInstance.postFlowsExportJobs(body)
  .then((data) => {
    console.log(`postFlowsExportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postFlowsExportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**RegisterArchitectExportJobResponse**


## postFlowsInstancesJobs

> GetFlowExecutionDataJobResult postFlowsInstancesJobs(body, opts)


POST /api/v2/flows/instances/jobs

Start a process (job) that will prepare a list of execution data IDs for download.

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

Requires ANY permissions:

* architect:flowInstance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **String** | Expand various query types. | [optional] <br />**Values**: bots, dataActions |

### Return type

**GetFlowExecutionDataJobResult**


## postFlowsInstancesQuery

> FlowResultEntityListing postFlowsInstancesQuery(body, opts)


POST /api/v2/flows/instances/query

Query the database of existing flow histories to look for particular flow criteria

Returns a list of matching flow histories up to 200 max.

Requires ANY permissions:

* architect:flowInstance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | query
let opts = { 
  'indexOnly': true, // Boolean | indexes only
  'pageSize': 50 // Number | number of results to return
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
 **pageSize** | **Number** | number of results to return | [optional] [default to 50] |

### Return type

**FlowResultEntityListing**


## postFlowsJobs

> RegisterArchitectJobResponse postFlowsJobs()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## postFlowsMilestones

> FlowMilestone postFlowsMilestones(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowMilestone**


## postFlowsOutcomes

> FlowOutcome postFlowsOutcomes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowOutcome**


## putArchitectEmergencygroup

> EmergencyGroup putArchitectEmergencygroup(emergencyGroupId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyGroup**


## putArchitectIvr

> IVR putArchitectIvr(ivrId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IVR**


## putArchitectIvrIdentityresolution

> IdentityResolutionConfig putArchitectIvrIdentityresolution(ivrId, body)


PUT /api/v2/architect/ivrs/{ivrId}/identityresolution

Update an IVR IdentityResolutionConfig.

Requires ALL permissions:

* routing:callRoute:edit
* routing:identityResolution:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let ivrId = "ivrId_example"; // String | IVR id
let body = {}; // Object | 

apiInstance.putArchitectIvrIdentityresolution(ivrId, body)
  .then((data) => {
    console.log(`putArchitectIvrIdentityresolution success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putArchitectIvrIdentityresolution');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ivrId** | **String** | IVR id |  |
 **body** | **Object** |  |  |

### Return type

**IdentityResolutionConfig**


## putArchitectPrompt

> Prompt putArchitectPrompt(promptId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Prompt**


## putArchitectPromptResource

> PromptAsset putArchitectPromptResource(promptId, languageCode, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PromptAsset**


## putArchitectSchedule

> Schedule putArchitectSchedule(scheduleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Schedule**


## putArchitectSchedulegroup

> ScheduleGroup putArchitectSchedulegroup(scheduleGroupId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGroup**


## putArchitectSystempromptResource

> SystemPromptAsset putArchitectSystempromptResource(promptId, languageCode, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SystemPromptAsset**


## putFlow

> Flow putFlow(flowId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Flow**


## putFlowInstancesSettingsLoglevels

> FlowSettingsResponse putFlowInstancesSettingsLoglevels(flowId, body, opts)


PUT /api/v2/flows/{flowId}/instances/settings/loglevels

Edit the logLevel for a particular flow id

Updates the loglevel for a flow id

Requires ALL permissions:

* architect:flowLogLevel:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let flowId = "flowId_example"; // String | The flow id to edit the loglevel for
let body = {}; // Object | New LogLevel settings
let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the result
};

apiInstance.putFlowInstancesSettingsLoglevels(flowId, body, opts)
  .then((data) => {
    console.log(`putFlowInstancesSettingsLoglevels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowInstancesSettingsLoglevels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | The flow id to edit the loglevel for |  |
 **body** | **Object** | New LogLevel settings |  |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: name, type, logLevelCharacteristics.characteristics |

### Return type

**FlowSettingsResponse**


## putFlowsDatatable

> DataTable putFlowsDatatable(datatableId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataTable**


## putFlowsDatatableRow

> **{&#39;String&#39;: Object}** putFlowsDatatableRow(datatableId, rowId, opts)


PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}

Update a row entry

Updates a row with the given rowId (the value of the key field) to the new values.  When building the request body within API Explorer, Pro mode should be used. The DataTableRow should be a json-ized stream of key -> value pairs {     "Field1": "XYZZY",     "Field2": false,     "KEY": "27272" }

Requires ANY permissions:

* architect:datatable:edit
* architect:datatableRow:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**{&#39;String&#39;: Object}**


## putFlowsInstancesSettingsLoglevelsDefault

> FlowSettingsResponse putFlowsInstancesSettingsLoglevelsDefault(body, opts)


PUT /api/v2/flows/instances/settings/loglevels/default

Edit the flow default log level.

Edit the flow default log level.

Requires ANY permissions:

* architect:flowLogLevelDefault:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ArchitectApi();

let body = {}; // Object | New LogLevel settings
let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the result
};

apiInstance.putFlowsInstancesSettingsLoglevelsDefault(body, opts)
  .then((data) => {
    console.log(`putFlowsInstancesSettingsLoglevelsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFlowsInstancesSettingsLoglevelsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | New LogLevel settings |  |
 **expand** | **[String]** | Expand instructions for the result | [optional] <br />**Values**: logLevelCharacteristics.characteristics |

### Return type

**FlowSettingsResponse**


## putFlowsMilestone

> FlowMilestone putFlowsMilestone(milestoneId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**FlowMilestone**


## putFlowsOutcome

> Operation putFlowsOutcome(flowOutcomeId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Operation**


_purecloud-platform-client-v2@229.1.0_
