Platform API version: 10311




# Major Changes (34 changes)

**POST /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Has been deprecated

**GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results** (1 change)

* Has been deprecated

**POST /api/v2/journey/actionmaps/estimates/jobs** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Has been deprecated

**DELETE /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Has been deprecated

**PATCH /api/v2/journey/outcomes/{outcomeId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes** (1 change)

* Has been deprecated

**POST /api/v2/journey/outcomes** (1 change)

* Has been deprecated

**GET /api/v2/journey/sessions/{sessionId}/outcomescores** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes/predictors/{predictorId}** (1 change)

* Has been deprecated

**DELETE /api/v2/journey/outcomes/predictors/{predictorId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes/predictors** (1 change)

* Has been deprecated

**POST /api/v2/journey/outcomes/predictors** (1 change)

* Has been deprecated

**GET /api/v2/knowledge/connections/{connectionId}/options** (2 changes)

* Parameter after was added
* Parameter pageSize was added

**GET /api/v2/knowledge/sources/{sourceId}** (1 change)

* Response 200 type was changed from V3SourceDetailedWithErrorResponse to V3SourceExpandableResponse

**GET /api/v2/knowledge/sources** (1 change)

* Response 200 type was changed from V3SourceWithErrorListing to V3SourceExpandableListing

**GET /api/v2/users/chats/me** (1 change)

* Parameter includeRoomOwners was added

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs** (1 change)

* Response 200 type was changed from ActivityPlanJobResponse to ActivityPlanRunJobResponse

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs/{jobId}** (1 change)

* Response 200 type was changed from ActivityPlanRunJobResponse to ActivityPlanJobResponse

**POST /api/v2/journey/outcomes/attributions/jobs** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}** (1 change)

* Has been deprecated

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}/results** (1 change)

* Has been deprecated

**V3SourceDetailedWithErrorResponse** (1 change)

* Model V3SourceDetailedWithErrorResponse was removed

**V3SourceWithErrorListing** (1 change)

* Model V3SourceWithErrorListing was removed

**V3SourceWithErrorResponse** (1 change)

* Model V3SourceWithErrorResponse was removed

**ReportingTurnAction** (1 change)

* Enum value SendDigitalCarouselAction was removed from property actionType

**SetContentTemplateActionSettings** (1 change)

* Required property whatsAppContentTemplateId was added

**SetWhatsAppIntegrationActionSettings** (1 change)

* Required property whatsAppIntegrationId was added

**SocialMediaAsyncDetailQuery** (1 change)

* topicIds has been made readonly

**UsersRulesLockedCriteriaSettingsGroup** (2 changes)

* Property operator was removed
* Required property operators was added

**CaseplanDataSchema** (1 change)

* Property version was removed


# Minor Changes (172 changes)

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/parkingstate** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/flows/datatables/{datatableId}/import/csv/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/stations/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/stations/me/associatedstation/{stationId}** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/users/stations/me/associatedstation** (2 changes)

* Path was added
* Operation DELETE was added

**POST /api/v2/workforcemanagement/shifttrading/trades/jobs** (2 changes)

* Response 201 was added
* Response 202 was added

**/api/v2/events/routing/customkpiattributions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/assistant/copilotcontext** (2 changes)

* Path was added
* Operation GET was added

**PolicyAttribute** (1 change)

* Enum value DATE was added to property type

**ADFS** (1 change)

* Optional property forceAuthn was added

**CustomerInteractionCenter** (1 change)

* Optional property forceAuthn was added

**GSuite** (1 change)

* Optional property forceAuthn was added

**GenericSAML** (1 change)

* Optional property forceAuthn was added

**IdentityNow** (1 change)

* Optional property forceAuthn was added

**SAMLProvider** (1 change)

* Optional property forceAuthn was added

**CustomProvider** (1 change)

* Optional property forceAuthn was added

**Okta** (1 change)

* Optional property forceAuthn was added

**OneLogin** (1 change)

* Optional property forceAuthn was added

**PingIdentity** (1 change)

* Optional property forceAuthn was added

**PureEngage** (1 change)

* Optional property forceAuthn was added

**Salesforce** (1 change)

* Optional property forceAuthn was added

**AgentStateAgentQueryPredicate** (10 changes)

* Enum value inactiveQueueId was added to property dimension
* Enum value queueId was added to property dimension
* Enum value teamId was added to property dimension
* Enum value managementUnitId was added to property dimension
* Enum value businessUnitId was added to property dimension
* Enum value adherenceState was added to property dimension
* Enum value adherenceImpact was added to property dimension
* Enum value scheduledActivityCodeId was added to property dimension
* Enum value scheduledActivityCategory was added to property dimension
* Enum value actualActivityCategory was added to property dimension

**AgentStateQueryRequest** (1 change)

* Enum value adherenceDate was added to property userOrderBy

**ConversationAggregationQuery** (3 changes)

* Enum value nCallbackOverSla was added to property metrics
* Enum value oSkillExpressionApplications was added to property metrics
* Enum value tTransmitting was added to property metrics

**ConversationAggregationSort** (3 changes)

* Enum value nCallbackOverSla was added to property name
* Enum value oSkillExpressionApplications was added to property name
* Enum value tTransmitting was added to property name

**ConversationAggregationView** (3 changes)

* Enum value nCallbackOverSla was added to property target
* Enum value oSkillExpressionApplications was added to property target
* Enum value tTransmitting was added to property target

**ConversationDetailQueryPredicate** (3 changes)

* Enum value nCallbackOverSla was added to property metric
* Enum value oSkillExpressionApplications was added to property metric
* Enum value tTransmitting was added to property metric

**SegmentDetailQueryPredicate** (1 change)

* Enum value skillExpressionId was added to property dimension

**ReportingTurnAction** (1 change)

* Enum value SendDigitalContentAction was added to property actionType

**ReportingTurnIntent** (1 change)

* Optional property id was added

**ReportingExportJobResponse** (1 change)

* Enum value QUEUE_SKILL_EXPRESSION_PERFORMANCE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value QUEUE_SKILL_EXPRESSION_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value QUEUE_SKILL_EXPRESSION_PERFORMANCE_VIEW was added to property viewType

**EvaluationQuestion** (1 change)

* Optional property automatedScoringFocus was added

**ConversationMessageMetadataContent** (1 change)

* Enum value NotificationResponse was added to property contentType

**Message** (2 changes)

* Optional property resumeTime was added
* Optional property parkTime was added

**ConversationContentNotificationResponse** (1 change)

* Model was added

**ConversationMessageContent** (2 changes)

* Enum value NotificationResponse was added to property contentType
* Optional property notificationResponse was added

**Suggestion** (1 change)

* Enum value ThirdPartySuggestion was added to property type

**ThirdPartySuggestion** (1 change)

* Model was added

**DigitalAction** (1 change)

* Optional property setWhatsAppIntegrationActionSettings was added

**LastAttemptByColumnConditionSettings** (1 change)

* Optional property whatsAppColumnName was added

**LastResultByColumnConditionSettings** (2 changes)

* Optional property whatsAppColumnName was added
* Optional property whatsAppWrapupCodes was added

**LastResultOverallConditionSettings** (1 change)

* Optional property whatsAppWrapupCodes was added

**GuideSessionTurnInvocationParameters** (1 change)

* Enum value List was added to property type

**Variable** (3 changes)

* Enum value List was added to property type
* Optional property listValues was added
* Optional property listVariables was added

**JourneyViewChartMetric** (4 changes)

* Enum value Minimum was added to property aggregate
* Enum value Maximum was added to property aggregate
* Enum value Average was added to property aggregate
* Enum value Sum was added to property aggregate

**ConnectionOptionListing** (3 changes)

* Optional property nextUri was added
* Optional property selfUri was added
* Optional property previousUri was added

**ConnectionResponse** (1 change)

* Optional property dateExpiry was added

**KnowledgeRetrievedReference** (1 change)

* Optional property usedForGeneration was added

**V3SourceExpandableResponse** (1 change)

* Model was added

**V3SourceLastSynchronization** (1 change)

* Enum value Cancelled was added to property status

**V3SourceExpandableListResponse** (1 change)

* Model was added

**V3SourceExpandableListing** (1 change)

* Model was added

**V3Synchronization** (1 change)

* Enum value Cancelled was added to property status

**V3SynchronizationUpdateRequest** (1 change)

* Enum value Cancelled was added to property status

**AppEventResponse** (1 change)

* Optional property externalId was added

**AppEventRequest** (1 change)

* Optional property externalId was added

**WebEventResponse** (1 change)

* Optional property externalId was added

**WebEventRequest** (1 change)

* Optional property externalId was added

**AgentScoringRule** (1 change)

* Optional property agentToScore was added

**RecordingJobsQuery** (2 changes)

* Optional property includePolicyBasedRecordings was added
* Optional property includeSnippetRecordings was added

**SocialMediaAsyncAggregationQuery** (4 changes)

* Enum value likes was added to property groupBy
* Enum value shares was added to property groupBy
* Enum value comments was added to property groupBy
* Enum value views was added to property groupBy

**SocialMediaQueryPredicate** (4 changes)

* Enum value likes was added to property dimension
* Enum value shares was added to property dimension
* Enum value comments was added to property dimension
* Enum value views was added to property dimension

**SocialMediaEngagement** (1 change)

* Model was added

**Icon** (1 change)

* Model was added

**LocalizedLabels** (1 change)

* Enum value MessengerLauncherButtonText was added to property key

**IdentityResolutionAutomergeConfig** (1 change)

* Optional property webTracking was added

**ActivityCode** (1 change)

* id is no longer readonly

**PlanningGroupReference** (1 change)

* id is no longer readonly

**BuShortTermForecast** (1 change)

* id is no longer readonly

**BuShortTermForecastListItem** (1 change)

* id is no longer readonly

**WfmAgent** (1 change)

* id is no longer readonly

**WorkPlanRotationReference** (1 change)

* id is no longer readonly

**ServiceGoalTemplateReference** (1 change)

* id is no longer readonly

**StaffingGroupResponse** (1 change)

* id is no longer readonly

**StaffingGroupReference** (1 change)

* id is no longer readonly

**ActivityPlanJobResponse** (1 change)

* id is no longer readonly

**ActivityPlanOccurrenceReference** (1 change)

* id is no longer readonly

**ActivityPlanOccurrenceSessionsUsersStructureReference** (1 change)

* id is no longer readonly

**ActivityPlanSessionStructureReference** (1 change)

* id is no longer readonly

**ActivityPlanStructureWithOccurrenceSessionsUsersReference** (1 change)

* id is no longer readonly

**ActivityPlanReference** (1 change)

* id is no longer readonly

**ActivityPlanRunJobResponse** (1 change)

* id is no longer readonly

**BuAlternativeShiftJobResponse** (1 change)

* id is no longer readonly

**TimeOffLimitReference** (1 change)

* id is no longer readonly

**TimeOffRequestResponse** (1 change)

* id is no longer readonly

**WeekScheduleReference** (1 change)

* id is no longer readonly

**PerformancePredictionResponse** (1 change)

* id is no longer readonly

**BuScheduleRun** (1 change)

* id is no longer readonly

**ShortTermForecastReference** (1 change)

* id is no longer readonly

**WeekScheduleListItemResponse** (1 change)

* id is no longer readonly

**WeekSchedule** (1 change)

* id is no longer readonly

**ShiftTradeSearchUnmatchedTradesBuJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeBulkUpdateTradeStateBuJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeQueryTradesBuJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeEvaluateTradesBuJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeQueryWeekSummariesBuJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeAddTradeJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeQueryAgentTradesJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeUpdateTradeJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeUpdateTradeStateJobResponse** (1 change)

* id is no longer readonly

**ShiftTradeMatchTradeJobResponse** (1 change)

* id is no longer readonly

**BuTimeOffLimitResponse** (1 change)

* id is no longer readonly

**BuTimeOffLimitReference** (1 change)

* id is no longer readonly

**BuTimeOffLimitValueRange** (1 change)

* id is no longer readonly

**TimeOffLimit** (1 change)

* id is no longer readonly

**BuTimeOffPlanResponse** (1 change)

* id is no longer readonly

**TimeOffPlan** (1 change)

* id is no longer readonly

**WorkPlanBidGroupSummary** (1 change)

* id is no longer readonly

**WorkPlanBidGroupResponse** (1 change)

* id is no longer readonly

**AdminAgentWorkPlanPreferenceResponse** (1 change)

* id is no longer readonly

**WorktypeQueryRequest** (1 change)

* Optional property expands was added

**BatchPredictiveRoutingCustomKpiAttributionEventRequest** (1 change)

* Model was added

**PredictiveRoutingCustomKpiAttributionEvent** (1 change)

* Model was added

**ConversationAsyncAggregationQuery** (3 changes)

* Enum value nCallbackOverSla was added to property metrics
* Enum value oSkillExpressionApplications was added to property metrics
* Enum value tTransmitting was added to property metrics

**CaseplanQueryEntityListing** (1 change)

* Model was added

**CaseplanQueryRequest** (1 change)

* Model was added

**CopilotContextEntity** (1 change)

* Model was added

**CopilotContextValueItem** (1 change)

* Model was added

**CopilotContextValues** (1 change)

* Model was added

**Outlier** (1 change)

* Model was added

**OutlierData** (1 change)

* Model was added

**OutlierResultBody** (1 change)

* Model was added

**OutlierResultTemplate** (1 change)

* Model was added

**SessionMetricData** (1 change)

* Optional property outliers was added


# Point Changes (34 changes)

**POST /api/v2/flows/datatables/{datatableId}/import/jobs** (1 change)

* Summary was changed

**GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/journey/actionmaps/estimates/jobs** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes/{outcomeId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/journey/outcomes/{outcomeId}** (2 changes)

* Description was changed
* Summary was changed

**PATCH /api/v2/journey/outcomes/{outcomeId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/journey/outcomes** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/sessions/{sessionId}/outcomescores** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes/predictors/{predictorId}** (2 changes)

* Description was changed
* Summary was changed

**DELETE /api/v2/journey/outcomes/predictors/{predictorId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes/predictors** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/journey/outcomes/predictors** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/taskmanagement/worktypes/query** (1 change)

* Description was changed

**POST /api/v2/journey/outcomes/attributions/jobs** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}/results** (2 changes)

* Description was changed
* Summary was changed
