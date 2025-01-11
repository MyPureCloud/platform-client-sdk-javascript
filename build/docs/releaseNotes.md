Platform API version: 8752




# Major Changes (0 changes)


# Minor Changes (112 changes)

**/api/v2/analytics/resolutions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/insights/rankings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/bulk/jobs/users/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/bulk/add/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/taskmanagement/workitems/bulk/terminate/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}/snapshot/{snapshotId}** (2 changes)

* Path was added
* Operation GET was added

**ResolutionAggregateQueryResponse** (1 change)

* Model was added

**ResolutionAggregationQuery** (1 change)

* Model was added

**ViewFilter** (3 changes)

* Optional property video was added
* Optional property linkedInteraction was added
* Optional property recommendationSources was added

**DataSchema** (1 change)

* Enum value DECISION_TABLE was added to property appliesTo

**Limit** (2 changes)

* Enum value analytics.agents was added to property namespace
* Enum value micro.frontend was added to property namespace

**CommonCampaignDivisionView** (1 change)

* Enum value whatsapp was added to property mediaType

**CommonCampaign** (1 change)

* Enum value whatsapp was added to property mediaType

**WhatsAppColumn** (1 change)

* Model was added

**MessageEvaluation** (1 change)

* Enum value WhatsApp was added to property messageType

**DncListDivisionView** (1 change)

* Enum value WhatsApp was added to property contactMethod

**DncList** (1 change)

* Enum value WhatsApp was added to property contactMethod

**DncListCreate** (1 change)

* Enum value WhatsApp was added to property contactMethod

**LastAttemptOverallConditionSettings** (1 change)

* Enum value WhatsApp was added to property mediaTypes

**MarkContactUncontactableActionSettings** (1 change)

* Enum value WhatsApp was added to property mediaTypes

**InsightsRankings** (1 change)

* Model was added

**JourneyViewElementFilter** (1 change)

* Optional property numberPredicates was added

**ApprovalNamespace** (2 changes)

* Enum value analytics.agents was added to property namespace
* Enum value micro.frontend was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value analytics.agents was added to property namespace
* Enum value micro.frontend was added to property namespace

**StatusChange** (2 changes)

* Enum value analytics.agents was added to property namespace
* Enum value micro.frontend was added to property namespace

**EventCoBrowse** (1 change)

* Model was added

**EventPresence** (1 change)

* Model was added

**EventTyping** (1 change)

* Model was added

**EventVideo** (1 change)

* Model was added

**MessageEvent** (1 change)

* Model was added

**TextBotPromptSegment** (1 change)

* Enum value MessageEvent was added to property type

**BulkJob** (1 change)

* Model was added

**BulkJobsListing** (1 change)

* Model was added

**BulkJobAddResponse** (1 change)

* Model was added

**BulkJobAddResult** (1 change)

* Model was added

**BulkJobAddWorkitemSummary** (1 change)

* Model was added

**BulkJobError** (1 change)

* Model was added

**BulkJobUpdate** (1 change)

* Model was added

**BulkJobAddRequest** (1 change)

* Model was added

**WorkitemCommonCreate** (1 change)

* Model was added

**BulkJobTerminateResult** (1 change)

* Model was added

**BulkJobTerminateResultEntity** (1 change)

* Model was added

**BulkJobTerminateResultsResponse** (1 change)

* Model was added

**BulkJobEntity** (1 change)

* Model was added

**BulkJobTerminateRequest** (1 change)

* Model was added

**Celebration** (1 change)

* Enum value ContestComplete was added to property type

**ContestCompleteData** (1 change)

* Model was added

**ContestCompleteDataScore** (1 change)

* Model was added

**ContestDataMetrics** (1 change)

* Model was added

**ContestDataPrizes** (1 change)

* Model was added

**ContestDataWinners** (1 change)

* Model was added

**ContestDataWinnersUsers** (1 change)

* Model was added

**SourceEntity** (5 changes)

* Enum value Competition was added to property type
* Enum value Race was added to property type
* Enum value Raffle was added to property type
* Enum value TeamGoal was added to property type
* Optional property contestCompleteData was added

**InstagramDataIngestionRuleResponse** (1 change)

* Model was added

**ContinuousForecastGetSessionResponse** (1 change)

* Model was added

**AggregateHistoricalAvailability** (1 change)

* Model was added

**ComputedData** (1 change)

* Model was added

**ContinuousForecastSessionResponse** (1 change)

* Model was added

**Daily** (1 change)

* Model was added

**HistoricalData** (1 change)

* Model was added

**ModelData** (1 change)

* Model was added

**ModelMetaData** (1 change)

* Model was added

**ModelMetaDataResult** (1 change)

* Model was added

**PlanningGroupModel** (1 change)

* Model was added

**QuarterHourly** (1 change)

* Model was added

**SessionFiles** (1 change)

* Model was added

**SessionInfo** (1 change)

* Model was added

**SessionMetaData** (1 change)

* Model was added

**SessionMetaDataResult** (1 change)

* Model was added

**SessionMetricData** (1 change)

* Model was added

**Snapshots** (1 change)

* Model was added

**Timeseries** (1 change)

* Model was added

**Weekly** (1 change)

* Model was added

**Weeks** (1 change)

* Model was added

**ContinuousForecastSnapshotResponse** (1 change)

* Model was added

**SnapshotFiles** (1 change)

* Model was added

**SnapshotInfo** (1 change)

* Model was added

**SnapshotMetaData** (1 change)

* Model was added

**SnapshotMetaDataResult** (1 change)

* Model was added

**SnapshotMetricData** (1 change)

* Model was added


# Point Changes (0 changes)
