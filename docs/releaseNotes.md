Platform API version: 10398




# Major Changes (29 changes)

**/api/v2/workforcemanagement/adherence/historical** (1 change)

* Path /api/v2/workforcemanagement/adherence/historical was removed

**/api/v2/routing/utilization/tags/{tagId}** (1 change)

* Path /api/v2/routing/utilization/tags/{tagId} was removed

**/api/v2/routing/utilization/tags/{tagId}/agents** (1 change)

* Path /api/v2/routing/utilization/tags/{tagId}/agents was removed

**/api/v2/routing/utilization/tags** (1 change)

* Path /api/v2/routing/utilization/tags was removed

**/api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}/mediaresources/{mediaResourceId}** (1 change)

* Path /api/v2/telephony/providers/edges/mediastatistics/conversations/{conversationId}/communications/{communicationId}/mediaresources/{mediaResourceId} was removed

**GET /api/v2/assistants/agentchecklists** (1 change)

* Parameter agentChecklistIds was added

**GET /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Has been deprecated

**PATCH /api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/actiontargets** (1 change)

* Has been deprecated

**POST /api/v2/flows/jobs** (1 change)

* Parameter body was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Has been deprecated

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (1 change)

* Has been deprecated

**GET /api/v2/workforcemanagement/shifttrades** (1 change)

* Has been deprecated

**WfmHistoricalAdherenceQueryForUsers** (1 change)

* Model WfmHistoricalAdherenceQueryForUsers was removed

**UnavailableTimesTimeSpan** (1 change)

* Model UnavailableTimesTimeSpan was removed

**UtilizationTag** (1 change)

* Model UtilizationTag was removed

**UtilizationTagEntityListing** (1 change)

* Model UtilizationTagEntityListing was removed

**CreateUtilizationTagRequest** (1 change)

* Model CreateUtilizationTagRequest was removed

**MediaStatisticsPostRequest** (1 change)

* Model MediaStatisticsPostRequest was removed

**JourneyViewChartMetricResultValue** (1 change)

* Property value was changed from integer to Number

**AgentScheduleUnavailableTime** (1 change)

* Property timeSpan was changed from UnavailableTimesTimeSpan to WfmTimeSpan

**UnavailableTime** (1 change)

* Property timeSpan was changed from UnavailableTimesTimeSpan to WfmTimeSpan

**UpdateUnavailableTime** (1 change)

* Property timeSpan was changed from UnavailableTimesTimeSpan to WfmTimeSpan


# Minor Changes (207 changes)

**/api/v2/journey/views/eventdefinitions/{eventDefinitionId}** (1 change)

* Operation put was added. Summary: Update external event for journey views

**/api/v2/journey/views/eventdefinitions/{eventDefinitionId}/activate** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/journey/views/eventdefinitions/external/changes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/eventdefinitions/external** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/feedback** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/skillexpressions/{expressionId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/routing/skillexpressions/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/skillexpressions** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/routing/skillexpressions/queue/{queueId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/agents/opportunities/enrollments/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/opportunities/enrollments/bulk/statuses/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/opportunities/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/enrollments/bulk/statuses/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/enrollments/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/externalactivities/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/add** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/statuses/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/{opportunityId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**ConversationAggregationQuery** (6 changes)

* Enum value nCfcOffered was added to property metrics
* Enum value oCallbackServiceLevel was added to property metrics
* Enum value tCfcAbandon was added to property metrics
* Enum value tCfcAcd was added to property metrics
* Enum value tCfcAnswered was added to property metrics
* Enum value tCfcFlowOut was added to property metrics

**ConversationAggregationSort** (5 changes)

* Enum value nCfcOffered was added to property name
* Enum value tCfcAbandon was added to property name
* Enum value tCfcAcd was added to property name
* Enum value tCfcAnswered was added to property name
* Enum value tCfcFlowOut was added to property name

**ConversationAggregationView** (6 changes)

* Enum value nCfcOffered was added to property target
* Enum value oCallbackServiceLevel was added to property target
* Enum value tCfcAbandon was added to property target
* Enum value tCfcAcd was added to property target
* Enum value tCfcAnswered was added to property target
* Enum value tCfcFlowOut was added to property target

**ConversationDetailQueryPredicate** (5 changes)

* Enum value nCfcOffered was added to property metric
* Enum value tCfcAbandon was added to property metric
* Enum value tCfcAcd was added to property metric
* Enum value tCfcAnswered was added to property metric
* Enum value tCfcFlowOut was added to property metric

**TranscriptCategories** (1 change)

* Model was added

**Limit** (3 changes)

* Enum value anomaly.detection was added to property namespace
* Enum value case.management was added to property namespace
* Enum value mcp was added to property namespace

**AgentChecklistItem** (1 change)

* Optional property exactPhraseMatch was added

**EmailSummaryGenerationConfig** (1 change)

* Model was added

**EmailSummarySettingsEntity** (1 change)

* Model was added

**KnowledgeBaseReference** (1 change)

* Optional property contentSearchEnabled was added

**ConversationRoutingData** (2 changes)

* Optional property skillExpression was added
* Optional property skillExpressionId was added

**AgentChecklistResponse** (3 changes)

* Optional property success was added
* Optional property errorCode was added
* Optional property errorMessage was added

**ChecklistItem** (1 change)

* Optional property exactPhraseMatch was added

**CreateCallRequest** (1 change)

* Optional property routingSkillExpression was added

**RoutingData** (1 change)

* Optional property skillExpression was added

**CreateEmailRequest** (1 change)

* Optional property skillExpression was added

**SummarySetting** (1 change)

* Optional property interactionType was added

**CampaignDiagnosticCampaignAction** (1 change)

* Model was added

**WorkdayMetric** (1 change)

* Optional property businessUnitId was added

**ActivateExternalEventResponse** (1 change)

* Model was added

**ActivateExternalEventRequest** (1 change)

* Model was added

**ExternalEventChange** (1 change)

* Model was added

**ExternalEventChangesResponse** (1 change)

* Model was added

**ExternalEventSummary** (1 change)

* Model was added

**GetExternalEventsResponse** (1 change)

* Model was added

**UpdateExternalEventResponse** (1 change)

* Model was added

**UpdateExternalEventRequest** (1 change)

* Model was added

**KnowledgeBase** (1 change)

* Optional property contentSearchEnabled was added

**KnowledgeBaseCreateRequest** (1 change)

* Optional property contentSearchEnabled was added

**ApprovalNamespace** (3 changes)

* Enum value anomaly.detection was added to property namespace
* Enum value case.management was added to property namespace
* Enum value mcp was added to property namespace

**LimitChangeRequestDetails** (3 changes)

* Enum value anomaly.detection was added to property namespace
* Enum value case.management was added to property namespace
* Enum value mcp was added to property namespace

**StatusChange** (3 changes)

* Enum value anomaly.detection was added to property namespace
* Enum value case.management was added to property namespace
* Enum value mcp was added to property namespace

**Recording** (1 change)

* Optional property associatedConversationIds was added

**RoutingConversationAttributesResponse** (2 changes)

* Optional property skillExpression was added
* Optional property skillExpressionId was added

**RoutingConversationAttributesRequest** (1 change)

* Optional property skillExpression was added

**InboundDomain** (1 change)

* Optional property dmarcVerificationResult was added

**OutboundDomain** (1 change)

* Optional property dmarcVerificationResult was added

**EmailOutboundDomainResult** (1 change)

* Optional property dmarcVerificationResult was added

**SkillExpression** (1 change)

* Model was added

**SkillExpressionValidationError** (1 change)

* Model was added

**SkillExpressionValidationResult** (1 change)

* Model was added

**SkillReference** (1 change)

* Model was added

**SkillExpressionData** (1 change)

* Model was added

**SkillExpressionEntityListing** (1 change)

* Model was added

**DataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**FacebookDataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**FacebookDataIngestionRuleVersionResponse** (1 change)

* Optional property ingestionRuleInfo was added

**InstagramDataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**InstagramDataIngestionRuleVersionResponse** (1 change)

* Optional property ingestionRuleInfo was added

**OpenDataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**OpenDataIngestionRuleVersionResponse** (1 change)

* Optional property ingestionRuleInfo was added

**TwitterDataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**TwitterDataIngestionRuleVersionResponse** (1 change)

* Optional property ingestionRuleInfo was added

**UserSearchCriteria** (5 changes)

* Enum value RANGE was added to property type
* Enum value LESS_THAN was added to property type
* Enum value LESS_THAN_EQUAL_TO was added to property type
* Enum value GREATER_THAN was added to property type
* Enum value GREATER_THAN_EQUAL_TO was added to property type

**RegisterArchitectJobRequest** (1 change)

* Model was added

**LauncherButtonSettings** (2 changes)

* Optional property displayType was added
* Optional property icon was added

**WebMessagingButtonResponse** (1 change)

* Enum value Form was added to property type

**WebMessagingContent** (2 changes)

* Enum value Form was added to property contentType
* Optional property form was added

**BusinessUnitActivityCode** (1 change)

* id is no longer readonly

**PlanningGroup** (1 change)

* id is no longer readonly

**ServiceGoalTemplate** (1 change)

* id is no longer readonly

**WorkPlanValidationRequest** (1 change)

* id is no longer readonly

**WorkPlan** (1 change)

* id is no longer readonly

**WorkPlanListItemResponse** (1 change)

* id is no longer readonly

**WorkPlanRotationResponse** (1 change)

* id is no longer readonly

**ActivityPlanListItem** (1 change)

* id is no longer readonly

**ActivityPlanResponse** (1 change)

* id is no longer readonly

**WfmTimeSpan** (1 change)

* Model was added

**CapacityPlanResponse** (1 change)

* id is no longer readonly

**CapacityPlanListItem** (1 change)

* id is no longer readonly

**CapacityPlanReference** (1 change)

* id is no longer readonly

**AgentWorkPlan** (1 change)

* id is no longer readonly

**AgentBulkAddOpportunityEnrollment** (1 change)

* Model was added

**AgentBulkAddOpportunityEnrollmentResult** (1 change)

* Model was added

**AgentBulkAddOpportunityEnrollmentsResponse** (1 change)

* Model was added

**BulkOpportunitiesError** (1 change)

* Model was added

**AgentAddOpportunityEnrollment** (1 change)

* Model was added

**AgentBulkAddOpportunityEnrollmentsRequest** (1 change)

* Model was added

**AgentBulkStatusUpdateOpportunityEnrollmentsResponse** (1 change)

* Model was added

**BulkOpportunitiesEnrollmentResult** (1 change)

* Model was added

**OpportunityEnrollment** (1 change)

* Model was added

**AgentBulkStatusUpdateOpportunityEnrollmentsRequest** (1 change)

* Model was added

**AgentBusinessUnitOpportunities** (1 change)

* Model was added

**AgentOpportunityEnrollmentResult** (1 change)

* Model was added

**AgentQueryOpportunities** (1 change)

* Model was added

**AgentQueryOpportunitiesResponse** (1 change)

* Model was added

**AgentQueryOpportunityResult** (1 change)

* Model was added

**PendingAndApprovedOpportunityEnrollmentCounts** (1 change)

* Model was added

**QueryOpportunitiesRequest** (1 change)

* Model was added

**BulkUpdateOpportunityEnrollmentsStatusResponse** (1 change)

* Model was added

**BulkOpportunityEnrollmentsStatusUpdateRequest** (1 change)

* Model was added

**QueryEnrollmentOpportunityResult** (1 change)

* Model was added

**QueryOpportunityEnrollmentMetadata** (1 change)

* Model was added

**QueryOpportunityEnrollmentResult** (1 change)

* Model was added

**QueryOpportunityEnrollmentsResponse** (1 change)

* Model was added

**QueryOpportunityEnrollmentsResult** (1 change)

* Model was added

**QueryOpportunityEnrollmentsRequest** (1 change)

* Model was added

**QueryExternalActivityOpportunitiesResponse** (1 change)

* Model was added

**QueryExternalActivityOpportunityResult** (1 change)

* Model was added

**BulkOpportunitiesExternalActivitiesRequest** (1 change)

* Model was added

**OpportunitiesResultWithPagination** (1 change)

* Model was added

**OpportunityEnrollmentCounts** (1 change)

* Model was added

**OpportunityResult** (1 change)

* Model was added

**QueryOpportunitiesResponse** (1 change)

* Model was added

**BulkAddOpportunitiesResponse** (1 change)

* Model was added

**AddOpportunityBody** (1 change)

* Model was added

**BulkAddOpportunitiesRequest** (1 change)

* Model was added

**BulkRemoveOpportunitiesResponse** (1 change)

* Model was added

**BulkRemoveOpportunitiesResult** (1 change)

* Model was added

**BulkOpportunitiesRequest** (1 change)

* Model was added

**BulkOpportunitiesReferenceResult** (1 change)

* Model was added

**BulkPublishOpportunitiesResponse** (1 change)

* Model was added

**OpportunityReference** (1 change)

* Model was added

**BulkOpportunitiesStatusUpdateResponse** (1 change)

* Model was added

**BulkOpportunitiesStatusUpdateRequest** (1 change)

* Model was added

**OpportunityResultWithAgentIds** (1 change)

* Model was added

**PatchOpportunityRequest** (1 change)

* Model was added

**ValueWrapperInstant** (1 change)

* Model was added

**ConversationAsyncAggregationQuery** (6 changes)

* Enum value nCfcOffered was added to property metrics
* Enum value oCallbackServiceLevel was added to property metrics
* Enum value tCfcAbandon was added to property metrics
* Enum value tCfcAcd was added to property metrics
* Enum value tCfcAnswered was added to property metrics
* Enum value tCfcFlowOut was added to property metrics

**GoogleBusinessProfileDataIngestionRuleResponse** (1 change)

* Optional property ingestionRuleInfo was added

**GoogleBusinessProfileDataIngestionRuleVersionResponse** (1 change)

* Optional property ingestionRuleInfo was added

**ContinuousForecastGetSessionResponse** (1 change)

* Optional property retrainInProgress was added


# Point Changes (17 changes)

**GET /api/v2/journey/actiontargets/{actionTargetId}** (2 changes)

* Description was changed
* Summary was changed

**PATCH /api/v2/journey/actiontargets/{actionTargetId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/actiontargets** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (1 change)

* Description was changed

**PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (1 change)

* Description was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched** (1 change)

* Description was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (1 change)

* Description was changed

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (1 change)

* Description was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (1 change)

* Description was changed

**GET /api/v2/workforcemanagement/shifttrades** (1 change)

* Description was changed
