Platform API version: 9021




# Major Changes (35 changes)

**/api/v2/organizations/limits/namespaces/{namespaceName}/limits/{limitName}/counts** (1 change)

* Path /api/v2/organizations/limits/namespaces/{namespaceName}/limits/{limitName}/counts was removed

**/api/v2/organizations/limits/namespaces/{namespaceName}/counts** (1 change)

* Path /api/v2/organizations/limits/namespaces/{namespaceName}/counts was removed

**POST /api/v2/webchat/guest/conversations** (1 change)

* Has been deprecated

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Parameter includePauseAnnotationsForScreenRecordings was added

**GET /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Parameter divisionId was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (1 change)

* Has been deprecated

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (1 change)

* Has been deprecated

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (1 change)

* Has been deprecated

**GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Has been deprecated

**DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Has been deprecated

**GET /api/v2/webchat/guest/conversations/{conversationId}/members** (1 change)

* Has been deprecated

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (1 change)

* Has been deprecated

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages** (1 change)

* Has been deprecated

**GET /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Has been deprecated

**PUT /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Has been deprecated

**DELETE /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Has been deprecated

**GET /api/v2/widgets/deployments** (1 change)

* Has been deprecated

**POST /api/v2/widgets/deployments** (1 change)

* Has been deprecated

**ConversationEditedSummary** (1 change)

* Model ConversationEditedSummary was removed

**LimitCount** (1 change)

* Model LimitCount was removed

**LimitCountListing** (1 change)

* Model LimitCountListing was removed

**TimeOffRequestSettings** (1 change)

* Model TimeOffRequestSettings was removed

**GoogleBusinessProfileDataIngestionRuleResponse** (1 change)

* Model GoogleBusinessProfileDataIngestionRuleResponse was removed

**InstagramDataIngestionRuleResponse** (1 change)

* Model InstagramDataIngestionRuleResponse was removed

**DataIngestionRules** (1 change)

* Model DataIngestionRules was removed

**ExternalOrganization** (1 change)

* Property primaryContactId was removed

**ConversationSessionSummary** (1 change)

* Property editedSummary was changed from ConversationEditedSummary to ConversationEditedInput

**ConversationSummary** (1 change)

* Property editedSummary was changed from ConversationEditedSummary to ConversationEditedInput

**SocialTopicResponse** (1 change)

* Property dataIngestionRules was removed

**BuSchedulingSettingsResponse** (2 changes)

* Required property activitySmoothingType was added
* Required property induceScheduleVariability was added

**ManagementUnitSettingsResponse** (1 change)

* Property timeOff was changed from TimeOffRequestSettings to TimeOffSettingsResponse

**ManagementUnitSettingsRequest** (1 change)

* Property timeOff was changed from TimeOffRequestSettings to TimeOffSettingsRequest

**CreateManagementUnitSettingsRequest** (1 change)

* Property timeOff was changed from TimeOffRequestSettings to TimeOffSettingsRequest

**AnalyticsAgentStateCountsResponse** (1 change)

* Property counts was removed


# Minor Changes (145 changes)

**/api/v2/externalcontacts/contacts/exports/{exportId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/contacts/exports** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**DELETE /api/v2/conversations/messaging/integrations/open/{integrationId}** (1 change)

* Response 412 was added

**/api/v2/conversations/messaging/integrations/twitter/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/twitter** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/messaging/integrations/twitter/oauth/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/{integrationId}/twitter/oauth/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/analytics/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/analytics/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/analytics/aggregates/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/analytics/messages/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/analytics/messages/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/analytics/messages/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/twitter/historical/tweets** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/escalationrules/{escalationRuleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/socialmedia/escalationrules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/socialmedia/escalations/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/messages/{messageId}** (2 changes)

* Path was added
* Operation DELETE was added

**AnalyticsSession** (1 change)

* Optional property deliveryPushed was added

**SegmentDetailQueryPredicate** (1 change)

* Enum value deliveryPushed was added to property dimension

**ViewFilter** (8 changes)

* Enum value Open was added to property botMessageTypes
* Enum value Instagram was added to property botMessageTypes
* Enum value Apple was added to property botMessageTypes
* Enum value AudioConnector was added to property botProductList
* Enum value BotConnector was added to property botProductList
* Enum value AllOptionsRejected was added to property botRecognitionFailureReasonList
* Optional property programIds was added
* Optional property categoryIds was added

**ReportingExportJobResponse** (1 change)

* Enum value VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**SelectedCustomCalculationColumns** (1 change)

* Model was added

**ReportingExportMetadataJobResponse** (1 change)

* Enum value VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value VIRTUAL_AGENT_PERFORMANCE_VIEW was added to property viewType

**ScriptEntityListing** (1 change)

* Optional property truncatedDivisions was added

**EvaluationForm** (1 change)

* Optional property aiScoring was added

**EvaluationQuestion** (1 change)

* Optional property contextId was added

**EvaluationQuestionGroup** (1 change)

* Optional property contextId was added

**ContactsExport** (1 change)

* Model was added

**ContactsExportFieldFilter** (1 change)

* Model was added

**ContactsExportFieldListFilter** (1 change)

* Model was added

**ContactsExportFilter** (1 change)

* Model was added

**ContactsExportQueryConditions** (1 change)

* Model was added

**ExportListing** (1 change)

* Model was added

**AiScoring** (3 changes)

* Optional property failureType was added
* Optional property pending was added
* Optional property dateLastChanged was added

**Evaluation** (1 change)

* Optional property aiScoring was added

**EvaluationQuestionScore** (1 change)

* Optional property aiAnswer was added

**DiagnosticsSettings** (1 change)

* Model was added

**OpenRichMediaSetting** (1 change)

* Model was added

**OutboundOnlySetting** (1 change)

* Model was added

**TwitterIntegration** (1 change)

* Model was added

**TwitterIntegrationUpdateRequest** (1 change)

* Model was added

**TwitterIntegrationRequest** (1 change)

* Model was added

**TwitterIntegrationEntityListing** (1 change)

* Model was added

**TwitterSignupOAuthSettings** (1 change)

* Model was added

**TwitterOAuthSettings** (1 change)

* Model was added

**ConversationEditedInput** (1 change)

* Model was added

**FeedbackAddRequest** (1 change)

* Enum value Unknown was added to property rating

**ResponseSet** (1 change)

* Optional property liveSpeakerDetectionMode was added

**EventMessage** (2 changes)

* Enum value CAMPAIGN_WHATSAPP_HEADER_VALUE_LIMIT_EXCEEDED was added to property code
* Enum value CAMPAIGN_WHATSAPP_BUTTON_URL_VALUE_LIMIT_EXCEEDED was added to property code

**ReplacementTerm** (1 change)

* Enum value FACEBOOK was added to property type

**SocialHandle** (1 change)

* Enum value FACEBOOK was added to property type

**DocumentBodyImageProperties** (3 changes)

* Optional property width was added
* Optional property widthWithUnit was added
* Optional property altText was added

**DocumentBodyTableCellBlockProperties** (1 change)

* Optional property widthWithUnit was added

**DocumentBodyTableProperties** (1 change)

* Optional property widthWithUnit was added

**DocumentBodyVideoProperties** (2 changes)

* Optional property width was added
* Optional property height was added

**KnowledgeExportJobFilter** (1 change)

* Optional property exclude was added

**LogCaptureUserConfiguration** (1 change)

* Optional property captureMethod was added

**EvaluationFormResponse** (1 change)

* Optional property aiScoring was added

**EvaluationResponse** (1 change)

* Optional property aiScoring was added

**SocialMediaAggregateDataContainer** (1 change)

* Model was added

**SocialMediaAggregateMetricData** (1 change)

* Model was added

**SocialMediaAsyncAggregateQueryResponse** (1 change)

* Model was added

**SocialMediaStatisticalResponse** (1 change)

* Model was added

**SocialMediaStatisticalSummary** (1 change)

* Model was added

**SocialMediaAsyncAggregationQuery** (1 change)

* Model was added

**SocialMediaQueryClause** (1 change)

* Model was added

**SocialMediaQueryFilter** (1 change)

* Model was added

**SocialMediaQueryPredicate** (1 change)

* Model was added

**SocialMediaAsyncDetailQuery** (1 change)

* Model was added

**SocialMediaAsyncDetailQueryResponse** (1 change)

* Model was added

**SocialMediaDetailDataContainer** (1 change)

* Model was added

**SocialMediaDetailMessageContainer** (1 change)

* Model was added

**SocialMediaMessageEscalationInfo** (1 change)

* Model was added

**DataIngestionRuleResponse** (1 change)

* Model was added

**DataIngestionRuleResponseEntityListing** (1 change)

* Model was added

**TweetUsage** (1 change)

* Model was added

**TwitterDataHistoricalTweetResponse** (1 change)

* Model was added

**TwitterDataHistoricalTweetRequest** (1 change)

* Model was added

**EscalationRuleResponse** (1 change)

* Model was added

**EscalationTarget** (1 change)

* Model was added

**OverrideEscalationTarget** (1 change)

* Model was added

**EscalationRuleRequest** (1 change)

* Model was added

**SocialEscalationResponseEntityListing** (1 change)

* Model was added

**ManualEscalationResponse** (1 change)

* Model was added

**ManualEscalationRequest** (1 change)

* Model was added

**SocialTopicResponse** (1 change)

* Optional property dataIngestionRulesMetadata was added

**Dependency** (1 change)

* Enum value DIGITALBOTCONNECTOR was added to property type

**DependencyObject** (1 change)

* Enum value DIGITALBOTCONNECTOR was added to property type

**BuSchedulingSettingsRequest** (2 changes)

* Optional property activitySmoothingType was added
* Optional property induceScheduleVariability was added

**IgnoredActivityCodeIds** (1 change)

* Model was added

**TimeOffSettingsResponse** (1 change)

* Model was added

**TimeOffSettingsRequest** (1 change)

* Model was added

**ValueWrapperLocalDate** (1 change)

* Model was added

**BuRescheduleRequest** (2 changes)

* Optional property activitySmoothingType was added
* Optional property induceScheduleVariability was added

**SchedulingOptionsRequest** (2 changes)

* Optional property activitySmoothingType was added
* Optional property induceScheduleVariability was added

**WorkitemQueryJobSort** (1 change)

* Enum value dateCreated was added to property name

**WorkitemStatusUpdate** (1 change)

* Optional property autoTerminateWorkitem was added

**WorkitemStatusCreate** (1 change)

* Optional property autoTerminateWorkitem was added

**AnalyticsAgentStateCountsResponse** (1 change)

* Optional property segmentCounts was added


# Point Changes (14 changes)

**POST /api/v2/webchat/guest/conversations** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests** (1 change)

* Description was changed

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages** (1 change)

* Description was changed

**POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Description was changed

**DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/members** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/messages** (1 change)

* Description was changed

**GET /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**PUT /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**DELETE /api/v2/widgets/deployments/{deploymentId}** (1 change)

* Description was changed

**GET /api/v2/widgets/deployments** (1 change)

* Description was changed

**POST /api/v2/widgets/deployments** (1 change)

* Description was changed
