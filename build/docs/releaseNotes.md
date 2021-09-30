Platform API version: 5038


# Major Changes (3 changes)

**DevelopmentActivity** (1 change)

* Enum value Questionnaire was removed from property type

**LearningModule** (1 change)

* Enum value Questionnaire was removed from property type

**LearningModuleRequest** (1 change)

* Enum value Questionnaire was removed from property type


# Minor Changes (60 changes)

**/api/v2/conversations/{conversationId}/tags** (2 changes)

* Path was added
* Operation PUT was added

**PATCH /api/v2/journey/actionmaps/{actionMapId}** (1 change)

* Response 409 was added

**POST /api/v2/journey/actionmaps** (1 change)

* Response 409 was added

**PATCH /api/v2/journey/actiontemplates/{actionTemplateId}** (1 change)

* Response 409 was added

**POST /api/v2/journey/actiontemplates** (1 change)

* Response 409 was added

**PATCH /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Response 409 was added

**POST /api/v2/journey/outcomes** (1 change)

* Response 409 was added

**PATCH /api/v2/journey/segments/{segmentId}** (1 change)

* Response 409 was added

**POST /api/v2/journey/segments** (1 change)

* Response 409 was added

**/api/v2/users/{userId}/state** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value destinationAddress was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value destinationAddress was added to property groupBy

**AnalyticsSession** (1 change)

* Optional property destinationAddresses was added

**SegmentDetailQueryPredicate** (1 change)

* Enum value destinationAddress was added to property dimension

**FlowAggregateQueryPredicate** (1 change)

* Enum value destinationAddress was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value destinationAddress was added to property groupBy

**ViewFilter** (1 change)

* Optional property emailDeliveryStatusList was added

**ReportingExportJobResponse** (6 changes)

* Enum value AGENT_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value FLOW_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_TOPIC_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (6 changes)

* Enum value AGENT_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value FLOW_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_TOPIC_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (6 changes)

* Enum value AGENT_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_TOPIC_DETAIL_VIEW was added to property viewType
* Enum value FLOW_TOPIC_SUMMARY_VIEW was added to property viewType
* Enum value FLOW_TOPIC_DETAIL_VIEW was added to property viewType

**AuditLogMessage** (3 changes)

* Enum value Directory was added to property serviceName
* Enum value Profile was added to property entityType
* Enum value ProfileMembers was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Directory was added to property serviceName

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Directory was added to property serviceName

**AuditQueryEntity** (2 changes)

* Enum value Profile was added to property name
* Enum value ProfileMembers was added to property name

**AuditQueryService** (1 change)

* Enum value Directory was added to property name

**AuditQueryRequest** (1 change)

* Enum value Directory was added to property serviceName

**DurationCondition** (1 change)

* Optional property durationMode was added

**ConversationTagsUpdate** (1 change)

* Model was added

**RoutingData** (1 change)

* Optional property routingFlags was added

**Recording** (1 change)

* Optional property originalRecordingStartTime was added

**TextBotDisconnectAction** (1 change)

* Optional property flowOutcomes was added

**TextBotExitAction** (1 change)

* Optional property flowOutcomes was added

**TextBotFlowMilestone** (1 change)

* Model was added

**TextBotFlowOutcome** (1 change)

* Model was added

**UserState** (1 change)

* Model was added

**BuSchedulingSettings** (1 change)

* Model was added

**SchedulerMessageTypeSeverity** (1 change)

* Model was added

**SchedulingNoForecastOptionsRequest** (1 change)

* Model was added

**SchedulingOptionsRequest** (1 change)

* Model was added


# Point Changes (3 changes)

**GET /api/v2/quality/agents/activity** (3 changes)

* Description was changed
* Description was changed for parameter startTime
* Description was changed for parameter endTime
