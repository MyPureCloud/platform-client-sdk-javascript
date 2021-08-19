Platform API version: 4903


# Major Changes (0 changes)


# Minor Changes (67 changes)

**/api/v2/analytics/botflows/{botFlowId}/reportingturns** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles/users/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles/users/{userId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles/{profileId}/metrics/{metricId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/gamification/profiles/{profileId}/metrics/objectivedetails** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/profiles/{profileId}/metrics** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**PUT /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 409 was added

**POST /api/v2/quality/forms/evaluations** (1 change)

* Response 409 was added

**PUT /api/v2/quality/forms/surveys/{formId}** (1 change)

* Response 409 was added

**POST /api/v2/quality/forms/surveys** (1 change)

* Response 409 was added

**POST /api/v2/quality/forms** (1 change)

* Response 409 was added

**/api/v2/speechandtextanalytics/topics/dialects** (2 changes)

* Path was added
* Operation GET was added

**ConversationAggregationQuery** (3 changes)

* Enum value tCoaching was added to property metrics
* Enum value tCoachingComplete was added to property metrics
* Enum value tMonitoringComplete was added to property metrics

**ConversationAggregationView** (3 changes)

* Enum value tCoaching was added to property target
* Enum value tCoachingComplete was added to property target
* Enum value tMonitoringComplete was added to property target

**AnalyticsConversationSegment** (1 change)

* Enum value coaching was added to property segmentType

**AnalyticsEvaluation** (1 change)

* Optional property released was added

**AnalyticsSession** (1 change)

* Optional property coachedParticipantId was added

**ConversationDetailQueryPredicate** (3 changes)

* Enum value tCoaching was added to property metric
* Enum value tCoachingComplete was added to property metric
* Enum value tMonitoringComplete was added to property metric

**EvaluationDetailQueryPredicate** (1 change)

* Enum value released was added to property dimension

**SegmentDetailQueryPredicate** (1 change)

* Enum value coachedParticipantId was added to property dimension

**EvaluationAggregateQueryPredicate** (3 changes)

* Enum value conversationStart was added to property dimension
* Enum value evaluationReleaseDate was added to property dimension
* Enum value released was added to property dimension

**EvaluationAggregationQuery** (5 changes)

* Enum value conversationStart was added to property groupBy
* Enum value evaluationReleaseDate was added to property groupBy
* Enum value released was added to property groupBy
* Enum value conversationStart was added to property alternateTimeDimension
* Enum value evaluationReleaseDate was added to property alternateTimeDimension

**ReportingTurn** (1 change)

* Model was added

**ReportingTurnAction** (1 change)

* Model was added

**ReportingTurnIntent** (1 change)

* Model was added

**ReportingTurnIntentSlot** (1 change)

* Model was added

**ReportingTurnKnowledge** (1 change)

* Model was added

**ReportingTurnKnowledgeDocument** (1 change)

* Model was added

**ReportingTurnKnowledgeFeedback** (1 change)

* Model was added

**ReportingTurnKnowledgeSearch** (1 change)

* Model was added

**ReportingTurnsResponse** (1 change)

* Model was added

**AuditLogMessage** (2 changes)

* Enum value Assign was added to property action
* Enum value Unassign was added to property action

**AuditQueryEntity** (2 changes)

* Enum value Assign was added to property actions
* Enum value Unassign was added to property actions

**ConversationMessageContent** (2 changes)

* Enum value GenericTemplate was added to property contentType
* Optional property generic was added

**ConversationMessagingChannelMetadata** (1 change)

* Model was added

**ChannelMetadata** (1 change)

* Model was added

**DialerContact** (1 change)

* Optional property latestSmsEvaluations was added

**MessageEvaluation** (1 change)

* Optional property messageType was added

**WritableDialerContact** (1 change)

* Optional property latestSmsEvaluations was added

**GetMetricResponse** (1 change)

* Model was added

**EntityListing** (1 change)

* Model was added

**RecordingJob** (2 changes)

* Optional property totalSkippedRecordings was added
* Optional property totalFailedRecordings was added


# Point Changes (11 changes)

**PUT /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Summary was changed

**DELETE /api/v2/outbound/rulesets/{ruleSetId}** (1 change)

* Summary was changed

**POST /api/v2/outbound/rulesets** (1 change)

* Summary was changed

**GET /api/v2/gamification/leaderboard/bestpoints** (1 change)

* Summary was changed

**GET /api/v2/gamification/leaderboard/all** (1 change)

* Description was changed for parameter filterId

**GET /api/v2/gamification/leaderboard/all/bestpoints** (2 changes)

* Summary was changed
* Description was changed for parameter filterId

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (2 changes)

* Description was changed
* Description was changed for parameter weekDateId

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (2 changes)

* Description was changed
* Description was changed for parameter weekId
