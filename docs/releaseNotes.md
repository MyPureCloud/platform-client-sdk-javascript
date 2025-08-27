Platform API version: 9535




# Major Changes (9 changes)

**/api/v2/routing/email/outbound/domains/{domainId}/search** (1 change)

* Path /api/v2/routing/email/outbound/domains/{domainId}/search was removed

**GET /api/v2/authorization/permissions** (1 change)

* Response 200 type was changed from PermissionCollectionEntityListing to DomainPermissionEntityListing

**DomainPermissionCollection** (1 change)

* Model DomainPermissionCollection was removed

**PermissionCollectionEntityListing** (1 change)

* Model PermissionCollectionEntityListing was removed

**EventCoBrowse** (1 change)

* Model EventCoBrowse was removed

**EventPresence** (1 change)

* Model EventPresence was removed

**EventTyping** (1 change)

* Model EventTyping was removed

**EventVideo** (1 change)

* Model EventVideo was removed

**MessageEvent** (1 change)

* Model MessageEvent was removed


# Minor Changes (87 changes)

**/api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/assistants/{assistantId}/queues/{queueId}/users/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}** (1 change)

* Operation delete was added. Summary: Update a conversation by disconnecting all of the participants

**/api/v2/conversations/{conversationId}/recordingstate** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/conversations/calls/{conversationId}/conference** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}** (4 changes)

* Path was added
* Operation POST was added
* Operation DELETE was added
* Operation PATCH was added

**MessagingCommunicationEndedEvent** (1 change)

* Enum value SessionExpired was added to property disconnectType

**DomainPermissionCollectionDomainPermission** (1 change)

* Model was added

**DomainPermissionEntityListing** (1 change)

* Model was added

**CopilotAction** (1 change)

* Enum value Checklist was added to property actionType

**KnowledgeSuggestionConfig** (1 change)

* Optional property receiveSegmentedArticles was added

**AssistantQueueUser** (1 change)

* Model was added

**AssistantQueueUsersBulkAddRequest** (1 change)

* Model was added

**AssistantQueueUsersBulkRemoveRequest** (1 change)

* Model was added

**AssistantQueueUsersQueryResponse** (1 change)

* Model was added

**AssistantQueueUsersQueryRequest** (1 change)

* Model was added

**ConditionalGroupActivationSimpleMetric** (1 change)

* Enum value IdleAgentCount was added to property metric

**ExternalContact** (1 change)

* Optional property appleOpaqueIds was added

**UpdateConferenceRequest** (1 change)

* Model was added

**CampaignRuleCampaignRunTimeSettings** (1 change)

* Model was added

**CampaignRuleCampaignWaitTimeSettings** (1 change)

* Model was added

**CampaignRuleCondition** (7 changes)

* Enum value timeOfDay was added to property conditionType
* Enum value dayOfWeek was added to property conditionType
* Enum value dayOfMonth was added to property conditionType
* Enum value weekDayOfMonth was added to property conditionType
* Enum value specificDate was added to property conditionType
* Enum value campaignRunTime was added to property conditionType
* Enum value campaignWaitTime was added to property conditionType

**CampaignRuleDateTimeConditionParameters** (1 change)

* Model was added

**CampaignRuleDayOfMonthInterval** (1 change)

* Model was added

**CampaignRuleDayOfMonthParameters** (1 change)

* Model was added

**CampaignRuleDayOfWeekInterval** (1 change)

* Model was added

**CampaignRuleDayOfWeekParameters** (1 change)

* Model was added

**CampaignRuleParameters** (4 changes)

* Enum value before was added to property operator
* Enum value after was added to property operator
* Enum value between was added to property operator
* Enum value in was added to property operator

**CampaignRuleSpecificDateInterval** (1 change)

* Model was added

**CampaignRuleSpecificDateParameters** (1 change)

* Model was added

**CampaignRuleTimeOfDayInterval** (1 change)

* Model was added

**CampaignRuleTimeOfDayParameters** (1 change)

* Model was added

**CampaignRuleWarningParameters** (7 changes)

* Enum value timeOfDay was added to property conditionType
* Enum value dayOfWeek was added to property conditionType
* Enum value dayOfMonth was added to property conditionType
* Enum value weekDayOfMonth was added to property conditionType
* Enum value specificDate was added to property conditionType
* Enum value campaignRunTime was added to property conditionType
* Enum value campaignWaitTime was added to property conditionType

**CampaignRuleWeekDayOfMonth** (1 change)

* Model was added

**CampaignRuleWeekDayOfMonthInterval** (1 change)

* Model was added

**CampaignRuleWeekDayOfMonthParameters** (1 change)

* Model was added

**JourneyEventDefinition** (2 changes)

* Optional property rank was added
* Optional property displayName was added

**PushDeviceUpdateRequest** (1 change)

* Model was added

**PushDeviceInsertRequest** (1 change)

* Model was added

**QualityAuditLogMessage** (1 change)

* Enum value SnippetRecording was added to property entityType

**SocialMediaAsyncAggregationQuery** (1 change)

* Enum value moderationFlag was added to property groupBy

**SocialMediaQueryPredicate** (1 change)

* Enum value moderationFlag was added to property dimension

**AdditionalMatchCriteria** (1 change)

* Model was added

**DataIngestionRuleCriteria** (1 change)

* Model was added

**TopicCriteria** (1 change)

* Model was added

**TextBotFlowTurnRequest** (1 change)

* Enum value RichMediaInput was added to property inputEventType

**TextBotsRichMediaInputEvent** (1 change)

* Model was added

**SchedulerMessageTypeSeverity** (1 change)

* Enum value UnableToSchedulePlanningPeriodMaxShiftStartAndPaidDurationVarianceFromAgentHistory was added to property type

**ShiftTradeSettings** (2 changes)

* Optional property externalActivityRules was added
* Optional property externalActivityRuleIgnoresActivityCategoryRule was added

**ShiftTradeActivityPreviewResponse** (2 changes)

* Optional property externalActivityType was added
* Optional property externalActivityId was added

**WorkPlanConstraintMessage** (1 change)

* Enum value ActivityMaximumLengthFromShiftEndMinutes was added to property type

**ScheduleGenerationMessage** (1 change)

* Enum value UnableToSchedulePlanningPeriodMaxShiftStartAndPaidDurationVarianceFromAgentHistory was added to property type

**DecisionTableColumnDefaultRowValue** (1 change)

* Optional property values was added

**DecisionTableInputColumnExpression** (6 changes)

* Enum value ContainsAny was added to property comparator
* Enum value NotContainsAny was added to property comparator
* Enum value ContainsAll was added to property comparator
* Enum value NotContainsAll was added to property comparator
* Enum value ContainsExactly was added to property comparator
* Enum value NotContainsExactly was added to property comparator

**Literal** (1 change)

* Optional property strings was added


# Point Changes (3 changes)

**POST /api/v2/recording/jobs** (1 change)

* Description was changed

**POST /api/v2/routing/email/domains/{domainId}/testconnection** (2 changes)

* Description was changed
* Summary was changed
