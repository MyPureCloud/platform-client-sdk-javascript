Platform API version: 8165




# Major Changes (10 changes)

**/api/v2/conversations/messaging/stickers/{messengerType}** (1 change)

* Path /api/v2/conversations/messaging/stickers/{messengerType} was removed

**GET /api/v2/journey/views** (1 change)

* Response 200 type was changed from AddressableEntityListing to JourneyViewListing

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/operations** (1 change)

* Parameter sourceId was added

**MessagingSticker** (1 change)

* Model MessagingSticker was removed

**MessagingStickerEntityListing** (1 change)

* Model MessagingStickerEntityListing was removed

**AddressableEntityListing** (1 change)

* Model AddressableEntityListing was removed

**FieldConfig** (1 change)

* Enum value externalContact was removed from property entityType

**KeyPerformanceIndicator** (1 change)

* Enum value NumberOfTransfers was removed from property kpiType

**EngineIntegration** (1 change)

* Property name was removed

**FieldConfigs** (1 change)

* Property externalContact was removed


# Minor Changes (178 changes)

**/api/v2/analytics/reporting/settings/dashboards/query** (1 change)

* Operation get was added. Summary: Get list of dashboard configurations

**/api/v2/conversations/emails/{conversationId}/reconnect** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/categories** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/speechandtextanalytics/categories/{categoryId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}/categories** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/speechandtextanalytics/topics/general/status** (1 change)

* Response 405 was added

**/api/v2/learning/assignments/{assignmentId}/steps/{stepId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/learning/modules/{moduleId}/preview** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/learning/scorm/{scormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/scorm** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/taskmanagement/workitems/{workitemId}/terminate** (1 change)

* Response 409 was added

**/api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/agentcopilots/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/agentcopilots/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**BotAggregationQuery** (2 changes)

* Enum value oBotSessionCollection was added to property metrics
* Enum value oBotSessionCollectionSelfServed was added to property metrics

**BotAggregationView** (2 changes)

* Enum value oBotSessionCollection was added to property target
* Enum value oBotSessionCollectionSelfServed was added to property target

**AnalyticsSession** (2 changes)

* Optional property detectedSpeechEnd was added
* Optional property detectedSpeechStart was added

**SegmentDetailQueryPredicate** (2 changes)

* Enum value detectedSpeechEnd was added to property dimension
* Enum value detectedSpeechStart was added to property dimension

**DashboardConfiguration** (2 changes)

* Optional property shared was added
* Optional property dashboardsSharedWith was added

**DashboardsSharedWith** (1 change)

* Model was added

**ViewFilter** (15 changes)

* Optional property agentTalkDurationMilliseconds was added
* Optional property customerTalkDurationMilliseconds was added
* Optional property overtalkDurationMilliseconds was added
* Optional property silenceDurationMilliseconds was added
* Optional property acdDurationMilliseconds was added
* Optional property ivrDurationMilliseconds was added
* Optional property otherDurationMilliseconds was added
* Optional property agentTalkPercentage was added
* Optional property customerTalkPercentage was added
* Optional property overtalkPercentage was added
* Optional property silencePercentage was added
* Optional property acdPercentage was added
* Optional property ivrPercentage was added
* Optional property otherPercentage was added
* Optional property overtalkInstances was added

**KnowledgeBaseReference** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**Limit** (1 change)

* Enum value social.media was added to property namespace

**ContactIdentifier** (1 change)

* Enum value ExternalId was added to property type

**ConversationMessageMetadataEvent** (1 change)

* Enum value Video was added to property eventType

**CreateCallRequest** (1 change)

* Optional property attributes was added

**ConversationEventVideo** (1 change)

* Model was added

**ConversationMessageEvent** (2 changes)

* Enum value Video was added to property eventType
* Optional property video was added

**KnowledgeBase** (5 changes)

* Enum value hi-IN was added to property coreLanguage
* Enum value th-TH was added to property coreLanguage
* Enum value hu-HU was added to property coreLanguage
* Enum value vi-VN was added to property coreLanguage
* Enum value uk-UA was added to property coreLanguage

**KnowledgeCategory** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**KnowledgeSearchDocumentV1** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**KnowledgeExtendedCategory** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**KnowledgeImport** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**KnowledgeDocument** (5 changes)

* Enum value hi-IN was added to property languageCode
* Enum value th-TH was added to property languageCode
* Enum value hu-HU was added to property languageCode
* Enum value vi-VN was added to property languageCode
* Enum value uk-UA was added to property languageCode

**KnowledgeBaseCreateRequest** (5 changes)

* Enum value hi-IN was added to property coreLanguage
* Enum value th-TH was added to property coreLanguage
* Enum value hu-HU was added to property coreLanguage
* Enum value vi-VN was added to property coreLanguage
* Enum value uk-UA was added to property coreLanguage

**KnowledgeOperationSource** (1 change)

* Model was added

**KnowledgeDocumentResponse** (2 changes)

* Optional property source was added
* Optional property readonly was added

**KnowledgeExportJobDocumentsFilter** (1 change)

* Optional property sourceId was added

**KnowledgeExportJobResponse** (1 change)

* Optional property source was added

**KnowledgeExportJobRequest** (1 change)

* Optional property sourceId was added

**KnowledgeSearchDocumentResponse** (2 changes)

* Optional property source was added
* Optional property readonly was added

**ApprovalNamespace** (1 change)

* Enum value social.media was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value social.media was added to property namespace

**StatusChange** (1 change)

* Enum value social.media was added to property namespace

**RecordingMessagingMessage** (4 changes)

* Optional property purpose was added
* Optional property participantId was added
* Optional property queue was added
* Optional property workflow was added

**UserQueue** (1 change)

* id is no longer readonly

**UtilizationResponse** (1 change)

* Optional property labelUtilizations was added

**UtilizationRequest** (1 change)

* Optional property labelUtilizations was added

**AgentMaxUtilizationResponse** (1 change)

* Optional property labelUtilizations was added

**CategoriesEntityListing** (1 change)

* Model was added

**InfixOperator** (1 change)

* Model was added

**Operand** (1 change)

* Model was added

**OperandPosition** (1 change)

* Model was added

**OperatorPosition** (1 change)

* Model was added

**StaCategory** (1 change)

* Model was added

**Term** (1 change)

* Model was added

**CategoryRequest** (1 change)

* Model was added

**EngineIntegration** (1 change)

* id is no longer readonly

**ConversationCategoriesEntityListing** (1 change)

* Model was added

**ConversationCategory** (1 change)

* Model was added

**VoicemailSearchCriteria** (1 change)

* Enum value DATE_RANGE was added to property type

**CobrowseSettings** (1 change)

* Optional property pauseCriteria was added

**LearningAssignment** (5 changes)

* Optional property assessmentPercentageScore was added
* Optional property assessmentCompletionPercentage was added
* Optional property completionPercentage was added
* Optional property steps was added
* Optional property nextStep was added

**LearningModule** (2 changes)

* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added

**ReviewAssessmentResults** (2 changes)

* Optional property byAssignees was added
* Optional property byViewers was added

**LearningModulePreviewGetResponse** (1 change)

* Model was added

**LearningModulePreviewGetResponseAssignment** (1 change)

* Model was added

**LearningModulePreviewGetResponseStep** (1 change)

* Model was added

**LearningModulePreviewGetScoStructure** (1 change)

* Model was added

**LearningModuleRequest** (2 changes)

* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added

**LearningModulePreviewUpdateResponse** (1 change)

* Model was added

**LearningModulePreviewUpdateResponseAssignment** (1 change)

* Model was added

**LearningModulePreviewUpdateResponseCurrentStep** (1 change)

* Model was added

**LearningModulePreviewUpdateScoStructure** (1 change)

* Model was added

**LearningModulePreviewUpdateStep** (1 change)

* Model was added

**LearningModulePreviewUpdateRequest** (1 change)

* Model was added

**LearningModulePreviewUpdateRequestCurrentStep** (1 change)

* Model was added

**AssignedLearningModule** (2 changes)

* Optional property enforceContentOrder was added
* Optional property reviewAssessmentResults was added

**LearningScormResponse** (1 change)

* Model was added

**LearningScormUploadResponse** (1 change)

* Model was added

**LearningScormUploadRequest** (1 change)

* Model was added

**AgentCopilotAggregateDataContainer** (1 change)

* Model was added

**AgentCopilotAsyncAggregateQueryResponse** (1 change)

* Model was added

**AgentCopilotAggregateQueryResponse** (1 change)

* Model was added

**AgentCopilotAggregateQueryClause** (1 change)

* Model was added

**AgentCopilotAggregateQueryFilter** (1 change)

* Model was added

**AgentCopilotAggregateQueryPredicate** (1 change)

* Model was added

**AgentCopilotAggregationQuery** (1 change)

* Model was added

**AgentCopilotAggregationView** (1 change)

* Model was added

**AgentCopilotAsyncAggregationQuery** (1 change)

* Model was added

**BotAsyncAggregationQuery** (2 changes)

* Enum value oBotSessionCollection was added to property metrics
* Enum value oBotSessionCollectionSelfServed was added to property metrics

**JourneyViewListing** (1 change)

* Model was added

**OperationResponse** (1 change)

* Optional property source was added

**WorktypeDelta** (1 change)

* Optional property serviceLevelTarget was added


# Point Changes (2 changes)

**POST /api/v2/analytics/ratelimits/aggregates/query** (2 changes)

* Description was changed
* Summary was changed
