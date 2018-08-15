Platform API version: 2554


# Major Changes (2 changes)

**GET /api/v2/outbound/campaigns** (2 changes)

* Parameter dncListId was removed
* Parameter dncListIds was added


# Minor Changes (64 changes)

**Participant** (1 change)

* Optional property alertingTimeoutMs was added

**ReportRunEntry** (1 change)

* Enum value UNABLE_TO_COMPLETE was added to property runStatus

**ChatMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added

**CobrowseMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added

**AggregateMetricData** (6 changes)

* Enum value nFlow was added to property metric
* Enum value tFlowHangUp was added to property metric
* Enum value tFlowExit was added to property metric
* Enum value tFlow was added to property metric
* Enum value tFlowOutcome was added to property metric
* Enum value nFlowOutcome was added to property metric

**AnalyticsQueryPredicate** (20 changes)

* Enum value flowId was added to property dimension
* Enum value flowName was added to property dimension
* Enum value flowVersion was added to property dimension
* Enum value flowType was added to property dimension
* Enum value exitReason was added to property dimension
* Enum value transferType was added to property dimension
* Enum value transferTargetName was added to property dimension
* Enum value transferTargetAddress was added to property dimension
* Enum value issuedCallback was added to property dimension
* Enum value startingLanguage was added to property dimension
* Enum value endingLanguage was added to property dimension
* Enum value flowOutcomeId was added to property dimension
* Enum value flowOutcomeValue was added to property dimension
* Enum value flowOutcome was added to property dimension
* Enum value nFlow was added to property metric
* Enum value tFlowHangUp was added to property metric
* Enum value tFlowExit was added to property metric
* Enum value tFlow was added to property metric
* Enum value tFlowOutcome was added to property metric
* Enum value nFlowOutcome was added to property metric

**ObservationQuery** (6 changes)

* Enum value nFlow was added to property metrics
* Enum value tFlowHangUp was added to property metrics
* Enum value tFlowExit was added to property metrics
* Enum value tFlow was added to property metrics
* Enum value tFlowOutcome was added to property metrics
* Enum value nFlowOutcome was added to property metrics

**AggregationQuery** (20 changes)

* Enum value flowId was added to property groupBy
* Enum value flowName was added to property groupBy
* Enum value flowVersion was added to property groupBy
* Enum value flowType was added to property groupBy
* Enum value exitReason was added to property groupBy
* Enum value transferType was added to property groupBy
* Enum value transferTargetName was added to property groupBy
* Enum value transferTargetAddress was added to property groupBy
* Enum value issuedCallback was added to property groupBy
* Enum value startingLanguage was added to property groupBy
* Enum value endingLanguage was added to property groupBy
* Enum value flowOutcomeId was added to property groupBy
* Enum value flowOutcomeValue was added to property groupBy
* Enum value flowOutcome was added to property groupBy
* Enum value nFlow was added to property metrics
* Enum value tFlowHangUp was added to property metrics
* Enum value tFlowExit was added to property metrics
* Enum value tFlow was added to property metrics
* Enum value tFlowOutcome was added to property metrics
* Enum value nFlowOutcome was added to property metrics

**CallbackMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added

**AnalyticsFlow** (1 change)

* Model was added

**AnalyticsFlowOutcome** (1 change)

* Model was added

**AnalyticsSession** (1 change)

* Optional property flow was added

**ParticipantBasic** (1 change)

* Optional property alertingTimeoutMs was added

**EmailMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added

**CallMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added

**MessageMediaParticipant** (1 change)

* Optional property alertingTimeoutMs was added


# Point Changes (0 changes)
