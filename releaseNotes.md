Platform API version: 6449


# Major Changes (13 changes)

**GET /api/v2/languageunderstanding/domains/{domainId}/feedback** (1 change)

* Parameter language was added

**GET /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}** (2 changes)

* Parameter draftIntentId was added
* Parameter draftTopicId was added

**GET /api/v2/languageunderstanding/miners** (1 change)

* Parameter minerType was added

**POST /api/v2/languageunderstanding/domains/{domainId}/versions** (1 change)

* Parameter includeUtterances was added

**VipBackup** (1 change)

* Model VipBackup was removed

**VipCallMediaSettings** (1 change)

* Model VipCallMediaSettings was removed

**VipMediaSettings** (1 change)

* Model VipMediaSettings was removed

**VipRouting** (1 change)

* Model VipRouting was removed

**Queue** (1 change)

* Property vipRouting was removed

**QueueRequest** (1 change)

* Property vipRouting was removed

**UserQueue** (1 change)

* Property vipRouting was removed

**CreateQueueRequest** (1 change)

* Property vipRouting was removed


# Minor Changes (84 changes)

**/api/v2/outbound/dnclists/{dncListId}/emailaddresses** (2 changes)

* Operation delete was added. Summary: Deletes all or expired email addresses from a DNC list.
* Operation patch was added. Summary: Add emails to or Delete emails from a DNC list.

**GET /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 501 was added

**POST /api/v2/outbound/dnclists/{dncListId}/export** (1 change)

* Response 501 was added

**/api/v2/outbound/dnclists/{dncListId}/phonenumbers** (2 changes)

* Operation delete was added. Summary: Deletes all or expired phone numbers from a DNC list.
* Operation patch was added. Summary: Add numbers to or delete numbers from a DNC list.

**PUT /api/v2/outbound/dnclists/{dncListId}** (1 change)

* Response 501 was added

**POST /api/v2/outbound/dnclists** (1 change)

* Response 501 was added

**/api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/miners/{minerId}/topics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}/phrases/{phraseId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/telephony/mediaregions** (2 changes)

* Path was added
* Operation GET was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value errorCode was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value errorCode was added to property groupBy

**FlowAggregateQueryPredicate** (1 change)

* Enum value errorCode was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value errorCode was added to property groupBy

**ReportingTurnAction** (1 change)

* Enum value FindGroupAction was added to property actionType

**ViewFilter** (1 change)

* Optional property stationErrors was added

**ReportingExportJobResponse** (2 changes)

* Enum value AGENT_SCORECARD_INSIGHTS_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_INSIGHTS_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value AGENT_SCORECARD_INSIGHTS_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_INSIGHTS_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value AGENT_SCORECARD_INSIGHTS_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_SCORECARD_INSIGHTS_DETAIL_VIEW was added to property viewType

**AuditLogMessage** (3 changes)

* Enum value Remove was added to property action
* Enum value UserLanguage was added to property entityType
* Enum value UserSkill was added to property entityType

**EntityChange** (2 changes)

* Enum value UserLanguage was added to property entityType
* Enum value UserSkill was added to property entityType

**InitiatingAction** (1 change)

* Enum value Remove was added to property actionContext

**AuditQueryEntity** (3 changes)

* Enum value UserLanguage was added to property name
* Enum value UserSkill was added to property name
* Enum value Remove was added to property actions

**DirectRouting** (1 change)

* Model was added

**DirectRoutingCallMediaSettings** (1 change)

* Model was added

**DirectRoutingMediaSettings** (1 change)

* Model was added

**InboundRoute** (1 change)

* Optional property historyInclusion was added

**Queue** (1 change)

* Optional property directRouting was added

**NoteListing** (1 change)

* Optional property partialResults was added

**ContactListing** (1 change)

* Optional property partialResults was added

**RelationshipListing** (1 change)

* Optional property partialResults was added

**ExternalOrganizationListing** (1 change)

* Optional property partialResults was added

**JourneyApp** (1 change)

* Model was added

**NetworkConnectivity** (1 change)

* Model was added

**SdkLibrary** (1 change)

* Model was added

**Campaign** (1 change)

* Optional property dynamicContactQueueingSettings was added

**ContactList** (1 change)

* Optional property columnDataTypeSpecifications was added

**DncPatchEmailsRequest** (1 change)

* Model was added

**DncPatchPhoneNumbersRequest** (1 change)

* Model was added

**MessagingCampaign** (1 change)

* Optional property dynamicContactQueueingSettings was added

**EventCondition** (1 change)

* Enum value App was added to property streamType

**JourneyPattern** (1 change)

* Enum value App was added to property streamType

**AdditionalLanguagesIntent** (1 change)

* Model was added

**AdditionalLanguagesSynonyms** (1 change)

* Model was added

**IntentDefinition** (1 change)

* Optional property additionalLanguages was added

**NamedEntityTypeItem** (1 change)

* Optional property additionalLanguages was added

**NluFeedbackResponse** (1 change)

* Optional property language was added

**NluFeedbackRequest** (1 change)

* Optional property language was added

**Draft** (1 change)

* Optional property topics was added

**Miner** (7 changes)

* Optional property minerType was added
* Optional property errorInfo was added
* Optional property warningInfo was added
* Optional property participantType was added
* Optional property conversationsFetchedCount was added
* Optional property conversationsValidCount was added
* Optional property getminedItemCount was added

**DraftRequest** (1 change)

* Optional property topics was added

**MinerExecuteRequest** (1 change)

* Optional property participantType was added

**MinerTopic** (1 change)

* Model was added

**TopicPhrase** (1 change)

* Model was added

**MinerTopicsListing** (1 change)

* Model was added

**MinerTopicPhrase** (1 change)

* Model was added

**NluDetectionInput** (1 change)

* Optional property language was added

**RecordingAnnotationFlow** (1 change)

* Model was added

**RecordingAnnotationQueue** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property directRouting was added

**UserQueue** (1 change)

* Optional property directRouting was added

**CreateQueueRequest** (1 change)

* Optional property directRouting was added

**MediaRegions** (1 change)

* Model was added

**VoicemailOrganizationPolicy** (1 change)

* Optional property maximumRecordingTimeSeconds was added


# Point Changes (2 changes)

**GET /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Description was changed

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Description was changed
