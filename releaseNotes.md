Platform API version: 10555




# Major Changes (16 changes)

**GET /api/v2/integrations** (1 change)

* Parameter credentialId was added

**GET /api/v2/learning/modules** (2 changes)

* Parameter isArchived was removed
* Parameter isPublished was removed

**DomainResourceConditionValue** (3 changes)

* Property user was changed from User to UserFullReference
* Property queue was changed from Queue to QueueFullReference
* Property team was changed from Team to TeamFullReference

**DecisionTableContract** (1 change)

* Property parentSchema was changed from DomainEntityRef to BusinessRulesParentSchemaRef

**AppleInvitation** (4 changes)

* Required property businessName was added
* Required property transcriptMessage was added
* Required property templateType was added
* Required property locale was added

**BillingCharge** (4 changes)

* Property prepaidQuantity was changed from integer to number
* Property fairuseQuantity was changed from integer to number
* Property actualQuantity was changed from integer to number
* Property overageQuantity was changed from integer to number

**ContinuousForecastGetSessionResponse** (1 change)

* Property retrainInProgress was removed


# Minor Changes (150 changes)

**/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Operation patch was added. Summary: Update a Contact Note

**/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Operation patch was added. Summary: Update an External Organization Note

**/api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Operation patch was added. Summary: Update specific fields of an external organization

**/api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Operation patch was added. Summary: Update specific fields of a relationship

**/api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/screenmonitors/sessions/users/details** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/screenmonitors/users/{userId}/sessions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/screenmonitors/sessions/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/screenmonitors/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/users/{userId}/screenmonitors/sessions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/flows/lookup** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/forecast** (2 changes)

* Path was added
* Operation GET was added

**AgentCopilotAggregationQuery** (1 change)

* Enum value nDistinctConversations was added to property metrics

**AgentCopilotAggregationView** (1 change)

* Enum value nDistinctConversations was added to property target

**Limit** (1 change)

* Enum value multi.org was added to property namespace

**ReportingExportJobResponse** (2 changes)

* Enum value CALLBACK_QUEUE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CALLBACK_QUEUE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value CALLBACK_QUEUE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CALLBACK_QUEUE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value CALLBACK_QUEUE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CALLBACK_QUEUE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**QueueFullReference** (1 change)

* Model was added

**TeamFullReference** (1 change)

* Model was added

**UserFullReference** (1 change)

* Model was added

**BusinessRulesParentSchemaRef** (1 change)

* Model was added

**DecisionTable** (1 change)

* Optional property latestVersionStatus was added

**PatchCallbackRequest** (1 change)

* Optional property customerFirstCallbackDeliveryMode was added

**CreateCallbackCommand** (1 change)

* Optional property customerFirstCallbackDeliveryMode was added

**AppleInvitationNotificationParameters** (1 change)

* Model was added

**SendAgentlessOutboundMessageResponse** (1 change)

* Enum value apple was added to property messengerType

**SendAgentlessOutboundMessageRequest** (1 change)

* Enum value apple was added to property toAddressMessengerType

**CreateCallbackOnConversationCommand** (1 change)

* Optional property customerFirstCallbackDeliveryMode was added

**QueryReformulationContext** (1 change)

* Model was added

**CustomerIntentAssignmentRequest** (1 change)

* Enum value Case was added to property sourceType

**KnowledgeGenerationSetting** (6 changes)

* Enum value el-GR was added to property generationLanguage
* Enum value fil-PH was added to property generationLanguage
* Enum value he-IL was added to property generationLanguage
* Enum value ms-MY was added to property generationLanguage
* Enum value pl-PL was added to property generationLanguage
* Enum value th-TH was added to property generationLanguage

**KnowledgeSearchPreviewResponse** (2 changes)

* Optional property application was added
* Optional property conversationContext was added

**KnowledgeV3PreviewConversationContext** (1 change)

* Model was added

**V3KnowledgeSearchPreviewClientApplication** (1 change)

* Model was added

**KnowledgeSearchPreviewRequest** (2 changes)

* Optional property application was added
* Optional property conversationContext was added

**KnowledgeSourcesSearchResponse** (6 changes)

* Enum value el-GR was added to property generationLanguage
* Enum value fil-PH was added to property generationLanguage
* Enum value he-IL was added to property generationLanguage
* Enum value ms-MY was added to property generationLanguage
* Enum value pl-PL was added to property generationLanguage
* Enum value th-TH was added to property generationLanguage

**KnowledgeSourcesSearchRequest** (6 changes)

* Enum value el-GR was added to property generationLanguage
* Enum value fil-PH was added to property generationLanguage
* Enum value he-IL was added to property generationLanguage
* Enum value ms-MY was added to property generationLanguage
* Enum value pl-PL was added to property generationLanguage
* Enum value th-TH was added to property generationLanguage

**ApprovalNamespace** (1 change)

* Enum value multi.org was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value multi.org was added to property namespace

**StatusChange** (1 change)

* Enum value multi.org was added to property namespace

**Response** (1 change)

* Optional property appleInvitation was added

**ResponseAssetBulkRequest** (2 changes)

* Optional property sortBy was added
* Optional property sortOrder was added

**StartScreenMonitorResponseBody** (1 change)

* Model was added

**ScreenMonitoringSession** (1 change)

* Model was added

**ScreenMonitoringUserDetails** (1 change)

* Model was added

**ScreenMonitoringUserDetailsEntityListing** (1 change)

* Model was added

**ScreenMonitoringSessionEntityListing** (1 change)

* Model was added

**ScreenMonitoringDetails** (1 change)

* Model was added

**ScreenMonitorSettings** (1 change)

* Model was added

**SpeechTextAnalyticsConversationSummary** (3 changes)

* Optional property summaryId was added
* Optional property agentId was added
* Optional property insights was added

**SpeechTextAnalyticsSummaryLabel** (1 change)

* Model was added

**TextBotFlowTurnRequest** (1 change)

* Optional property inputEventRichMedia was added

**VideoSettings** (1 change)

* Optional property channels was added

**BuSchedulingSettingsResponse** (1 change)

* Optional property enableTimeOffFullDayEstimation was added

**BusinessUnitSettingsResponse** (2 changes)

* Optional property learning was added
* Optional property coaching was added

**BuSchedulingSettingsRequest** (1 change)

* Optional property enableTimeOffFullDayEstimation was added

**UpdateBusinessUnitSettingsRequest** (2 changes)

* Optional property learning was added
* Optional property coaching was added

**CreateBusinessUnitSettingsRequest** (2 changes)

* Optional property learning was added
* Optional property coaching was added

**CapacityPlanForecastInputsResponse** (1 change)

* Model was added

**CapacityPlanForecastInputsTemplate** (1 change)

* Model was added

**CapacityPlanForecastMetrics** (1 change)

* Model was added

**ForecastInputPlanningGroupData** (1 change)

* Model was added

**TimeOffRequestResponse** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**CreateAgentTimeOffRequest** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**AgentTimeOffRequestPatch** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**BuFullDayTimeOffMarker** (2 changes)

* Optional property startOffsetMinutes was added
* Optional property endOffsetMinutes was added

**TimeOffRequest** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**CreateAdminTimeOffRequest** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**AdminTimeOffRequestPatch** (2 changes)

* Optional property fullDayEarliestStartOffsetMinutes was added
* Optional property fullDayLatestEndOffsetMinutes was added

**EstimateAvailableFullDayTimeOffResponse** (2 changes)

* Optional property earliestStartOffsetMinutes was added
* Optional property latestEndOffsetMinutes was added

**AgentCopilotAsyncAggregationQuery** (1 change)

* Enum value nDistinctConversations was added to property metrics

**BillingProduct** (7 changes)

* Enum value EA was added to property unitOfMeasure
* Enum value Evaluation was added to property unitOfMeasure
* Enum value Guide was added to property unitOfMeasure
* Enum value Ingestion was added to property unitOfMeasure
* Enum value RateTable was added to property unitOfMeasure
* Enum value Summary was added to property unitOfMeasure
* Enum value Translation was added to property unitOfMeasure

**BillingWallet** (7 changes)

* Enum value EA was added to property unitOfMeasure
* Enum value Evaluation was added to property unitOfMeasure
* Enum value Guide was added to property unitOfMeasure
* Enum value Ingestion was added to property unitOfMeasure
* Enum value RateTable was added to property unitOfMeasure
* Enum value Summary was added to property unitOfMeasure
* Enum value Translation was added to property unitOfMeasure

**BillingPlanItem** (7 changes)

* Enum value EA was added to property unitOfMeasure
* Enum value Evaluation was added to property unitOfMeasure
* Enum value Guide was added to property unitOfMeasure
* Enum value Ingestion was added to property unitOfMeasure
* Enum value RateTable was added to property unitOfMeasure
* Enum value Summary was added to property unitOfMeasure
* Enum value Translation was added to property unitOfMeasure

**BillingInvoiceItem** (7 changes)

* Enum value EA was added to property unitOfMeasure
* Enum value Evaluation was added to property unitOfMeasure
* Enum value Guide was added to property unitOfMeasure
* Enum value Ingestion was added to property unitOfMeasure
* Enum value RateTable was added to property unitOfMeasure
* Enum value Summary was added to property unitOfMeasure
* Enum value Translation was added to property unitOfMeasure

**ContinuousForecastGetSessionResponse** (1 change)

* Optional property forecastDataState was added


# Point Changes (1 change)

**GET /api/v2/outbound/contactlists** (1 change)

* Description was changed
