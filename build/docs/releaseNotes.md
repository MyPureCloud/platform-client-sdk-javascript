Platform API version: 4417


# Major Changes (1 change)

**POST /api/v2/analytics/transcripts/aggregates/query** (1 change)

* Tag Quality was removed


# Minor Changes (39 changes)

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/coach** (2 changes)

* Path was added
* Operation POST was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Outbound was added to property serviceName

**AuditLogMessage** (14 changes)

* Enum value Outbound was added to property serviceName
* Enum value Export was added to property action
* Enum value Append was added to property action
* Enum value Recycle was added to property action
* Enum value AttemptLimits was added to property entityType
* Enum value CallableTimeSet was added to property entityType
* Enum value Campaign was added to property entityType
* Enum value CampaignRule was added to property entityType
* Enum value Sequence was added to property entityType
* Enum value ContactList was added to property entityType
* Enum value ContactListFilter was added to property entityType
* Enum value DNCList was added to property entityType
* Enum value CallAnalysisResponseSet was added to property entityType
* Enum value RuleSet was added to property entityType

**AuditQueryEntity** (13 changes)

* Enum value AttemptLimits was added to property name
* Enum value CallableTimeSet was added to property name
* Enum value Campaign was added to property name
* Enum value CampaignRule was added to property name
* Enum value Sequence was added to property name
* Enum value ContactList was added to property name
* Enum value ContactListFilter was added to property name
* Enum value DNCList was added to property name
* Enum value CallAnalysisResponseSet was added to property name
* Enum value RuleSet was added to property name
* Enum value Export was added to property actions
* Enum value Append was added to property actions
* Enum value Recycle was added to property actions

**AuditQueryService** (1 change)

* Enum value Outbound was added to property name

**AuditQueryRequest** (1 change)

* Enum value Outbound was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value Outbound was added to property serviceName

**FlowAggregateQueryPredicate** (1 change)

* Enum value reoffered was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value reoffered was added to property groupBy

**ConversationDetailQueryPredicate** (1 change)

* Enum value conversationStart was added to property dimension

**ParticipantMetrics** (1 change)

* Model was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value reoffered was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value reoffered was added to property groupBy


# Point Changes (5 changes)

**GET /api/v2/flows/{flowId}/versions/{versionId}/configuration** (1 change)

* Description was changed for parameter deleted

**GET /api/v2/flows/{flowId}/versions/{versionId}** (1 change)

* Description was changed for parameter deleted

**GET /api/v2/flows/{flowId}/latestconfiguration** (1 change)

* Description was changed for parameter deleted

**GET /api/v2/flows/{flowId}** (1 change)

* Description was changed for parameter deleted

**GET /api/v2/flows/{flowId}/versions** (1 change)

* Description was changed for parameter deleted
