Platform API version: 6333


# Major Changes (9 changes)

**GET /api/v2/routing/email/domains** (2 changes)

* Parameter pageSize was added
* Parameter pageNumber was added

**CommunicationEndedEvent** (2 changes)

* Enum value TransferACD was removed from property disconnectType
* Enum value TransferUser was removed from property disconnectType

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value TopicsDefinitions was removed from property serviceName

**AuditQueryRequest** (1 change)

* Enum value TopicsDefinitions was removed from property serviceName

**AuditLogMessage** (1 change)

* Enum value TopicsDefinitions was removed from property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value TopicsDefinitions was removed from property serviceName

**AuditQueryService** (1 change)

* Enum value TopicsDefinitions was removed from property name


# Minor Changes (61 changes)

**/api/v2/authorization/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/adherence/explanations/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/explanations/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/adherence/explanations/{explanationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/adherence/explanations/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/adherence/explanations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shrinkage/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs** (2 changes)

* Path was added
* Operation POST was added

**AnalyticsSession** (2 changes)

* Enum value Vip was added to property requestedRoutings
* Enum value Vip was added to property usedRouting

**ObservationValue** (2 changes)

* Enum value Vip was added to property requestedRoutings
* Enum value Vip was added to property usedRouting

**ReportingTurnAction** (1 change)

* Enum value SetLocaleAction was added to property actionType

**ViewFilter** (2 changes)

* Enum value Vip was added to property usedRoutingTypes
* Enum value Vip was added to property requestedRoutingTypes

**AuthorizationSettings** (1 change)

* Model was added

**DataActionConditionSettings** (1 change)

* Model was added

**DataActionContactColumnFieldMapping** (1 change)

* Model was added

**DigitalDataActionConditionPredicate** (1 change)

* Model was added

**SurveyForm** (1 change)

* published is no longer readonly

**TextBotFlowTurnRequest** (1 change)

* Enum value ClientSessionExpired was added to property inputEventType

**AdherenceExplanationJob** (1 change)

* Model was added

**AdherenceExplanationListingAgentQueryResponse** (1 change)

* Model was added

**AdherenceExplanationListingBuQueryResponse** (1 change)

* Model was added

**AdherenceExplanationResponse** (1 change)

* Model was added

**AdherenceExplanationJobReference** (1 change)

* Model was added

**AgentQueryAdherenceExplanationsResponse** (1 change)

* Model was added

**AgentQueryAdherenceExplanationsRequest** (1 change)

* Model was added

**AdherenceExplanationAsyncResponse** (1 change)

* Model was added

**AddAdherenceExplanationAdminRequest** (1 change)

* Model was added

**UpdateAdherenceExplanationStatusRequest** (1 change)

* Model was added

**BuQueryAdherenceExplanationsResponse** (1 change)

* Model was added

**BuQueryAdherenceExplanationsRequest** (1 change)

* Model was added

**AdherenceExplanationListing** (1 change)

* Model was added

**QueryAdherenceExplanationsResponse** (1 change)

* Model was added

**AddAdherenceExplanationAgentRequest** (1 change)

* Model was added

**HistoricalAdherenceQueryResult** (1 change)

* Optional property managementUnitId was added

**UserScheduleAdherence** (1 change)

* Optional property adherenceExplanation was added

**HistoricalShrinkageActivityCategoryResponse** (1 change)

* Model was added

**HistoricalShrinkageActivityCodeResponse** (1 change)

* Model was added

**HistoricalShrinkageAggregateResponse** (1 change)

* Model was added

**HistoricalShrinkageResult** (1 change)

* Model was added

**HistoricalShrinkageResultListing** (1 change)

* Model was added

**WfmHistoricalShrinkageResponse** (1 change)

* Model was added

**WfmHistoricalShrinkageRequest** (1 change)

* Model was added


# Point Changes (2 changes)

**DELETE /api/v2/analytics/conversations/details/jobs/{jobId}** (1 change)

* Summary was changed

**GET /api/v2/analytics/conversations/details/jobs/{jobId}/results** (1 change)

* Summary was changed
