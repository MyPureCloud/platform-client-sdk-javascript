Platform API version: 3704


# Major Changes (2 changes)

**GET /api/v2/authorization/divisionspermitted/{subjectId}** (1 change)

* Has been deprecated

**DELETE /api/v2/authorization/divisions/{divisionId}** (1 change)

* Parameter force was added


# Minor Changes (17 changes)

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions** (2 changes)

* Path was added
* Operation PUT was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value tMonitoring was added to property metric

**SegmentDetailQueryPredicate** (1 change)

* Enum value mediaCount was added to property dimension

**TrustMemberCreate** (1 change)

* Optional property roleDivisions was added

**FlowAggregateQueryPredicate** (2 changes)

* Enum value externalMediaCount was added to property dimension
* Enum value mediaCount was added to property dimension

**FlowAggregationQuery** (2 changes)

* Enum value externalMediaCount was added to property groupBy
* Enum value mediaCount was added to property groupBy

**UserScheduleAdherence** (1 change)

* Optional property removedFromManagementUnit was added

**AnalyticsSession** (1 change)

* Optional property mediaCount was added

**ConversationAggregateQueryPredicate** (2 changes)

* Enum value externalMediaCount was added to property dimension
* Enum value mediaCount was added to property dimension

**ConversationAggregationQuery** (3 changes)

* Enum value externalMediaCount was added to property groupBy
* Enum value mediaCount was added to property groupBy
* Enum value tMonitoring was added to property metrics

**ConversationAggregationView** (1 change)

* Enum value tMonitoring was added to property target


# Point Changes (0 changes)
