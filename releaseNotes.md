Platform API version: 5460


# Major Changes (30 changes)

**POST /api/v2/outbound/dnclists/{dncListId}/phonenumbers** (1 change)

* Parameter expirationDateTime was added

**POST /api/v2/gamification/profiles** (1 change)

* Parameter copyMetrics was added

**GET /api/v2/orphanrecordings/{orphanId}/media** (1 change)

* Parameter mediaFormats was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Parameter mediaFormats was added

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Parameter mediaFormats was added

**GET /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 200 type was changed from QueueMemberEntityListing to QueueMemberEntityListingV1

**PATCH /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 200 type was changed from QueueMemberEntityListing to QueueMemberEntityListingV1

**POST /api/v2/telephony/providers/edges/extensionpools** (1 change)

* Response 409 was removed

**EdgeIdNamePair** (1 change)

* Model EdgeIdNamePair was removed

**CreateOutboundMessagingConversationRequest** (7 changes)

* Enum value facebook was removed from property toAddressMessengerType
* Enum value twitter was removed from property toAddressMessengerType
* Enum value line was removed from property toAddressMessengerType
* Enum value whatsapp was removed from property toAddressMessengerType
* Enum value webmessaging was removed from property toAddressMessengerType
* Enum value instagram was removed from property toAddressMessengerType
* Enum value open was removed from property toAddressMessengerType

**SendAgentlessOutboundMessageResponse** (5 changes)

* Enum value facebook was removed from property messengerType
* Enum value twitter was removed from property messengerType
* Enum value line was removed from property messengerType
* Enum value webmessaging was removed from property messengerType
* Enum value instagram was removed from property messengerType

**SendAgentlessOutboundMessageRequest** (5 changes)

* Enum value facebook was removed from property toAddressMessengerType
* Enum value twitter was removed from property toAddressMessengerType
* Enum value line was removed from property toAddressMessengerType
* Enum value webmessaging was removed from property toAddressMessengerType
* Enum value instagram was removed from property toAddressMessengerType

**QueueMemberEntityListing** (3 changes)

* Property total was removed
* Property lastUri was removed
* Property pageCount was removed

**ExpiredEdgeListing** (1 change)

* Property entities was changed from EdgeIdNamePair[] to DomainEntityRef[]


# Minor Changes (19 changes)

**Team** (1 change)

* Optional property dateCreated was added

**UserStation** (1 change)

* Optional property webRtcCallAppearances was added

**PredictiveRouting** (1 change)

* Optional property respectSkills was added

**AnswerOption** (1 change)

* Optional property assistanceConditions was added

**AssistanceCondition** (1 change)

* Model was added

**EvaluationQuestionScore** (1 change)

* Optional property assistedAnswerId was added

**EvaluationScoringSet** (1 change)

* Optional property transcriptTopics was added

**TopicDuration** (1 change)

* Model was added

**TranscriptTopic** (1 change)

* Model was added

**ConversationEventTyping** (1 change)

* Model was added

**ConversationMessageEvent** (2 changes)

* Enum value Typing was added to property eventType
* Optional property typing was added

**DncListDivisionView** (1 change)

* Optional property dncSourceType was added

**EventMessage** (2 changes)

* Enum value DATA_ACTION_TOO_MANY_REQUESTS was added to property code
* Enum value DATA_ACTION_TOO_MANY_REQUESTS_REMOTE was added to property code

**AutomaticTimeZoneMappingSettings** (1 change)

* Optional property supportedCountries was added

**SurveyQuestionScore** (1 change)

* Optional property assistedAnswerId was added

**QueueMemberEntityListingV1** (1 change)

* Model was added

**LearningModuleReassignSummary** (1 change)

* Model was added


# Point Changes (3 changes)

**POST /api/v2/conversations/messages/agentless** (1 change)

* Description was changed

**GET /api/v2/quality/agents/activity** (1 change)

* Description was changed

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Description was changed for parameter formatId
