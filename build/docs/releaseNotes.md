Platform API version: 9254




# Major Changes (14 changes)

**GET /api/v2/externalcontacts/contacts/schemas/coretypes** (1 change)

* Response 200 type was changed from Coretype to CoretypeListing

**GET /api/v2/externalcontacts/organizations/schemas/coretypes** (1 change)

* Response 200 type was changed from Coretype to CoretypeListing

**GET /api/v2/textbots/bots/search** (1 change)

* Parameter virtualAgentEnabled was added

**GET /api/v2/flows** (1 change)

* Parameter virtualAgentEnabled was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Parameter includeCrossWeekShifts was added

**GET /api/v2/taskmanagement/workitems/schemas/coretypes** (1 change)

* Response 200 type was changed from Coretype to CoretypeListing

**BuHeadcountForecast** (1 change)

* Model BuHeadcountForecast was removed

**BuPlanningGroupHeadcountForecast** (1 change)

* Model BuPlanningGroupHeadcountForecast was removed

**MessageData** (1 change)

* Property stickers was removed

**AdditionalMessage** (1 change)

* Property stickerIds was removed

**BuRescheduleResult** (1 change)

* Property headcountForecast was changed from BuHeadcountForecast to BuHeadcountForecastBuPlanningGroupHeadcountForecastResult

**ImportScheduleUploadSchema** (1 change)

* Property headcountForecast was changed from BuHeadcountForecast to BuHeadcountForecastBuPlanningGroupHeadcountForecastUploadSchema

**BuHeadcountForecastResponse** (1 change)

* Property result was changed from BuHeadcountForecast to BuHeadcountForecastBuPlanningGroupHeadcountForecastResult

**UpdateScheduleUploadSchema** (1 change)

* Property headcountForecast was changed from BuHeadcountForecast to BuHeadcountForecastBuPlanningGroupHeadcountForecastUploadSchema


# Minor Changes (72 changes)

**/api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**ViewFilter** (1 change)

* Optional property virtualAgentIds was added

**ReportingExportJobResponse** (4 changes)

* Enum value EVALUATION_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_GROUP_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (4 changes)

* Enum value EVALUATION_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_GROUP_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (4 changes)

* Enum value EVALUATION_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_GROUP_DETAIL_VIEW was added to property viewType
* Enum value EVALUATION_PERFORMANCE_QUESTION_DETAIL_VIEW was added to property viewType

**SummaryGenerationConfig** (1 change)

* Optional property summarySetting was added

**SummarySettingEntity** (1 change)

* Model was added

**KnowledgeBaseWithDialectReference** (1 change)

* Enum value tr-TR was added to property languageCode

**AppleOpaqueId** (1 change)

* Model was added

**ContactIdentifier** (1 change)

* Enum value AppleOpaqueId was added to property type

**ExternalContact** (3 changes)

* Optional property instagramId was added
* Optional property mergedFrom was added
* Optional property mergedTo was added

**ConversationChannel** (1 change)

* Enum value Apple was added to property messageType

**ConversationMessageMetadataContent** (3 changes)

* Enum value PaymentRequest was added to property contentType
* Enum value PaymentResponse was added to property contentType
* Enum value Push was added to property contentType

**ConversationContentButtonResponse** (1 change)

* Optional property originatingMessageId was added

**ConversationContentLineItem** (1 change)

* Model was added

**ConversationContentPaymentRequest** (1 change)

* Model was added

**ConversationContentPaymentResponse** (1 change)

* Model was added

**ConversationContentPush** (1 change)

* Model was added

**ConversationContentRequiredContactField** (1 change)

* Model was added

**ConversationMessageContent** (4 changes)

* Enum value PaymentRequest was added to property contentType
* Enum value PaymentResponse was added to property contentType
* Enum value Push was added to property contentType
* Optional property push was added

**ConversationPushFailedMessageReferences** (1 change)

* Model was added

**ConversationPushNotificationMessageLabel** (1 change)

* Model was added

**ConversationPushProviderIntegration** (1 change)

* Model was added

**JourneyViewJob** (1 change)

* Enum value Scheduled was added to property status

**NamedEntityTypeMechanism** (1 change)

* Optional property allowSpecialChars was added

**IpAddressRange** (1 change)

* Optional property direction was added

**AlertSummaryEntity** (1 change)

* Enum value Organization was added to property entityType

**CommonRulePredicateEntity** (1 change)

* Enum value Organization was added to property entityType

**BotSearchResponse** (1 change)

* Optional property virtualAgentEnabled was added

**Dependency** (3 changes)

* Enum value DIGITALBOTCONNECTORINTEGRATION was added to property type
* Enum value GUIDE was added to property type
* Enum value GUIDEVERSION was added to property type

**DependencyObject** (3 changes)

* Enum value DIGITALBOTCONNECTORINTEGRATION was added to property type
* Enum value GUIDE was added to property type
* Enum value GUIDEVERSION was added to property type

**SchedulerMessageTypeSeverity** (1 change)

* Enum value AgentWithoutCapabilityToHandleActivityOnQueueWork was added to property type

**ShiftTradeSettings** (6 changes)

* Optional property maxTradeSpanWeeks was added
* Optional property maxTradesPerAgentPerWeek was added
* Optional property minMinutesBetweenShifts was added
* Optional property planningPeriodMinPaidViolations was added
* Optional property planningPeriodMaxPaidViolations was added
* Optional property minMinutesBetweenShiftsViolations was added

**ShiftTradeResponse** (1 change)

* Optional property receivingWeekDate was added

**WeekShiftTradeMatchesSummaryResponse** (1 change)

* Optional property crossWeekReceivingCount was added

**ShiftTradeMatchReviewResponse** (1 change)

* Optional property unevaluatedRules was added

**MatchShiftTradeResponse** (1 change)

* Optional property unevaluatedRules was added

**BuHeadcountForecastBuPlanningGroupHeadcountForecastResult** (1 change)

* Model was added

**BuPlanningGroupHeadcountForecastResult** (1 change)

* Model was added

**ScheduleGenerationMessage** (1 change)

* Enum value AgentWithoutCapabilityToHandleActivityOnQueueWork was added to property type

**BuHeadcountForecastBuPlanningGroupHeadcountForecastUploadSchema** (1 change)

* Model was added

**BuPlanningGroupHeadcountForecastUploadSchema** (1 change)

* Model was added


# Point Changes (9 changes)

**GET /api/v2/externalcontacts/contacts/schemas/coretypes/{coreTypeName}** (1 change)

* Summary was changed

**GET /api/v2/externalcontacts/organizations/schemas/coretypes/{coreTypeName}** (1 change)

* Summary was changed

**GET /api/v2/conversations/messages/{messageId}/details** (1 change)

* Description was changed for parameter useNormalizedMessage

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages** (2 changes)

* Description was changed
* Description was changed for parameter useNormalizedMessage

**POST /api/v2/conversations/messages/{conversationId}/messages/bulk** (1 change)

* Description was changed for parameter useNormalizedMessage

**GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}** (1 change)

* Description was changed for parameter useNormalizedMessage

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}** (1 change)

* Description was changed

**GET /api/v2/taskmanagement/workitems/schemas/coretypes/{coreTypeName}** (1 change)

* Summary was changed
