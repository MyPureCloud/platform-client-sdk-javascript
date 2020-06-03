Platform API version: 3990


# Major Changes (133 changes)

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Response 200 was removed

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Response 204 was removed

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (1 change)

* Response 200 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs** (1 change)

* Response 200 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result** (1 change)

* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (2 changes)

* Parameter body was removed
* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (5 changes)

* Parameter forceAsync was removed
* Parameter forceDownloadService was removed
* Parameter body was removed
* Response 201 was removed
* Response 202 was removed

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Response 204 was removed

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (5 changes)

* Parameter forceAsync was removed
* Parameter forceDownloadService was removed
* Parameter body was removed
* Response 202 was removed
* Response 409 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload** (2 changes)

* Parameter body was removed
* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate** (2 changes)

* Parameter body was removed
* Response 202 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (5 changes)

* Parameter forceAsync was removed
* Parameter forceDownloadService was removed
* Parameter body was removed
* Response 201 was removed
* Response 202 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (1 change)

* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (2 changes)

* Parameter body was removed
* Response 200 was removed

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (2 changes)

* Response 200 was removed
* Response 409 was removed

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Response 200 was removed

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (3 changes)

* Parameter body was removed
* Response 200 was removed
* Response 409 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (1 change)

* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (2 changes)

* Parameter body was removed
* Response 200 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (1 change)

* Response 200 was removed

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (1 change)

* Response 204 was removed

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (3 changes)

* Parameter body was removed
* Response 200 was removed
* Response 409 was removed

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query** (1 change)

* Response 200 type was changed from TimeOffRequestLookupList to TimeOffRequestListing

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails** (1 change)

* Response 200 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (1 change)

* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (5 changes)

* Parameter forceAsync was removed
* Parameter body was removed
* Response 200 was removed
* Response 201 was removed
* Response 202 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload** (2 changes)

* Parameter body was removed
* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (5 changes)

* Parameter forceAsync was removed
* Parameter body was removed
* Response 200 was removed
* Response 201 was removed
* Response 202 was removed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final** (2 changes)

* Parameter forceDownloadService was removed
* Response 200 was removed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (5 changes)

* Parameter forceAsync was removed
* Parameter body was removed
* Response 200 was removed
* Response 201 was removed
* Response 202 was removed

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (1 change)

* Response 204 was removed

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (2 changes)

* Parameter body was removed
* Response 200 was removed

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (2 changes)

* Parameter date was removed
* Response 200 was removed

**AsyncWeekScheduleResponse** (1 change)

* Model AsyncWeekScheduleResponse was removed

**RescheduleRequest** (1 change)

* Model RescheduleRequest was removed

**ImportWeekScheduleRequest** (1 change)

* Model ImportWeekScheduleRequest was removed

**CopyWeekScheduleRequest** (1 change)

* Model CopyWeekScheduleRequest was removed

**UpdateWeekScheduleRequest** (1 change)

* Model UpdateWeekScheduleRequest was removed

**PartialUploadResponse** (1 change)

* Model PartialUploadResponse was removed

**UserSchedulesPartialUploadRequest** (1 change)

* Model UserSchedulesPartialUploadRequest was removed

**GenerateWeekScheduleResponse** (1 change)

* Model GenerateWeekScheduleResponse was removed

**GenerateWeekScheduleRequest** (1 change)

* Model GenerateWeekScheduleRequest was removed

**RouteGroup** (1 change)

* Model RouteGroup was removed

**RouteGroupAttributes** (1 change)

* Model RouteGroupAttributes was removed

**RouteGroupList** (1 change)

* Model RouteGroupList was removed

**ForecastGenerationResult** (1 change)

* Model ForecastGenerationResult was removed

**ForecastGenerationRouteGroupResult** (1 change)

* Model ForecastGenerationRouteGroupResult was removed

**ForecastTimeSeriesResult** (1 change)

* Model ForecastTimeSeriesResult was removed

**ListWrapperForecastSourceDayPointer** (1 change)

* Model ListWrapperForecastSourceDayPointer was removed

**ListWrapperWfmForecastModification** (1 change)

* Model ListWrapperWfmForecastModification was removed

**ShortTermForecast** (1 change)

* Model ShortTermForecast was removed

**ShortTermForecastResponse** (1 change)

* Model ShortTermForecastResponse was removed

**WfmForecastModification** (1 change)

* Model WfmForecastModification was removed

**WfmForecastModificationAttributes** (1 change)

* Model WfmForecastModificationAttributes was removed

**ImportShortTermForecastRequest** (1 change)

* Model ImportShortTermForecastRequest was removed

**GenerateShortTermForecastResponse** (1 change)

* Model GenerateShortTermForecastResponse was removed

**GenerateShortTermForecastRequest** (1 change)

* Model GenerateShortTermForecastRequest was removed

**ForecastResultResponse** (1 change)

* Model ForecastResultResponse was removed

**CopyShortTermForecastRequest** (1 change)

* Model CopyShortTermForecastRequest was removed

**ShortTermForecastListItemResponse** (1 change)

* Model ShortTermForecastListItemResponse was removed

**ShortTermForecastListResponse** (1 change)

* Model ShortTermForecastListResponse was removed

**TimeOffRequestLookup** (1 change)

* Model TimeOffRequestLookup was removed

**TimeOffRequestLookupList** (1 change)

* Model TimeOffRequestLookupList was removed

**TimeOffRequestEntityList** (1 change)

* Model TimeOffRequestEntityList was removed

**IntradayQueue** (1 change)

* Model IntradayQueue was removed

**WfmIntradayQueueListing** (1 change)

* Model WfmIntradayQueueListing was removed

**IntradayDataGroup** (1 change)

* Model IntradayDataGroup was removed

**IntradayForecastData** (1 change)

* Model IntradayForecastData was removed

**IntradayHistoricalAgentData** (1 change)

* Model IntradayHistoricalAgentData was removed

**IntradayHistoricalQueueData** (1 change)

* Model IntradayHistoricalQueueData was removed

**IntradayMetric** (1 change)

* Model IntradayMetric was removed

**IntradayPerformancePredictionAgentData** (1 change)

* Model IntradayPerformancePredictionAgentData was removed

**IntradayPerformancePredictionQueueData** (1 change)

* Model IntradayPerformancePredictionQueueData was removed

**IntradayResponse** (1 change)

* Model IntradayResponse was removed

**IntradayScheduleData** (1 change)

* Model IntradayScheduleData was removed

**IntradayQueryDataCommand** (1 change)

* Model IntradayQueryDataCommand was removed

**QueueMediaAssociation** (1 change)

* Model QueueMediaAssociation was removed

**ServiceGoalGroup** (1 change)

* Model ServiceGoalGroup was removed

**ServiceGoalGroupGoals** (1 change)

* Model ServiceGoalGroupGoals was removed

**ServiceGoalGroupList** (1 change)

* Model ServiceGoalGroupList was removed

**WfmAbandonRate** (1 change)

* Model WfmAbandonRate was removed

**WfmAverageSpeedOfAnswer** (1 change)

* Model WfmAverageSpeedOfAnswer was removed

**WfmServiceLevel** (1 change)

* Model WfmServiceLevel was removed

**CreateQueueMediaAssociationRequest** (1 change)

* Model CreateQueueMediaAssociationRequest was removed

**CreateServiceGoalGroupRequest** (1 change)

* Model CreateServiceGoalGroupRequest was removed

**ReschedulingOptionsResponse** (1 change)

* Model ReschedulingOptionsResponse was removed

**SchedulingRunListResponse** (1 change)

* Model SchedulingRunListResponse was removed

**SchedulingRunResponse** (1 change)

* Model SchedulingRunResponse was removed

**UnscheduledAgentWarning** (1 change)

* Model UnscheduledAgentWarning was removed

**RescheduleResult** (1 change)

* Model RescheduleResult was removed

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]


# Minor Changes (191 changes)

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Response 410 was added
* Response default was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Response 410 was added
* Response default was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result** (2 changes)

* Response 410 was added
* Response default was added

**/api/v2/externalcontacts/organizations/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/dataextensions/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas/{schemaId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/dataextensions/limits** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (2 changes)

* Response 410 was added
* Response default was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (2 changes)

* Response 410 was added
* Response default was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (2 changes)

* Response 410 was added
* Response default was added

**/api/v2/languageunderstanding/domains** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/dataextensions/coretypes/{coretypeName}** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Response 410 was added

**DELETE /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Response 410 was added

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (2 changes)

* Response 410 was added
* Response default was added

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (2 changes)

* Response 410 was added
* Response default was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (2 changes)

* Response 410 was added
* Response default was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (2 changes)

* Response 410 was added
* Response default was added

**/api/v2/languageunderstanding/domains/{domainId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/schemas/{schemaId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/domains/{domainId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/externalcontacts/contacts/schemas** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails** (2 changes)

* Response 410 was added
* Response default was added

**/api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/externalcontacts/contacts/schemas/{schemaId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/routing/sms/addresses/{addressId}** (1 change)

* Operation delete was added. Summary: Delete an Address by Id for SMS

**/api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/languageunderstanding/domains/{domainId}/feedback** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final** (2 changes)

* Response 410 was added
* Response default was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (2 changes)

* Response 410 was added
* Response default was added

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (2 changes)

* Response 410 was added
* Response default was added

**/api/v2/uploads/publicassets/images** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (2 changes)

* Response 410 was added
* Response default was added

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (2 changes)

* Response 410 was added
* Response default was added

**Call** (1 change)

* Optional property wrapup was added

**Callback** (1 change)

* Optional property wrapup was added

**Cobrowsesession** (1 change)

* Optional property wrapup was added

**ConversationChat** (1 change)

* Optional property wrapup was added

**Email** (1 change)

* Optional property wrapup was added

**Message** (1 change)

* Optional property wrapup was added

**Screenshare** (1 change)

* Optional property wrapup was added

**SocialExpression** (1 change)

* Optional property wrapup was added

**Video** (1 change)

* Optional property wrapup was added

**ScimV2EnterpriseUser** (1 change)

* Optional property employeeNumber was added

**ReportingExportJobResponse** (2 changes)

* Optional property recipientEmails was added
* Optional property emailStatuses was added

**ReportingExportJobRequest** (1 change)

* Optional property recipientEmails was added

**Coretype** (1 change)

* Model was added

**CoretypeListing** (1 change)

* Model was added

**ItemValidationLimits** (1 change)

* Model was added

**Items** (1 change)

* Model was added

**MaxLength** (1 change)

* Model was added

**MinLength** (1 change)

* Model was added

**Schema** (1 change)

* Model was added

**ValidationLimits** (1 change)

* Model was added

**CallBasic** (1 change)

* Optional property wrapup was added

**CallbackBasic** (1 change)

* Optional property wrapup was added

**SchemaQuantityLimits** (1 change)

* Model was added

**IntentDefinition** (1 change)

* Model was added

**NamedEntityAnnotation** (1 change)

* Model was added

**NamedEntityTypeBinding** (1 change)

* Model was added

**NamedEntityTypeDefinition** (1 change)

* Model was added

**NamedEntityTypeItem** (1 change)

* Model was added

**NamedEntityTypeMechanism** (1 change)

* Model was added

**NluDomain** (1 change)

* Model was added

**NluDomainListing** (1 change)

* Model was added

**NluDomainVersion** (1 change)

* Model was added

**NluUtterance** (1 change)

* Model was added

**NluUtteranceSegment** (1 change)

* Model was added

**UploadUrlResponse** (1 change)

* Model was added

**UploadUrlRequest** (1 change)

* Model was added

**NluDomainVersionListing** (1 change)

* Model was added

**DataSchemaListing** (1 change)

* Model was added

**NluConfusionMatrixColumn** (1 change)

* Model was added

**NluConfusionMatrixRow** (1 change)

* Model was added

**NluDomainVersionQualityReport** (1 change)

* Model was added

**NluQualityReportSummary** (1 change)

* Model was added

**NluQualityReportSummaryMetric** (1 change)

* Model was added

**DetectedDialogAct** (1 change)

* Model was added

**DetectedIntent** (1 change)

* Model was added

**DetectedNamedEntity** (1 change)

* Model was added

**DetectedNamedEntityValue** (1 change)

* Model was added

**NluDetectionInput** (1 change)

* Model was added

**NluDetectionOutput** (1 change)

* Model was added

**NluDetectionResponse** (1 change)

* Model was added

**ContextEntity** (1 change)

* Model was added

**ContextIntent** (1 change)

* Model was added

**NluDetectionContext** (1 change)

* Model was added

**NluDetectionRequest** (1 change)

* Model was added

**NluDomainVersionTrainingResponse** (1 change)

* Model was added

**TimeOffRequest** (1 change)

* Model was added

**TimeOffRequestListing** (1 change)

* Model was added

**IntentFeedback** (1 change)

* Model was added

**NluFeedbackResponse** (1 change)

* Model was added

**NluFeedbackListing** (1 change)

* Model was added

**NluFeedbackRequest** (1 change)

* Model was added

**DialogflowAgent** (1 change)

* Optional property environments was added

**ShiftTradeMatchViolation** (2 changes)

* Enum value InitiatingShiftHasExternalActivities was added to property type
* Enum value ReceivingShiftHasExternalActivities was added to property type

**BulkUpdateShiftTradeStateResultItem** (2 changes)

* Enum value InitiatingAgentShiftHasExternalActivities was added to property failureReason
* Enum value ReceivingAgentShiftHasExternalActivities was added to property failureReason

**FlowDivisionView** (2 changes)

* Optional property publishedVersion was added
* Optional property debugVersion was added


# Point Changes (76 changes)

**GET /api/v2/scim/v2/users** (1 change)

* Description was changed for parameter attributes

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Description was changed for parameter attributes

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (2 changes)

* Summary was changed
* Description was changed for parameter scheduleId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (2 changes)

* Summary was changed
* Description was changed for parameter scheduleId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Summary was changed

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (2 changes)

* Summary was changed
* Description was changed for parameter scheduleId

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (2 changes)

* Summary was changed
* Description was changed for parameter scheduleId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload** (1 change)

* Summary was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Summary was changed

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (2 changes)

* Summary was changed
* Description was changed for parameter scheduleId

**POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes** (1 change)

* Summary was changed

**DELETE /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Summary was changed

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Summary was changed

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (2 changes)

* Summary was changed
* Description was changed for parameter managementUnitId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter serviceGoalGroupId

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter serviceGoalGroupId

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter serviceGoalGroupId

**POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (4 changes)

* Description was changed
* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (3 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final** (4 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId
* Description was changed for parameter forecastId

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (4 changes)

* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId
* Description was changed for parameter forecastId

**DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (5 changes)

* Description was changed
* Summary was changed
* Description was changed for parameter managementUnitId
* Description was changed for parameter weekDateId
* Description was changed for parameter forecastId

**GET /api/v2/scim/users** (1 change)

* Description was changed for parameter attributes

**GET /api/v2/scim/users/{userId}** (1 change)

* Description was changed for parameter attributes

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (1 change)

* Summary was changed

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (1 change)

* Summary was changed
