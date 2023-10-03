Platform API version: 7379


# Major Changes (3 changes)

**OutcomeEventScore** (1 change)

* Model OutcomeEventScore was removed

**VideoMetadata** (1 change)

* Model VideoMetadata was removed

**OutcomeScoresResult** (1 change)

* Property outcomeScores was changed from OutcomeEventScore[] to OutcomeScore[]


# Minor Changes (35 changes)

**/api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/dictionaryfeedback** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value activeRouting was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**AnalyticsConversationSegment** (2 changes)

* Enum value dndEndpoint was added to property disconnectType
* Enum value dndTransfer was added to property disconnectType

**FlowAggregateQueryPredicate** (1 change)

* Enum value activeRouting was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**TranscriptAggregateQueryPredicate** (2 changes)

* Enum value conversationDuration was added to property dimension
* Enum value handleTime was added to property dimension

**TranscriptAggregationQuery** (1 change)

* Enum value tOtherAudio was added to property metrics

**TranscriptAggregationView** (1 change)

* Enum value tOtherAudio was added to property target

**EventLog** (1 change)

* Enum value IMPORT_TEMPLATE was added to property category

**OutcomeScore** (1 change)

* Model was added

**DictionaryFeedback** (1 change)

* Model was added

**DictionaryFeedbackExamplePhrase** (1 change)

* Model was added

**DictionaryFeedbackEntityListing** (1 change)

* Model was added

**ListedDictionaryFeedback** (1 change)

* Model was added

**MetadataProperty** (1 change)

* Optional property sensitive was added

**ConversationAsyncAggregationQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**ConversationActivityEntityData** (1 change)

* Optional property activeRouting was added

**ConversationActivityResponse** (1 change)

* Enum value activeRouting was added to property entityIdDimension

**ConversationActivityQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**ConversationActivityQueryPredicate** (1 change)

* Enum value activeRouting was added to property dimension

**FlowAsyncAggregationQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**FlowActivityEntityData** (1 change)

* Optional property activeRouting was added

**FlowActivityResponse** (1 change)

* Enum value activeRouting was added to property entityIdDimension

**FlowActivityQuery** (1 change)

* Enum value activeRouting was added to property groupBy

**FlowActivityQueryPredicate** (1 change)

* Enum value activeRouting was added to property dimension

**TranscriptAsyncAggregationQuery** (1 change)

* Enum value tOtherAudio was added to property metrics


# Point Changes (0 changes)
