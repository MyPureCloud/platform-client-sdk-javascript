Platform API version: 9064




# Major Changes (0 changes)


# Minor Changes (67 changes)

**/api/v2/emails/settings/threading** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/conversations/{conversationId}/summaries/{summaryId}/feedback** (1 change)

* Operation patch was added. Summary: Update the feedback for the summary.

**/api/v2/integrations/webhooks/{tokenId}/events** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/prompts/{promptId}/resources/{languageCode}/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}/uploads** (2 changes)

* Path was added
* Operation POST was added

**SummaryAggregateQueryPredicate** (7 changes)

* Enum value copied was added to property dimension
* Enum value editedField was added to property dimension
* Enum value presented was added to property dimension
* Enum value summaryRating was added to property dimension
* Enum value triggerSourceOutcome was added to property dimension
* Enum value wrapUpCodeRating was added to property dimension
* Enum value wrapUpCodeSuggestionSelected was added to property dimension

**SummaryAggregationQuery** (8 changes)

* Enum value copied was added to property groupBy
* Enum value editedField was added to property groupBy
* Enum value presented was added to property groupBy
* Enum value summaryRating was added to property groupBy
* Enum value triggerSourceOutcome was added to property groupBy
* Enum value wrapUpCodeRating was added to property groupBy
* Enum value wrapUpCodeSuggestionSelected was added to property groupBy
* Enum value nConversationSummaryEngagements was added to property metrics

**SummaryAggregationView** (1 change)

* Enum value nConversationSummaryEngagements was added to property target

**Call** (1 change)

* Optional property recordersState was added

**RecordersState** (1 change)

* Model was added

**CallConversation** (1 change)

* Optional property divisions was added

**CallMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**CallbackConversation** (1 change)

* Optional property divisions was added

**CallbackMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**ChatConversation** (1 change)

* Optional property divisions was added

**ChatMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**CobrowseConversation** (1 change)

* Optional property divisions was added

**CobrowseMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**EmailConversation** (1 change)

* Optional property divisions was added

**EmailMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**EmailThreadingSettings** (1 change)

* Model was added

**ConversationContentReaction** (1 change)

* Enum value Rating was added to property reactionType

**MessageConversation** (1 change)

* Optional property divisions was added

**MessageMediaParticipant** (1 change)

* Optional property externalContactInitialDivisionId was added

**CallBasic** (1 change)

* Optional property recordersState was added

**EventMessage** (1 change)

* Enum value CAMPAIGN_BUILD_CONTACT_QUEUE_ERROR was added to property code

**ReplacementTerm** (1 change)

* Enum value INSTAGRAM was added to property type

**SocialHandle** (1 change)

* Enum value INSTAGRAM was added to property type

**ContentLocation** (1 change)

* Model was added

**ContentReaction** (1 change)

* Enum value Rating was added to property reactionType

**MessageContent** (2 changes)

* Enum value Location was added to property contentType
* Optional property location was added

**Reason** (1 change)

* Model was added

**WebhookInvocationResponse** (1 change)

* Model was added

**ConversationInsight** (1 change)

* Optional property outcome was added

**SpeechTextAnalyticsConversationSummary** (1 change)

* Optional property mediaType was added

**PromptAssetUpload** (1 change)

* Model was added

**WebMessagingMessage** (2 changes)

* Optional property status was added
* Optional property reasons was added

**SummaryAsyncAggregationQuery** (8 changes)

* Enum value copied was added to property groupBy
* Enum value editedField was added to property groupBy
* Enum value presented was added to property groupBy
* Enum value summaryRating was added to property groupBy
* Enum value triggerSourceOutcome was added to property groupBy
* Enum value wrapUpCodeRating was added to property groupBy
* Enum value wrapUpCodeSuggestionSelected was added to property groupBy
* Enum value nConversationSummaryEngagements was added to property metrics

**FeedbackUpdateRequest** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Summary was changed
