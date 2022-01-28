Platform API version: 5336


# Major Changes (13 changes)

**GET /api/v2/routing/sms/phonenumbers** (6 changes)

* Parameter phoneNumberType was changed from string to array
* Parameter phoneNumberStatus was changed from string to array
* Parameter countryCode was added
* Parameter sortBy was added
* Parameter sortOrder was added
* Parameter language was added

**GET /api/v2/coaching/appointments** (1 change)

* Parameter intervalCondition was added

**GET /api/v2/coaching/appointments/me** (1 change)

* Parameter intervalCondition was added

**ScoredAgent** (1 change)

* Property agent was changed from AddressableEntityRef to DomainEntityRef

**DraftRequest** (1 change)

* Property topic was removed

**KpiResult** (3 changes)

* Enum value Voice was removed from property mediaType
* Enum value Email was removed from property mediaType
* Enum value Message was removed from property mediaType


# Minor Changes (93 changes)

**BotAggregationQuery** (1 change)

* Enum value oBotSessionQuery was added to property metrics

**BotAggregationView** (1 change)

* Enum value oBotSessionQuery was added to property target

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value conversationInitiator was added to property dimension
* Enum value extendedDeliveryStatus was added to property dimension

**ConversationAggregationQuery** (2 changes)

* Enum value conversationInitiator was added to property groupBy
* Enum value extendedDeliveryStatus was added to property groupBy

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property conversationInitiator was added

**AnalyticsSession** (1 change)

* Optional property extendedDeliveryStatus was added

**SegmentDetailQueryPredicate** (1 change)

* Enum value extendedDeliveryStatus was added to property dimension

**AnalyticsConversation** (1 change)

* Optional property conversationInitiator was added

**FlowAggregateQueryPredicate** (2 changes)

* Enum value conversationInitiator was added to property dimension
* Enum value extendedDeliveryStatus was added to property dimension

**FlowAggregationQuery** (2 changes)

* Enum value conversationInitiator was added to property groupBy
* Enum value extendedDeliveryStatus was added to property groupBy

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value SCIM was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value SCIM was added to property serviceName

**AuditLogMessage** (6 changes)

* Enum value SCIM was added to property serviceName
* Enum value AnalyticsReportingSettings was added to property entityType
* Enum value Credential was added to property entityType
* Enum value ResponseAsset was added to property entityType
* Enum value TimeOffLimit was added to property entityType
* Enum value TimeOffPlan was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value SCIM was added to property serviceName

**AuditQueryEntity** (5 changes)

* Enum value AnalyticsReportingSettings was added to property name
* Enum value Credential was added to property name
* Enum value ResponseAsset was added to property name
* Enum value TimeOffLimit was added to property name
* Enum value TimeOffPlan was added to property name

**AuditQueryService** (1 change)

* Enum value SCIM was added to property name

**DefaultObjective** (2 changes)

* Optional property topics was added
* Optional property topicIdsFilterType was added

**Objective** (2 changes)

* Optional property topics was added
* Optional property topicIdsFilterType was added

**CreateMetric** (1 change)

* Model was added

**CreateObjective** (1 change)

* Model was added

**Miner** (1 change)

* Enum value Message was added to property mediaType

**DraftTopicRequest** (1 change)

* Model was added

**MinerExecuteRequest** (1 change)

* Enum value Message was added to property mediaType

**OrphanUpdateRequest** (2 changes)

* Optional property exportDate was added
* Optional property integrationId was added

**FailedRecordingEntityListing** (9 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property firstUri was added
* Optional property selfUri was added
* Optional property nextUri was added
* Optional property previousUri was added
* Optional property lastUri was added
* Optional property pageCount was added

**RecordingJobEntityListing** (9 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property firstUri was added
* Optional property selfUri was added
* Optional property nextUri was added
* Optional property previousUri was added
* Optional property lastUri was added
* Optional property pageCount was added

**KpiResult** (3 changes)

* Enum value voice was added to property mediaType
* Enum value email was added to property mediaType
* Enum value message was added to property mediaType

**RoutingConversationAttributesResponse** (1 change)

* Optional property scoredAgents was added

**RequestScoredAgent** (1 change)

* Model was added

**RoutingConversationAttributesRequest** (1 change)

* Optional property requestScoredAgents was added

**SmsPhoneNumber** (4 changes)

* Optional property country was added
* Optional property supportsSms was added
* Optional property supportsMms was added
* Optional property supportsVoice was added

**GeneralProgramJobRequest** (1 change)

* Enum value pl-PL was added to property dialect

**Dependency** (1 change)

* Enum value KNOWLEDGEBASEDOCUMENT was added to property type

**DependencyObject** (1 change)

* Enum value KNOWLEDGEBASEDOCUMENT was added to property type

**FlowDivisionView** (2 changes)

* Optional property description was added
* Optional property supportedLanguages was added

**ConversationAppSettings** (1 change)

* Model was added

**MessengerApps** (1 change)

* Optional property conversations was added

**WebMessagingEvent** (1 change)

* Model was added

**WebMessagingEventCoBrowse** (1 change)

* Model was added

**WebMessagingMessage** (2 changes)

* Enum value Event was added to property type
* Optional property events was added

**CoachingAppointmentResponse** (3 changes)

* Optional property wfmSchedule was added
* Optional property dateCompleted was added
* Optional property externalLinks was added

**UpdateCoachingAppointmentRequest** (2 changes)

* Optional property wfmSchedule was added
* Optional property externalLinks was added

**CreateCoachingAppointmentRequest** (2 changes)

* Optional property wfmSchedule was added
* Optional property externalLinks was added

**DevelopmentActivity** (1 change)

* Enum value NotCompleted was added to property status

**DevelopmentActivityAggregateQueryResponseMetric** (1 change)

* Enum value nNotCompletedActivities was added to property metric

**DevelopmentActivityAggregateParam** (1 change)

* Enum value nNotCompletedActivities was added to property metrics

**LearningAssignmentAggregateQueryResponseMetric** (1 change)

* Enum value nNotCompletedActivities was added to property metric

**LearningAssignmentAggregateParam** (1 change)

* Enum value nNotCompletedActivities was added to property metrics

**LearningAssignment** (1 change)

* Enum value NotCompleted was added to property state

**LearningAssignmentUpdate** (1 change)

* Enum value NotCompleted was added to property state


# Point Changes (8 changes)

**GET /api/v2/ipranges** (1 change)

* Summary was changed

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (5 changes)

* Description was changed for parameter formatId
* Description was changed for parameter emailFormatId
* Description was changed for parameter chatFormatId
* Description was changed for parameter messageFormatId
* Description was changed for parameter download

**GET /api/v2/conversations/{conversationId}/recordingmetadata** (1 change)

* Summary was changed

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Description was changed for parameter formatId
