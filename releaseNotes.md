Platform API version: 5231


# Major Changes (15 changes)

**GET /api/v2/recording/jobs/{jobId}/failedrecordings** (3 changes)

* Parameter includeTotal was added
* Parameter cursor was added
* Response 200 type was changed from FailedRecordingsEntityListing to FailedRecordingEntityListing

**GET /api/v2/recording/jobs** (2 changes)

* Parameter includeTotal was added
* Parameter cursor was added

**FailedRecordingsEntityListing** (1 change)

* Model FailedRecordingsEntityListing was removed

**RecordingJobEntityListing** (9 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property firstUri was removed
* Property selfUri was removed
* Property nextUri was removed
* Property previousUri was removed
* Property lastUri was removed
* Property pageCount was removed


# Minor Changes (35 changes)

**/api/v2/speechandtextanalytics/sentiment/dialects** (2 changes)

* Path was added
* Operation GET was added

**AuditLogMessage** (7 changes)

* Enum value ActivityCode was added to property entityType
* Enum value BusinessUnit was added to property entityType
* Enum value KnowledgeDocumentVariation was added to property entityType
* Enum value ManagementUnit was added to property entityType
* Enum value PlanningGroup was added to property entityType
* Enum value ServiceGoalTemplate was added to property entityType
* Enum value WorkPlanRotation was added to property entityType

**AuditQueryEntity** (7 changes)

* Enum value ActivityCode was added to property name
* Enum value BusinessUnit was added to property name
* Enum value KnowledgeDocumentVariation was added to property name
* Enum value ManagementUnit was added to property name
* Enum value PlanningGroup was added to property name
* Enum value ServiceGoalTemplate was added to property name
* Enum value WorkPlanRotation was added to property name

**PredictiveRouting** (1 change)

* Model was added

**NamedEntityTypeMechanism** (1 change)

* Enum value DynamicList was added to property type

**DraftTopics** (5 changes)

* Optional property miner was added
* Optional property conversationCount was added
* Optional property conversationPercent was added
* Optional property utteranceCount was added
* Optional property phraseCount was added

**FailedRecordingEntityListing** (1 change)

* Model was added

**ConversationMetrics** (1 change)

* Optional property participantMetrics was added

**ParticipantMetrics** (8 changes)

* Optional property agentDurationPercentage was added
* Optional property customerDurationPercentage was added
* Optional property silenceDurationPercentage was added
* Optional property ivrDurationPercentage was added
* Optional property acdDurationPercentage was added
* Optional property overtalkDurationPercentage was added
* Optional property otherDurationPercentage was added
* Optional property overtalkCount was added

**MessengerPositionSettings** (1 change)

* Model was added

**MessengerSettings** (1 change)

* Optional property position was added


# Point Changes (0 changes)
