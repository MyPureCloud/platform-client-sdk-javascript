Platform API version: 10094




# Major Changes (14 changes)

**POST /api/v2/quality/conversations/{conversationId}/evaluations** (1 change)

* Parameter Idempotency-Key was added

**ConversationAttributeFilter** (1 change)

* Model ConversationAttributeFilter was removed

**ConversationSchemaAttribute** (1 change)

* Model ConversationSchemaAttribute was removed

**ConversationSchemaData** (1 change)

* Model ConversationSchemaData was removed

**ConversationSchemaReference** (1 change)

* Property version was removed

**DomainOrganizationRoleUpdate** (9 changes)

* Property defaultRoleId was removed
* Property unusedPermissions was removed
* Property userCount was removed
* Property roleNeedsUpdate was removed
* Property baseLicense was removed
* Property addonLicenses was removed
* Property dateLicenseLastUpdated was removed
* Property base was removed
* Property default was removed


# Minor Changes (35 changes)

**/api/v2/knowledge/settings/{knowledgeSettingId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/search/preview** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/calls/metrics** (2 changes)

* Path was added
* Operation GET was added

**ConversationAttributeProperties** (1 change)

* Model was added

**CopilotContextValue** (3 changes)

* Enum value ActiveIntent was added to property type
* Enum value ConversationAttribute was added to property type
* Optional property conversationAttributeProperties was added

**KnowledgeBaseWithDialectReference** (4 changes)

* Enum value fil-PH was added to property languageCode
* Enum value ms-MY was added to property languageCode
* Enum value he-IL was added to property languageCode
* Enum value el-GR was added to property languageCode

**UserPresence** (1 change)

* Optional property futurePresenceDefinition was added

**Guide** (1 change)

* Enum value Transcripts was added to property source

**CreateGuide** (1 change)

* Enum value Transcripts was added to property source

**KnowledgeGenerationSetting** (1 change)

* Model was added

**KnowledgeSettingsResponse** (1 change)

* Model was added

**V3SourceRef** (1 change)

* Model was added

**KnowledgeSettingsRequest** (1 change)

* Model was added

**KnowledgeSettingListing** (1 change)

* Model was added

**KnowledgeRetrievedReference** (1 change)

* Model was added

**KnowledgeSearchPreviewResponse** (1 change)

* Model was added

**KnowledgeSearchResult** (1 change)

* Model was added

**KnowledgeConversationTurn** (1 change)

* Model was added

**KnowledgeSearchPreviewRequest** (1 change)

* Model was added

**MutableUserPresence** (1 change)

* Optional property futurePresenceDefinition was added

**RecordingMessagingMessage** (1 change)

* Optional property richLink was added

**OrganizationCallMetrics** (1 change)

* Model was added


# Point Changes (0 changes)
