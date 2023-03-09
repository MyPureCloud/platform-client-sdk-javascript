Platform API version: 6711


# Major Changes (13 changes)

**/api/v2/recording/localkeys/settings/{settingsId}** (1 change)

* Path /api/v2/recording/localkeys/settings/{settingsId} was removed

**/api/v2/recording/localkeys/settings** (1 change)

* Path /api/v2/recording/localkeys/settings was removed

**POST /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Parameter ignoreErrors was added

**PUT /api/v2/notifications/channels/{channelId}/subscriptions** (1 change)

* Parameter ignoreErrors was added

**GET /api/v2/routing/sms/phonenumbers/{addressId}** (1 change)

* Parameter expand was added

**LocalEncryptionConfigurationListing** (1 change)

* Model LocalEncryptionConfigurationListing was removed

**ChannelMetadata** (1 change)

* Model ChannelMetadata was removed

**Reason** (1 change)

* Model Reason was removed

**PresenceSetting** (1 change)

* Model PresenceSetting was removed

**OpenMessageContent** (1 change)

* Property attachment was changed from ContentAttachment to ConversationContentAttachment

**OpenMessagingChannel** (1 change)

* Property metadata was changed from ChannelMetadata to ConversationChannelMetadata

**OpenNormalizedMessage** (1 change)

* Property reasons was changed from Reason[] to ConversationReason[]

**EventSetting** (1 change)

* Property presence was removed


# Minor Changes (76 changes)

**/api/v2/conversations/participants/attributes/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/dnclists/{dncListId}/customexclusioncolumns** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents** (1 change)

* Response 409 was added

**/api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/speechandtextanalytics/programs/transcriptionengines/dialects** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/infrastructureascode/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/infrastructureascode/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/users/{userId}/skillgroups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/assignments/{assignmentId}/reschedule** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/learning/scheduleslots/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/me/possibleworkshifts** (2 changes)

* Path was added
* Operation POST was added

**ViewFilter** (3 changes)

* Optional property alertRuleIds was added
* Optional property evaluationFormContextIds was added
* Optional property evaluationStatuses was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value GDPR was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value GDPR was added to property serviceName

**AuditLogMessage** (1 change)

* Enum value GDPR was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value GDPR was added to property serviceName

**AuditQueryService** (1 change)

* Enum value GDPR was added to property name

**InstagramId** (1 change)

* Model was added

**InstagramScopedId** (1 change)

* Model was added

**JsonCursorSearchResponse** (1 change)

* Model was added

**ConversationParticipantSearchCriteria** (1 change)

* Model was added

**ConversationParticipantSearchRequest** (1 change)

* Model was added

**DncPatchCustomExclusionColumnsRequest** (1 change)

* Model was added

**DncList** (1 change)

* Optional property customExclusionColumn was added

**DncListCreate** (1 change)

* Optional property customExclusionColumn was added

**AppendToDncActionSettings** (1 change)

* Optional property listType was added

**ActionConfig** (1 change)

* Optional property timeoutSeconds was added

**KnowledgeExportJobDocumentsFilter** (1 change)

* Optional property entities was added

**ApprovalNamespace** (2 changes)

* Enum value callback was added to property namespace
* Enum value presence was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value callback was added to property namespace
* Enum value presence was added to property namespace

**StatusChange** (2 changes)

* Enum value callback was added to property namespace
* Enum value presence was added to property namespace

**ChannelTopic** (2 changes)

* Optional property state was added
* Optional property rejectionReason was added

**ProgramTranscriptionEngines** (1 change)

* Model was added

**TranscriptionEngines** (1 change)

* Model was added

**TranscriptionEnginesRequest** (1 change)

* Model was added

**SupportedDialectsEntityListing** (1 change)

* Model was added

**InfrastructureascodeJob** (1 change)

* Model was added

**AcceleratorInput** (1 change)

* Model was added

**AcceleratorParameter** (1 change)

* Model was added

**UserSkillGroupEntityListing** (1 change)

* Model was added

**DevelopmentActivity** (1 change)

* Enum value External was added to property type

**LearningModule** (1 change)

* Enum value External was added to property type

**LearningAssignmentReschedule** (1 change)

* Model was added

**LearningModuleRequest** (1 change)

* Enum value External was added to property type

**AssignedLearningModule** (1 change)

* Enum value External was added to property type

**LearningScheduleSlotsQueryResponse** (1 change)

* Model was added

**LearningSlot** (1 change)

* Model was added

**LearningSlotFullDayTimeOffMarker** (1 change)

* Model was added

**LearningSlotScheduleActivity** (1 change)

* Model was added

**LearningSlotWfmScheduleActivity** (1 change)

* Model was added

**LearningScheduleSlotsQueryRequest** (1 change)

* Model was added

**WfmServiceGoalImpact** (1 change)

* Model was added

**WfmServiceGoalImpactSettings** (1 change)

* Model was added

**AgentPossibleWorkShiftsResponse** (1 change)

* Model was added

**DailyPossibleShift** (1 change)

* Model was added

**PossibleWorkShiftsForWeek** (1 change)

* Model was added

**AgentPossibleWorkShiftsRequest** (1 change)

* Model was added


# Point Changes (0 changes)
