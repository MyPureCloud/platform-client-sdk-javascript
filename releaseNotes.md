Platform API version: 7567




# Major Changes (11 changes)

**GET /api/v2/routing/utilization** (1 change)

* Response 200 type was changed from Utilization to UtilizationResponse

**PUT /api/v2/routing/utilization** (1 change)

* Response 200 type was changed from Utilization to UtilizationResponse

**GET /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 200 type was changed from AgentMaxUtilization to AgentMaxUtilizationResponse

**PUT /api/v2/routing/users/{userId}/utilization** (1 change)

* Response 200 type was changed from AgentMaxUtilization to AgentMaxUtilizationResponse

**LabelUtilization** (1 change)

* Model LabelUtilization was removed

**Utilization** (1 change)

* Model Utilization was removed

**AgentMaxUtilization** (1 change)

* Model AgentMaxUtilization was removed

**UserInsightsTrend** (2 changes)

* Property entities was changed from InsightsTrendMetricItem[] to UserInsightsTrendMetricItem[]
* Property total was changed from InsightsTrendTotalItem to UserInsightsTrendTotalItem

**AppEventResponse** (2 changes)

* Property ipAddress was removed
* Property externalContact was removed


# Minor Changes (70 changes)

**POST /api/v2/authorization/divisions/{divisionId}/restore** (1 change)

* Parameter body was made optional

**/api/v2/outbound/contactlisttemplates/{contactListTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/contactlisttemplates** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/outbound/contactlisttemplates/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/importtemplates/{importTemplateId}/importstatus** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/importtemplates/{importTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/importtemplates** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added

**/api/v2/outbound/importtemplates/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/diagnostics/logcapture/browser/entries/download/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/flowexecutions/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/flowexecutions/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**Limit** (1 change)

* Enum value employee.engagement was added to property namespace

**ImportStatus** (2 changes)

* Optional property targetContactListIds was added
* Optional property listNamePrefix was added

**ContactListFilter** (2 changes)

* Optional property contactListTemplate was added
* Optional property sourceType was added

**ContactListTemplate** (1 change)

* Model was added

**ContactListTemplateEntityListing** (1 change)

* Model was added

**ImportTemplate** (1 change)

* Model was added

**SplittingInformation** (1 change)

* Model was added

**ImportTemplateEntityListing** (1 change)

* Model was added

**UserInsightsTrendMetricItem** (1 change)

* Model was added

**UserInsightsTrendTotalItem** (1 change)

* Model was added

**UserInsightsTrends** (1 change)

* Model was added

**UserTrendData** (1 change)

* Model was added

**ApprovalNamespace** (1 change)

* Enum value employee.engagement was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value employee.engagement was added to property namespace

**StatusChange** (1 change)

* Enum value employee.engagement was added to property namespace

**LogCaptureDownloadExecutionResponse** (1 change)

* Model was added

**LogCaptureQueryRequest** (1 change)

* Model was added

**LabelUtilizationRequest** (1 change)

* Model was added

**LabelUtilizationResponse** (1 change)

* Model was added

**UtilizationResponse** (1 change)

* Model was added

**UtilizationRequest** (1 change)

* Model was added

**AgentMaxUtilizationResponse** (1 change)

* Model was added

**FlowExecutionAggregateDataContainer** (1 change)

* Model was added

**FlowExecutionAggregateQueryResponse** (1 change)

* Model was added

**FlowExecutionAggregateQueryClause** (1 change)

* Model was added

**FlowExecutionAggregateQueryFilter** (1 change)

* Model was added

**FlowExecutionAggregateQueryPredicate** (1 change)

* Model was added

**FlowExecutionAggregationQuery** (1 change)

* Model was added

**FlowExecutionAggregationView** (1 change)

* Model was added

**FlowExecutionAsyncAggregationQuery** (1 change)

* Model was added

**FlowExecutionAsyncAggregateQueryResponse** (1 change)

* Model was added

**ExecutionDataEntity** (1 change)

* Optional property statusCode was added

**MediaEndpointStatistics** (1 change)

* Optional property reconnectAttemptCount was added


# Point Changes (0 changes)
