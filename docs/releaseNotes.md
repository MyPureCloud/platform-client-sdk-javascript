Platform API version: 9904




# Major Changes (11 changes)

**POST /api/v2/analytics/agents/status/counts** (1 change)

* Parameter groupBy was added

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Parameter sortOrder was added

**GET /api/v2/socialmedia/topics** (1 change)

* Parameter ids was added

**ContractDefinition** (1 change)

* Model ContractDefinition was removed

**ContractItems** (1 change)

* Model ContractItems was removed

**ContractJsonSchema** (1 change)

* Model ContractJsonSchema was removed

**ContractPropertyDefinition** (1 change)

* Model ContractPropertyDefinition was removed

**DecisionTableContract** (3 changes)

* Property rowAuthoringSchema was changed from ContractJsonSchema to JsonSchemaDocument
* Property executionInputSchema was changed from ContractJsonSchema to JsonSchemaDocument
* Property executionOutputSchema was changed from ContractJsonSchema to JsonSchemaDocument

**Phrase** (1 change)

* Property isAIGenerated was removed


# Minor Changes (175 changes)

**/api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/categories** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/intents/categories/{categoryId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/intents/assignments/externalcontacts/{externalContactId}/customerintents/{customerIntentId}/assignment** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/assignments/externalcontacts/{externalContactId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/intents/customerintents/{customerIntentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/customerintents** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/intents/customerintents/{customerIntentId}/sourceintents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/intents/sourceintents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/quality/programs/{programId}/agentscoringrules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/unavailabletimes/settings/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/unavailabletimes/schedules/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/unavailabletimes/settings** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/agents/{agentId}/unavailabletimes/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/unavailabletimes/validation/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/unavailabletimes/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/unavailabletimes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/unavailabletimes/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/unavailabletimes/validation/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsAgentStateAgentResponse** (6 changes)

* Optional property systemPresence was added
* Optional property organizationPresenceId was added
* Optional property presenceDate was added
* Optional property routingStatus was added
* Optional property routingStatusDate was added
* Optional property isOutOfOffice was added

**AnalyticsAgentStateCountsResponse** (3 changes)

* Optional property presenceCounts was added
* Optional property routingStatusCounts was added
* Optional property isOutOfOfficeCounts was added

**ConversationAggregationQuery** (1 change)

* Enum value tSnippetRecord was added to property metrics

**ConversationAggregationSort** (1 change)

* Enum value tSnippetRecord was added to property name

**ConversationAggregationView** (1 change)

* Enum value tSnippetRecord was added to property target

**AnalyticsSession** (1 change)

* Optional property snippetRecording was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value tSnippetRecord was added to property metric

**SegmentDetailQueryPredicate** (1 change)

* Enum value snippetRecording was added to property dimension

**ReportingTurn** (1 change)

* conversation is no longer readonly

**ReportingTurnAction** (1 change)

* Enum value SendRichLinkAction was added to property actionType

**BotFlowSession** (1 change)

* conversation is no longer readonly

**Limit** (2 changes)

* Enum value copilot was added to property namespace
* Enum value workforce.management.self.schedule was added to property namespace

**KnowledgeBaseWithDialectReference** (3 changes)

* Enum value th-TH was added to property languageCode
* Enum value pl-PL was added to property languageCode
* Enum value nl-BE was added to property languageCode

**AssistantQueueUsersJobErrorInfo** (1 change)

* Model was added

**AssistantQueueUsersJobsResponse** (1 change)

* Model was added

**AssistantQueueUsersJobsRequest** (1 change)

* Model was added

**CaseReference** (1 change)

* Model was added

**ConversationAssociation** (1 change)

* Enum value SCREEN_MONITORING was added to property mediaType

**SegmentAssignment** (1 change)

* externalContact is no longer readonly

**ConversationUserDisposition** (1 change)

* user is no longer readonly

**Evaluation** (1 change)

* Enum value SCREEN_MONITORING was added to property mediaType

**Participant** (1 change)

* Optional property screenMonitorings was added

**ScreenMonitoring** (1 change)

* Model was added

**ConversationSessionSummary** (3 changes)

* id is no longer readonly
* confidence is no longer readonly
* communication is no longer readonly

**ConversationSummary** (2 changes)

* id is no longer readonly
* confidence is no longer readonly

**ConversationSummaryFollowup** (1 change)

* confidence is no longer readonly

**ConversationSummaryReason** (1 change)

* confidence is no longer readonly

**ConversationSummaryResolution** (2 changes)

* confidence is no longer readonly
* outcome is no longer readonly

**ConversationSummaryWrapupCode** (2 changes)

* id is no longer readonly
* confidence is no longer readonly

**ParticipantBasic** (1 change)

* Optional property screenMonitorings was added

**IntentsCategory** (1 change)

* Model was added

**IntentsCategoryListing** (1 change)

* Model was added

**IntentsCategoryPatch** (1 change)

* Model was added

**CustomerIntentAssignmentResponse** (1 change)

* Model was added

**CustomerIntentAssignmentRequest** (1 change)

* Model was added

**CustomerIntentAssignmentListing** (1 change)

* Model was added

**CustomerIntentResponse** (1 change)

* Model was added

**CustomerIntentPatch** (1 change)

* Model was added

**BulkResults** (1 change)

* Model was added

**BulkSourceIntentsResponse** (1 change)

* Model was added

**BulkRemoveSourceIntentsRequest** (1 change)

* Model was added

**BulkAddSourceIntentsRequest** (1 change)

* Model was added

**SourceIntent** (1 change)

* Model was added

**CustomerIntentListing** (1 change)

* Model was added

**CustomerIntent** (1 change)

* Model was added

**CustomerSourceIntent** (1 change)

* Model was added

**CustomerSourceIntentListing** (1 change)

* Model was added

**FlowPathsElement** (2 changes)

* flowMilestone is no longer readonly
* flowOutcome is no longer readonly

**FlowPathsFlowDetails** (1 change)

* flow is no longer readonly

**ApprovalNamespace** (2 changes)

* Enum value copilot was added to property namespace
* Enum value workforce.management.self.schedule was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value copilot was added to property namespace
* Enum value workforce.management.self.schedule was added to property namespace

**StatusChange** (2 changes)

* Enum value copilot was added to property namespace
* Enum value workforce.management.self.schedule was added to property namespace

**AgentScoringRule** (1 change)

* Model was added

**AgentScoringRuleEntityListing** (1 change)

* Model was added

**EvaluationResponse** (2 changes)

* calibration is no longer readonly
* Enum value SCREEN_MONITORING was added to property mediaType

**RecordingMessagingMessage** (1 change)

* Enum value RichLink was added to property contentType

**RecordingTemplateCard** (1 change)

* Model was added

**RecordingTemplateCarousel** (1 change)

* Model was added

**RichLink** (1 change)

* Model was added

**RichLinkHeader** (1 change)

* Model was added

**Input** (2 changes)

* Optional property keyboardType was added
* Optional property autoCompleteType was added

**GeneralProgramJobRequest** (2 changes)

* Enum value tr-TR was added to property dialect
* Enum value zu-ZA was added to property dialect

**Dependency** (4 changes)

* Enum value DIGITALAUDIO was added to property type
* Enum value FILE was added to property type
* Enum value RESPONSEASSET was added to property type
* Enum value VIDEO was added to property type

**DependencyObject** (4 changes)

* Enum value DIGITALAUDIO was added to property type
* Enum value FILE was added to property type
* Enum value RESPONSEASSET was added to property type
* Enum value VIDEO was added to property type

**QueryAvailabilityManagementUnitsSettingsResponse** (1 change)

* Model was added

**UnavailableTimesManagementUnitSettings** (1 change)

* Model was added

**QueryAvailabilityManagementUnitsSettingsRequest** (1 change)

* Model was added

**AgentScheduleUnavailableTime** (1 change)

* Model was added

**QueryAgentScheduleUnavailableTimesResponse** (1 change)

* Model was added

**UnavailableTimesTimeSpan** (1 change)

* Model was added

**QueryAgentScheduleUnavailableTimesRequest** (1 change)

* Model was added

**ManagementUnitAvailabilitySettingsResponse** (1 change)

* Model was added

**UpdateManagementUnitsSettingsRequest** (1 change)

* Model was added

**UnavailableTime** (1 change)

* Model was added

**UnavailableTimeListing** (1 change)

* Model was added

**QueryAgentUnavailableTimesRequest** (1 change)

* Model was added

**UnavailableTimesValidationResult** (1 change)

* Model was added

**UnavailableTimesViolationMessageArgument** (1 change)

* Model was added

**ValidateAgentUnavailableTimesResponse** (1 change)

* Model was added

**WorkPlanConstraintViolationMessage** (1 change)

* Model was added

**WorkPlanConstraintsViolationMessage** (1 change)

* Model was added

**UpdateUnavailableTime** (1 change)

* Model was added

**ValidateAgentUnavailableTimesRequest** (1 change)

* Model was added

**UpdateUnavailableTimesRequest** (1 change)

* Model was added

**QueryAgentUnavailableTimesValidationJobResponse** (1 change)

* Model was added

**BuRescheduleRequest** (1 change)

* Optional property useUnavailableTimesSnapshot was added

**ConversationAsyncAggregationQuery** (1 change)

* Enum value tSnippetRecord was added to property metrics

**UsersRulesDependent** (1 change)

* Enum value ActivityPlan was added to property type

**UsersRulesRule** (1 change)

* Enum value ActivityPlan was added to property type

**UsersRulesCreateRuleRequest** (1 change)

* Enum value ActivityPlan was added to property type

**UsersRulesUpdateRuleRequest** (1 change)

* Optional property lockedCriteria was added

**UsersRulesQueryRuleRequest** (1 change)

* Enum value ActivityPlan was added to property type


# Point Changes (0 changes)
