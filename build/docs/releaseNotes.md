Platform API version: 11033


## Release Notes

Fixing issue introduced in the Web CJS library of the version 267.0.0


# Major Changes (0 changes)


# Minor Changes (287 changes)

**/api/v2/casemanagement/cases/{caseId}/stages/{stageId}** (1 change)

* Operation patch was added. Summary: Update the attributes of a Stage.

**/api/v2/orgauthorization/trustors** (1 change)

* Operation delete was added. Summary: Delete Bulk Org Trustors

**/api/v2/orgauthorization/trustees** (1 change)

* Operation delete was added. Summary: Delete Bulk Org Trustees

**/api/v2/analytics/agentutilizations/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/agentutilizations/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/agentutilizations/aggregates/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/agentutilizations/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/backgroundassistant/token** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/billing/contracts/{contractId}/billingperiods/{billingPeriodId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/{contractId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices/{invoiceId}/document** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices/{invoiceId}/lines** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/billing/contracts/invoices** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/description** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}/externalid** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/{conversationId}/assistant/copilotcontext** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/videos/{conferenceId}/details** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens/{tokenId}/accounts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/oauth/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens/{tokenId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/open/extensions/googlebusinessprofile/tokens** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/botconnectors/{integrationId}/bots/{botId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/{integrationId}/bots/summaries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/{integrationId}/bots** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/botconnectors/incoming/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/botconnectors/outgoing/messages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/categories/similar** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/intents/customerintents/similar** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/outcomes/attributions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/outcomes/attributions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/outcomes/attributions/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/license/infer/permissions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/documentation/all/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/sms/phonenumbers/alphanumeric** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/groups/dynamicsettings/preview** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/groups/{groupId}/dynamicsettings** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/search/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/search/settings/contentsearch** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/googlebusinessprofile/{googleBusinessProfileIngestionRuleId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/googlebusinessprofile/{googleBusinessProfileIngestionRuleId}/versions/{dataIngestionRuleVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/googlebusinessprofile/{googleBusinessProfileIngestionRuleId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/socialmedia/topics/{topicId}/dataingestionrules/googlebusinessprofile** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/socialmedia/messages/{messageId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}/interactions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/reprocessing/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/me/trustors** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/search/conversation/target** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/search/queuemembers/manage** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/prompts/{promptId}/resources/{languageCode}/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/schedulingpreferences/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulingpreferences/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}/snapshot/{snapshotId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/schedulingpreferences/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/schedulingpreferences** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/schedulingpreferences/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/{workitemId}/accessattributes** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/learning/modules/{moduleId}/rule/migrate** (2 changes)

* Path was added
* Operation POST was added

**AgentUtilizationAggregateDataContainer** (1 change)

* Model was added

**AgentUtilizationAggregateQueryResponse** (1 change)

* Model was added

**AgentUtilizationAggregateQueryClause** (1 change)

* Model was added

**AgentUtilizationAggregateQueryFilter** (1 change)

* Model was added

**AgentUtilizationAggregateQueryPredicate** (1 change)

* Model was added

**AgentUtilizationAggregationQuery** (1 change)

* Model was added

**AgentUtilizationAggregationView** (1 change)

* Model was added

**AgentUtilizationAsyncAggregationQuery** (1 change)

* Model was added

**AgentUtilizationAsyncAggregateQueryResponse** (1 change)

* Model was added

**BillingAiSubItem** (1 change)

* Model was added

**BillingCharge** (1 change)

* Model was added

**BillingContractPeriodDetail** (1 change)

* Model was added

**BillingProduct** (1 change)

* Model was added

**BillingContract** (1 change)

* Model was added

**BillingContractPeriod** (1 change)

* Model was added

**BillingPlan** (1 change)

* Model was added

**BillingPlanItem** (1 change)

* Model was added

**BillingWallet** (1 change)

* Model was added

**Customer** (1 change)

* Model was added

**BillingContractListing** (1 change)

* Model was added

**BillingContractSummary** (1 change)

* Model was added

**BillingInvoiceItem** (1 change)

* Model was added

**BillingInvoiceItemListing** (1 change)

* Model was added

**BillingInvoice** (1 change)

* Model was added

**BillingInvoiceListing** (1 change)

* Model was added

**InvoiceAddress** (1 change)

* Model was added

**CaseDescriptionUpdate** (1 change)

* Model was added

**CaseExternalIdUpdate** (1 change)

* Model was added

**StageUpdate** (1 change)

* Model was added

**CreateJoinVideoResponse** (1 change)

* Model was added

**CopilotContextEntity** (1 change)

* Model was added

**CopilotContextValueItem** (1 change)

* Model was added

**CopilotContextValues** (1 change)

* Model was added

**ParticipantInfo** (1 change)

* Model was added

**VideoConferenceDetails** (1 change)

* Model was added

**GoogleAuthTokenReference** (1 change)

* Model was added

**GoogleBusinessProfileAccountReference** (1 change)

* Model was added

**GoogleBusinessProfileOpenIntegration** (1 change)

* Model was added

**GoogleBusinessProfileOpenIntegrationUpdateRequest** (1 change)

* Model was added

**GoogleBusinessProfileOpenIntegrationRequest** (1 change)

* Model was added

**GoogleBusinessProfileAccount** (1 change)

* Model was added

**GoogleBusinessProfileAccountListing** (1 change)

* Model was added

**GoogleOAuthSettingsResponse** (1 change)

* Model was added

**GoogleAuthToken** (1 change)

* Model was added

**GoogleAuthTokenRequest** (1 change)

* Model was added

**Bot** (1 change)

* Model was added

**BotConnectorIntent** (1 change)

* Model was added

**BotEntity** (1 change)

* Model was added

**BotVersion** (1 change)

* Model was added

**BotConnectorSummary** (1 change)

* Model was added

**BotConnectorVersionSummary** (1 change)

* Model was added

**BotSummaryEntityListing** (1 change)

* Model was added

**BotListing** (1 change)

* Model was added

**IncomingMessageResponse** (1 change)

* Model was added

**IncomingMessageRequest** (1 change)

* Model was added

**InputMessage** (1 change)

* Model was added

**OutgoingMessageResponse** (1 change)

* Model was added

**BotEntityValue** (1 change)

* Model was added

**OutgoingMessageRequest** (1 change)

* Model was added

**ReplyMessage** (1 change)

* Model was added

**SimilarCategoriesResponse** (1 change)

* Model was added

**SimilarCategoryResult** (1 change)

* Model was added

**SimilarCustomerIntentResult** (1 change)

* Model was added

**SimilarCustomerIntentsResponse** (1 change)

* Model was added

**SimilarEntityRef** (1 change)

* Model was added

**SimilarCustomerIntentsRequest** (1 change)

* Model was added

**OutcomeAttributionAsyncResponse** (1 change)

* Model was added

**OutcomeAttributionListing** (1 change)

* Model was added

**OutcomeAttributionRequest** (1 change)

* Model was added

**Touchpoint** (1 change)

* Model was added

**OutcomeAttributionJobStateResponse** (1 change)

* Model was added

**OutcomeAttributionResponseListing** (1 change)

* Model was added

**OutcomeAttributionResultsResponse** (1 change)

* Model was added

**TouchpointResponse** (1 change)

* Model was added

**DocumentationV2SearchAggregation** (1 change)

* Model was added

**DocumentationV2SearchCriteria** (1 change)

* Model was added

**DocumentationV2SearchRequest** (1 change)

* Model was added

**SmsAlphanumericProvision** (1 change)

* Model was added

**DynamicGroupQueryPreview** (1 change)

* Model was added

**DynamicGroupLanguageSkillCondition** (1 change)

* Model was added

**DynamicGroupQuery** (1 change)

* Model was added

**DynamicGroupRoutingSkillCondition** (1 change)

* Model was added

**DynamicGroupSkillCondition** (1 change)

* Model was added

**DynamicGroupDefinition** (1 change)

* Model was added

**OrgSettings** (1 change)

* Model was added

**ContentSearchSetting** (1 change)

* Model was added

**GoogleBusinessProfileDataIngestionRuleResponse** (1 change)

* Model was added

**GoogleBusinessProfileDataIngestionRuleRequest** (1 change)

* Model was added

**GoogleBusinessProfileDataIngestionRuleVersionResponse** (1 change)

* Model was added

**GoogleBusinessProfileDataIngestionRuleVersionResponseEntityListing** (1 change)

* Model was added

**ReprocessInteractionsByJobIdResponse** (1 change)

* Model was added

**ReprocessJobResponse** (1 change)

* Model was added

**CreateReprocessJobRequest** (1 change)

* Model was added

**ReprocessJobEntityListingResponse** (1 change)

* Model was added

**MediaEndpointStatistics** (1 change)

* Model was added

**MediaIceSelectedCandidate** (1 change)

* Model was added

**MediaIceSelectedPair** (1 change)

* Model was added

**MediaIceStatistics** (1 change)

* Model was added

**MediaRtpStatistics** (1 change)

* Model was added

**MediaStatistics** (1 change)

* Model was added

**MediaStatisticsClientInfo** (1 change)

* Model was added

**MediaStatisticsTrunkInfo** (1 change)

* Model was added

**MediaStatisticsListing** (1 change)

* Model was added

**PromptAssetUpload** (1 change)

* Model was added

**AgentSchedulingPreference** (1 change)

* Model was added

**AgentSchedulingPreferenceListing** (1 change)

* Model was added

**QueryAgentSchedulingPreferencesRequest** (1 change)

* Model was added

**AgentSchedulingPreferencesTiebreaker** (1 change)

* Model was added

**BusinessUnitSchedulingPreferencesSettingsResponse** (1 change)

* Model was added

**UpdateBusinessUnitSchedulingPreferencesSettingsRequest** (1 change)

* Model was added

**ContinuousForecastGetSessionResponse** (1 change)

* Model was added

**AggregateHistoricalAvailability** (1 change)

* Model was added

**ComputedData** (1 change)

* Model was added

**ContinuousForecastSessionResponse** (1 change)

* Model was added

**ContinuousForecastTimeSeries** (1 change)

* Model was added

**ContinuousForecastWeeks** (1 change)

* Model was added

**Daily** (1 change)

* Model was added

**HistoricalData** (1 change)

* Model was added

**ModelData** (1 change)

* Model was added

**ModelMetaData** (1 change)

* Model was added

**ModelMetaDataResult** (1 change)

* Model was added

**Outlier** (1 change)

* Model was added

**OutlierData** (1 change)

* Model was added

**OutlierResultBody** (1 change)

* Model was added

**OutlierResultTemplate** (1 change)

* Model was added

**PlanningGroupModel** (1 change)

* Model was added

**QuarterHourly** (1 change)

* Model was added

**SessionFiles** (1 change)

* Model was added

**SessionInfo** (1 change)

* Model was added

**SessionMetaData** (1 change)

* Model was added

**SessionMetaDataResult** (1 change)

* Model was added

**SessionMetricData** (1 change)

* Model was added

**SessionPlanningGroups** (1 change)

* Model was added

**Snapshots** (1 change)

* Model was added

**Weekly** (1 change)

* Model was added

**ContinuousForecastSnapshotResponse** (1 change)

* Model was added

**SnapshotFiles** (1 change)

* Model was added

**SnapshotInfo** (1 change)

* Model was added

**SnapshotMetaData** (1 change)

* Model was added

**SnapshotMetaDataResult** (1 change)

* Model was added

**SnapshotMetricData** (1 change)

* Model was added

**UpdateAgentSchedulingPreferencesRequest** (1 change)

* Model was added

**WorkitemAccessAttributesUpdate** (1 change)

* Model was added

**LearningModuleMigrateResponse** (1 change)

* Model was added


# Point Changes (0 changes)
