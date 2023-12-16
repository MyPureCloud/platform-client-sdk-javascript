Platform API version: 7617




# Major Changes (21 changes)

**GET /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**PUT /api/v2/quality/forms/evaluations/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/forms/evaluations/{formId}/versions** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**GET /api/v2/quality/forms/evaluations** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**POST /api/v2/quality/forms/evaluations** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/publishedforms/evaluations/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**POST /api/v2/quality/publishedforms/evaluations** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/forms/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**PUT /api/v2/quality/forms/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/forms/{formId}/versions** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**GET /api/v2/quality/forms** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**POST /api/v2/quality/forms** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/publishedforms/{formId}** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/quality/publishedforms** (1 change)

* Response 200 type was changed from EvaluationFormEntityListing to EvaluationFormResponseEntityListing

**POST /api/v2/quality/publishedforms** (1 change)

* Response 200 type was changed from EvaluationForm to EvaluationFormResponse

**GET /api/v2/telephony/providers/edges/availablelanguages** (1 change)

* Has been deprecated

**EvaluationFormEntityListing** (1 change)

* Model EvaluationFormEntityListing was removed

**EvaluationFormResponse** (1 change)

* Property publishedVersions was removed

**EvaluationResponse** (2 changes)

* Property revisionCreatedDate was removed
* Property agentTeam was removed


# Minor Changes (73 changes)

**DELETE /api/v2/speechandtextanalytics/topics/{topicId}** (1 change)

* Response 409 was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/{recalculationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/utilization/labels/{labelId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/routing/utilization/labels/{labelId}/agents** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/utilization/labels** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ReportingExportJobResponse** (4 changes)

* Enum value AGENT_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (4 changes)

* Enum value AGENT_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (4 changes)

* Enum value AGENT_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_WORKITEM_PERFORMANCE_DETAIL_VIEW was added to property viewType

**Call** (1 change)

* Optional property queueMediaSettings was added

**Callback** (1 change)

* Optional property queueMediaSettings was added

**ConversationChat** (1 change)

* Optional property queueMediaSettings was added

**ConversationQueueMediaSettings** (1 change)

* Model was added

**ConversationRoutingData** (1 change)

* Optional property label was added

**Email** (1 change)

* Optional property queueMediaSettings was added

**Message** (1 change)

* Optional property queueMediaSettings was added

**CreateCallRequest** (1 change)

* Optional property label was added

**RoutingData** (1 change)

* Optional property label was added

**CallBasic** (1 change)

* Optional property queueMediaSettings was added

**CallbackBasic** (1 change)

* Optional property queueMediaSettings was added

**MetricDefinition** (1 change)

* Optional property initialDirectionFilteringAllowed was added

**ClientApp** (1 change)

* Enum value RESTORED was added to property intendedState

**Integration** (1 change)

* Enum value RESTORED was added to property intendedState

**EvaluationFormResponse** (1 change)

* Optional property weightMode was added

**EvaluationFormResponseEntityListing** (1 change)

* Model was added

**OrphanRecording** (4 changes)

* Enum value ap-northeast-3 was added to property region
* Enum value ap-southeast-1 was added to property region
* Enum value eu-central-2 was added to property region
* Enum value me-central-1 was added to property region

**Edge** (1 change)

* Optional property certType was added

**BuForecastStaffingRequirementsResult** (1 change)

* Model was added

**BuForecastStaffingRequirementsResultResponse** (1 change)

* Model was added

**StaffingRequirementsPlanningGroupData** (1 change)

* Model was added

**UpdateMuAgentRequest** (1 change)

* Model was added

**UpdateMuAgentsRequest** (1 change)

* Model was added

**PerformancePredictionOutputs** (1 change)

* Model was added

**PerformancePredictionResponse** (1 change)

* Model was added

**PlanningGroupOutputs** (1 change)

* Model was added

**AgentQueueTimeRequest** (1 change)

* Model was added

**MuAgentQueueTimeRequest** (1 change)

* Model was added

**PerformancePredictionRecalculationUploadResponse** (1 change)

* Model was added

**PerformancePredictionUploadSchema** (1 change)

* Model was added

**PerformancePredictionRecalculationResponse** (1 change)

* Model was added

**ChatMessageResponse** (1 change)

* Optional property reactions was added

**ChatReaction** (1 change)

* Model was added

**UpdateUtilizationLabelRequest** (1 change)

* Model was added

**UtilizationLabelEntityListing** (1 change)

* Model was added

**CreateUtilizationLabelRequest** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/authorization/roles/{roleId}** (1 change)

* Description was changed for parameter userCount

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Description was changed

**POST /api/v2/flows/datatables/{datatableId}/rows** (1 change)

* Description was changed

**GET /api/v2/telephony/providers/edges/availablelanguages** (1 change)

* Summary was changed
