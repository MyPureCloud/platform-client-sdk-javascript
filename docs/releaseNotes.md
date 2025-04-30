Platform API version: 9171




# Major Changes (9 changes)

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Has been deprecated

**GET /api/v2/chats/users/me/settings** (1 change)

* Response 200 type was changed from ChatUserSettings to UserSettingsForChat

**PATCH /api/v2/chats/users/me/settings** (1 change)

* Response 200 type was changed from ChatUserSettings to UserSettingsForChat

**ReverseWhitepagesLookupResult** (1 change)

* Property externalOrganizations was removed

**JourneySegmentRequest** (1 change)

* Property scope was removed

**JourneyViewJob** (2 changes)

* Required property estimatedCompletionMargin was added
* Required property userId was added

**EvaluationResponse** (2 changes)

* Property calibration was changed from Calibration to AddressableEntityRef
* calibration has been made readonly


# Minor Changes (107 changes)

**/api/v2/scripts/published/divisionviews/{scriptId}/variables** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media/uploads** (2 changes)

* Path was added
* Operation POST was added

**ADFS** (1 change)

* Optional property metadataURL was added

**CustomerInteractionCenter** (1 change)

* Optional property metadataURL was added

**GSuite** (1 change)

* Optional property metadataURL was added

**GenericSAML** (1 change)

* Optional property metadataURL was added

**IdentityNow** (1 change)

* Optional property metadataURL was added

**SAMLProvider** (1 change)

* Optional property metadataURL was added

**CustomProvider** (1 change)

* Optional property metadataURL was added

**Okta** (1 change)

* Optional property metadataURL was added

**OneLogin** (1 change)

* Optional property metadataURL was added

**PingIdentity** (1 change)

* Optional property metadataURL was added

**PureEngage** (1 change)

* Optional property metadataURL was added

**Salesforce** (1 change)

* Optional property metadataURL was added

**JourneyAggregateQueryPredicate** (1 change)

* Enum value journeySegmentAssignmentState was added to property dimension

**JourneyAggregationQuery** (1 change)

* Enum value journeySegmentAssignmentState was added to property groupBy

**KnowledgeAggregateQueryPredicate** (1 change)

* Enum value messageType was added to property dimension

**KnowledgeAggregationQuery** (1 change)

* Enum value messageType was added to property groupBy

**ViewFilter** (2 changes)

* Enum value GoogleBusinessProfile was added to property socialChannels
* Optional property deliveryPushed was added

**ReportingExportJobResponse** (1 change)

* Enum value CONTENT_EXPLORATION_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value CONTENT_EXPLORATION_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value CONTENT_EXPLORATION_VIEW was added to property viewType

**ConditionalGroupActivation** (1 change)

* Model was added

**ConditionalGroupActivationCondition** (1 change)

* Model was added

**ConditionalGroupActivationPilotRule** (1 change)

* Model was added

**ConditionalGroupActivationRule** (1 change)

* Model was added

**ConditionalGroupActivationSimpleMetric** (1 change)

* Model was added

**DataSchemaRef** (1 change)

* Model was added

**EvaluationQuestion** (1 change)

* Enum value multipleSelectQuestion was added to property type

**ConversationMessageMetadataContent** (1 change)

* Enum value ListPicker was added to property contentType

**Evaluation** (2 changes)

* Optional property createdDate was added
* Optional property submittedDate was added

**ConversationContentButtonResponse** (1 change)

* Enum value ListPicker was added to property type

**ConversationContentDatePicker** (1 change)

* Optional property location was added

**ConversationContentListPicker** (1 change)

* Model was added

**ConversationContentListPickerItem** (1 change)

* Model was added

**ConversationContentListPickerSection** (1 change)

* Model was added

**ConversationEventPresence** (3 changes)

* Enum value Authenticate was added to property type
* Optional property receivedMessage was added
* Optional property replyMessage was added

**ConversationMessageContent** (2 changes)

* Enum value ListPicker was added to property contentType
* Optional property reactions was added

**ConversationMessagingChannel** (2 changes)

* Optional property type was added
* Optional property publicMetadata was added

**ConversationNormalizedMessage** (2 changes)

* Optional property relatedMessages was added
* Optional property enrichment was added

**ConversationPublicMetadata** (1 change)

* Optional property url was added

**MessageMediaUploadData** (1 change)

* Model was added

**UploadMediaRequest** (1 change)

* Model was added

**DivisionedDomainEntityRef** (1 change)

* Optional property division was added

**UserSettingsForChat** (1 change)

* Model was added

**KnowledgeDocumentsAnswerFilter** (1 change)

* Enum value ExpandedArticle was added to property queryType

**KnowledgeConversationContext** (1 change)

* Optional property messageType was added

**KnowledgeDocumentCopy** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeDocumentPresentation** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**PresentedKnowledgeDocument** (1 change)

* Enum value Generative was added to property surfacingMethod

**KnowledgeDocumentFeedbackResponse** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeDocumentFeedback** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeDocumentView** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeGuestDocumentFeedback** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeGuestDocumentPresentation** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeGuestDocumentView** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**KnowledgeGuestDocumentCopy** (2 changes)

* Enum value ExpandedArticle was added to property queryType
* Enum value Generative was added to property surfacingMethod

**SurveyQuestion** (1 change)

* Enum value multipleSelectQuestion was added to property type

**InteractiveApplication** (1 change)

* Model was added

**RecordingMessagingMessage** (2 changes)

* Enum value InteractiveApplication was added to property contentType
* Optional property socialVisibility was added

**SocialMediaAsyncDetailQuery** (1 change)

* Optional property topicIds was added

**BotSearchResponse** (1 change)

* Enum value GenesysDigitalBotConnector was added to property botType

**ConversationAppSettings** (1 change)

* Optional property sessionDurationSeconds was added

**NotificationsSettings** (1 change)

* Optional property notificationContentType was added

**WebDeployment** (1 change)

* Optional property pushIntegrations was added

**ExpandableWebDeployment** (1 change)

* Optional property pushIntegrations was added

**TimeOffRequestResponse** (3 changes)

* Enum value BlockedDate was added to property substatus
* Enum value ManualApproval was added to property substatus
* Enum value ReviewDate was added to property substatus

**TimeOffRequest** (3 changes)

* Enum value BlockedDate was added to property substatus
* Enum value ManualApproval was added to property substatus
* Enum value ReviewDate was added to property substatus

**TimeOffRequestQueryBody** (3 changes)

* Enum value BlockedDate was added to property substatuses
* Enum value ManualApproval was added to property substatuses
* Enum value ReviewDate was added to property substatuses

**OverrideDate** (1 change)

* Model was added

**ListWrapperOverrideDate** (1 change)

* Model was added

**WorkitemDelta** (3 changes)

* Optional property dateAssignmentStateChanged was added
* Optional property alertTimeoutSeconds was added
* Optional property scoredAgents was added

**WorkitemScoredAgentDelta** (1 change)

* Model was added

**WorkitemsAttributeChangeListWorkitemScoredAgentDelta** (1 change)

* Model was added

**WorkitemsAttributeChangeWorkitemRuleSettings** (1 change)

* Model was added

**WorktypeDelta** (3 changes)

* Optional property flowId was added
* Optional property ruleSettings was added
* Optional property unassignedDivisionContactsEnabled was added

**JourneyAsyncAggregationQuery** (1 change)

* Enum value journeySegmentAssignmentState was added to property groupBy

**KnowledgeAsyncAggregationQuery** (1 change)

* Enum value messageType was added to property groupBy


# Point Changes (7 changes)

**GET /api/v2/externalcontacts/reversewhitepageslookup** (3 changes)

* Summary was changed
* Description was changed for parameter lookupVal
* Description was changed for parameter divisionId

**GET /api/v2/recording/jobs/{jobId}/failedrecordings** (1 change)

* Description was changed for parameter includeTotal

**GET /api/v2/recording/jobs** (1 change)

* Description was changed for parameter includeTotal

**GET /api/v2/textbots/bots/search** (2 changes)

* Description was changed for parameter botId
* Description was changed for parameter pageSize
