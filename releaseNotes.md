Platform API version: 9841




# Major Changes (9 changes)

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Has been deprecated

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external** (1 change)

* Has been deprecated

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/external** (1 change)

* Has been deprecated

**GET /api/v2/socialmedia/topics/{topicId}** (1 change)

* Response 200 type was changed from SocialTopicResponse to SocialTopicWithDataIngestionRuleMetadataResponse

**GET /api/v2/socialmedia/topics** (1 change)

* Parameter name was added

**Flow** (1 change)

* Property agenticVirtualAgentEnabled was removed

**FlowVersion** (1 change)

* Property agenticVirtualAgentEnabled was removed

**SocialTopicResponse** (1 change)

* Property dataIngestionRulesMetadata was removed


# Minor Changes (195 changes)

**/api/v2/assistants/agentchecklists/languages** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/assistants/agentchecklists/{agentChecklistId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/assistants/agentchecklists** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/finalize** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/communications/{communicationId}/agentchecklists/{agentChecklistId}/agentaction** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/outbound/attemptlimits** (1 change)

* Response 501 was added

**/api/v2/guides/{guideId}/sessions/{guideSessionId}/turns** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Operation post was added. Summary: Create a custom Key Performance Indicator.

**/api/v2/analytics/casemanagement/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/casemanagement/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/casemanagement/aggregates/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/casemanagement/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/predictors/keyperformanceindicators/{kpiId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/routing/predictors/keyperformanceindicatortypes** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsAgentStateAgentSessionResult** (2 changes)

* Enum value screenmonitoring was added to property segmentType
* Enum value screenmonitoring was added to property mediaType

**AgentStateSegmentTypeCount** (1 change)

* Enum value screenmonitoring was added to property segmentType

**ConversationAggregationQuery** (1 change)

* Enum value tScreenMonitoring was added to property metrics

**ConversationAggregationSort** (1 change)

* Enum value tScreenMonitoring was added to property name

**ConversationAggregationView** (1 change)

* Enum value tScreenMonitoring was added to property target

**ConversationActivityEntityData** (1 change)

* Enum value screenmonitoring was added to property mediaType

**AnalyticsConversationSegment** (1 change)

* Enum value screenmonitoring was added to property segmentType

**AnalyticsSession** (2 changes)

* Enum value screenmonitoring was added to property mediaType
* Optional property screenMonitoredUserId was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value tScreenMonitoring was added to property metric

**FlowActivityEntityData** (1 change)

* Enum value screenmonitoring was added to property mediaType

**ViewFilter** (2 changes)

* Enum value screenmonitoring was added to property mediaTypes
* Enum value screenmonitoring was added to property segmentTypes

**Widget** (2 changes)

* Enum value screenmonitoring was added to property mediaTypes
* Enum value screenmonitoring was added to property selectedSegmentTypes

**Limit** (2 changes)

* Enum value agentic.virtual.agents was added to property namespace
* Enum value workforce.management.shift.trading was added to property namespace

**AgentChecklist** (1 change)

* Model was added

**AgentChecklistItem** (1 change)

* Model was added

**AgentChecklistListing** (1 change)

* Model was added

**CopilotContext** (1 change)

* Model was added

**CopilotContextFilter** (1 change)

* Model was added

**CopilotContextValue** (1 change)

* Model was added

**KnowledgeBaseReference** (4 changes)

* Enum value fil-PH was added to property languageCode
* Enum value ms-MY was added to property languageCode
* Enum value he-IL was added to property languageCode
* Enum value el-GR was added to property languageCode

**ParticipantDataProperties** (1 change)

* Model was added

**DataSchema** (1 change)

* Enum value EXTERNAL_EVENTS was added to property appliesTo

**InactivityTimeoutSettings** (3 changes)

* Optional property timeoutSeconds was added
* Optional property actionType was added
* Optional property flowId was added

**MessageMediaSettings** (2 changes)

* Optional property enableInactivityTimeout was added
* Optional property inactivityTimeoutSettings was added

**MessageSubtypeSettings** (1 change)

* Optional property enableInactivityTimeout was added

**BusinessRulesDataSchema** (1 change)

* Enum value EXTERNAL_EVENTS was added to property appliesTo

**BulkResponseResultVoidEntityBulkEntityErrorEntity** (1 change)

* Optional property status was added

**BulkResponseResultExternalContactExternalContactBulkEntityErrorExternalContact** (1 change)

* Optional property status was added

**BulkResponseResultExternalContactEntityBulkEntityErrorEntity** (1 change)

* Optional property status was added

**BulkResponseResultExternalContactContactEnrichRequestBulkEntityErrorContactEnrichRequest** (1 change)

* Optional property status was added

**BulkResponseResultNoteNoteBulkEntityErrorNote** (1 change)

* Optional property status was added

**BulkResponseResultNoteEntityBulkEntityErrorEntity** (1 change)

* Optional property status was added

**BulkResponseResultExternalOrganizationExternalOrganizationBulkEntityErrorExternalOrganization** (1 change)

* Optional property status was added

**BulkResponseResultExternalOrganizationEntityBulkEntityErrorEntity** (1 change)

* Optional property status was added

**BulkResponseResultExternalOrganizationExternalOrganizationEnrichRequestBulkEntityErrorExternalOrganizationEnrichRequest** (1 change)

* Optional property status was added

**BulkResponseResultRelationshipRelationshipBulkEntityErrorRelationship** (1 change)

* Optional property status was added

**BulkResponseResultRelationshipEntityBulkEntityErrorEntity** (1 change)

* Optional property status was added

**ActivationTrigger** (1 change)

* Model was added

**AgentChecklistResponse** (1 change)

* Model was added

**AgentChecklistResponseList** (1 change)

* Model was added

**ChecklistItem** (1 change)

* Model was added

**ChecklistFinalizePayload** (1 change)

* Model was added

**ChecklistActivationPayload** (1 change)

* Model was added

**ChecklistInferenceJobCreationResponse** (1 change)

* Model was added

**ChecklistInferenceJobPayload** (1 change)

* Model was added

**ConversationContext** (1 change)

* Model was added

**AgentChecklistInfo** (1 change)

* Model was added

**ChecklistInferenceJobResponse** (1 change)

* Model was added

**AgentAction** (1 change)

* Model was added

**AgentActionPayload** (1 change)

* Model was added

**ConversationNotificationTemplateButton** (1 change)

* Optional property payload was added

**ConversationNotificationTemplateCard** (1 change)

* Model was added

**ConversationNotificationTemplateCarousel** (1 change)

* Model was added

**CardParameters** (1 change)

* Model was added

**CarouselParameters** (1 change)

* Model was added

**SendMessagingTemplateRequest** (1 change)

* Optional property carouselParameters was added

**AttemptLimits** (29 changes)

* Enum value DAYS_2 was added to property resetPeriod
* Enum value DAYS_3 was added to property resetPeriod
* Enum value DAYS_4 was added to property resetPeriod
* Enum value DAYS_5 was added to property resetPeriod
* Enum value DAYS_6 was added to property resetPeriod
* Enum value DAYS_7 was added to property resetPeriod
* Enum value DAYS_8 was added to property resetPeriod
* Enum value DAYS_9 was added to property resetPeriod
* Enum value DAYS_10 was added to property resetPeriod
* Enum value DAYS_11 was added to property resetPeriod
* Enum value DAYS_12 was added to property resetPeriod
* Enum value DAYS_13 was added to property resetPeriod
* Enum value DAYS_14 was added to property resetPeriod
* Enum value DAYS_15 was added to property resetPeriod
* Enum value DAYS_16 was added to property resetPeriod
* Enum value DAYS_17 was added to property resetPeriod
* Enum value DAYS_18 was added to property resetPeriod
* Enum value DAYS_19 was added to property resetPeriod
* Enum value DAYS_20 was added to property resetPeriod
* Enum value DAYS_21 was added to property resetPeriod
* Enum value DAYS_22 was added to property resetPeriod
* Enum value DAYS_23 was added to property resetPeriod
* Enum value DAYS_24 was added to property resetPeriod
* Enum value DAYS_25 was added to property resetPeriod
* Enum value DAYS_26 was added to property resetPeriod
* Enum value DAYS_27 was added to property resetPeriod
* Enum value DAYS_28 was added to property resetPeriod
* Enum value DAYS_29 was added to property resetPeriod
* Enum value DAYS_30 was added to property resetPeriod

**DefaultObjective** (1 change)

* Enum value screenmonitoring was added to property mediaTypes

**Objective** (1 change)

* Enum value screenmonitoring was added to property mediaTypes

**CreateObjective** (1 change)

* Enum value screenmonitoring was added to property mediaTypes

**QualityEvaluationScoreItem** (1 change)

* Enum value screenmonitoring was added to property mediaTypes

**GDPRRequest** (1 change)

* Optional property resultsUrls was added

**GuideSessionTurnInvocationParameters** (1 change)

* Model was added

**GuideSessionTurnInvocationResponse** (1 change)

* Model was added

**GuideSessionTurnResponse** (1 change)

* Model was added

**GuideSessionTurnResponseData** (1 change)

* Model was added

**GuideSessionVariable** (1 change)

* Model was added

**GuideSessionInputEvent** (1 change)

* Model was added

**GuideSessionTurnInvocationData** (1 change)

* Model was added

**GuideSessionTurnRequest** (1 change)

* Model was added

**KnowledgeBase** (4 changes)

* Enum value fil-PH was added to property coreLanguage
* Enum value ms-MY was added to property coreLanguage
* Enum value he-IL was added to property coreLanguage
* Enum value el-GR was added to property coreLanguage

**KnowledgeBaseCreateRequest** (4 changes)

* Enum value fil-PH was added to property coreLanguage
* Enum value ms-MY was added to property coreLanguage
* Enum value he-IL was added to property coreLanguage
* Enum value el-GR was added to property coreLanguage

**KnowledgeDocumentsAnswerFilter** (4 changes)

* Enum value fil-PH was added to property language
* Enum value ms-MY was added to property language
* Enum value he-IL was added to property language
* Enum value el-GR was added to property language

**ApprovalNamespace** (2 changes)

* Enum value agentic.virtual.agents was added to property namespace
* Enum value workforce.management.shift.trading was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value agentic.virtual.agents was added to property namespace
* Enum value workforce.management.shift.trading was added to property namespace

**StatusChange** (2 changes)

* Enum value agentic.virtual.agents was added to property namespace
* Enum value workforce.management.shift.trading was added to property namespace

**RecordingMessageReceipt** (1 change)

* Optional property receiptTime was added

**SocialTopicWithDataIngestionRuleMetadataResponse** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value KNOWLEDGESETTING was added to property type

**DependencyObject** (1 change)

* Enum value KNOWLEDGESETTING was added to property type

**CapacityPlanMetricsSummary** (1 change)

* Model was added

**CapacityPlanningPlanningGroupAllocation** (1 change)

* Model was added

**StaffingGroupFullTimeEquivalentContribution** (1 change)

* Model was added

**YearMonth** (1 change)

* Model was added

**CapacityPlanStaffingRequirementResult** (1 change)

* Enum value Monthly was added to property granularity

**Worktype** (1 change)

* Optional property unassignedDivisionContactsEnabled was added

**WorktypeUpdate** (1 change)

* Optional property unassignedDivisionContactsEnabled was added

**WorktypeVersion** (1 change)

* Optional property unassignedDivisionContactsEnabled was added

**WorktypeCreate** (1 change)

* Optional property unassignedDivisionContactsEnabled was added

**CaseManagementAggregateDataContainer** (1 change)

* Model was added

**CaseManagementAggregateQueryResponse** (1 change)

* Model was added

**CaseManagementAggregateQueryClause** (1 change)

* Model was added

**CaseManagementAggregateQueryFilter** (1 change)

* Model was added

**CaseManagementAggregateQueryPredicate** (1 change)

* Model was added

**CaseManagementAggregationQuery** (1 change)

* Model was added

**CaseManagementAggregationSort** (1 change)

* Model was added

**CaseManagementAggregationView** (1 change)

* Model was added

**CaseManagementAsyncAggregationQuery** (1 change)

* Model was added

**CaseManagementAsyncAggregateQueryResponse** (1 change)

* Model was added

**ConversationAsyncAggregationQuery** (1 change)

* Enum value tScreenMonitoring was added to property metrics

**UpdateKpiRequest** (1 change)

* Model was added

**KeyPerformanceIndicatorType** (1 change)

* Model was added

**CreateKpiRequest** (1 change)

* Model was added


# Point Changes (12 changes)

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult/external** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace/external** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/actionmaps** (1 change)

* Description was changed for parameter queryValue

**GET /api/v2/journey/actiontemplates** (1 change)

* Description was changed for parameter queryValue

**GET /api/v2/journey/outcomes** (1 change)

* Description was changed for parameter queryValue

**GET /api/v2/journey/segments** (1 change)

* Description was changed for parameter queryValue
