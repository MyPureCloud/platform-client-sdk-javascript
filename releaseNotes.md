Platform API version: 5413


# Major Changes (0 changes)


# Minor Changes (61 changes)

**/api/v2/analytics/reporting/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**POST /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 409 was added

**/api/v2/quality/evaluations/aggregates/query/me** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/quality/forms/evaluations/bulk/contexts** (2 changes)

* Path was added
* Operation GET was added

**User** (1 change)

* Optional property integrationPresence was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value customerParticipation was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value customerParticipation was added to property groupBy

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property customerParticipation was added

**ConversationDetailQueryPredicate** (2 changes)

* Enum value conversationInitiator was added to property dimension
* Enum value customerParticipation was added to property dimension

**AnalyticsConversation** (1 change)

* Optional property customerParticipation was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value customerParticipation was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value customerParticipation was added to property groupBy

**JourneyAggregateQueryPredicate** (1 change)

* Enum value journeySessionId was added to property dimension

**JourneyAggregationQuery** (1 change)

* Enum value journeySessionId was added to property groupBy

**AnalyticsReportingSettings** (1 change)

* Model was added

**AuditLogMessage** (1 change)

* Enum value Reset was added to property action

**AuditQueryEntity** (1 change)

* Enum value Reset was added to property actions

**EmailMediaPolicyConditions** (1 change)

* Optional property customerParticipation was added

**MessageMediaPolicyConditions** (1 change)

* Optional property customerParticipation was added

**OrgUser** (1 change)

* Optional property integrationPresence was added

**EventLog** (2 changes)

* Enum value MESSAGING_CAMPAIGN_SCHEDULE was added to property category
* Enum value EMAIL_CAMPAIGN_SCHEDULE was added to property category

**MessagingCampaign** (1 change)

* Optional property contactListFilters was added

**SmsConfig** (1 change)

* Optional property contentTemplate was added

**UserExpands** (1 change)

* Optional property integrationPresence was added

**DefaultObjective** (2 changes)

* Optional property mediaTypes was added
* Optional property queues was added

**Objective** (2 changes)

* Optional property mediaTypes was added
* Optional property queues was added

**CreateObjective** (2 changes)

* Optional property mediaTypes was added
* Optional property queueIds was added

**WorkdayValuesMetricItem** (1 change)

* Optional property metric was added

**ConversationChannel** (7 changes)

* Enum value Voice was added to property type
* Enum value Chat was added to property type
* Enum value Cobrowse was added to property type
* Enum value Video was added to property type
* Enum value Screenshare was added to property type
* Enum value Message was added to property type
* Optional property messageType was added

**Session** (3 changes)

* Enum value Unknown was added to property originatingDirection
* Optional property lastUserDisconnectType was added
* Optional property lastAcdOutcome was added

**TrustUser** (1 change)

* Optional property integrationPresence was added

**EvaluationAggregationQueryMe** (1 change)

* Model was added

**UserMe** (1 change)

* Optional property integrationPresence was added

**Dependency** (1 change)

* Enum value OAUTHCLIENT was added to property type

**DependencyObject** (1 change)

* Enum value OAUTHCLIENT was added to property type

**ConversationAppSettings** (1 change)

* Optional property autoStartType was added

**SupportCenterSettings** (1 change)

* Optional property knowledgeBase was added

**BusinessUnitSettings** (1 change)

* Optional property scheduling was added

**UpdateBusinessUnitSettings** (1 change)

* Optional property scheduling was added

**CreateBusinessUnitSettings** (1 change)

* Optional property scheduling was added

**BuScheduleRun** (1 change)

* Optional property messageSeverityCounts was added

**ScheduleGenerationResult** (1 change)

* Optional property messageSeverities was added

**ScheduleGenerationResultSummary** (1 change)

* Optional property messageSeverityCounts was added

**BuGenerateScheduleRequest** (1 change)

* Optional property options was added


# Point Changes (0 changes)
