Platform API version: 10972




# Major Changes (98 changes)

**DELETE /api/v2/users/me/verifiers/{verifierId}** (3 changes)

* Parameter replacementDefaultVerifierId was added
* Response 204 was removed
* Response 409 type was changed from ErrorBody to _undefined_

**GET /api/v2/casemanagement/cases/{caseId}/associations** (2 changes)

* Parameter before was removed
* Parameter pageSize was changed from string to integer

**GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans** (2 changes)

* Parameter before was removed
* Parameter pageSize was changed from string to integer

**GET /api/v2/casemanagement/cases/{caseId}/stages** (2 changes)

* Parameter before was removed
* Parameter pageSize was changed from string to integer

**GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans** (2 changes)

* Parameter before was removed
* Parameter pageSize was changed from string to integer

**GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps** (2 changes)

* Parameter before was removed
* Parameter pageSize was changed from string to integer

**GET /api/v2/externalcontacts/contacts/{contactId}/journey/segments** (2 changes)

* Parameter expand was added
* Parameter segmentIds was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Operation POST was removed

**GET /api/v2/intents/categories/{categoryId}** (1 change)

* Parameter includeUsage was added

**GET /api/v2/intents/customerintents/{customerIntentId}** (1 change)

* Parameter includeUsage was added

**GET /api/v2/journey/segments** (1 change)

* Parameter displayNames was added

**PATCH /api/v2/scim/groups/{groupId}** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**PATCH /api/v2/scim/v2/groups/{groupId}** (2 changes)

* Parameter attributes was added
* Parameter excludedAttributes was added

**POST /api/v2/workforcemanagement/agentschedules/mine** (1 change)

* Parameter expand was added

**GET /api/v2/billing/contracts/invoices** (1 change)

* Parameter agreementId was added

**BuAgentSchedulesSearchResponse** (1 change)

* Model BuAgentSchedulesSearchResponse was removed

**PublicKeyCredentialCreationResponse** (1 change)

* Property clientExtensionResults was changed from Map<object, object> to ClientExtensionResults

**CaseAssociationQueryEntityListing** (3 changes)

* Property nextUri was removed
* Property selfUri was removed
* Property previousUri was removed

**CaseAssociationListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**CaseplanQueryEntityListing** (3 changes)

* Property nextUri was removed
* Property selfUri was removed
* Property previousUri was removed

**CaseplanListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**CaseListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**CommentListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**StageplanListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**StageListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**StepplanListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**StepListing** (2 changes)

* Property selfUri was removed
* Property previousUri was removed

**WhatsAppBusinessScopedId** (1 change)

* Required property bsuid was added

**TestTopicPhrasePhrase** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**TestTopicPhraseTopic** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**Phrase** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**Topic** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**TopicRequest** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**ListedTopic** (7 changes)

* Property strictness was changed from string to integer
* Enum value 1 was removed from property strictness
* Enum value 55 was removed from property strictness
* Enum value 65 was removed from property strictness
* Enum value 72 was removed from property strictness
* Enum value 85 was removed from property strictness
* Enum value 90 was removed from property strictness

**BuCurrentAgentScheduleSearchResponse** (1 change)

* Property agentSchedules was changed from BuAgentScheduleSearchResponse[] to BuScheduleSearchAgentScheduleResponse[]

**BuAsyncAgentSchedulesSearchResponse** (1 change)

* Property result was changed from BuAgentSchedulesSearchResponse to BuAgentSchedulesSearchResponseBuAgentScheduleSearchResponse

**BillingCharge** (1 change)

* Property fairuseQuantity was removed

**BillingContractPeriodDetail** (1 change)

* Property wallets was removed

**BillingContractListing** (1 change)

* Property entities was changed from BillingContract[] to BillingContractSummary[]

**BillingInvoiceItem** (1 change)

* Property quantity was changed from integer to number


# Minor Changes (206 changes)

**DELETE /api/v2/users/me/verifiers/{verifierId}** (1 change)

* Response 200 was added

**/api/v2/users/{userId}/verifiers/{verifierId}** (1 change)

* Operation get was added. Summary: Get a verifier

**PATCH /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}** (1 change)

* Response 501 was added

**POST /api/v2/agentic/virtualagents/{virtualAgentId}/versions** (1 change)

* Response 501 was added

**/api/v2/conversations/screenmonitors** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/screenmonitors/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcriptoutline** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/trunkbasesettings/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/trunkbasesettings/{trunkBaseId}/metrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/deletions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/deletions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/forecast/uploadurls** (2 changes)

* Path was added
* Operation POST was added

**AuthenticationExtensionsLargeBlobOutputs** (1 change)

* Model was added

**AuthenticationExtensionsPRFOutputs** (1 change)

* Model was added

**ClientExtensionResults** (1 change)

* Model was added

**CredentialPropertiesOutput** (1 change)

* Model was added

**DeleteVerifierResponse** (1 change)

* Model was added

**PureCloud** (2 changes)

* Optional property nativeLoginExceptionsEnabled was added
* Optional property nativeLoginExceptionGroupIds was added

**OrgAuthSettings** (1 change)

* Optional property ssoLoginFirst was added

**AgenticVirtualAgentMcpSchemas** (1 change)

* Model was added

**AgenticVirtualAgentRepetitionCheck** (1 change)

* Enum value VeryLoose was added to property similarity

**AgenticVirtualAgentTool** (1 change)

* Enum value MCP was added to property type

**AgenticVirtualAgentToolInput** (1 change)

* Optional property dependencyOnly was added

**AnalyticsAgentStateAgentWorkitemResult** (1 change)

* Model was added

**AgentStateQueryRequest** (5 changes)

* Enum value workitemDateDue was added to property userOrderBy
* Enum value workitemDateExpires was added to property userOrderBy
* Enum value workitemDateStatusChanged was added to property userOrderBy
* Enum value workitemDateAssignmentStateChanged was added to property userOrderBy
* Enum value workitemDateCreated was added to property userOrderBy

**AgentStateWorkitemFilter** (1 change)

* Model was added

**AgentStateWorkitemQueryClause** (1 change)

* Model was added

**AgentStateWorkitemQueryPredicate** (1 change)

* Model was added

**AgentStateWorkitemAssignmentStateCount** (1 change)

* Model was added

**AgentStateWorkitemStatusCategoryCount** (1 change)

* Model was added

**ReportingTurn** (5 changes)

* Optional property botFlowInvocationEvents was added
* Optional property dateInputStarted was added
* Optional property toolCalls was added
* Optional property guardrailEvents was added
* Optional property executionFrameId was added

**ReportingTurnToolCall** (1 change)

* Enum value MCP was added to property toolType

**ViewFilter** (2 changes)

* Enum value linkedin was added to property messageTypes
* Enum value LinkedIn was added to property botMessageTypes

**ReportingExportJobResponse** (4 changes)

* Enum value CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (4 changes)

* Enum value CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (4 changes)

* Enum value CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_CASE_PERFORMANCE_DETAIL_VIEW was added to property viewType

**Copilot** (1 change)

* Optional property emailSummaryGenerationConfig was added

**CopilotCondition** (1 change)

* Enum value ConsultJoin was added to property conditionType

**KnowledgeBaseWithDialectReference** (6 changes)

* Enum value ca-ES was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value zh-HK was added to property languageCode
* Enum value zh-TW was added to property languageCode
* Enum value zh-CN was added to property languageCode
* Enum value ar-SA was added to property languageCode

**OutboundBlendingSettings** (1 change)

* Optional property active was added

**ContactIdentifier** (1 change)

* Optional property portfolioId was added

**WhatsAppBusinessScopedId** (2 changes)

* Optional property parent was added
* Optional property portfolioId was added

**WhatsAppId** (2 changes)

* Optional property username was added
* Optional property whatsAppBusinessScopedIds was added

**Callback** (1 change)

* Optional property clientIpAddress was added

**Message** (1 change)

* Enum value linkedin was added to property type

**CampaignIdentityResolutionConfig** (1 change)

* Model was added

**CallbackMediaParticipant** (1 change)

* Optional property clientIpAddress was added

**MessageMediaParticipant** (1 change)

* Enum value linkedin was added to property type

**ScreenMonitoringConversation** (1 change)

* Model was added

**ScreenMonitoringConversationEntityListing** (1 change)

* Model was added

**ScreenMonitoringParticipant** (1 change)

* Model was added

**Suggestion** (2 changes)

* Enum value ConsultJoin was added to property triggerType
* Optional property suggestedKnowledgeAnswer was added

**ConversationSessionSummary** (7 changes)

* Optional property latestCommunication was added
* Optional property labels was added
* Optional property queue was added
* Optional property triggerSource was added
* Optional property summarySourceType was added
* Optional property triggerType was added
* Optional property lastEditedBy was added

**ConversationSummary** (7 changes)

* Optional property latestCommunication was added
* Optional property labels was added
* Optional property queue was added
* Optional property triggerSource was added
* Optional property summarySourceType was added
* Optional property triggerType was added
* Optional property lastEditedBy was added

**CallbackBasic** (1 change)

* Optional property clientIpAddress was added

**CampaignRuleOutboundBlendingSettings** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value AGENT_APPROACHING_ACTIVE_CAMPAIGNS_LIMIT was added to property code
* Enum value CAMPAIGN_STOPPED_AGENT_ACTIVE_LIMIT_EXCEEDED was added to property code

**GuideSessionTurnRequest** (1 change)

* Optional property conversationId was added

**CustomerIntentUsage** (1 change)

* Model was added

**IntentsCategory** (1 change)

* Optional property usage was added

**CustomerIntentResponse** (1 change)

* Optional property usage was added

**KnowledgeSearchResult** (2 changes)

* Optional property failureReason was added
* Optional property message was added

**OperationalEvent** (2 changes)

* Optional property referenceId was added
* Optional property referenceType was added

**QualityAuditLogMessage** (3 changes)

* Enum value VideoConsentGranted was added to property action
* Enum value VideoConsentDenied was added to property action
* Enum value VideoConsentNotCollected was added to property action

**CommonRule** (3 changes)

* Optional property muted was added
* Optional property dateStartMute was added
* Optional property dateEndMute was added

**ModifiableRuleProperties** (3 changes)

* Optional property muted was added
* Optional property dateStartMute was added
* Optional property dateEndMute was added

**SpeechTextAnalyticsConversationSummary** (2 changes)

* Optional property communicationId was added
* Optional property labels was added

**TestTopicPhrasePhrase** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**TestTopicPhraseTopic** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**Phrase** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**Topic** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**TopicRequest** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**ListedTopic** (6 changes)

* Enum value 1 was added to property strictness
* Enum value 55 was added to property strictness
* Enum value 65 was added to property strictness
* Enum value 72 was added to property strictness
* Enum value 85 was added to property strictness
* Enum value 90 was added to property strictness

**TranscriptOutlineResponse** (1 change)

* Model was added

**TranscriptOutlineSegment** (1 change)

* Model was added

**TrunkBaseMetrics** (1 change)

* Model was added

**TrunkBaseMetricsEntityListing** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value SURVEYFORMCONTEXT was added to property type

**DependencyObject** (1 change)

* Enum value SURVEYFORMCONTEXT was added to property type

**MessengerSettings** (1 change)

* Optional property richSurveyEnabled was added

**ActivityPlanOccurrenceListItem** (1 change)

* Model was added

**ActivityPlanOccurrenceListing** (1 change)

* Model was added

**BuScheduleSummary** (1 change)

* Model was added

**ActivityPlanOccurrenceResponse** (1 change)

* Model was added

**ActivityPlanOccurrenceSessionWithAttendees** (1 change)

* Model was added

**ActivityPlanOccurrenceViolation** (1 change)

* Model was added

**ActivityPlanSessionViolation** (1 change)

* Model was added

**ActivityPlanUnscheduledAttendee** (1 change)

* Model was added

**ActivityPlanViolationDetails** (1 change)

* Model was added

**CapacityPlanResponse** (1 change)

* Optional property importedForecast was added

**CapacityPlanRequest** (1 change)

* Optional property importedForecast was added

**UpdateCapacityPlanRequest** (1 change)

* Optional property importedForecast was added

**CopyCapacityPlanRequest** (1 change)

* Optional property importedForecast was added

**CapacityPlanForecastActualValues** (1 change)

* Model was added

**CapacityPlanForecastDistribution** (1 change)

* Model was added

**CapacityPlanForecastDistributionValues** (1 change)

* Model was added

**CapacityPlanForecastImportSchema** (1 change)

* Model was added

**CapacityPlanForecastImportUpload** (1 change)

* Model was added

**CapacityPlanForecastImportUploadResponse** (1 change)

* Model was added

**CapacityPlanForecastPlanningGroup** (1 change)

* Model was added

**CapacityPlanForecastImportUploadRequest** (1 change)

* Model was added

**BuCurrentAgentScheduleSearchResponse** (1 change)

* Optional property visibilityRange was added

**BuScheduleSearchAgentScheduleResponse** (1 change)

* Model was added

**AgentMuScheduleResult** (1 change)

* Optional property visibilityRange was added

**BuAgentScheduleSearchResponse** (1 change)

* Optional property workPlansPerWeek was added

**BuAgentSchedulesSearchResponseBuAgentScheduleSearchResponse** (1 change)

* Model was added

**BillingAiSubItem** (1 change)

* Model was added

**BillingCharge** (3 changes)

* Optional property fairuseAllocation was added
* Optional property fairuseAmount was added
* Optional property aiSubItems was added

**BillingContract** (2 changes)

* Optional property organizations was added
* Optional property wallets was added

**BillingContractSummary** (1 change)

* Model was added

**BillingInvoice** (1 change)

* Optional property agreementIds was added

**SimilarCategoryResult** (1 change)

* Optional property usage was added


# Point Changes (11 changes)

**DELETE /api/v2/users/me/verifiers/{verifierId}** (1 change)

* Response 409 was changed from The request conflicts with the current state of the target resource. to The verifier state changed during deletion

**GET /api/v2/casemanagement/cases/{caseId}/associations** (2 changes)

* Description was changed for parameter after
* Description was changed for parameter pageSize

**GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans** (2 changes)

* Description was changed for parameter after
* Description was changed for parameter pageSize

**GET /api/v2/casemanagement/cases/{caseId}/stages** (2 changes)

* Description was changed for parameter after
* Description was changed for parameter pageSize

**GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans** (2 changes)

* Description was changed for parameter after
* Description was changed for parameter pageSize

**GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps** (2 changes)

* Description was changed for parameter after
* Description was changed for parameter pageSize
