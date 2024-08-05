Platform API version: 8323




# Major Changes (5 changes)

**POST /api/v2/taskmanagement/workbins** (1 change)

* Parameter body was made required

**PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}** (1 change)

* Parameter body was made required

**POST /api/v2/taskmanagement/worktypes/{worktypeId}/statuses** (1 change)

* Parameter body was made required

**PATCH /api/v2/taskmanagement/worktypes/{worktypeId}** (1 change)

* Parameter body was made required

**POST /api/v2/taskmanagement/worktypes** (1 change)

* Parameter body was made required


# Minor Changes (164 changes)

**/api/v2/integrations/actions/certificates/truststore** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/limits/namespaces/{namespaceName}/limits/{limitName}/counts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/organizations/limits/namespaces/{namespaceName}/counts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/{tradeId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/alternativeshifts/offers/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/alternativeshifts/offers/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/alternativeshifts/offers/search/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/alternativeshifts/offers/search/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/alternativeshifts/trades** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/alternativeshifts/trades/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/alternativeshifts/trades/state/jobs** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/alternativeshifts/trades/state/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/workplanbids** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/workplanbids/{bidId}/preferences** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/workplanbids/{bidId}/workplans** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/alternativeshifts/settings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/summary** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/users/workplanbidranks/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/users/{userId}/workplanbidranks** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/copy** (2 changes)

* Path was added
* Operation POST was added

**User** (1 change)

* Optional property workPlanBidRanks was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value flowSubType was added to property dimension

**ViewFilter** (3 changes)

* Enum value Native was added to property developmentTypeList
* Optional property dashboardType was added
* Optional property dashboardAccessFilter was added

**OrgUser** (1 change)

* Optional property workPlanBidRanks was added

**ConversationRecipientAdditionalIdentifier** (3 changes)

* Enum value Topic was added to property type
* Enum value IngestionRule was added to property type
* Enum value IngestionRuleVersion was added to property type

**ContentButtonResponse** (1 change)

* Enum value DatePicker was added to property type

**Suggestion** (1 change)

* Enum value Rated was added to property state

**CampaignRuleCondition** (6 changes)

* Enum value campaignRecordsAttempted was added to property conditionType
* Enum value campaignBusinessSuccess was added to property conditionType
* Enum value campaignBusinessFailure was added to property conditionType
* Enum value campaignBusinessNeutral was added to property conditionType
* Enum value campaignValidAttempts was added to property conditionType
* Enum value campaignRightPartyContacts was added to property conditionType

**TrustedCertificateInfo** (1 change)

* Model was added

**TrustedCertificates** (1 change)

* Model was added

**AnswerGenerationDocument** (1 change)

* Model was added

**KnowledgeAnswerGenerationResponse** (1 change)

* Model was added

**KnowledgeDocumentSearch** (1 change)

* Optional property answerGeneration was added

**KnowledgeDocumentSearchRequest** (1 change)

* Optional property answerMode was added

**LimitCount** (1 change)

* Model was added

**LimitCountListing** (1 change)

* Model was added

**TrustUser** (1 change)

* Optional property workPlanBidRanks was added

**ButtonResponse** (1 change)

* Enum value DatePicker was added to property type

**Flow** (1 change)

* Optional property worktypeId was added

**UserMe** (1 change)

* Optional property workPlanBidRanks was added

**MessengerSettings** (1 change)

* Optional property sessionPersistenceType was added

**DevelopmentActivity** (1 change)

* Enum value Native was added to property type

**LearningModule** (1 change)

* Enum value Native was added to property type

**LearningModuleRequest** (1 change)

* Enum value Native was added to property type

**AssignedLearningModule** (1 change)

* Enum value Native was added to property type

**AlternativeShiftBuSettingsResponse** (1 change)

* Model was added

**ListWrapperAlternativeShiftBuSettingsActivityCategory** (1 change)

* Model was added

**ListWrapperAlternativeShiftBuSettingsGranularity** (1 change)

* Model was added

**UpdateAlternativeShiftBuSettingsRequest** (1 change)

* Model was added

**AlternativeShiftAgentScheduledShift** (1 change)

* Model was added

**AlternativeShiftBulkUpdateTradesResponseTemplate** (1 change)

* Model was added

**AlternativeShiftOffersViewResponseTemplate** (1 change)

* Model was added

**AlternativeShiftScheduleLookup** (1 change)

* Model was added

**AlternativeShiftTradeBulkUpdateTemplateItem** (1 change)

* Model was added

**AlternativeShiftTradeListing** (1 change)

* Model was added

**AlternativeShiftTradeResponse** (1 change)

* Model was added

**AlternativeShiftTradesViewResponseTemplate** (1 change)

* Model was added

**BuAlternativeShiftJobResponse** (1 change)

* Model was added

**BuListAlternativeShiftTradesResponse** (1 change)

* Model was added

**SearchAlternativeShiftTradesRequest** (1 change)

* Model was added

**AlternativeShiftAsyncResponse** (1 change)

* Model was added

**AlternativeShiftJobReference** (1 change)

* Model was added

**AlternativeShiftOffersRequest** (1 change)

* Model was added

**AlternativeShiftJobResponse** (1 change)

* Model was added

**AlternativeShiftSearchOffersRequest** (1 change)

* Model was added

**InitiatingAlternativeShift** (1 change)

* Model was added

**CreateAlternativeShiftTradeRequest** (1 change)

* Model was added

**ListAlternativeShiftTradesResponse** (1 change)

* Model was added

**AgentUpdateAlternativeShiftTradeRequest** (1 change)

* Model was added

**AdminBulkUpdateAlternativeShiftTradeState** (1 change)

* Model was added

**AdminBulkUpdateAlternativeShiftTradeStateRequest** (1 change)

* Model was added

**AgentWorkPlanBid** (1 change)

* Model was added

**AgentWorkPlanBids** (1 change)

* Model was added

**AgentWorkPlanBiddingPreference** (1 change)

* Model was added

**AgentWorkPlanBiddingPreferenceResponse** (1 change)

* Model was added

**AgentWorkPlanBiddingPreferenceRequest** (1 change)

* Model was added

**UpdateAgentWorkPlanBiddingPreference** (1 change)

* Model was added

**AgentWorkPlan** (1 change)

* Model was added

**AgentWorkPlanActivity** (1 change)

* Model was added

**AgentWorkPlanListResponse** (1 change)

* Model was added

**AgentWorkPlanShift** (1 change)

* Model was added

**AgentCountRange** (1 change)

* Model was added

**BidGroupWorkPlanResponse** (1 change)

* Model was added

**WorkPlanBidGroup** (1 change)

* Model was added

**WorkPlanBidGroupResponse** (1 change)

* Model was added

**WorkPlanBidMetadata** (1 change)

* Model was added

**BidGroupWorkPlanRequest** (1 change)

* Model was added

**WorkPlanBidGroupCreate** (1 change)

* Model was added

**WorkPlanBidGroupSummary** (1 change)

* Model was added

**WorkPlanBidGroupSummaryList** (1 change)

* Model was added

**ListWrapperBidGroupWorkPlanRequest** (1 change)

* Model was added

**WorkPlanBidGroupUpdate** (1 change)

* Model was added

**AdminAgentWorkPlanBiddingPreference** (1 change)

* Model was added

**AdminAgentWorkPlanPreferenceResponse** (1 change)

* Model was added

**AgentBidWorkPlanOverrideRequest** (1 change)

* Model was added

**AgentsBidAssignedWorkPlanOverrideRequest** (1 change)

* Model was added

**BuShortTermForecastWeekReference** (1 change)

* Model was added

**WorkPlanBid** (1 change)

* Model was added

**CreateWorkPlanBid** (1 change)

* Model was added

**WorkPlanBidListResponse** (1 change)

* Model was added

**ListWrapperAgentWorkPlanField** (1 change)

* Model was added

**UpdateWorkPlanBid** (1 change)

* Model was added

**CopyWorkPlanBid** (1 change)

* Model was added

**JourneyViewElementFilterNumberPredicate** (1 change)

* Model was added

**JourneyViewElementFilterRange** (1 change)

* Model was added

**JourneyViewElementFilterRangeData** (1 change)

* Model was added


# Point Changes (13 changes)

**POST /api/v2/analytics/ratelimits/aggregates/query** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/users/development/activities/{activityId}** (1 change)

* Description was changed for parameter type

**GET /api/v2/users/development/activities** (1 change)

* Description was changed for parameter types

**GET /api/v2/users/development/activities/me** (1 change)

* Description was changed for parameter types

**GET /api/v2/learning/assignments** (1 change)

* Description was changed for parameter types

**GET /api/v2/learning/assignments/me** (1 change)

* Description was changed for parameter types

**GET /api/v2/learning/modules** (1 change)

* Description was changed for parameter types

**POST /api/v2/taskmanagement/workbins** (1 change)

* Description was changed for parameter body

**PATCH /api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}** (1 change)

* Description was changed for parameter body

**POST /api/v2/taskmanagement/worktypes/{worktypeId}/statuses** (1 change)

* Description was changed for parameter body

**PATCH /api/v2/taskmanagement/worktypes/{worktypeId}** (1 change)

* Description was changed for parameter body

**POST /api/v2/taskmanagement/worktypes** (1 change)

* Description was changed for parameter body
