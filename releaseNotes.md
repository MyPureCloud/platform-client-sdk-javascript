Platform API version: 8470




# Major Changes (1 change)

**POST /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs** (1 change)

* Response 409 was removed


# Minor Changes (128 changes)

**/api/v2/outbound/campaigns/{campaignId}/skillcombinations** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/journey/views/{viewId}** (1 change)

* Response 409 was added

**DELETE /api/v2/journey/views/{viewId}** (1 change)

* Response 409 was added

**GET /api/v2/journey/views/{viewId}/versions/{versionId}** (1 change)

* Response 409 was added

**POST /api/v2/journey/views/{viewId}/versions** (1 change)

* Response 409 was added

**GET /api/v2/journey/views** (1 change)

* Response 409 was added

**POST /api/v2/journey/views** (1 change)

* Response 409 was added

**/api/v2/telephony/providers/edges/alertablepresences** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**POST /api/v2/learning/assignments** (1 change)

* Response 202 was added

**PATCH /api/v2/learning/assignments/{assignmentId}/reschedule** (1 change)

* Response 202 was added

**POST /api/v2/learning/assignments/{assignmentId}/reassign** (1 change)

* Response 202 was added

**/api/v2/conversations/{conversationId}/summaries** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/integrations/{integrationId}/options** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce/{sourceId}/sync** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/salesforce** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow/{sourceId}/sync** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/sources/servicenow** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs/{syncJobId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/synchronize/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/translations/languages** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/translations/languages/{languageId}/conversations/{conversationId}** (2 changes)

* Path was added
* Operation GET was added

**Group** (1 change)

* Optional property includeOwners was added

**ConversationActivityEntityData** (1 change)

* Enum value internalmessage was added to property mediaType

**AnalyticsSession** (1 change)

* Enum value internalmessage was added to property mediaType

**FlowActivityEntityData** (1 change)

* Enum value internalmessage was added to property mediaType

**ViewFilter** (2 changes)

* Enum value internalmessage was added to property mediaTypes
* Optional property transcriptDurationMilliseconds was added

**Widget** (1 change)

* Enum value internalmessage was added to property mediaTypes

**CopilotTranscriptionConfig** (1 change)

* Model was added

**Queue** (1 change)

* Optional property cannedResponseLibraries was added

**ConversationChannel** (1 change)

* Enum value InternalMessage was added to property type

**InternalMessage** (1 change)

* Model was added

**InternalMessageDetails** (1 change)

* Model was added

**MessageDetails** (1 change)

* Optional property socialVisibility was added

**Participant** (1 change)

* Optional property internalMessages was added

**ConversationContentReaction** (3 changes)

* Enum value Share was added to property reactionType
* Enum value Comment was added to property reactionType
* Enum value View was added to property reactionType

**ConversationMessagingChannel** (1 change)

* Enum value Apple was added to property platform

**ConversationMessagingToRecipient** (1 change)

* Enum value Topic was added to property idType

**MessageData** (1 change)

* Enum value apple was added to property messengerType

**MessagingIntegration** (1 change)

* Enum value apple was added to property messengerType

**ConversationThreadingWindowSetting** (1 change)

* Enum value apple was added to property messengerType

**FacebookPermission** (1 change)

* Enum value InstagramPublic was added to property type

**ParticipantBasic** (1 change)

* Optional property internalMessages was added

**PagedSkillCombinationListing** (1 change)

* Model was added

**SkillCombinationInfo** (1 change)

* Model was added

**CampaignRuleExecutionSettings** (1 change)

* Model was added

**GroupUpdate** (1 change)

* Optional property includeOwners was added

**GroupCreate** (1 change)

* Optional property includeOwners was added

**QueryCriteria** (1 change)

* Enum value WorkitemId was added to property criteriaKey

**CriteriaItem** (1 change)

* Enum value WorkitemId was added to property key

**FlowExecutionDataQueryResult** (1 change)

* Optional property workitemId was added

**DefaultObjective** (1 change)

* Enum value internalmessage was added to property mediaTypes

**Objective** (1 change)

* Enum value internalmessage was added to property mediaTypes

**CreateObjective** (1 change)

* Enum value internalmessage was added to property mediaTypes

**QualityEvaluationScoreItem** (1 change)

* Enum value internalmessage was added to property mediaTypes

**ReplacementTerm** (1 change)

* Enum value FACEBOOK was added to property type

**LogCaptureUserConfiguration** (1 change)

* Optional property dateStarted was added

**TrustGroup** (1 change)

* Optional property includeOwners was added

**QueueRequest** (1 change)

* Optional property cannedResponseLibraries was added

**UserQueue** (1 change)

* Optional property cannedResponseLibraries was added

**CreateQueueRequest** (1 change)

* Optional property cannedResponseLibraries was added

**GraphApiSettings** (1 change)

* Model was added

**Intent** (1 change)

* Optional property description was added

**Recipient** (1 change)

* Enum value apple was added to property messengerType

**AlertablePresences** (1 change)

* Model was added

**ValidationServiceRequest** (1 change)

* Optional property fileName was added

**WorkitemPagedEntityListing** (2 changes)

* Optional property total was added
* Optional property pageCount was added

**ConversationEditedSummary** (1 change)

* Model was added

**ConversationSessionSummary** (1 change)

* Model was added

**ConversationSummariesGetResponse** (1 change)

* Model was added

**ConversationSummary** (1 change)

* Model was added

**ConversationSummaryFollowup** (1 change)

* Model was added

**ConversationSummaryReason** (1 change)

* Model was added

**ConversationSummaryResolution** (1 change)

* Model was added

**ConversationSummaryWrapupCode** (1 change)

* Model was added

**KnowledgeIntegrationFilter** (1 change)

* Model was added

**KnowledgeIntegrationFilterValue** (1 change)

* Model was added

**KnowledgeIntegrationOptionsResponse** (1 change)

* Model was added

**KnowledgeIntegrationReference** (1 change)

* Model was added

**SourceBaseResponse** (1 change)

* Model was added

**SourceLastSync** (1 change)

* Model was added

**SalesforceSettings** (1 change)

* Model was added

**SalesforceSourceResponse** (1 change)

* Model was added

**SalesforceSourceRequest** (1 change)

* Model was added

**SourceSyncResponse** (1 change)

* Model was added

**KnowledgeSyncJobReport** (1 change)

* Model was added

**KnowledgeSyncJobResponse** (1 change)

* Model was added

**KnowledgeSyncJobStatistics** (1 change)

* Model was added

**ServiceNowSettings** (1 change)

* Model was added

**ServiceNowSourceResponse** (1 change)

* Model was added

**ServiceNowSourceRequest** (1 change)

* Model was added

**SyncStatusRequest** (1 change)

* Model was added

**KnowledgeSyncJobRequest** (1 change)

* Model was added

**TranslateSupportedLanguage** (1 change)

* Model was added

**TranslateSupportedLanguageList** (1 change)

* Model was added

**CommunicationTranslation** (1 change)

* Model was added

**CommunicationTranslationList** (1 change)

* Model was added

**PhraseTranslation** (1 change)

* Model was added

**TranscriptTranslation** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/webdeployments/deployments** (1 change)

* Description was changed for parameter expand

**POST /api/v2/learning/assignments** (1 change)

* Response 200 was changed from successful operation to Assignment created

**PATCH /api/v2/learning/assignments/{assignmentId}/reschedule** (1 change)

* Response 200 was changed from successful operation to Assignment rescheduled
