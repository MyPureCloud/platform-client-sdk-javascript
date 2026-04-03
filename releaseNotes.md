Platform API version: 10196




# Major Changes (27 changes)

**GET /api/v2/integrations/credentials/types** (1 change)

* Response 200 type was changed from CredentialTypeListing to CredentialType[]

**GET /api/v2/users/me** (1 change)

* Parameter userCustomAttributeSchemaIds was added

**GET /api/v2/users/{userId}** (1 change)

* Parameter userCustomAttributeSchemaIds was added

**GET /api/v2/users** (1 change)

* Parameter userCustomAttributeSchemaIds was added

**GET /api/v2/users/query** (1 change)

* Parameter userCustomAttributeSchemaIds was added

**CredentialTypeListing** (1 change)

* Model CredentialTypeListing was removed

**OutboundQueueIdentityResolutionConfig** (1 change)

* Property id was removed

**RouteIdentityResolutionConfig** (1 change)

* Property id was removed

**ContactIdentifier** (2 changes)

* Property id was removed
* Property selfUri was removed

**ExternalOrganizationIdentifier** (2 changes)

* Property id was removed
* Property selfUri was removed

**ExternalOrganizationEnrichRequest** (1 change)

* Property selfUri was removed

**ExternalOrganizationTrustorLink** (2 changes)

* Property id was removed
* Property selfUri was removed

**MessagingIdentityResolutionConfig** (1 change)

* Property id was removed

**AppleIdentityResolutionConfig** (1 change)

* Property id was removed

**FacebookIdentityResolutionConfig** (1 change)

* Property id was removed

**InstagramIdentityResolutionConfig** (1 change)

* Property id was removed

**OpenMessagingIdentityResolutionConfig** (1 change)

* Property id was removed

**TwitterIdentityResolutionConfig** (1 change)

* Property id was removed

**WhatsAppIdentityResolutionConfig** (1 change)

* Property id was removed

**EvaluationSearchResponse** (1 change)

* Property results was changed from EvaluationResponse[] to EvaluationSearchItemResponse[]

**SmsIdentityResolutionConfig** (1 change)

* Property id was removed

**IVRIdentityResolutionConfig** (1 change)

* Property id was removed

**DeploymentIdentityResolutionConfig** (1 change)

* Property id was removed

**ActivityPlanJobResponse** (1 change)

* Property activityPlan was changed from ActivityPlanReference to ActivityPlanStructureWithOccurrenceSessionsUsersReference


# Minor Changes (204 changes)

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/snippet/record** (2 changes)

* Path was added
* Operation POST was added

**GET /api/v2/outbound/diagnostics/campaigns/{campaignId}/summary** (1 change)

* Response 422 was added

**/api/v2/journey/externalevents/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/externalevents/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/externalevents/configurations/{configId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/externalevents/configurations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/externalevents/configurations/{configurationId}/events** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/externalevents/schemas/limits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/externalevents/schemas/{schemaId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/journey/externalevents/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/externalevents/schemas/{schemaId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/externalevents/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/state/bulk/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/state/bulk/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/query/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/shifttrading/trades/mine/query/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/mine/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/state/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/state/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/match/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/match/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/analytics/copilots/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/copilots/aggregates/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/copilots/aggregates/jobs/{jobId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/analytics/copilots/aggregates/jobs/{jobId}/results** (2 changes)

* Path was added
* Operation GET was added

**AnalyticsConversationWithoutAttributes** (1 change)

* Optional property accessAttributes was added

**AnalyticsSession** (1 change)

* Optional property skillExpressionId was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value skillExpressionId was added to property dimension

**ConversationAggregationQuery** (6 changes)

* Enum value skillExpressionId was added to property groupBy
* Enum value nCallbackAttempts was added to property metrics
* Enum value nCallbackScheduled was added to property metrics
* Enum value tCallbackAbandon was added to property metrics
* Enum value tCallbackConnect was added to property metrics
* Enum value tCallbackNotReached was added to property metrics

**ConversationAggregationSort** (5 changes)

* Enum value nCallbackAttempts was added to property name
* Enum value nCallbackScheduled was added to property name
* Enum value tCallbackAbandon was added to property name
* Enum value tCallbackConnect was added to property name
* Enum value tCallbackNotReached was added to property name

**ConversationAggregationView** (5 changes)

* Enum value nCallbackAttempts was added to property target
* Enum value nCallbackScheduled was added to property target
* Enum value tCallbackAbandon was added to property target
* Enum value tCallbackConnect was added to property target
* Enum value tCallbackNotReached was added to property target

**ConversationDetailQueryPredicate** (3 changes)

* Enum value accessAttribute was added to property dimension
* Enum value nCallbackAttempts was added to property metric
* Enum value nCallbackScheduled was added to property metric

**AnalyticsConversation** (1 change)

* Optional property accessAttributes was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value skillExpressionId was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value skillExpressionId was added to property groupBy

**ViewFilter** (1 change)

* Optional property screenMonitored was added

**ModelConfig** (1 change)

* Model was added

**Session** (4 changes)

* Optional property caseAssociations was added
* Optional property caseEntity was added
* Optional property caseReference was added
* Optional property caseStatus was added

**RecordersState** (1 change)

* Optional property snippetState was added

**SnippetRecordingRequest** (1 change)

* Model was added

**ExternalEventsConfiguration** (1 change)

* Model was added

**UpdateExternalEventsConfigurationRequest** (1 change)

* Model was added

**CreateExternalEventsConfigurationRequest** (1 change)

* Model was added

**ExternalEventsConfigurationListing** (1 change)

* Model was added

**ExternalEvent** (1 change)

* Model was added

**ExternalEventExternalId** (1 change)

* Model was added

**ExternalEventIdentifiers** (1 change)

* Model was added

**ExternalEventsResponse** (1 change)

* Model was added

**UnprocessedExternalEvent** (1 change)

* Model was added

**ExternalEventsRequest** (1 change)

* Model was added

**JourneyExternalEventsSchema** (1 change)

* Model was added

**JourneyJsonSchemaDocument** (1 change)

* Model was added

**JourneyJsonSchemaRequest** (1 change)

* Model was added

**JourneySchemaUpdateRequest** (1 change)

* Model was added

**JourneyExternalEventsSchemaListing** (1 change)

* Model was added

**Miner** (2 changes)

* Enum value he-il was added to property language
* Enum value zu-za was added to property language

**EvaluationFormSearchResponse** (1 change)

* Model was added

**EvaluationSearchItemResponse** (1 change)

* Model was added

**UtilizationResponse** (1 change)

* Optional property maxInboundCalls was added

**UtilizationRequest** (1 change)

* Optional property maxInboundCalls was added

**AgentMaxUtilizationResponse** (1 change)

* Optional property maxInboundCalls was added

**SocialMediaAsyncAggregationQuery** (2 changes)

* Enum value verifiedUser was added to property groupBy
* Enum value followerCount was added to property groupBy

**SocialMediaQueryPredicate** (2 changes)

* Enum value verifiedUser was added to property dimension
* Enum value followerCount was added to property dimension

**SocialMediaQuerySort** (1 change)

* Model was added

**TranscriptsFilters** (1 change)

* Optional property programs was added

**Phrase** (1 change)

* Optional property isAIGenerated was added

**ActivityPlanJobResponse** (4 changes)

* Enum value DeleteActivityPlan was added to property type
* Enum value DeleteOccurrences was added to property type
* Enum value DeleteSessions was added to property type
* Enum value DeleteSessionUsers was added to property type

**ActivityPlanOccurrenceSessionsUsersStructureReference** (1 change)

* Model was added

**ActivityPlanSessionStructureReference** (1 change)

* Model was added

**ActivityPlanStructureWithOccurrenceSessionsUsersReference** (1 change)

* Model was added

**RequiredDateRange** (1 change)

* Model was added

**QueryWeekSummaryListJobResponseItem** (1 change)

* Model was added

**ShiftTradeQueryWeekSummariesBuJobResponse** (1 change)

* Model was added

**ShiftTradeWeekSummaryResponseItem** (1 change)

* Model was added

**ScheduleReferenceWithBusinessUnit** (1 change)

* Model was added

**SearchUnmatchedShiftTradeListJobResponseItem** (1 change)

* Model was added

**SearchUnmatchedShiftTradeResponseItem** (1 change)

* Model was added

**ShiftTradeInitiatingSideResponseItem** (1 change)

* Model was added

**ShiftTradeMatchResponseItem** (1 change)

* Model was added

**ShiftTradeReceivingSideResponseItem** (1 change)

* Model was added

**ShiftTradeResponseItem** (1 change)

* Model was added

**ShiftTradeSearchUnmatchedTradesBuJobResponse** (1 change)

* Model was added

**ShiftTradeShiftResponseItem** (1 change)

* Model was added

**ShiftTradeTargetResponseItem** (1 change)

* Model was added

**ReceivingScheduleLookup** (1 change)

* Model was added

**SearchUnmatchedShiftTradeListJobRequest** (1 change)

* Model was added

**ShiftTradeBulkUpdateTradeStateBuJobResponse** (1 change)

* Model was added

**BulkUpdateShiftTradeListJobRequest** (1 change)

* Model was added

**ShiftTradeListJobResponse** (1 change)

* Model was added

**ShiftTradeQueryTradesBuJobResponse** (1 change)

* Model was added

**QueryShiftTradeListJobRequest** (1 change)

* Model was added

**EvaluateShiftTradeListJobResponseItem** (1 change)

* Model was added

**EvaluatedShiftTradeResponseItem** (1 change)

* Model was added

**ShiftTradeEvaluateTradesBuJobResponse** (1 change)

* Model was added

**EvaluateShiftTradeListJobRequest** (1 change)

* Model was added

**QueryWeekSummaryListJobRequest** (1 change)

* Model was added

**ShiftTradeAddTradeJobResponse** (1 change)

* Model was added

**AddShiftTradeJobRequest** (1 change)

* Model was added

**InitiatingShiftRequestItem** (1 change)

* Model was added

**ShiftTradeTargetRequestItem** (1 change)

* Model was added

**ShiftTradeQueryAgentTradesJobResponse** (1 change)

* Model was added

**QueryAgentShiftTradeListJobRequest** (1 change)

* Model was added

**ShiftTradeUpdateTradeJobResponse** (1 change)

* Model was added

**ListWrapperRequiredDateRange** (1 change)

* Model was added

**UpdateShiftTradeJobRequest** (1 change)

* Model was added

**ValueWrapperShiftTradeTargetRequestItem** (1 change)

* Model was added

**ShiftTradeUpdateTradeStateJobResponse** (1 change)

* Model was added

**UpdateShiftTradeStateJobRequest** (1 change)

* Model was added

**ShiftTradeMatchTradeJobResponse** (1 change)

* Model was added

**MatchShiftTradeJobRequest** (1 change)

* Model was added

**ConversationAsyncAggregationQuery** (6 changes)

* Enum value skillExpressionId was added to property groupBy
* Enum value nCallbackAttempts was added to property metrics
* Enum value nCallbackScheduled was added to property metrics
* Enum value tCallbackAbandon was added to property metrics
* Enum value tCallbackConnect was added to property metrics
* Enum value tCallbackNotReached was added to property metrics

**CopilotAggregateDataContainer** (1 change)

* Model was added

**CopilotAggregateQueryResponse** (1 change)

* Model was added

**CopilotAggregateQueryClause** (1 change)

* Model was added

**CopilotAggregateQueryFilter** (1 change)

* Model was added

**CopilotAggregateQueryPredicate** (1 change)

* Model was added

**CopilotAggregationQuery** (1 change)

* Model was added

**CopilotAggregationSort** (1 change)

* Model was added

**CopilotAggregationView** (1 change)

* Model was added

**CopilotAsyncAggregationQuery** (1 change)

* Model was added

**CopilotAsyncAggregateQueryResponse** (1 change)

* Model was added

**FlowAsyncAggregationQuery** (1 change)

* Enum value skillExpressionId was added to property groupBy


# Point Changes (9 changes)

**POST /api/v2/recording/batchrequests** (1 change)

* Summary was changed

**GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}** (1 change)

* Summary was changed

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Description was changed

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Description was changed

**GET /api/v2/conversations/{conversationId}/recordings** (1 change)

* Description was changed

**PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}** (1 change)

* Description was changed

**POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations** (1 change)

* Description was changed

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Description was changed

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (1 change)

* Description was changed
