Platform API version: 6034


# Major Changes (2 changes)

**GET /api/v2/architect/ivrs** (1 change)

* Parameter dnis was added

**PatchAction** (1 change)

* Property webMessagingOfferFields was changed from WebMessagingOfferFields to PatchWebMessagingOfferFields


# Minor Changes (291 changes)

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/categories/{categoryId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups/{groupId}/phrasegroups/{phraseGroupId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/unanswered/groups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels/{labelId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/labels** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations/{variationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/versions/{versionId}/variations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs/{exportJobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/export/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs/{importJobId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/import/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/{searchId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/search/suggestions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/{documentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/guest/sessions/{sessionId}/categories** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/search/{searchId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/knowledge/guest/sessions/{sessionId}/documents/search/suggestions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/guest/sessions** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/recording/jobs** (1 change)

* Response 501 was added

**ReportingExportJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_IMPACT_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_IMPACT_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value PREDICTIVE_ROUTING_IMPACT_VIEW was added to property viewType

**KnowledgeBaseReference** (1 change)

* Model was added

**AuditLogMessage** (5 changes)

* Optional property level was added
* Enum value Rotate was added to property action
* Enum value Restore was added to property action
* Enum value RecordingKey was added to property entityType
* Enum value RecordingKeyConfig was added to property entityType

**AuditQueryEntity** (4 changes)

* Enum value RecordingKey was added to property name
* Enum value RecordingKeyConfig was added to property name
* Enum value Rotate was added to property actions
* Enum value Restore was added to property actions

**Evaluation** (1 change)

* Optional property hasAssistanceFailed was added

**DncList** (1 change)

* Optional property campaignId was added

**DncListCreate** (1 change)

* Optional property campaignId was added

**DialogflowAgent** (1 change)

* Optional property integration was added

**ActionMapAction** (3 changes)

* Optional property actionTargetId was added
* Optional property isPacingEnabled was added
* Optional property props was added

**PatchAction** (3 changes)

* Optional property actionTargetId was added
* Optional property isPacingEnabled was added
* Optional property props was added

**PatchWebMessagingOfferFields** (1 change)

* Model was added

**CategoryReference** (1 change)

* Model was added

**CategoryResponse** (1 change)

* Model was added

**CategoryResponseListing** (1 change)

* Model was added

**CategoryRequest** (1 change)

* Model was added

**KnowledgeBase** (17 changes)

* Enum value en-CA was added to property coreLanguage
* Enum value en-HK was added to property coreLanguage
* Enum value en-IN was added to property coreLanguage
* Enum value en-IE was added to property coreLanguage
* Enum value en-NZ was added to property coreLanguage
* Enum value en-PH was added to property coreLanguage
* Enum value en-SG was added to property coreLanguage
* Enum value en-ZA was added to property coreLanguage
* Enum value de-AT was added to property coreLanguage
* Enum value de-CH was added to property coreLanguage
* Enum value es-AR was added to property coreLanguage
* Enum value es-CO was added to property coreLanguage
* Enum value es-MX was added to property coreLanguage
* Enum value fr-BE was added to property coreLanguage
* Enum value fr-CH was added to property coreLanguage
* Enum value pt-PT was added to property coreLanguage
* Enum value nl-BE was added to property coreLanguage

**KnowledgeCategory** (17 changes)

* Enum value en-CA was added to property languageCode
* Enum value en-HK was added to property languageCode
* Enum value en-IN was added to property languageCode
* Enum value en-IE was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value en-PH was added to property languageCode
* Enum value en-SG was added to property languageCode
* Enum value en-ZA was added to property languageCode
* Enum value de-AT was added to property languageCode
* Enum value de-CH was added to property languageCode
* Enum value es-AR was added to property languageCode
* Enum value es-CO was added to property languageCode
* Enum value es-MX was added to property languageCode
* Enum value fr-BE was added to property languageCode
* Enum value fr-CH was added to property languageCode
* Enum value pt-PT was added to property languageCode
* Enum value nl-BE was added to property languageCode

**KnowledgeSearchDocument** (17 changes)

* Enum value en-CA was added to property languageCode
* Enum value en-HK was added to property languageCode
* Enum value en-IN was added to property languageCode
* Enum value en-IE was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value en-PH was added to property languageCode
* Enum value en-SG was added to property languageCode
* Enum value en-ZA was added to property languageCode
* Enum value de-AT was added to property languageCode
* Enum value de-CH was added to property languageCode
* Enum value es-AR was added to property languageCode
* Enum value es-CO was added to property languageCode
* Enum value es-MX was added to property languageCode
* Enum value fr-BE was added to property languageCode
* Enum value fr-CH was added to property languageCode
* Enum value pt-PT was added to property languageCode
* Enum value nl-BE was added to property languageCode

**KnowledgeExtendedCategory** (17 changes)

* Enum value en-CA was added to property languageCode
* Enum value en-HK was added to property languageCode
* Enum value en-IN was added to property languageCode
* Enum value en-IE was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value en-PH was added to property languageCode
* Enum value en-SG was added to property languageCode
* Enum value en-ZA was added to property languageCode
* Enum value de-AT was added to property languageCode
* Enum value de-CH was added to property languageCode
* Enum value es-AR was added to property languageCode
* Enum value es-CO was added to property languageCode
* Enum value es-MX was added to property languageCode
* Enum value fr-BE was added to property languageCode
* Enum value fr-CH was added to property languageCode
* Enum value pt-PT was added to property languageCode
* Enum value nl-BE was added to property languageCode

**KnowledgeImport** (17 changes)

* Enum value en-CA was added to property languageCode
* Enum value en-HK was added to property languageCode
* Enum value en-IN was added to property languageCode
* Enum value en-IE was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value en-PH was added to property languageCode
* Enum value en-SG was added to property languageCode
* Enum value en-ZA was added to property languageCode
* Enum value de-AT was added to property languageCode
* Enum value de-CH was added to property languageCode
* Enum value es-AR was added to property languageCode
* Enum value es-CO was added to property languageCode
* Enum value es-MX was added to property languageCode
* Enum value fr-BE was added to property languageCode
* Enum value fr-CH was added to property languageCode
* Enum value pt-PT was added to property languageCode
* Enum value nl-BE was added to property languageCode

**KnowledgeDocument** (17 changes)

* Enum value en-CA was added to property languageCode
* Enum value en-HK was added to property languageCode
* Enum value en-IN was added to property languageCode
* Enum value en-IE was added to property languageCode
* Enum value en-NZ was added to property languageCode
* Enum value en-PH was added to property languageCode
* Enum value en-SG was added to property languageCode
* Enum value en-ZA was added to property languageCode
* Enum value de-AT was added to property languageCode
* Enum value de-CH was added to property languageCode
* Enum value es-AR was added to property languageCode
* Enum value es-CO was added to property languageCode
* Enum value es-MX was added to property languageCode
* Enum value fr-BE was added to property languageCode
* Enum value fr-CH was added to property languageCode
* Enum value pt-PT was added to property languageCode
* Enum value nl-BE was added to property languageCode

**KnowledgeGroupStatistics** (1 change)

* Model was added

**UnansweredGroup** (1 change)

* Model was added

**UnansweredGroupSuggestedDocument** (1 change)

* Model was added

**UnansweredPhrase** (1 change)

* Model was added

**UnansweredPhraseGroup** (1 change)

* Model was added

**PhraseAssociations** (1 change)

* Model was added

**UnansweredPhraseGroupUpdateResponse** (1 change)

* Model was added

**UnansweredPhraseGroupPatchRequestBody** (1 change)

* Model was added

**UnansweredGroups** (1 change)

* Model was added

**LabelResponse** (1 change)

* Model was added

**LabelUpdateRequest** (1 change)

* Model was added

**LabelCreateRequest** (1 change)

* Model was added

**LabelListing** (1 change)

* Model was added

**DocumentBody** (1 change)

* Model was added

**DocumentBodyBlock** (1 change)

* Model was added

**DocumentBodyImage** (1 change)

* Model was added

**DocumentBodyList** (1 change)

* Model was added

**DocumentBodyListBlock** (1 change)

* Model was added

**DocumentBodyParagraph** (1 change)

* Model was added

**DocumentBodyVideo** (1 change)

* Model was added

**DocumentContentBlock** (1 change)

* Model was added

**DocumentText** (1 change)

* Model was added

**DocumentVariation** (1 change)

* Model was added

**DocumentVariationContext** (1 change)

* Model was added

**KnowledgeContextReference** (1 change)

* Model was added

**KnowledgeContextValueReference** (1 change)

* Model was added

**KnowledgeDocumentAlternative** (1 change)

* Model was added

**KnowledgeDocumentReference** (1 change)

* Model was added

**KnowledgeDocumentResponse** (1 change)

* Model was added

**KnowledgeDocumentReq** (1 change)

* Model was added

**KnowledgeDocumentVersion** (1 change)

* Model was added

**KnowledgeDocumentVersionListing** (1 change)

* Model was added

**KnowledgeDocumentResponseListing** (1 change)

* Model was added

**DocumentVariationListing** (1 change)

* Model was added

**KnowledgeDocumentVersionVariation** (1 change)

* Model was added

**KnowledgeDocumentVersionVariationListing** (1 change)

* Model was added

**KnowledgeExportJobDocumentsFilter** (1 change)

* Model was added

**KnowledgeExportJobFilter** (1 change)

* Model was added

**KnowledgeExportJobResponse** (1 change)

* Model was added

**KnowledgeExportJobRequest** (1 change)

* Model was added

**KnowledgeImportJobError** (1 change)

* Model was added

**KnowledgeImportJobReport** (1 change)

* Model was added

**KnowledgeImportJobResponse** (1 change)

* Model was added

**KnowledgeImportJobSettings** (1 change)

* Model was added

**KnowledgeImportJobStatistics** (1 change)

* Model was added

**KnowledgeImportJobRequest** (1 change)

* Model was added

**KnowledgeDocumentSearch** (1 change)

* Model was added

**KnowledgeDocumentSearchResult** (1 change)

* Model was added

**KnowledgeDocumentSearchRequest** (1 change)

* Model was added

**SearchUpdateRequest** (1 change)

* Model was added

**SelectedAnswer** (1 change)

* Model was added

**KnowledgeDocumentSuggestion** (1 change)

* Model was added

**KnowledgeDocumentSuggestionResult** (1 change)

* Model was added

**KnowledgeDocumentSuggestionResultDocument** (1 change)

* Model was added

**KnowledgeDocumentSuggestionRequest** (1 change)

* Model was added

**Miner** (1 change)

* Enum value de-de was added to property language

**LimitChangeRequestDetails** (1 change)

* Enum value skills was added to property namespace

**StatusChange** (1 change)

* Enum value skills was added to property namespace

**GuestCategoryReference** (1 change)

* Model was added

**KnowledgeGuestDocument** (1 change)

* Model was added

**KnowledgeGuestDocumentVariation** (1 change)

* Model was added

**KnowledgeGuestDocumentVariationContext** (1 change)

* Model was added

**GuestCategoryResponse** (1 change)

* Model was added

**GuestCategoryResponseListing** (1 change)

* Model was added

**KnowledgeGuestDocumentResponseListing** (1 change)

* Model was added

**KnowledgeDocumentGuestSearch** (1 change)

* Model was added

**KnowledgeDocumentGuestSearchResult** (1 change)

* Model was added

**KnowledgeDocumentGuestSearchRequest** (1 change)

* Model was added

**KnowledgeGuestSessionApp** (1 change)

* Model was added

**KnowledgeGuestDocumentSuggestion** (1 change)

* Model was added

**KnowledgeGuestDocumentSuggestionResult** (1 change)

* Model was added

**KnowledgeGuestSession** (1 change)

* Model was added

**KnowledgeGuestSessionContext** (1 change)

* Model was added

**EvaluationResponse** (1 change)

* Optional property hasAssistanceFailed was added

**EventCoBrowse** (1 change)

* Model was added

**EventPresence** (1 change)

* Model was added

**EventTyping** (1 change)

* Model was added

**MessageEvent** (1 change)

* Model was added

**OrphanRecording** (1 change)

* Optional property region was added

**FlowVersion** (2 changes)

* Optional property dateCheckedIn was added
* Optional property dateSaved was added

**ConversationAppSettings** (1 change)

* Optional property conversationDisconnect was added

**ConversationDisconnectSettings** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseMetric** (1 change)

* Enum value nInvalidScheduleActivities was added to property metric

**LearningAssignmentAggregateParam** (1 change)

* Enum value nInvalidScheduleActivities was added to property metrics


# Point Changes (1 change)

**POST /api/v2/users** (1 change)

* Description was changed
