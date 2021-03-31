Platform API version: 4585


# Major Changes (27 changes)

**/api/v2/workforcemanagement/managementunits/{managementUnitId}** (1 change)

* Path /api/v2/workforcemanagement/managementunits/{managementUnitId} was removed

**GET /api/v2/conversations/messaging/integrations/twitter** (2 changes)

* Parameter expand was added
* Parameter supportedContent.id was added

**GET /api/v2/flows/milestones** (1 change)

* Parameter divisionId was added

**GET /api/v2/conversations/messaging/integrations** (2 changes)

* Parameter expand was added
* Parameter supportedContent.id was added

**GET /api/v2/flows/outcomes** (1 change)

* Parameter divisionId was added

**GET /api/v2/conversations/messaging/integrations/whatsapp** (2 changes)

* Parameter expand was added
* Parameter supportedContent.id was added

**GET /api/v2/conversations/messaging/integrations/facebook** (2 changes)

* Parameter expand was added
* Parameter supportedContent.id was added

**GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Parameter expand was added

**POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages/media** (2 changes)

* Response 200 was removed
* Response 202 type was changed from _undefined_ to MessageMediaData

**GET /api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Parameter expand was added

**GET /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 200 type was changed from Utilization to AgentMaxUtilization

**PUT /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 200 type was changed from Utilization to AgentMaxUtilization

**GET /api/v2/conversations/messaging/integrations/line** (2 changes)

* Parameter expand was added
* Parameter supportedContent.id was added

**GET /api/v2/conversations/messaging/integrations/facebook/{integrationId}** (1 change)

* Parameter expand was added

**GET /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Parameter expand was added

**ManagementUnitSettingsRequest** (1 change)

* Model ManagementUnitSettingsRequest was removed

**UpdateManagementUnitRequest** (1 change)

* Model UpdateManagementUnitRequest was removed

**OAuthClient** (1 change)

* Enum value CODE_PKCE was removed from property authorizedGrantType

**AnalyticsSession** (1 change)

* Property monitoredSessionId was removed

**OAuthClientRequest** (1 change)

* Enum value CODE_PKCE was removed from property authorizedGrantType

**OrgOAuthClient** (1 change)

* Enum value CODE_PKCE was removed from property authorizedGrantType


# Minor Changes (100 changes)

**/api/v2/flows/milestones/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/outcomes/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/historicaldata/importstatus** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/historicaldata/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/historicaldata/deletejob** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ReportingExportJobResponse** (1 change)

* Enum value AGENT_SCHEDULE_ME_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value AGENT_SCHEDULE_ME_VIEW was added to property viewType

**AnalyticsUserDetailsQueryResponse** (1 change)

* Optional property totalHits was added

**ReportingExportMetadataJobResponse** (1 change)

* Enum value AGENT_SCHEDULE_ME_VIEW was added to property viewType

**Edge** (1 change)

* Enum value BYOH was added to property edgeDeploymentType

**FlowMilestone** (1 change)

* Optional property division was added

**JourneyAggregateQueryPredicate** (17 changes)

* Enum value containsAllCondition was added to property dimension
* Enum value containsAnyCondition was added to property dimension
* Enum value endsWithCondition was added to property dimension
* Enum value equalCondition was added to property dimension
* Enum value greaterThanCondition was added to property dimension
* Enum value greaterThanOrEqualCondition was added to property dimension
* Enum value journeyActionTargetId was added to property dimension
* Enum value journeyBlockingActionMapId was added to property dimension
* Enum value journeyBlockingReason was added to property dimension
* Enum value journeyBlockingScheduleGroupId was added to property dimension
* Enum value journeyFrequencyCapReason was added to property dimension
* Enum value lessThanCondition was added to property dimension
* Enum value lessThanOrEqualCondition was added to property dimension
* Enum value notContainsAllCondition was added to property dimension
* Enum value notContainsAnyCondition was added to property dimension
* Enum value notEqualCondition was added to property dimension
* Enum value startsWithCondition was added to property dimension

**JourneyAggregationQuery** (19 changes)

* Enum value containsAllCondition was added to property groupBy
* Enum value containsAnyCondition was added to property groupBy
* Enum value endsWithCondition was added to property groupBy
* Enum value equalCondition was added to property groupBy
* Enum value greaterThanCondition was added to property groupBy
* Enum value greaterThanOrEqualCondition was added to property groupBy
* Enum value journeyActionTargetId was added to property groupBy
* Enum value journeyBlockingActionMapId was added to property groupBy
* Enum value journeyBlockingReason was added to property groupBy
* Enum value journeyBlockingScheduleGroupId was added to property groupBy
* Enum value journeyFrequencyCapReason was added to property groupBy
* Enum value lessThanCondition was added to property groupBy
* Enum value lessThanOrEqualCondition was added to property groupBy
* Enum value notContainsAllCondition was added to property groupBy
* Enum value notContainsAnyCondition was added to property groupBy
* Enum value notEqualCondition was added to property groupBy
* Enum value startsWithCondition was added to property groupBy
* Enum value nDistinctJourneyActions was added to property metrics
* Enum value nJourneyActionsBlocked was added to property metrics

**JourneyAggregationView** (2 changes)

* Enum value nDistinctJourneyActions was added to property target
* Enum value nJourneyActionsBlocked was added to property target

**AuditLogMessage** (2 changes)

* Enum value DeleteAll was added to property action
* Enum value SentimentFeedback was added to property entityType

**AuditQueryEntity** (2 changes)

* Enum value SentimentFeedback was added to property name
* Enum value DeleteAll was added to property actions

**FlowMilestoneDivisionView** (1 change)

* Model was added

**FlowMilestoneDivisionViewEntityListing** (1 change)

* Model was added

**FlowOutcome** (1 change)

* Optional property division was added

**ContentButtonResponse** (1 change)

* Model was added

**MessageContent** (2 changes)

* Enum value ButtonResponse was added to property contentType
* Optional property buttonResponse was added

**AnalyticsSession** (5 changes)

* Optional property bullseyeRing was added
* Optional property agentBullseyeRing was added
* Optional property routingRule was added
* Optional property removedSkillIds was added
* Optional property activeSkillIds was added

**FlowOutcomeDivisionView** (1 change)

* Model was added

**FlowOutcomeDivisionViewEntityListing** (1 change)

* Model was added

**FlowAggregateQueryPredicate** (5 changes)

* Enum value activeSkillId was added to property dimension
* Enum value agentBullseyeRing was added to property dimension
* Enum value bullseyeRing was added to property dimension
* Enum value removedSkillId was added to property dimension
* Enum value routingRule was added to property dimension

**FlowAggregationQuery** (5 changes)

* Enum value activeSkillId was added to property groupBy
* Enum value agentBullseyeRing was added to property groupBy
* Enum value bullseyeRing was added to property groupBy
* Enum value removedSkillId was added to property groupBy
* Enum value routingRule was added to property groupBy

**HistoricalImportStatus** (1 change)

* Model was added

**HistoricalImportStatusListing** (1 change)

* Model was added

**SendAgentlessOutboundMessageResponse** (1 change)

* Optional property messagingTemplate was added

**SendAgentlessOutboundMessageRequest** (1 change)

* Optional property messagingTemplate was added

**ValidationServiceRequest** (1 change)

* Model was added

**ConversationAggregateQueryPredicate** (5 changes)

* Enum value activeSkillId was added to property dimension
* Enum value agentBullseyeRing was added to property dimension
* Enum value bullseyeRing was added to property dimension
* Enum value removedSkillId was added to property dimension
* Enum value routingRule was added to property dimension

**ConversationAggregationQuery** (5 changes)

* Enum value activeSkillId was added to property groupBy
* Enum value agentBullseyeRing was added to property groupBy
* Enum value bullseyeRing was added to property groupBy
* Enum value removedSkillId was added to property groupBy
* Enum value routingRule was added to property groupBy

**AnalyticsConversationQueryResponse** (1 change)

* Optional property totalHits was added

**AgentMaxUtilization** (1 change)

* Model was added

**HistoricalImportDeleteJobResponse** (1 change)

* Model was added


# Point Changes (1 change)

**POST /api/v2/oauth/clients** (1 change)

* Description was changed
