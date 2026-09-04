Platform API version: 10747




# Major Changes (19 changes)

**PATCH /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}** (1 change)

* Parameter validateOnly was added

**POST /api/v2/agentic/virtualagents/{virtualAgentId}/versions** (1 change)

* Parameter validateOnly was added

**GET /api/v2/mobiledevices/{deviceId}** (1 change)

* Has been deprecated

**PUT /api/v2/mobiledevices/{deviceId}** (1 change)

* Has been deprecated

**DELETE /api/v2/mobiledevices/{deviceId}** (1 change)

* Has been deprecated

**GET /api/v2/mobiledevices** (1 change)

* Has been deprecated

**POST /api/v2/mobiledevices** (1 change)

* Has been deprecated

**GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules** (1 change)

* Response 200 type was changed from DataIngestionRuleResponseEntityListing to GenericDataIngestionRuleResponseEntityListing

**DataIngestionRuleResponse** (1 change)

* Model DataIngestionRuleResponse was removed

**DataIngestionRuleResponseEntityListing** (1 change)

* Model DataIngestionRuleResponseEntityListing was removed

**AgentUtilizationAggregationSort** (1 change)

* Model AgentUtilizationAggregationSort was removed

**FacebookDataIngestionRuleResponse** (1 change)

* Property countries was removed

**FacebookDataIngestionRuleVersionResponse** (1 change)

* Property countries was removed

**InstagramDataIngestionRuleResponse** (1 change)

* Property countries was removed

**InstagramDataIngestionRuleVersionResponse** (1 change)

* Property countries was removed

**OpenDataIngestionRuleResponse** (1 change)

* Property countries was removed

**OpenDataIngestionRuleVersionResponse** (1 change)

* Property countries was removed

**GoogleBusinessProfileDataIngestionRuleResponse** (1 change)

* Property countries was removed

**GoogleBusinessProfileDataIngestionRuleVersionResponse** (1 change)

* Property countries was removed


# Minor Changes (70 changes)

**/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}** (1 change)

* Operation delete was added. Summary: Delete a Stageplan from a draft Caseplan.

**/api/v2/externalcontacts/contacts/search** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/query/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/state/bulk/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/shifttrading/trades/mine/query/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/shifttrading/trades/{tradeId}/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/shifttrading/trades/{tradeId}/state/jobs** (1 change)

* Response 202 was added

**POST /api/v2/workforcemanagement/shifttrading/trades/{tradeId}/match/jobs** (1 change)

* Response 202 was added

**/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/reposition** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/{caseplanId}/stageplans** (2 changes)

* Path was added
* Operation POST was added

**AnalyticsAgentStateAgentResponse** (8 changes)

* Optional property managementUnitId was added
* Optional property businessUnitId was added
* Optional property adherenceState was added
* Optional property adherenceImpact was added
* Optional property adherenceDate was added
* Optional property scheduledActivityCodeId was added
* Optional property scheduledActivityCategory was added
* Optional property actualActivityCategory was added

**AnalyticsAgentStateCountsResponse** (3 changes)

* Optional property adherenceStateCounts was added
* Optional property scheduledActivityCategoryCounts was added
* Optional property actualActivityCategoryCounts was added

**ConversationAggregationQuery** (2 changes)

* Enum value nAgentDeclined was added to property metrics
* Enum value nAlertExpired was added to property metrics

**ConversationAggregationSort** (2 changes)

* Enum value nAgentDeclined was added to property name
* Enum value nAlertExpired was added to property name

**ConversationAggregationView** (2 changes)

* Enum value nAgentDeclined was added to property target
* Enum value nAlertExpired was added to property target

**ConversationAsyncAggregationQuery** (2 changes)

* Enum value nAgentDeclined was added to property metrics
* Enum value nAlertExpired was added to property metrics

**ConversationDetailQueryPredicate** (2 changes)

* Enum value nAgentDeclined was added to property metric
* Enum value nAlertExpired was added to property metric

**ViewFilter** (4 changes)

* Optional property socialEngagementLikes was added
* Optional property socialEngagementShares was added
* Optional property socialEngagementComments was added
* Optional property socialEngagementViews was added

**ContactSearchOperation** (1 change)

* Model was added

**ContactSearchRequest** (1 change)

* Model was added

**ContactSimpleSearch** (1 change)

* Model was added

**SendAgentlessOutboundMessageRequest** (1 change)

* Optional property externalContactId was added

**RecordingMessagingMessage** (1 change)

* Optional property notificationResponse was added

**GenericDataIngestionRuleResponse** (1 change)

* Model was added

**GenericDataIngestionRuleResponseEntityListing** (1 change)

* Model was added

**AllocationOutputsTemplate** (1 change)

* Model was added

**AllocationResultsTemplate** (1 change)

* Model was added

**WorkitemOnAttributeChangeCondition** (9 changes)

* Enum value priority was added to property attribute
* Enum value queueId was added to property attribute
* Enum value assigneeId was added to property attribute
* Enum value assignmentState was added to property attribute
* Enum value languageId was added to property attribute
* Enum value externalTag was added to property attribute
* Enum value wrapup was added to property attribute
* Optional property operator was added
* Optional property value was added

**WorkitemOnAttributeChangeConditionUpdate** (9 changes)

* Enum value priority was added to property attribute
* Enum value queueId was added to property attribute
* Enum value assigneeId was added to property attribute
* Enum value assignmentState was added to property attribute
* Enum value languageId was added to property attribute
* Enum value externalTag was added to property attribute
* Enum value wrapup was added to property attribute
* Optional property operator was added
* Optional property value was added

**StageplanReposition** (1 change)

* Model was added

**StageplanCreate** (1 change)

* Model was added


# Point Changes (7 changes)

**PATCH /api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}** (1 change)

* Description was changed

**POST /api/v2/agentic/virtualagents/{virtualAgentId}/versions** (1 change)

* Description was changed

**GET /api/v2/mobiledevices/{deviceId}** (1 change)

* Summary was changed

**PUT /api/v2/mobiledevices/{deviceId}** (1 change)

* Summary was changed

**DELETE /api/v2/mobiledevices/{deviceId}** (1 change)

* Summary was changed

**GET /api/v2/mobiledevices** (1 change)

* Summary was changed

**POST /api/v2/mobiledevices** (1 change)

* Summary was changed
