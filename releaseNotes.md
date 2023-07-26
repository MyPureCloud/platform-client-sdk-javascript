Platform API version: 7194


# Major Changes (18 changes)

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been undeprecated

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups** (2 changes)

* Parameter dateStart was added
* Parameter dateEnd was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}** (2 changes)

* Parameter dateStart was added
* Parameter dateEnd was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}** (2 changes)

* Parameter dateStart was added
* Parameter dateEnd was added

**SupportedContentProfile** (1 change)

* Model SupportedContentProfile was removed

**MessageConversationEntityListing** (1 change)

* Property entities was changed from EmailConversation[] to MessageConversation[]

**WebDeployment** (1 change)

* Property supportedContentProfile was removed

**ExpandableWebDeployment** (1 change)

* Property supportedContentProfile was removed


# Minor Changes (143 changes)

**/api/v2/emails/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/conversations/messaging/settings/default** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/conversations/messaging/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/messaging/settings/{messageSettingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/messaging/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/messaging/settings/default** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/messaging/settings/{messageSettingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/alerting/alerts/{alertId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/alerting/alerts/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/alerting/alerts/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/alerting/rules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/alerting/rules/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/alerting/rules/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/alerting/rules/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/alerting/rules** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturls** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/barge** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/barge** (2 changes)

* Path was added
* Operation POST was added

**DELETE /api/v2/taskmanagement/workitems/{workitemId}** (1 change)

* Response 409 was added

**DELETE /api/v2/taskmanagement/workitems/schemas/{schemaId}** (1 change)

* Response 409 was added

**BotAggregateQueryPredicate** (1 change)

* Enum value intermediateIntentName was added to property dimension

**BotAggregationQuery** (1 change)

* Enum value intermediateIntentName was added to property groupBy

**AnalyticsEvaluation** (1 change)

* Optional property assigneeApplicable was added

**AnalyticsSession** (2 changes)

* Optional property routingRule was added
* Optional property routingRuleType was added

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value routingRule was added to property dimension
* Enum value routingRuleType was added to property dimension

**ConversationAggregationQuery** (2 changes)

* Enum value routingRule was added to property groupBy
* Enum value routingRuleType was added to property groupBy

**EvaluationDetailQueryPredicate** (1 change)

* Enum value assigneeApplicable was added to property dimension

**FlowAggregateQueryPredicate** (2 changes)

* Enum value routingRule was added to property dimension
* Enum value routingRuleType was added to property dimension

**FlowAggregationQuery** (2 changes)

* Enum value routingRule was added to property groupBy
* Enum value routingRuleType was added to property groupBy

**ViewFilter** (3 changes)

* Optional property hasPciData was added
* Optional property hasPiiData was added
* Optional property isParked was added

**ReportingExportJobResponse** (1 change)

* Enum value QUEUE_ROUTING_PERFORMANCE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value QUEUE_ROUTING_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value QUEUE_ROUTING_PERFORMANCE_VIEW was added to property viewType

**ConditionalGroupRoutingRule** (1 change)

* Enum value ServiceLevel was added to property metric

**Queue** (1 change)

* Optional property suppressInQueueCallRecording was added

**EmailSettings** (1 change)

* Model was added

**MessagingSetting** (1 change)

* Model was added

**MessagingSettingDefaultRequest** (1 change)

* Model was added

**MessagingConfigListing** (1 change)

* Model was added

**MessagingSettingRequest** (1 change)

* Model was added

**MessagingSettingPatchRequest** (1 change)

* Model was added

**ActionMap** (1 change)

* Optional property triggerWithOutcomeQuantileConditions was added

**OutcomeQuantileCondition** (1 change)

* Model was added

**PatchActionMap** (1 change)

* Optional property triggerWithOutcomeQuantileConditions was added

**OutcomeEventScore** (2 changes)

* Optional property quantile was added
* Optional property sessionMaxQuantile was added

**UnansweredPhraseGroupPatchRequestBody** (2 changes)

* Optional property dateStart was added
* Optional property dateEnd was added

**DocumentBodyListItemProperties** (2 changes)

* Optional property unorderedType was added
* Optional property orderedType was added

**DocumentBodyTableCaptionItem** (2 changes)

* Enum value Paragraph was added to property type
* Optional property paragraph was added

**DocumentContentBlock** (2 changes)

* Enum value Video was added to property type
* Optional property video was added

**DocumentListContentBlock** (2 changes)

* Enum value Video was added to property type
* Optional property video was added

**KnowledgeImportJobResponse** (1 change)

* Optional property skipConfirmationStep was added

**KnowledgeImportJobRequest** (1 change)

* Optional property skipConfirmationStep was added

**WebDeploymentsJourneyContext** (1 change)

* Optional property journeyAction was added

**RecordingMessagingMessage** (2 changes)

* Optional property cards was added
* Optional property contentType was added

**AlertingUnreadStatus** (1 change)

* Model was added

**AlertNotification** (1 change)

* Model was added

**AlertRuleProperties** (1 change)

* Model was added

**CommonAlert** (1 change)

* Model was added

**CommonRuleConditions** (1 change)

* Model was added

**CommonRulePredicate** (1 change)

* Model was added

**CommonRulePredicateEntity** (1 change)

* Model was added

**AlertRequest** (1 change)

* Model was added

**UnreadFields** (1 change)

* Model was added

**CommonAlertBulkUpdateRequest** (1 change)

* Model was added

**MuteSnoozeFields** (1 change)

* Model was added

**AlertListing** (1 change)

* Model was added

**GetAlertQuery** (1 change)

* Model was added

**CommonRule** (1 change)

* Model was added

**ModifiableRuleProperties** (1 change)

* Model was added

**CommonRuleBulkUpdateNotificationsRequest** (1 change)

* Model was added

**CommonRuleBulkDeleteRequest** (1 change)

* Model was added

**CommonRuleContainer** (1 change)

* Model was added

**GetRulesQuery** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property suppressInQueueCallRecording was added

**UserQueue** (1 change)

* Optional property suppressInQueueCallRecording was added

**CreateQueueRequest** (1 change)

* Optional property suppressInQueueCallRecording was added

**LabelUtilization** (1 change)

* Model was added

**SpeechTextAnalyticsSettingsResponse** (1 change)

* Optional property textAnalyticsEnabled was added

**SpeechTextAnalyticsSettingsRequest** (1 change)

* Optional property textAnalyticsEnabled was added

**SegmentUrl** (1 change)

* Model was added

**TranscriptUrls** (1 change)

* Model was added

**SupportCenterCompactCategoryModuleTemplate** (1 change)

* Model was added

**SupportCenterDetailedCategoryModuleSidebar** (1 change)

* Model was added

**SupportCenterDetailedCategoryModuleTemplate** (1 change)

* Model was added

**SupportCenterModuleSetting** (2 changes)

* Optional property compactCategoryModuleTemplate was added
* Optional property detailedCategoryModuleTemplate was added

**LearningAssignmentStep** (1 change)

* Model was added

**LearningAssignmentStepScoStructure** (1 change)

* Model was added

**LearningAssignmentStepSignedCookie** (1 change)

* Model was added

**LearningShareableContentObject** (1 change)

* Model was added

**BotAsyncAggregationQuery** (1 change)

* Enum value intermediateIntentName was added to property groupBy

**ConversationAsyncAggregationQuery** (2 changes)

* Enum value routingRule was added to property groupBy
* Enum value routingRuleType was added to property groupBy

**FlowAsyncAggregationQuery** (2 changes)

* Enum value routingRule was added to property groupBy
* Enum value routingRuleType was added to property groupBy


# Point Changes (9 changes)

**GET /api/v2/license/toggles/{featureName}** (1 change)

* Summary was changed

**POST /api/v2/license/toggles/{featureName}** (1 change)

* Summary was changed

**GET /api/v2/telephony/providers/edges/metrics** (1 change)

* Description was changed for parameter edgeIds

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits** (2 changes)

* Description was changed for parameter feature
* Description was changed for parameter divisionId

**GET /api/v2/workforcemanagement/businessunits** (2 changes)

* Description was changed for parameter feature
* Description was changed for parameter divisionId

**GET /api/v2/workforcemanagement/managementunits** (2 changes)

* Description was changed for parameter feature
* Description was changed for parameter divisionId
