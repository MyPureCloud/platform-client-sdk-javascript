Platform API version: 3320


# Major Changes (27 changes)

**GET /api/v2/messaging/integrations/twitter** (1 change)

* Has been deprecated

**POST /api/v2/messaging/integrations/twitter** (1 change)

* Has been deprecated

**GET /api/v2/messaging/integrations/line** (1 change)

* Has been deprecated

**POST /api/v2/messaging/integrations/line** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/managementunits/{muId}** (1 change)

* Parameter expand was changed from string to array

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Has been deprecated

**GET /api/v2/messaging/stickers/{messengerType}** (1 change)

* Has been deprecated

**GET /api/v2/messaging/integrations/facebook/{integrationId}** (1 change)

* Has been deprecated

**DELETE /api/v2/messaging/integrations/facebook/{integrationId}** (1 change)

* Has been deprecated

**GET /api/v2/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**PUT /api/v2/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**DELETE /api/v2/messaging/integrations/line/{integrationId}** (1 change)

* Has been deprecated

**GET /api/v2/messaging/integrations/facebook** (1 change)

* Has been deprecated

**POST /api/v2/messaging/integrations/facebook** (1 change)

* Has been deprecated

**GET /api/v2/locations/{locationId}** (1 change)

* Parameter expand was added

**GET /api/v2/messaging/integrations/twitter/{integrationId}** (1 change)

* Has been deprecated

**DELETE /api/v2/messaging/integrations/twitter/{integrationId}** (1 change)

* Has been deprecated

**Skill** (1 change)

* Model Skill was removed

**ConversationRoutingData** (3 changes)

* Property queue was changed from Queue to AddressableEntityRef
* Property language was changed from Language to AddressableEntityRef
* Property skills was changed from Skill[] to AddressableEntityRef[]

**ScoredAgent** (1 change)

* Property agent was changed from Agent to AddressableEntityRef

**DataSchema** (1 change)

* Property deleted was removed

**ManagementUnit** (2 changes)

* Property businessUnit was removed
* version has been made readonly

**Agent** (2 changes)

* Property id was removed
* Property selfUri was removed


# Minor Changes (111 changes)

**/api/v2/conversations/messaging/integrations/line/{integrationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/integrations/speech/lex/bot/alias/{aliasId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/dialogflow/agents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/twitter/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/integrations/speech/tts/engines/{engineId}/voices** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{muId}** (1 change)

* Operation patch was added. Summary: Update the requested management unit

**/api/v2/workforcemanagement/managementunits/{muId}/move** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/outcomes/{flowOutcomeId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/recording/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/messaging/integrations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/tts/engines** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/outcomes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/messaging/integrations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/integrations/speech/dialogflow/agents/{agentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/recording/jobs/{jobId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/integrations/speech/lex/bot/{botId}/aliases** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/workforcemanagement/managementunits** (1 change)

* Response 201 was added

**/api/v2/conversations/messaging/stickers/{messengerType}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/facebook** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/speech/tts/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/conversations/messaging/integrations/facebook/{integrationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/integrations/speech/tts/engines/{engineId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messaging/integrations/line** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/messaging/integrations/twitter** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/integrations/speech/lex/bots** (2 changes)

* Path was added
* Operation GET was added

**AddressableEntityRef** (1 change)

* Model was added

**Conversation** (1 change)

* Optional property divisions was added

**ConversationBasic** (1 change)

* Optional property divisions was added

**LocationDefinition** (2 changes)

* Optional property profileImage was added
* Optional property floorplanImage was added

**LocationImage** (1 change)

* Model was added

**SubscriptionOverviewUsage** (1 change)

* Optional property isCancellable was added

**Dependency** (1 change)

* Enum value WIDGET was added to property type

**ConversationProperties** (1 change)

* Optional property isPreferred was added

**ReportingExportJobResponse** (1 change)

* Enum value API_USAGE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value API_USAGE_VIEW was added to property viewType

**LexBot** (1 change)

* Model was added

**LexBotAlias** (1 change)

* Model was added

**LexIntent** (1 change)

* Model was added

**LexSlot** (1 change)

* Model was added

**DialogflowAgentSummary** (1 change)

* Model was added

**DialogflowAgentSummaryEntityListing** (1 change)

* Model was added

**DialogflowProject** (1 change)

* Model was added

**EmailMediaParticipant** (1 change)

* Optional property messageId was added

**EmailMessage** (1 change)

* Optional property historyIncluded was added

**TtsEngineEntity** (1 change)

* Model was added

**TtsVoiceEntity** (1 change)

* Model was added

**TtsVoiceEntityListing** (1 change)

* Model was added

**UpdateManagementUnitRequest** (1 change)

* Model was added

**MoveManagementUnitResponse** (1 change)

* Model was added

**MoveManagementUnitRequest** (1 change)

* Model was added

**CallHistoryConversation** (1 change)

* Optional property wasOutboundCampaign was added

**CallHistoryParticipant** (1 change)

* Optional property outboundCampaign was added

**FlowOutcome** (1 change)

* Model was added

**AsyncConversationQuery** (1 change)

* Model was added

**RecordingJob** (1 change)

* Model was added

**RecordingJobEntityListing** (1 change)

* Model was added

**RecordingJobsQuery** (1 change)

* Model was added

**MessagingIntegration** (1 change)

* Model was added

**MessagingIntegrationEntityListing** (1 change)

* Model was added

**TtsEngineEntityListing** (1 change)

* Model was added

**FlowOutcomeListing** (1 change)

* Model was added

**DependencyObject** (1 change)

* Enum value WIDGET was added to property type

**DialogflowIntent** (1 change)

* Model was added

**DialogflowParameter** (1 change)

* Model was added

**DialogflowAgent** (1 change)

* Model was added

**ExecuteRecordingJobsQuery** (1 change)

* Model was added

**LexBotAliasEntityListing** (1 change)

* Model was added

**QualityAudit** (1 change)

* Optional property jobId was added

**LanguageOverride** (1 change)

* Model was added

**TtsSettings** (1 change)

* Model was added

**Agent** (1 change)

* Optional property stage was added

**LexBotEntityListing** (1 change)

* Model was added


# Point Changes (69 changes)

**GET /api/v2/scim/v2/serviceproviderconfig** (2 changes)

* Summary was changed
* Description was changed for parameter If-None-Match

**GET /api/v2/workforcemanagement/managementunits/{muId}** (1 change)

* Description was changed for parameter muId

**DELETE /api/v2/workforcemanagement/managementunits/{muId}** (2 changes)

* Description was changed for parameter muId
* Response 204 was changed from The management unit was deleted successfully to The management unit was successfully deleted

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (2 changes)

* Summary was changed
* Description was changed for parameter muId

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (2 changes)

* Summary was changed
* Description was changed for parameter muId

**GET /api/v2/scim/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**DELETE /api/v2/scim/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**PATCH /api/v2/scim/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**GET /api/v2/scim/users** (4 changes)

* Summary was changed
* Description was changed for parameter startIndex
* Description was changed for parameter count
* Description was changed for parameter filter

**POST /api/v2/scim/users** (1 change)

* Summary was changed

**GET /api/v2/scim/v2/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/v2/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**DELETE /api/v2/scim/v2/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**PATCH /api/v2/scim/v2/users/{userId}** (3 changes)

* Summary was changed
* Description was changed for parameter userId
* Description was changed for parameter If-Match

**GET /api/v2/scim/v2/users** (4 changes)

* Summary was changed
* Description was changed for parameter startIndex
* Description was changed for parameter count
* Description was changed for parameter filter

**POST /api/v2/scim/v2/users** (1 change)

* Summary was changed

**GET /api/v2/scim/v2/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/v2/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match

**PATCH /api/v2/scim/v2/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match

**GET /api/v2/scim/v2/groups** (4 changes)

* Summary was changed
* Description was changed for parameter startIndex
* Description was changed for parameter count
* Description was changed for parameter filter

**GET /api/v2/scim/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-None-Match

**PUT /api/v2/scim/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match

**PATCH /api/v2/scim/groups/{groupId}** (3 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match

**GET /api/v2/scim/groups** (4 changes)

* Summary was changed
* Description was changed for parameter startIndex
* Description was changed for parameter count
* Description was changed for parameter filter
