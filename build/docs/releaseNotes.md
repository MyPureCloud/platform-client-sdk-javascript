Platform API version: 7992




# Major Changes (32 changes)

**/api/v2/chats/rooms/{roomJid}/pinnedmessages** (1 change)

* Path /api/v2/chats/rooms/{roomJid}/pinnedmessages was removed

**/api/v2/chats/rooms/{roomJid}/pinnedmessages/{pinnedMessageId}** (1 change)

* Path /api/v2/chats/rooms/{roomJid}/pinnedmessages/{pinnedMessageId} was removed

**/api/v2/telephony/providers/edges/availablelanguages** (1 change)

* Path /api/v2/telephony/providers/edges/availablelanguages was removed

**GET /api/v2/authorization/subjects/me** (1 change)

* Parameter includeDuplicates was added

**GET /api/v2/authorization/subjects/{subjectId}** (1 change)

* Parameter includeDuplicates was added

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Has been deprecated

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Has been deprecated

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Has been deprecated

**POST /api/v2/conversations/messages/inbound/open** (1 change)

* Has been deprecated

**PUT /api/v2/conversations/screenshares/{conversationId}/recordingstate** (1 change)

* Has been deprecated

**GET /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**POST /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**GET /api/v2/conversations/messaging/stickers/{messengerType}** (1 change)

* Has been deprecated

**POST /api/v2/outbound/audits** (1 change)

* Has been deprecated

**GET /api/v2/integrations/clientapps/unifiedcommunications** (1 change)

* Has been deprecated

**GET /api/v2/usage/simplesearch/{executionId}/results** (2 changes)

* Parameter after was added
* Parameter pageSize was added

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Has been deprecated

**PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Has been deprecated

**TranscriptionEngines** (1 change)

* Model TranscriptionEngines was removed

**AvailableLanguageList** (1 change)

* Model AvailableLanguageList was removed

**BulkIdsRequest** (1 change)

* Property entities was changed from WritableEntity[] to ExternalContactsEntity[]

**Email** (1 change)

* Property resumeTimestamp was removed

**ProgramTranscriptionEngines** (1 change)

* Property transcriptionEngines was changed from TranscriptionEngines[] to ProgramTranscriptionEngine[]

**TranscriptionEnginesRequest** (1 change)

* Property transcriptionEngines was changed from TranscriptionEngines[] to ProgramTranscriptionEngine[]

**SupportedDialectsEntityListing** (1 change)

* Property entities was changed from TranscriptionEngines[] to SupportedDialectsTranscriptionEngine[]


# Minor Changes (84 changes)

**/api/v2/chats/rooms/{roomJid}/messages/pins** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/chats/rooms/{roomJid}/messages/pins/{pinnedMessageId}** (2 changes)

* Path was added
* Operation DELETE was added

**POST /api/v2/externalcontacts/bulk/contacts** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/contacts/unresolved** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/notes** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/organizations** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/relationships** (1 change)

* Response 422 was added

**/api/v2/fax/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**PUT /api/v2/routing/utilization** (1 change)

* Response 409 was added

**DELETE /api/v2/routing/utilization** (1 change)

* Response 409 was added

**PUT /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 409 was added

**DELETE /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 409 was added

**/api/v2/chats/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/chats/users/{userId}/messages/pins** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/chats/users/{userId}/messages/pins/{pinnedMessageId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/languageunderstanding/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/query/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/query/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/taskmanagement/workitems/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**BotAggregateQueryPredicate** (1 change)

* Enum value botFlowType was added to property dimension

**BotAggregationQuery** (1 change)

* Enum value botFlowType was added to property groupBy

**ReportingTurn** (1 change)

* Enum value SkippedCollection was added to property askActionResult

**ReportingTurnAction** (8 changes)

* Enum value AskSurveyQuestionAction was added to property actionType
* Enum value FindEmergencyGroupAction was added to property actionType
* Enum value FindScheduleAction was added to property actionType
* Enum value FindScheduleGroupAction was added to property actionType
* Enum value EvaluateScheduleAction was added to property actionType
* Enum value EvaluateScheduleGroupAction was added to property actionType
* Enum value SendKnowledgeFeedbackAction was added to property actionType
* Enum value ScreenPopAction was added to property actionType

**ViewFilter** (2 changes)

* Optional property surveyTypes was added
* Optional property surveyResponseStatuses was added

**AuditLogMessage** (1 change)

* Enum value GENESYS_INTERNAL was added to property level

**ConditionalGroupRoutingCondition** (1 change)

* Model was added

**CopilotScoring** (1 change)

* Model was added

**ExternalContactsEntity** (1 change)

* Model was added

**ExternalId** (1 change)

* Model was added

**ExternalSource** (1 change)

* Model was added

**LinkConfiguration** (1 change)

* Model was added

**CampaignLinesUtilization** (1 change)

* Model was added

**FaxConfig** (1 change)

* Model was added

**DefaultObjective** (1 change)

* Optional property initialDirection was added

**Objective** (1 change)

* Optional property initialDirection was added

**CreateObjective** (1 change)

* Optional property initialDirection was added

**Miner** (2 changes)

* Enum value nl-nl was added to property language
* Enum value it-it was added to property language

**ApiUsageQueryResult** (1 change)

* Optional property cursors was added

**QualityAuditLogMessage** (2 changes)

* Enum value GENESYS_INTERNAL was added to property level
* Enum value Download was added to property action

**EngineIntegration** (1 change)

* Model was added

**ProgramTranscriptionEngine** (1 change)

* Model was added

**ProgramTranscriptionEngines** (2 changes)

* Optional property id was added
* Optional property selfUri was added

**SupportedDialectsTranscriptionEngine** (1 change)

* Model was added

**AgentVideoSettings** (1 change)

* Model was added

**BackgroundImageSettings** (1 change)

* Model was added

**UserVideoSettings** (1 change)

* Model was added

**VideoSettings** (1 change)

* Model was added

**BotAsyncAggregationQuery** (1 change)

* Enum value botFlowType was added to property groupBy

**OneOnOne** (1 change)

* Model was added

**GroupByAttribute** (1 change)

* Model was added

**JourneyViewChartMetricResult** (1 change)

* Model was added

**JourneyViewChartMetricResultValue** (1 change)

* Model was added

**JourneyViewChartResult** (1 change)

* Model was added

**NluOrganization** (1 change)

* Model was added

**SupportedEntityTypeStatus** (1 change)

* Model was added

**SupportedLanguagesInfoDefinition** (1 change)

* Model was added

**WorkitemPagedEntityListing** (1 change)

* Model was added

**WorkitemQueryJobError** (1 change)

* Model was added

**WorkitemQueryJobResponse** (1 change)

* Model was added

**WorkitemQueryJobCreate** (1 change)

* Model was added

**WorkitemQueryJobFilter** (1 change)

* Model was added

**WorkitemQueryJobSort** (1 change)

* Model was added


# Point Changes (35 changes)

**POST /api/v2/externalcontacts/bulk/contacts/remove** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/contacts/add** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/contacts/update** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/notes/add** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/notes/remove** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/notes/update** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/organizations/add** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/organizations/remove** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/organizations/update** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/relationships/update** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/relationships/add** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/bulk/relationships/remove** (1 change)

* Response 422 was added

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Description was changed

**GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}** (1 change)

* Description was changed

**POST /api/v2/conversations/messages/inbound/open** (1 change)

* Description was changed

**PUT /api/v2/conversations/screenshares/{conversationId}/recordingstate** (1 change)

* Description was changed

**GET /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/screenshares/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**GET /api/v2/conversations/messaging/stickers/{messengerType}** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/outbound/audits** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/quality/calibrations** (1 change)

* Description was changed

**GET /api/v2/quality/evaluations/query** (1 change)

* Description was changed

**GET /api/v2/speechandtextanalytics/topics** (1 change)

* Description was changed for parameter pageSize

**GET /api/v2/integrations/clientapps/unifiedcommunications** (1 change)

* Description was changed

**GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Description was changed

**PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}** (1 change)

* Description was changed
