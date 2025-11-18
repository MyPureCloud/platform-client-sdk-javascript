Platform API version: 9766




# Major Changes (5 changes)

**PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups** (1 change)

* Response 200 was removed

**PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups** (1 change)

* Response 200 was removed

**GET /api/v2/learning/modules** (1 change)

* Response 200 type was changed from LearningModulesDomainEntityListing to LearningModuleList

**LearningModulesDomainEntityListing** (1 change)

* Model LearningModulesDomainEntityListing was removed

**WebMessagingButtonResponse** (1 change)

* Required property originatingMessageId was added


# Minor Changes (46 changes)

**/api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (1 change)

* Operation get was added. Summary: Get message media list by status

**PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups** (1 change)

* Response 204 was added

**PATCH /api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups** (1 change)

* Response 204 was added

**AnalyticsSession** (1 change)

* Enum value OpenMessaging was added to property engagementSource

**ViewFilter** (2 changes)

* Optional property sessionExpired was added
* Optional property engagementSource was added

**ReportingExportJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_THROUGHPUT_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value PREDICTIVE_ROUTING_THROUGHPUT_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value PREDICTIVE_ROUTING_THROUGHPUT_VIEW was added to property viewType

**JourneyCaseAssociation** (1 change)

* Model was added

**Session** (2 changes)

* externalContact is no longer readonly
* conversation is no longer readonly

**ConversationMessageMetadataContent** (1 change)

* Enum value RichLink was added to property contentType

**Message** (1 change)

* Enum value OpenMessaging was added to property engagementSource

**ConversationContentInput** (2 changes)

* Optional property keyboardType was added
* Optional property autoCompleteType was added

**ConversationContentReceivedReplyMessage** (2 changes)

* Optional property header was added
* Optional property buttonLabel was added

**ConversationContentRichLink** (1 change)

* Model was added

**ConversationContentRichLinkHeader** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Enum value RichLink was added to property contentType

**MessageMediaData** (2 changes)

* Optional property conversationId was added
* Optional property communicationId was added

**MessageMediaListing** (1 change)

* Model was added

**SetWhatsAppIntegrationActionSettings** (1 change)

* Model was added

**IpAddressRange** (1 change)

* Enum value encryption was added to property service

**ChannelTopic** (1 change)

* Optional property missingPermissions was added

**RecordingMessagingMessage** (2 changes)

* Optional property form was added
* Optional property roadsideAssistance was added

**ExternalPageMetadata** (1 change)

* Model was added

**SchedulerMessageTypeSeverity** (1 change)

* Enum value UnableToScheduleMinCoverageForPlanningGroup was added to property type

**AdherenceSettings** (1 change)

* Optional property ignoredActivityCodeIds was added

**ShiftTradeExternalActivityRule** (1 change)

* Enum value Opportunity was added to property externalActivityType

**ShiftTradeActivityPreviewResponse** (1 change)

* Enum value Opportunity was added to property externalActivityType

**BuAgentScheduleActivity** (1 change)

* Enum value Opportunity was added to property externalActivityType

**AvailableTimeOffRange** (1 change)

* Enum value FifteenMinutes was added to property granularity

**ScheduleGenerationMessage** (1 change)

* Enum value UnableToScheduleMinCoverageForPlanningGroup was added to property type

**SchedulerMessageArgument** (1 change)

* Enum value PlanningGroupId was added to property type

**BuTimeOffLimitValueRange** (1 change)

* Enum value FifteenMinutes was added to property granularity

**TimeOffLimit** (1 change)

* Enum value FifteenMinutes was added to property granularity

**CreateTimeOffLimitRequest** (1 change)

* Enum value FifteenMinutes was added to property granularity

**TimeOffLimitRange** (1 change)

* Enum value FifteenMinutes was added to property granularity

**TimeOffLimitValueRange** (1 change)

* Enum value FifteenMinutes was added to property granularity

**ScheduleActivity** (1 change)

* Enum value Opportunity was added to property externalActivityType

**LearningModuleList** (1 change)

* Model was added

**LearningSlotScheduleActivity** (1 change)

* Enum value Opportunity was added to property externalActivityType


# Point Changes (1 change)

**GET /api/v2/authorization/divisions/query** (1 change)

* Description was changed for parameter pageSize
