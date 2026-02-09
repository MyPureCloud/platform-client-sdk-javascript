Platform API version: 10012




# Major Changes (19 changes)

**POST /api/v2/authorization/policies/targets/{targetName}** (1 change)

* Parameter skipLockoutCheck was added

**PUT /api/v2/authorization/policies/targets/{targetName}** (1 change)

* Parameter skipLockoutCheck was added

**PUT /api/v2/authorization/policies/{policyId}** (1 change)

* Parameter skipLockoutCheck was added

**GET /api/v2/assistants/{assistantId}** (2 changes)

* Parameter languageVariation was added
* Parameter fallbackToPrimaryAssistant was added

**POST /api/v2/screenrecording/token** (2 changes)

* Tag Screen Recording was removed
* Tag Background Assistant was added

**GET /api/v2/integrations/actions/drafts** (1 change)

* Parameter includeConfig was added

**GET /api/v2/integrations/actions** (1 change)

* Parameter includeConfig was added

**GET /api/v2/routing/queues/{queueId}/assistant** (2 changes)

* Parameter languageVariation was added
* Parameter fallbackToPrimaryAssistant was added

**ScreenRecordingUserAuthenticatedInfo** (1 change)

* Model ScreenRecordingUserAuthenticatedInfo was removed

**CaseReference** (1 change)

* Model CaseReference was removed

**OAuthClientListing** (1 change)

* Model OAuthClientListing was removed

**OAuthClientEntityListing** (1 change)

* Property entities was changed from OAuthClientListing[] to OAuthClient[]

**UsersRulesDependent** (1 change)

* Property ruleId was removed

**UsersRulesGroupItem** (1 change)

* Enum value StaffingGroup was removed from property container

**UsersRulesLockedCriteriaSettingsGroup** (1 change)

* Enum value StaffingGroup was removed from property container

**UsersRulesRuleSettings** (1 change)

* Enum value StaffingGroup was removed from property allowedContainers


# Minor Changes (154 changes)

**/api/v2/assistants/{assistantId}/variations/{variationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/assistants/{assistantId}/variations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/outbound/contactlists/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/dnclists/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/email/outbound/domains/{domainId}** (1 change)

* Operation patch was added. Summary: Update configurable settings for an email domain, such as changing the sending method (e.g., to or from SMTP).

**/api/v2/routing/email/outbound/domains/{domainId}/testconnection** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/programs/topiclinks/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/taskmanagement/metrics/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/backgroundassistant/token** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/customattributes/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/customattributes/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/customattributes/{schemaId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/users/{userId}/customattributes** (3 changes)

* Path was added
* Operation PUT was added
* Operation PATCH was added

**/api/v2/users/{userId}/customattributes/bulk** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/users/customattributes/schemas/limits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/customattributes/schemas/{schemaId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/users/customattributes/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/customattributes/schemas/{schemaId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/customattributes/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**AnalyticsConversationSegment** (1 change)

* Enum value takeover was added to property disconnectType

**SegmentDetailQueryPredicate** (1 change)

* Enum value screenMonitoredUserId was added to property dimension

**KnowledgeAggregateQueryPredicate** (4 changes)

* Enum value answerGenerationEnabled was added to property dimension
* Enum value hasRetrievedReferences was added to property dimension
* Enum value knowledgeSettingId was added to property dimension
* Enum value queryTypeV3 was added to property dimension

**KnowledgeAggregationQuery** (5 changes)

* Enum value answerGenerationEnabled was added to property groupBy
* Enum value hasRetrievedReferences was added to property groupBy
* Enum value knowledgeSettingId was added to property groupBy
* Enum value queryTypeV3 was added to property groupBy
* Enum value nKnowledgeV3Search was added to property metrics

**KnowledgeAggregationView** (1 change)

* Enum value nKnowledgeV3Search was added to property target

**AssistantCopilotVariation** (1 change)

* Model was added

**AssistantCopilotVariationListing** (1 change)

* Model was added

**CallbackMediaSettings** (2 changes)

* Optional property edgeGroup was added
* Optional property site was added

**BackgroundAssistantUserAuthenticatedInfo** (1 change)

* Model was added

**SwapRowIndexRequest** (1 change)

* Model was added

**EvaluationForm** (1 change)

* Optional property dialect was added

**Session** (1 change)

* Enum value Takeover was added to property lastUserDisconnectType

**CallMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**CallHistoryParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**CallbackMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**ChatMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**CobrowseMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**EmailMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**InternalMessageMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**MessageMediaParticipant** (1 change)

* Enum value takeover was added to property disconnectType

**ButtonQuickReplyPayload** (1 change)

* Model was added

**CardParameters** (2 changes)

* Optional property index was added
* Optional property buttonQuickReplyPayloads was added

**SummarySetting** (3 changes)

* Optional property serviceType was added
* Optional property integrationId was added
* Optional property timeoutDuration was added

**ContactListUploadUrlRequest** (1 change)

* Model was added

**DNCListUploadUrlRequest** (1 change)

* Model was added

**Miner** (4 changes)

* Enum value da-dk was added to property language
* Enum value fi-fi was added to property language
* Enum value sv-se was added to property language
* Enum value nb-no was added to property language

**PresenceSettings** (2 changes)

* Optional property requestingOffQueueEnabled was added
* Optional property defaultPrimaryPresenceRegisteredSourceId was added

**QualityAuditLogMessage** (3 changes)

* Enum value HorusService was added to property serviceName
* Enum value Start was added to property action
* Enum value Stop was added to property action

**EvaluationFormResponse** (1 change)

* Optional property dialect was added

**RecordingMessagingMessage** (2 changes)

* Optional property status was added
* Optional property messageReceipts was added

**OutboundDomainPatchRequest** (1 change)

* Model was added

**DictionaryFeedback** (1 change)

* Enum value Saved was added to property status

**ListedDictionaryFeedback** (1 change)

* Enum value Saved was added to property status

**ProgramTopicLinksJob** (1 change)

* Model was added

**IdleTokenTimeout** (3 changes)

* Optional property inactivityTimeoutUnit was added
* Optional property inactivityTimeoutGroupsEnabled was added
* Optional property inactivityTimeoutGroupBundles was added

**InactivityTimeoutGroupBundle** (1 change)

* Model was added

**UsersRuleReference** (1 change)

* Model was added

**TimeOffRequestQueryBody** (3 changes)

* Enum value APPROVED was added to property statuses
* Enum value DENIED was added to property statuses
* Enum value CANCELED was added to property statuses

**ExternalContactReference** (2 changes)

* Optional property firstName was added
* Optional property lastName was added

**WorkitemCaseReference** (1 change)

* Model was added

**WorkitemQueryJobCreate** (2 changes)

* Enum value case was added to property expands
* Enum value externalContact was added to property expands

**CaseManagementAggregationQuery** (6 changes)

* Enum value nCasesOverSla was added to property metrics
* Enum value nCasesPurged was added to property metrics
* Enum value nCasesStatusChanged was added to property metrics
* Enum value oCasesServiceLevel was added to property metrics
* Enum value tCasesResolved was added to property metrics
* Enum value tCasesStatus was added to property metrics

**CaseManagementAggregationSort** (5 changes)

* Enum value nCasesOverSla was added to property name
* Enum value nCasesPurged was added to property name
* Enum value nCasesStatusChanged was added to property name
* Enum value tCasesResolved was added to property name
* Enum value tCasesStatus was added to property name

**CaseManagementAggregationView** (6 changes)

* Enum value nCasesOverSla was added to property target
* Enum value nCasesPurged was added to property target
* Enum value nCasesStatusChanged was added to property target
* Enum value oCasesServiceLevel was added to property target
* Enum value tCasesResolved was added to property target
* Enum value tCasesStatus was added to property target

**CaseManagementAsyncAggregationQuery** (6 changes)

* Enum value nCasesOverSla was added to property metrics
* Enum value nCasesPurged was added to property metrics
* Enum value nCasesStatusChanged was added to property metrics
* Enum value oCasesServiceLevel was added to property metrics
* Enum value tCasesResolved was added to property metrics
* Enum value tCasesStatus was added to property metrics

**KnowledgeAsyncAggregationQuery** (5 changes)

* Enum value answerGenerationEnabled was added to property groupBy
* Enum value hasRetrievedReferences was added to property groupBy
* Enum value knowledgeSettingId was added to property groupBy
* Enum value queryTypeV3 was added to property groupBy
* Enum value nKnowledgeV3Search was added to property metrics

**TaskManagementObservationDataContainer** (1 change)

* Model was added

**TaskManagementObservationDetailContainer** (1 change)

* Model was added

**TaskManagementObservationGroupResult** (1 change)

* Model was added

**TaskManagementObservationMetricStats** (1 change)

* Model was added

**TaskManagementObservationQueryResponse** (1 change)

* Model was added

**TaskManagementObservationResult** (1 change)

* Model was added

**TaskManagementObservationPredicate** (1 change)

* Model was added

**TaskManagementObservationQuery** (1 change)

* Model was added

**TaskManagementObservationQueryFilter** (1 change)

* Model was added

**TaskManagementQueryMetric** (1 change)

* Model was added

**UserCustomAttributesUpdateRequest** (1 change)

* Model was added

**WorkitemQueryPostRequest** (2 changes)

* Enum value case was added to property expands
* Enum value externalContact was added to property expands

**UsersRulesDependent** (1 change)

* Optional property rule was added

**UsersRulesDependentRule** (1 change)

* Model was added


# Point Changes (6 changes)

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Description was changed

**PATCH /api/v2/routing/queues/{queueId}/members** (1 change)

* Description was changed

**GET /api/v2/speechandtextanalytics/dictionaryfeedback** (1 change)

* Description was changed for parameter transcriptionEngine

**PATCH /api/v2/users/{userId}/queues** (1 change)

* Description was changed

**GET /api/v2/architect/dependencytracking/consumedresources** (1 change)

* Description was changed for parameter resourceType

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query** (1 change)

* Description was changed
