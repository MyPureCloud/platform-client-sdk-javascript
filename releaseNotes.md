Platform API version: 8400




# Major Changes (8 changes)

**GET /api/v2/analytics/reporting/settings/dashboards/query** (1 change)

* Parameter name was added

**GET /api/v2/journey/views** (1 change)

* Parameter id was added

**JourneyViewElementFilterRangeData** (1 change)

* Property number was changed from integer to number

**ActivityCodesReference** (1 change)

* Property id was removed

**FunctionZipConfig** (4 changes)

* status has been made readonly
* id has been made readonly
* name has been made readonly
* dateCreated has been made readonly


# Minor Changes (95 changes)

**/api/v2/assistants/{assistantId}/copilot** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/assistants/{assistantId}/queues/{queueId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/assistants/{assistantId}/queues** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/assistants/{assistantId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/assistants** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/assistants/queues** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/answers** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/feedback/{feedbackId}** (1 change)

* Operation patch was added. Summary: Update feedback on a document

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/answers** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/queues/{queueId}/assistant** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/externalsources/{externalSourceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/externalcontacts/externalsources** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ReportingTurnAction** (2 changes)

* Enum value GetAttributesAction was added to property actionType
* Enum value SetAttributesAction was added to property actionType

**ReportingExportJobResponse** (2 changes)

* Enum value SOCIAL_LISTENING_POSTS_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_TIMELINE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value SOCIAL_LISTENING_POSTS_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_TIMELINE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value SOCIAL_LISTENING_POSTS_VIEW was added to property viewType
* Enum value AGENT_PERFORMANCE_TIMELINE_DETAIL_VIEW was added to property viewType

**AnswerGenerationConfig** (1 change)

* Model was added

**Copilot** (1 change)

* Model was added

**CopilotAction** (1 change)

* Model was added

**CopilotCondition** (1 change)

* Model was added

**CopilotFallbackAction** (1 change)

* Model was added

**CopilotNluDomain** (1 change)

* Model was added

**CopilotNluDomainVersion** (1 change)

* Model was added

**CopilotRule** (1 change)

* Model was added

**Fallback** (1 change)

* Model was added

**KnowledgeAnswerConfig** (1 change)

* Model was added

**NluConfig** (1 change)

* Model was added

**RuleConfig** (1 change)

* Model was added

**RuleEngineConfig** (1 change)

* Model was added

**SummaryGenerationConfig** (1 change)

* Model was added

**WrapupCodePredictionConfig** (1 change)

* Model was added

**Assistant** (1 change)

* Model was added

**AssistantQueue** (1 change)

* Model was added

**ConversationProfile** (1 change)

* Model was added

**GoogleDialogflowConfig** (1 change)

* Model was added

**KnowledgeBaseWithDialectReference** (1 change)

* Model was added

**KnowledgeSuggestionConfig** (1 change)

* Model was added

**TranscriptionConfig** (1 change)

* Model was added

**AssistantQueueListing** (1 change)

* Model was added

**AssistantListing** (1 change)

* Model was added

**TransferRequest** (1 change)

* Optional property keepInternalMessageAlive was added

**TransferToAgentRequest** (1 change)

* Optional property keepInternalMessageAlive was added

**TransferToQueueRequest** (1 change)

* Optional property keepInternalMessageAlive was added

**TransferToExternalRequest** (1 change)

* Optional property keepInternalMessageAlive was added

**CampaignRuleConditionGroup** (1 change)

* Model was added

**KnowledgeAnswerDocumentResponse** (1 change)

* Model was added

**KnowledgeAnswerDocumentsResponse** (1 change)

* Model was added

**KnowledgeDocumentsAnswerFilter** (1 change)

* Model was added

**KnowledgeDocumentFeedbackUpdateRequest** (1 change)

* Model was added

**IpAddressRange** (1 change)

* Enum value audio-connector was added to property service

**KnowledgeGuestAnswerDocumentResponse** (1 change)

* Model was added

**KnowledgeGuestAnswerDocumentsResponse** (1 change)

* Model was added

**ResponseText** (1 change)

* Optional property type was added

**RoutingConversationAttributesResponse** (1 change)

* Optional property label was added

**RoutingConversationAttributesRequest** (1 change)

* Optional property labelId was added

**ConversationAppSettings** (1 change)

* Optional property notifications was added

**BuActivitySettingsResponse** (1 change)

* Model was added

**BuNotificationSettingsResponse** (1 change)

* Model was added

**BuScheduleNotificationsCategorySettings** (1 change)

* Model was added

**BuScheduleNotificationsSettingsResponse** (1 change)

* Model was added

**BuActivitySettingsRequest** (1 change)

* Model was added

**BuNotificationSettingsRequest** (1 change)

* Model was added

**BuScheduleNotificationsSettingsRequest** (1 change)

* Model was added

**WorkitemFlowReference** (1 change)

* Model was added

**WorkitemRuleSettings** (1 change)

* Model was added

**CursorExternalSourceListing** (1 change)

* Model was added

**FunctionConfig** (1 change)

* Optional property uploadExceptionHistory was added

**FunctionZipConfig** (2 changes)

* Optional property errorMessage was added
* Optional property requestId was added


# Point Changes (1 change)

**GET /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Description was changed for parameter expand
