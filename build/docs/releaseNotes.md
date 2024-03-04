Platform API version: 7854




# Major Changes (8 changes)

**GET /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**PUT /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**DELETE /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**GET /api/v2/conversations/messaging/integrations/line** (1 change)

* Has been deprecated

**POST /api/v2/outbound/contactlists/{contactListId}/export** (1 change)

* Parameter body was added

**GET /api/v2/workforcemanagement/adhocmodelingjobs/{jobId}** (1 change)

* Has been deprecated

**Miner** (2 changes)

* Property errorInfo was changed from ErrorInfo to MinerErrorInfo
* Property warningInfo was changed from ErrorInfo to MinerErrorInfo


# Minor Changes (98 changes)

**/api/v2/integrations/speech/dialogflowcx/agents/{agentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/dialogflowcx/agents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bot/alias/{aliasId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bot/{botId}/aliases** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/lexv2/bots** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/stt/engines/{engineId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/stt/engines** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/unifiedcommunications/clientapps** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/instances/settings/executiondata** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/flows/instances/settings/loglevels/default** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/flows/{flowId}/instances/settings/loglevels** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/flows/instances/settings/loglevels/characteristics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/instances/settings/loglevels** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/settings/executiondata** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/taskmanagement/worktypes/{worktypeId}/statuses** (1 change)

* Operation get was added. Summary: Get list of statuses for this worktype.

**MessagingCommunicationAnsweredEvent** (1 change)

* Model was added

**MessagingCommunicationDispositionAppliedEvent** (1 change)

* Model was added

**MessagingCommunicationEndedEvent** (1 change)

* Model was added

**MessagingEndTransferEvent** (1 change)

* Model was added

**MessagingExternalEstablishedEvent** (1 change)

* Model was added

**MessagingFlowEstablishedEvent** (1 change)

* Model was added

**MessagingHoldUpdatedEvent** (1 change)

* Model was added

**MessagingInitialConfiguration** (1 change)

* Model was added

**MessagingProgressTransferEvent** (1 change)

* Model was added

**MessagingRoutingEstablishedEvent** (1 change)

* Model was added

**MessagingRoutingTransferEvent** (1 change)

* Model was added

**MessagingUserEstablishedEvent** (1 change)

* Model was added

**MessagingUserTransferEvent** (1 change)

* Model was added

**ConversationAggregationQuery** (1 change)

* Enum value nBotInteractions was added to property metrics

**ConversationAggregationView** (1 change)

* Enum value nBotInteractions was added to property target

**ConversationDetailQueryPredicate** (1 change)

* Enum value nBotInteractions was added to property metric

**ViewFilter** (1 change)

* Optional property agentEmpathyScore was added

**Campaign** (1 change)

* Optional property maxCallsPerAgent was added

**ContactBulkSearchCriteria** (1 change)

* Model was added

**ContactsExportRequest** (1 change)

* Model was added

**DialogflowCXAgent** (1 change)

* Model was added

**DialogflowCXEnvironment** (1 change)

* Model was added

**DialogflowCXProject** (1 change)

* Model was added

**DialogflowCXAgentSummary** (1 change)

* Model was added

**DialogflowCXAgentSummaryEntityListing** (1 change)

* Model was added

**LexV2Bot** (1 change)

* Model was added

**LexV2BotAlias** (1 change)

* Model was added

**LexV2Intent** (1 change)

* Model was added

**LexV2Slot** (1 change)

* Model was added

**LexV2BotAliasEntityListing** (1 change)

* Model was added

**LexV2BotEntityListing** (1 change)

* Model was added

**SttEngineEntity** (1 change)

* Model was added

**SttEngineEntityListing** (1 change)

* Model was added

**MinerErrorInfo** (1 change)

* Model was added

**EvaluationFormResponse** (1 change)

* Optional property publishedVersions was added

**EvaluationCreateBody** (1 change)

* Model was added

**EvaluationCreateCalibration** (1 change)

* Model was added

**EvaluationCreateConversation** (1 change)

* Model was added

**EvaluationCreateEvalForm** (1 change)

* Model was added

**EvaluationCreateQueue** (1 change)

* Model was added

**EvaluationCreateUser** (1 change)

* Model was added

**CommonRuleBulkUpdateNotificationsRequest** (2 changes)

* Optional property typesToAdd was added
* Optional property typesToRemove was added

**UnifiedCommunicationsIntegration** (1 change)

* Model was added

**UnifiedCommunicationsIntegrationListing** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value SURVEYFORM was added to property type

**DependencyObject** (1 change)

* Enum value SURVEYFORM was added to property type

**ConversationAsyncAggregationQuery** (1 change)

* Enum value nBotInteractions was added to property metrics

**MetadataItem** (1 change)

* Model was added

**ExecutionDataFlowSettingsResponse** (1 change)

* Model was added

**ExecutionDataSettingsRequest** (1 change)

* Model was added

**FlowCharacteristics** (1 change)

* Model was added

**FlowLogLevel** (1 change)

* Model was added

**FlowSettingsResponse** (1 change)

* Model was added

**FlowLogLevelRequest** (1 change)

* Model was added

**FlowLogLevelCharacteristicsDefinition** (1 change)

* Model was added

**FlowLogLevelCharacteristicsDefinitions** (1 change)

* Model was added

**FlowSettingsResponseEntityListing** (1 change)

* Model was added

**ExecutionDataGlobalSettingsResponse** (1 change)

* Model was added

**WorkitemStatusListing** (1 change)

* Model was added


# Point Changes (13 changes)

**GET /api/v2/conversations/messaging/integrations/line/{integrationId}** (2 changes)

* Description was changed
* Summary was changed

**PUT /api/v2/conversations/messaging/integrations/line/{integrationId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/conversations/messaging/integrations/line/{integrationId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/conversations/messaging/integrations/line** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/quality/forms/evaluations** (1 change)

* Description was changed

**GET /api/v2/quality/forms/surveys** (1 change)

* Summary was changed

**GET /api/v2/quality/forms** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/adhocmodelingjobs/{jobId}** (2 changes)

* Description was changed
* Summary was changed
