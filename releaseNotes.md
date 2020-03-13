Platform API version: 3822


# Major Changes (15 changes)

**GET /api/v2/authorization/divisionspermitted/me** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/managementunits/{muId}/agentschedules/search** (1 change)

* Response 200 type was changed from UserScheduleContainer to BuAsyncAgentSchedulesSearchResponse

**GET /api/v2/audits/query/{transactionId}/results** (1 change)

* Parameter expand was added

**AnalyticsConversationQueryResponse** (1 change)

* Property conversations was changed from AnalyticsConversation[] to AnalyticsConversationWithoutAttributes[]

**ViewFilter** (10 changes)

* Property showSecondaryStatus was removed
* Property agentDurationSortOrder was removed
* Property waitingDurationSortOrder was removed
* Property interactingDurationSortOrder was removed
* Property agentName was removed
* Property skillsList was removed
* Property languageList was removed
* Property statusList was removed
* Property oauthClientIds was removed
* Property apiOperations was removed

**AuditLogMessage** (1 change)

* Property user was changed from AddressableEntityRef to DomainEntityRef


# Minor Changes (48 changes)

**/api/v2/license/infer** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/authorization/divisionspermitted/paged/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/divisionspermitted/paged/{subjectId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/users/{userId}/utilization** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/flows/datatables/{datatableId}/export/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/flows/datatables/{datatableId}/import/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**Organization** (1 change)

* Optional property productPlatform was added

**EvaluationQuestionGroupScore** (4 changes)

* Optional property totalNonCriticalScore was added
* Optional property maxTotalNonCriticalScore was added
* Optional property totalNonCriticalScoreUnweighted was added
* Optional property maxTotalNonCriticalScoreUnweighted was added

**EvaluationScoringSet** (1 change)

* Optional property totalNonCriticalScore was added

**BuAgentScheduleActivity** (1 change)

* Model was added

**BuAgentSchedulePublishedScheduleReference** (1 change)

* Model was added

**BuAgentScheduleSearchResponse** (1 change)

* Model was added

**BuAgentScheduleShift** (1 change)

* Model was added

**BuFullDayTimeOffMarker** (1 change)

* Model was added

**BuScheduleReference** (1 change)

* Model was added

**AnalyticsParticipantWithoutAttributes** (1 change)

* Optional property teamId was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value teamId was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value teamId was added to property groupBy

**SegmentDetailQueryPredicate** (1 change)

* Enum value teamId was added to property dimension

**AnalyticsParticipant** (1 change)

* Optional property teamId was added

**AvailableTopic** (2 changes)

* Optional property requiresCurrentUser was added
* Optional property requiresCurrentUserOrPermission was added

**DivsPermittedEntityListing** (1 change)

* Model was added

**CampaignProgress** (1 change)

* Optional property numberOfContactsMessaged was added

**BuAgentSchedulesSearchResponse** (1 change)

* Model was added

**BuAsyncAgentSchedulesSearchResponse** (1 change)

* Model was added

**DataTableExportJob** (1 change)

* Model was added

**EntityListing** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Enum value TOO_MANY_REQUESTS_FROM_AN_ORGANIZATION was added to property exportErrorMessagesType

**DataTableImportJob** (1 change)

* Model was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value teamId was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value teamId was added to property groupBy


# Point Changes (4 changes)

**GET /api/v2/authorization/divisionspermitted/me** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/authorization/divisionspermitted/{subjectId}** (2 changes)

* Description was changed
* Summary was changed
