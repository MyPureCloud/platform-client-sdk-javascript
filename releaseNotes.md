Platform API version: 6504


# Major Changes (7 changes)

**GET /api/v2/processautomation/triggers** (1 change)

* Parameter hasDelayBy was added

**GET /api/v2/routing/languages/{languageId}** (2 changes)

* Tag Languages was removed
* Tag Routing was added

**DELETE /api/v2/routing/languages/{languageId}** (2 changes)

* Tag Languages was removed
* Tag Routing was added

**POST /api/v2/telephony/providers/edges/sites/{siteId}/rebalance** (1 change)

* Has been deprecated

**PostTextMessage** (1 change)

* Property content was changed from MessageContent[] to ConversationMessageContent[]


# Minor Changes (40 changes)

**/api/v2/recording/uploads/reports/{reportId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/recording/uploads/reports** (2 changes)

* Path was added
* Operation POST was added

**ReportingTurnAction** (6 changes)

* Enum value FindGrammarAction was added to property actionType
* Enum value FindLanguageSkillAction was added to property actionType
* Enum value FindSkillAction was added to property actionType
* Enum value FindUserAction was added to property actionType
* Enum value FindUserByIdAction was added to property actionType
* Enum value FindUsersByIdAction was added to property actionType

**ViewFilter** (1 change)

* Optional property canonicalContactIds was added

**ReportingExportJobResponse** (1 change)

* Enum value QUEUE_WRAPUP_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value QUEUE_WRAPUP_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value QUEUE_WRAPUP_DETAIL_VIEW was added to property viewType

**KnowledgeConversationContext** (1 change)

* Model was added

**KnowledgeConversationContextResponse** (1 change)

* Model was added

**KnowledgeDocumentSearch** (2 changes)

* Optional property queryType was added
* Optional property conversationContext was added

**KnowledgeDocumentSearchRequest** (2 changes)

* Optional property queryType was added
* Optional property conversationContext was added

**IpAddressRange** (1 change)

* Enum value api was added to property service

**KnowledgeDocumentGuestSearch** (1 change)

* Optional property queryType was added

**KnowledgeDocumentGuestSearchRequest** (1 change)

* Optional property queryType was added

**Trigger** (1 change)

* Optional property delayBySeconds was added

**UpdateTriggerRequest** (1 change)

* Optional property delayBySeconds was added

**CreateTriggerRequest** (1 change)

* Optional property delayBySeconds was added

**RecordingUploadReport** (1 change)

* Model was added

**RecordingUploadReportRequest** (1 change)

* Model was added

**GeneralProgramJobRequest** (1 change)

* Enum value ja-JP was added to property dialect

**Site** (4 changes)

* Optional property mediaRegions was added
* Optional property callerId was added
* Optional property callerName was added
* Optional property cloudProxyForceTurn was added

**PostTextMessage** (2 changes)

* Enum value Event was added to property type
* Enum value Unknown was added to property type

**VoicemailGroupPolicy** (1 change)

* Optional property interactiveResponseRequired was added

**Dependency** (1 change)

* Enum value GRAMMAR was added to property type

**DependencyObject** (1 change)

* Enum value GRAMMAR was added to property type

**ValueWrapperHrisTimeOffType** (1 change)

* Model was added

**HistoricalShrinkageResult** (1 change)

* Optional property businessUnitIds was added


# Point Changes (7 changes)

**GET /api/v2/languages/{languageId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/languages/{languageId}** (1 change)

* Description was changed

**GET /api/v2/languages** (1 change)

* Description was changed

**POST /api/v2/languages** (1 change)

* Description was changed

**GET /api/v2/routing/languages/{languageId}** (1 change)

* Summary was changed

**DELETE /api/v2/routing/languages/{languageId}** (1 change)

* Summary was changed
