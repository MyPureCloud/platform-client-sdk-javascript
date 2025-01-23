Platform API version: 8789




# Major Changes (24 changes)

**GET /api/v2/analytics/reporting/settings/dashboards/query** (1 change)

* Parameter dashboardState was added

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Has been deprecated

**PUT /api/v2/conversations/chats/{conversationId}/recordingstate** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Has been deprecated

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Has been deprecated

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Has been deprecated

**GET /api/v2/outbound/messagingcampaigns/divisionviews** (2 changes)

* Parameter contentTemplateId was added
* Parameter campaignStatus was added

**GET /api/v2/outbound/messagingcampaigns** (2 changes)

* Parameter contentTemplateId was added
* Parameter campaignStatus was added

**POST /api/v2/workforcemanagement/historicaldata/validate** (1 change)

* Response 202 type was changed from _undefined_ to ValidationServiceAsyncResponse

**ViewFilter** (1 change)

* Enum value Deleted was removed from property dashboardType


# Minor Changes (43 changes)

**/api/v2/workforcemanagement/historicaldata/importstatus/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**ConversationActivityMetricValue** (2 changes)

* Optional property qualifier was added
* Optional property entityIds was added

**FlowActivityMetricValue** (2 changes)

* Optional property qualifier was added
* Optional property entityIds was added

**RoutingActivityMetricValue** (3 changes)

* Optional property qualifier was added
* Optional property secondaryQualifier was added
* Optional property entityIds was added

**TeamActivityMetricValue** (3 changes)

* Optional property qualifier was added
* Optional property secondaryQualifier was added
* Optional property entityIds was added

**UserActivityMetricValue** (2 changes)

* Optional property qualifier was added
* Optional property entityIds was added

**KnowledgeBaseWithDialectReference** (2 changes)

* Enum value ko-KR was added to property languageCode
* Enum value hi-IN was added to property languageCode

**Message** (1 change)

* Enum value apple was added to property type

**ConversationChannelLocation** (1 change)

* Model was added

**MessageMediaParticipant** (1 change)

* Enum value apple was added to property type

**CampaignSchedule** (1 change)

* Optional property recurrences was added

**SequenceSchedule** (1 change)

* Optional property recurrences was added

**EmailCampaignSchedule** (1 change)

* Optional property recurrences was added

**MessagingCampaignSchedule** (1 change)

* Optional property recurrences was added

**NamedEntityTypeMechanism** (1 change)

* Enum value DynamicDateTime was added to property type

**Button** (3 changes)

* Optional property type was added
* Optional property content was added
* Optional property contentText was added

**MessageFooter** (2 changes)

* Optional property type was added
* Optional property content was added

**MessageHeader** (2 changes)

* Optional property type was added
* Optional property content was added

**WhatsAppDefinition** (3 changes)

* Optional property buttons was added
* Optional property messageFooter was added
* Optional property header was added

**GeneralProgramJobRequest** (1 change)

* Enum value hi-IN was added to property dialect

**LocalizedLabels** (2 changes)

* Enum value PushNotificationTitle was added to property key
* Enum value PushNotificationBody was added to property key

**PushIntegration** (1 change)

* Model was added

**BuFullDayTimeOffMarker** (1 change)

* Optional property delete was added

**HistoricalImportStatusJobResponse** (1 change)

* Model was added

**ValidationServiceAsyncResponse** (1 change)

* Model was added

**BulkJob** (1 change)

* Enum value Terminated was added to property state

**LearningModuleRuleParts** (1 change)

* Enum value User was added to property selector


# Point Changes (19 changes)

**GET /api/v2/conversations/chats/{conversationId}/messages/{messageId}** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/messages** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/typing** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/communications/{communicationId}/messages** (1 change)

* Description was changed

**GET /api/v2/conversations/chats** (1 change)

* Description was changed

**POST /api/v2/conversations/chats** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}** (1 change)

* Description was changed

**PUT /api/v2/conversations/chats/{conversationId}/recordingstate** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}** (1 change)

* Description was changed

**PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}** (1 change)

* Description was changed

**GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}/wrapup** (1 change)

* Description was changed

**DELETE /api/v2/groups/{groupId}/members** (1 change)

* Description was changed for parameter ids

**POST /api/v2/workforcemanagement/historicaldata/validate** (1 change)

* Response 202 was changed from Accepted - Triggering  validation process. to Accepted - Triggering validation process.
