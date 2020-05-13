Platform API version: 3927


# Major Changes (10 changes)

**/api/v2/conversations/{conversationId}/transcriptproperties/{communicationId}** (1 change)

* Path /api/v2/conversations/{conversationId}/transcriptproperties/{communicationId} was removed

**/api/v2/authorization/divisionspermitted/{subjectId}** (1 change)

* Path /api/v2/authorization/divisionspermitted/{subjectId} was removed

**GET /api/v2/architect/dependencytracking/consumingresources** (1 change)

* Parameter version was added

**GET /api/v2/orphanrecordings/{orphanId}/media** (1 change)

* Parameter locale was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Response 200 type was changed from ExternalOrganization to ExternalOrganizationTrustorLink

**GET /api/v2/architect/dependencytracking/object** (1 change)

* Parameter consumedResourceRequest was added

**GET /api/v2/conversations/{conversationId}/recordings/{recordingId}** (1 change)

* Parameter locale was added

**TranscriptProperty** (1 change)

* Model TranscriptProperty was removed

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]

**ShiftTradeResponse** (1 change)

* Property schedule was changed from WeekScheduleReference to BuScheduleReferenceForMuRoute


# Minor Changes (283 changes)

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents/{documentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{buId}/activitycodes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{buId}/activitycodes/{acId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**POST /api/v2/telephony/providers/edges/trunkbasesettings** (1 change)

* Response 409 was added

**/api/v2/workforcemanagement/agentschedules/mine** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories/{categoryId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/trainings/{trainingId}/promote** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/categories** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/routing/email/domains/{domainId}** (1 change)

* Operation patch was added. Summary: Update domain settings

**/api/v2/routing/email/domains/{domainId}/testconnection** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/knowledgebases** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (2 changes)

* Path was added
* Operation GET was added

**ForecastAbandonRateResponse** (1 change)

* Model was added

**ForecastAverageSpeedOfAnswerResponse** (1 change)

* Model was added

**ForecastPlanningGroupResponse** (1 change)

* Model was added

**ForecastServiceGoalTemplateResponse** (1 change)

* Model was added

**ForecastServiceLevelResponse** (1 change)

* Model was added

**RoutePathResponse** (1 change)

* Model was added

**WfmIntradayPlanningGroupListing** (1 change)

* Model was added

**AsyncIntradayResponse** (1 change)

* Model was added

**BuIntradayDataGroup** (1 change)

* Model was added

**BuIntradayForecastData** (1 change)

* Model was added

**BuIntradayResponse** (1 change)

* Model was added

**BuIntradayScheduleData** (1 change)

* Model was added

**BuShortTermForecastReference** (1 change)

* Model was added

**IntradayPerformancePredictionData** (1 change)

* Model was added

**IntradayPlanningGroupRequest** (1 change)

* Model was added

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**Callback** (1 change)

* Optional property externalCampaign was added

**DocumentFaq** (1 change)

* Model was added

**KnowledgeBase** (1 change)

* Model was added

**KnowledgeCategory** (1 change)

* Model was added

**KnowledgeDocument** (1 change)

* Model was added

**DocumentCategoryInput** (1 change)

* Model was added

**KnowledgeDocumentRequest** (1 change)

* Model was added

**Cursors** (1 change)

* Model was added

**BuScheduleReferenceForMuRoute** (1 change)

* Model was added

**BusinessUnitActivityCode** (1 change)

* Model was added

**BusinessUnitActivityCodeListing** (1 change)

* Model was added

**Metabase** (2 changes)

* Enum value STATION_CDM was added to property type
* Enum value STATION_CDM_WEBRTC was added to property type

**TranscriptionSettings** (1 change)

* Optional property contentSearchEnabled was added

**BuAgentScheduleUpdate** (1 change)

* Model was added

**BuCurrentAgentScheduleSearchResponse** (1 change)

* Model was added

**BuGetCurrentAgentScheduleRequest** (1 change)

* Model was added

**AdditionalMessage** (1 change)

* Optional property messagingTemplate was added

**MessagingTemplateRequest** (1 change)

* Model was added

**TemplateParameter** (1 change)

* Model was added

**AnalyticsUserDetailsAsyncQueryResponse** (1 change)

* Optional property dataAvailabilityDate was added

**KnowledgeTraining** (1 change)

* Model was added

**TrainingListing** (1 change)

* Model was added

**ListWrapperInterval** (1 change)

* Model was added

**PatchShiftTradeRequest** (1 change)

* Model was added

**ValueWrapperDate** (1 change)

* Model was added

**ValueWrapperString** (1 change)

* Model was added

**MatchShiftTradeResponse** (1 change)

* Model was added

**ShiftTradeMatchViolation** (1 change)

* Model was added

**MatchShiftTradeRequest** (1 change)

* Model was added

**AddShiftTradeRequest** (1 change)

* Model was added

**SearchShiftTradeResponse** (1 change)

* Model was added

**SearchShiftTradesResponse** (1 change)

* Model was added

**ShiftTradeActivityPreviewResponse** (1 change)

* Model was added

**ShiftTradePreviewResponse** (1 change)

* Model was added

**SearchShiftTradesRequest** (1 change)

* Model was added

**ShiftTradeMatchReviewResponse** (1 change)

* Model was added

**ShiftTradeMatchReviewUserResponse** (1 change)

* Model was added

**WeekShiftTradeListResponse** (1 change)

* Model was added

**WeekShiftTradeResponse** (1 change)

* Model was added

**BulkUpdateShiftTradeStateResponse** (1 change)

* Model was added

**BulkUpdateShiftTradeStateResult** (1 change)

* Model was added

**BulkUpdateShiftTradeStateResultItem** (1 change)

* Model was added

**BulkShiftTradeStateUpdateRequest** (1 change)

* Model was added

**BulkUpdateShiftTradeStateRequestItem** (1 change)

* Model was added

**DocumentListing** (1 change)

* Model was added

**KnowledgeDocumentBulkRequest** (1 change)

* Model was added

**AsyncForecastOperationResult** (1 change)

* Model was added

**BuForecastGenerationPlanningGroupResult** (1 change)

* Model was added

**BuForecastGenerationResult** (1 change)

* Model was added

**BuForecastModification** (1 change)

* Model was added

**BuForecastTimeSeriesResult** (1 change)

* Model was added

**BuShortTermForecast** (1 change)

* Model was added

**ForecastPlanningGroupsResponse** (1 change)

* Model was added

**GenerateBuForecastRequest** (1 change)

* Model was added

**BuForecastResult** (1 change)

* Model was added

**BuForecastResultResponse** (1 change)

* Model was added

**ForecastPlanningGroupData** (1 change)

* Model was added

**CopyBuForecastRequest** (1 change)

* Model was added

**BuShortTermForecastListItem** (1 change)

* Model was added

**BuShortTermForecastListing** (1 change)

* Model was added

**KnowledgeExtendedCategory** (1 change)

* Model was added

**KnowledgeCategoryRequest** (1 change)

* Model was added

**CallbackBasic** (1 change)

* Optional property externalCampaign was added

**CategoryListing** (1 change)

* Model was added

**BuAgentScheduleRescheduleResponse** (1 change)

* Model was added

**BuHeadcountForecast** (1 change)

* Model was added

**BuPlanningGroupHeadcountForecast** (1 change)

* Model was added

**BuRescheduleAgentScheduleResult** (1 change)

* Model was added

**BuRescheduleResult** (1 change)

* Model was added

**MuRescheduleResultWrapper** (1 change)

* Model was added

**PlanningGroupReference** (1 change)

* Model was added

**ScheduleGenerationMessage** (1 change)

* Model was added

**ScheduleGenerationResult** (1 change)

* Model was added

**SchedulerMessageArgument** (1 change)

* Model was added

**PatchBuReschedulingOptionsManagementUnitRequest** (1 change)

* Model was added

**PatchBuReschedulingOptionsRequest** (1 change)

* Model was added

**PatchBuScheduleRunRequest** (1 change)

* Model was added

**BuScheduleRun** (1 change)

* Model was added

**BuScheduleRunListing** (1 change)

* Model was added

**ReschedulingManagementUnitResponse** (1 change)

* Model was added

**ReschedulingOptionsRunResponse** (1 change)

* Model was added

**BusinessUnitListItem** (1 change)

* Model was added

**BusinessUnitListing** (1 change)

* Model was added

**BuShortTermForecastingSettings** (1 change)

* Model was added

**BusinessUnit** (1 change)

* Model was added

**BusinessUnitSettings** (1 change)

* Model was added

**CreateBusinessUnitRequest** (1 change)

* Model was added

**CreateBusinessUnitSettings** (1 change)

* Model was added

**UpdateBusinessUnitRequest** (1 change)

* Model was added

**UpdateBusinessUnitSettings** (1 change)

* Model was added

**AnalyticsConversationAsyncQueryResponse** (1 change)

* Optional property dataAvailabilityDate was added

**ExternalOrganizationTrustorLink** (1 change)

* Model was added

**BuAsyncScheduleRunResponse** (1 change)

* Model was added

**BuRescheduleRequest** (1 change)

* Model was added

**SchedulingTestingOptionsRequest** (1 change)

* Model was added

**BuAsyncScheduleResponse** (1 change)

* Model was added

**BuManagementUnitScheduleSummary** (1 change)

* Model was added

**BuScheduleMetadata** (1 change)

* Model was added

**ScheduleGenerationResultSummary** (1 change)

* Model was added

**BuCopyScheduleRequest** (1 change)

* Model was added

**BuGenerateScheduleRequest** (1 change)

* Model was added

**BuScheduleListItem** (1 change)

* Model was added

**BuScheduleListing** (1 change)

* Model was added

**BuCreateBlankScheduleRequest** (1 change)

* Model was added

**BuHeadcountForecastResponse** (1 change)

* Model was added

**BuAgentScheduleQueryResponse** (1 change)

* Model was added

**BuAgentSchedulesQueryResponse** (1 change)

* Model was added

**BuAsyncAgentSchedulesQueryResponse** (1 change)

* Model was added

**BuQueryAgentSchedulesRequest** (1 change)

* Model was added

**PlanningGroup** (1 change)

* Model was added

**ServiceGoalTemplateReference** (1 change)

* Model was added

**RoutePathRequest** (1 change)

* Model was added

**SetWrapperRoutePathRequest** (1 change)

* Model was added

**SourcePlanningGroupRequest** (1 change)

* Model was added

**UpdatePlanningGroupRequest** (1 change)

* Model was added

**PlanningGroupList** (1 change)

* Model was added

**CreatePlanningGroupRequest** (1 change)

* Model was added

**CallbackMediaParticipant** (1 change)

* Optional property externalCampaign was added

**KnowledgeSearchDocument** (1 change)

* Model was added

**KnowledgeSearchResponse** (1 change)

* Model was added

**KnowledgeSearchRequest** (1 change)

* Model was added

**BuAbandonRate** (1 change)

* Model was added

**BuAverageSpeedOfAnswer** (1 change)

* Model was added

**BuServiceLevel** (1 change)

* Model was added

**ServiceGoalTemplate** (1 change)

* Model was added

**UpdateServiceGoalTemplate** (1 change)

* Model was added

**ServiceGoalTemplateList** (1 change)

* Model was added

**CreateServiceGoalTemplate** (1 change)

* Model was added

**InboundDomainPatchRequest** (1 change)

* Model was added

**TestMessage** (1 change)

* Model was added

**KnowledgeBaseListing** (1 change)

* Model was added

**UserScheduleAdherenceListing** (1 change)

* Model was added


# Point Changes (2 changes)

**PUT /api/v2/recording/jobs/{jobId}** (2 changes)

* Description was changed
* Summary was changed
