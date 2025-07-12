Platform API version: 9401




# Major Changes (4 changes)

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions** (1 change)

* Response 200 type was changed from DataSchema to DataSchemaListing

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions** (1 change)

* Response 200 type was changed from DataSchema to DataSchemaListing

**GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions** (1 change)

* Response 200 type was changed from DataSchema to DataSchemaListing

**OpenMessagingIdentityResolutionConfig** (1 change)

* Property externalSource was changed from AddressableEntityRef to IdentityResolutionExternalSource


# Minor Changes (31 changes)

**/api/v2/chats/users/me/settings** (2 changes)

* Operation post was added. Summary: Create a user's chat settings
* Operation delete was added. Summary: Delete a user's chat settings

**/api/v2/workforcemanagement/teams/{teamId}/adherence** (2 changes)

* Path was added
* Operation GET was added

**ConversationAggregationView** (1 change)

* Enum value tAgentVideoConnected was added to property target

**ConversationDetailQueryPredicate** (1 change)

* Enum value tAgentVideoConnected was added to property metric

**ConversationAggregationQuery** (1 change)

* Enum value tAgentVideoConnected was added to property metrics

**KnowledgeBaseReference** (1 change)

* Enum value cs-CZ was added to property languageCode

**CallbackMediaSettings** (2 changes)

* Optional property maxRetryCount was added
* Optional property retryDelaySeconds was added

**AnswerOption** (1 change)

* Optional property builtInType was added

**EvaluationQuestion** (1 change)

* Optional property multipleSelectOptionQuestions was added

**EvaluationQuestionScore** (1 change)

* Optional property multipleSelectQuestionOptionScores was added

**IdentityResolutionExternalSource** (1 change)

* Model was added

**UserChatSettingsPost** (1 change)

* Model was added

**KnowledgeBase** (1 change)

* Enum value cs-CZ was added to property coreLanguage

**KnowledgeCategory** (1 change)

* Enum value cs-CZ was added to property languageCode

**KnowledgeSearchDocumentV1** (1 change)

* Enum value cs-CZ was added to property languageCode

**KnowledgeExtendedCategory** (1 change)

* Enum value cs-CZ was added to property languageCode

**KnowledgeImport** (1 change)

* Enum value cs-CZ was added to property languageCode

**KnowledgeDocument** (1 change)

* Enum value cs-CZ was added to property languageCode

**KnowledgeBaseCreateRequest** (1 change)

* Enum value cs-CZ was added to property coreLanguage

**KnowledgeDocumentsAnswerFilter** (1 change)

* Enum value cs-CZ was added to property language

**PredictionResults** (2 changes)

* Enum value AI-ADJUSTED-AHT was added to property formula
* Enum value POSITION-IN-QUEUE was added to property formula

**OutboundDomain** (1 change)

* Enum value EmailSmtpDomain was added to property senderType

**CustomSmtpServerRequest** (1 change)

* Model was added

**EmailOutboundDomainResult** (1 change)

* Enum value EmailSmtpDomain was added to property senderType

**OutboundDomainRequest** (1 change)

* Model was added

**ScimPhoneNumber** (1 change)

* Enum value ringcentral was added to property type

**ConversationAsyncAggregationQuery** (1 change)

* Enum value tAgentVideoConnected was added to property metrics


# Point Changes (0 changes)
