Platform API version: 8209




# Major Changes (16 changes)

**/api/v2/outbound/audits** (1 change)

* Path /api/v2/outbound/audits was removed

**POST /api/v2/externalcontacts/identifierlookup** (1 change)

* Parameter expand was added

**GET /api/v2/routing/sms/phonenumbers** (1 change)

* Parameter supportedContent.id was added

**GET /api/v2/learning/assignments/{assignmentId}/steps/{stepId}** (1 change)

* Parameter defaultShareableContentObject was added

**GET /api/v2/journey/sessions/{sessionId}/events** (1 change)

* Parameter eventType was added

**AuditEntity** (1 change)

* Model AuditEntity was removed

**AuditMessage** (1 change)

* Model AuditMessage was removed

**AuditSearchResult** (1 change)

* Model AuditSearchResult was removed

**AuditUser** (1 change)

* Model AuditUser was removed

**Change** (1 change)

* Model Change was removed

**Entry** (1 change)

* Model Entry was removed

**FacetInfo** (1 change)

* Model FacetInfo was removed

**ServiceContext** (1 change)

* Model ServiceContext was removed

**AuditFacet** (1 change)

* Model AuditFacet was removed

**AuditFilter** (1 change)

* Model AuditFilter was removed

**DialerAuditRequest** (1 change)

* Model DialerAuditRequest was removed


# Minor Changes (71 changes)

**/api/v2/users/agentui/agents/autoanswer/{agentId}/settings** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**POST /api/v2/conversations/calls** (1 change)

* Response 202 was added

**/api/v2/conversations/{conversationId}/suggestions/feedback** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/suggestions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/suggestions/{suggestionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/{conversationId}/suggestions/{suggestionId}/engagement** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/campaigns/{campaignId}** (1 change)

* Operation patch was added. Summary: Update a campaign.

**POST /api/v2/speechandtextanalytics/programs/publishjobs** (1 change)

* Response 405 was added

**PUT /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 202 was added

**DELETE /api/v2/speechandtextanalytics/programs/{programId}** (1 change)

* Response 202 was added

**POST /api/v2/speechandtextanalytics/programs** (1 change)

* Response 202 was added

**/api/v2/employeeengagement/celebrations/{celebrationId}** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/employeeengagement/celebrations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/employeeengagement/recognitions/{recognitionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/employeeengagement/recognitions** (2 changes)

* Path was added
* Operation POST was added

**AutoAnswerSetting** (1 change)

* Model was added

**AutoAnswerSettings** (1 change)

* Model was added

**Feedback** (1 change)

* Model was added

**Article** (1 change)

* Model was added

**Faq** (1 change)

* Model was added

**MetadataAttribute** (1 change)

* Model was added

**Suggestion** (1 change)

* Model was added

**SuggestionCannedResponse** (1 change)

* Model was added

**SuggestionContext** (1 change)

* Model was added

**SuggestionKnowledgeAnswer** (1 change)

* Model was added

**SuggestionKnowledgeArticle** (1 change)

* Model was added

**SuggestionKnowledgeSearch** (1 change)

* Model was added

**SuggestionListing** (1 change)

* Model was added

**SuggestionScript** (1 change)

* Model was added

**SuggestionEngagement** (1 change)

* Model was added

**SuggestionFeedback** (1 change)

* Model was added

**CampaignPatchRequest** (1 change)

* Model was added

**DynamicLineBalancingSettingsPatchRequest** (1 change)

* Model was added

**CampaignRuleParameters** (5 changes)

* Optional property abandonRate was added
* Optional property outboundLineCount was added
* Optional property relativeWeight was added
* Optional property maxCallsPerAgent was added
* Optional property queue was added

**ContactBulkSearchParameters** (1 change)

* Optional property generateDownloadUri was added

**ContactBulkEditRequest** (1 change)

* Optional property generateDownloadUri was added

**KnowledgeDocumentResponse** (1 change)

* Optional property externalUrl was added

**KnowledgeSearchDocumentResponse** (1 change)

* Optional property externalUrl was added

**ContentAttachment** (1 change)

* Optional property contentSizeBytes was added

**ContentReaction** (3 changes)

* Enum value Share was added to property reactionType
* Enum value Comment was added to property reactionType
* Enum value View was added to property reactionType

**MessagingRecipient** (1 change)

* Enum value Topic was added to property idType

**Program** (1 change)

* Optional property topicLinksJob was added

**DeleteProgramResponse** (1 change)

* Model was added

**BotSearchResponse** (2 changes)

* Enum value GenesysDigitalBotFlow was added to property botType
* Enum value GenesysVoiceSurveyFlow was added to property botType

**CelebrationStateParam** (1 change)

* Model was added

**Celebration** (1 change)

* Model was added

**GetCelebrationListing** (1 change)

* Model was added

**SourceEntity** (1 change)

* Model was added

**Recognition** (1 change)

* Model was added

**RecognitionBase** (1 change)

* Model was added

**CreateRecognition** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Description was changed for parameter expand
