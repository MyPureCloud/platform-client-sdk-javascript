Platform API version: 6085


# Major Changes (25 changes)

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents** (1 change)

* Parameter documentId was added

**ConversationButtonComponent** (1 change)

* Model ConversationButtonComponent was removed

**ConversationContentActions** (1 change)

* Model ConversationContentActions was removed

**ConversationContentGeneric** (1 change)

* Model ConversationContentGeneric was removed

**ConversationMessagingChannelMetadata** (1 change)

* Model ConversationMessagingChannelMetadata was removed

**ConversationMessageMetadataContent** (4 changes)

* Enum value GenericTemplate was removed from property contentType
* Enum value ListTemplate was removed from property contentType
* Enum value Postback was removed from property contentType
* Enum value Reactions was removed from property contentType

**ConversationMessageContent** (5 changes)

* Property generic was removed
* Enum value GenericTemplate was removed from property contentType
* Enum value ListTemplate was removed from property contentType
* Enum value Postback was removed from property contentType
* Enum value Reactions was removed from property contentType

**FacebookIntegrationUpdateRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**FacebookIntegrationRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**LineIntegrationRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**OpenIntegrationUpdateRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**OpenIntegrationRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**TwitterIntegrationRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**WhatsAppIntegrationUpdateRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**WhatsAppIntegrationRequest** (1 change)

* Property messagingSetting was changed from MessagingSettingReference to MessagingSettingRequestReference

**ExternalMetricDataWriteResponse** (1 change)

* Property processedEntities was changed from ExternalMetricDataItem[] to ExternalMetricDataProcessedItem[]

**LimitChangeRequestDetails** (1 change)

* Enum value skills was removed from property namespace

**StatusChange** (1 change)

* Enum value skills was removed from property namespace


# Minor Changes (61 changes)

**/api/v2/analytics/dataretention/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/outbound/digitalrulesets/{digitalRuleSetId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/digitalrulesets** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/recordings/retention/query** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/{userId}/externalid** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/webdeployments/deployments/{deploymentId}/configurations** (2 changes)

* Path was added
* Operation GET was added

**ConversationAggregationQuery** (1 change)

* Enum value tBarging was added to property metrics

**ConversationAggregationView** (1 change)

* Enum value tBarging was added to property target

**AnalyticsConversationSegment** (1 change)

* Enum value barging was added to property segmentType

**AnalyticsSession** (1 change)

* Optional property bargedParticipantId was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value tBarging was added to property metric

**SegmentDetailQueryPredicate** (1 change)

* Enum value bargedParticipantId was added to property dimension

**ReportingTurnAction** (1 change)

* Enum value TransferPureMatchAction was added to property actionType

**AnalyticsDataRetentionResponse** (1 change)

* Model was added

**UpdateAnalyticsDataRetentionRequest** (1 change)

* Model was added

**TopicOffset** (1 change)

* Model was added

**TranscriptTopic** (2 changes)

* Optional property offset was added
* Optional property recordingLocation was added

**ConversationChannelMetadata** (1 change)

* Model was added

**ConversationContentAttachment** (1 change)

* Optional property contentSizeBytes was added

**MessagingSettingRequestReference** (1 change)

* Model was added

**AppendToDncActionSettings** (1 change)

* Model was added

**ContactAddressConditionSettings** (1 change)

* Model was added

**ContactAddressTypeConditionSettings** (1 change)

* Model was added

**ContactColumnConditionSettings** (1 change)

* Model was added

**DigitalAction** (1 change)

* Model was added

**DigitalCondition** (1 change)

* Model was added

**DigitalRule** (1 change)

* Model was added

**DigitalRuleSet** (1 change)

* Model was added

**LastAttemptByColumnConditionSettings** (1 change)

* Model was added

**LastAttemptOverallConditionSettings** (1 change)

* Model was added

**LastResultByColumnConditionSettings** (1 change)

* Model was added

**LastResultOverallConditionSettings** (1 change)

* Model was added

**MarkContactUncontactableActionSettings** (1 change)

* Model was added

**SetContentTemplateActionSettings** (1 change)

* Model was added

**UpdateContactColumnActionSettings** (1 change)

* Model was added

**DigitalRuleSetEntityListing** (1 change)

* Model was added

**ExternalMetricDataProcessedItem** (1 change)

* Model was added

**KnowledgeImportJobStatistics** (9 changes)

* Optional property countCategoryValidationSuccess was added
* Optional property countCategoryValidationFailure was added
* Optional property countCategoryImportSuccess was added
* Optional property countCategoryImportFailure was added
* Optional property countLabelValidationSuccess was added
* Optional property countLabelValidationFailure was added
* Optional property countLabelImportSuccess was added
* Optional property countLabelImportFailure was added
* Optional property migrationDetected was added

**RecordingRetention** (1 change)

* Model was added

**RecordingRetentionCursorEntityListing** (1 change)

* Model was added

**UserExternalIdentifier** (1 change)

* Model was added

**WebDeploymentActiveConfigurationOnDeployment** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/quality/forms/evaluations** (1 change)

* Description was changed for parameter expand

**GET /api/v2/quality/forms/surveys** (1 change)

* Description was changed for parameter expand

**GET /api/v2/quality/forms** (1 change)

* Description was changed for parameter expand
