Platform API version: 2458


# Major Changes (10 changes)

**/api/v2/routing/queues/search** (1 change)

* Path /api/v2/routing/queues/search was removed

**PUT /api/v2/users/{userId}/profileskills** (1 change)

* Parameter body was made required

**GET /api/v2/outbound/campaigns/divisionviews** (1 change)

* Parameter id was added

**GET /api/v2/outbound/campaigns** (1 change)

* Parameter divisionId was added

**SurveyFormUriReference** (1 change)

* Model SurveyFormUriReference was removed

**SurveyForm** (1 change)

* Required property language was added

**CreateAsgRequest** (1 change)

* Property asgAmi was changed from boolean to string

**PatchUser** (1 change)

* Property name was removed

**SurveyAssignment** (2 changes)

* Property surveyForm was changed from SurveyFormUriReference to PublishedSurveyFormReference
* Required property sendingDomain was added


# Minor Changes (238 changes)

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{muId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/workforcemanagement/managementunits/{muId}/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/schedules** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/adherence/historical** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/campaigns/divisionviews/{campaignId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits** (1 change)

* Operation post was added. Summary: Add a management unit

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/timeoffrequests** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**PUT /api/v2/users/{userId}/station/defaultstation/{stationId}** (1 change)

* Response 409 was added

**/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/routing/queues/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**User** (1 change)

* Optional property division was added

**ExternalContact** (2 changes)

* Optional property lineId was added
* Optional property facebookId was added

**FacebookId** (1 change)

* Model was added

**FacebookScopedId** (1 change)

* Model was added

**LineId** (1 change)

* Model was added

**LineUserId** (1 change)

* Model was added

**OrgUser** (1 change)

* Optional property division was added

**TrusteeAuthorization** (1 change)

* Model was added

**Trustor** (1 change)

* Optional property authorization was added

**AsyncWeekScheduleResponse** (1 change)

* Model was added

**HeadcountForecastResponse** (1 change)

* Model was added

**HeadcountIntervalResponse** (1 change)

* Model was added

**ScheduleGenerationWarning** (1 change)

* Model was added

**ShortTermForecastReference** (1 change)

* Model was added

**WeekSchedule** (1 change)

* Model was added

**WeekScheduleGenerationResult** (1 change)

* Model was added

**ImportWeekScheduleRequest** (1 change)

* Model was added

**WeekScheduleListItemResponse** (1 change)

* Model was added

**WeekScheduleListResponse** (1 change)

* Model was added

**WeekScheduleResponse** (1 change)

* Model was added

**CopyWeekScheduleRequest** (1 change)

* Model was added

**UpdateWeekScheduleRequest** (1 change)

* Model was added

**PartialUploadResponse** (1 change)

* Model was added

**UserSchedulesPartialUploadRequest** (1 change)

* Model was added

**GenerateWeekScheduleResponse** (1 change)

* Model was added

**GenerateWeekScheduleRequest** (1 change)

* Model was added

**AsgInfoResponse** (1 change)

* id is no longer readonly

**TrustUser** (1 change)

* Optional property division was added

**RecordingMessagingMessage** (1 change)

* Optional property id was added

**CurrentUserScheduleRequestBody** (1 change)

* Model was added

**ReportingExportJobResponse** (21 changes)

* Enum value SURVEY_FORM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value SURVEY_FORM_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value DNIS_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value DNIS_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value WRAP_UP_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_WRAP_UP_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_ACTIVITY_DETAIL_VIEW was added to property viewType
* Enum value AGENT_QUEUE_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_AGENT_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value AGENT_SCHEDULE_DETAIL_VIEW was added to property viewType
* Enum value IVR_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value IVR_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value ANSWER_INSIGHTS_VIEW was added to property viewType
* Enum value HANDLE_INSIGHTS_VIEW was added to property viewType
* Enum value TALK_INSIGHTS_VIEW was added to property viewType
* Enum value HOLD_INSIGHTS_VIEW was added to property viewType
* Enum value ACW_INSIGHTS_VIEW was added to property viewType
* Enum value WAIT_INSIGHTS_VIEW was added to property viewType
* Enum value AGENT_WRAP_UP_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType

**ViewFilter** (4 changes)

* Optional property divisionIds was added
* Optional property surveyFormIds was added
* Optional property surveyTotalScore was added
* Optional property surveyNpsScore was added

**ReportingExportJobRequest** (21 changes)

* Enum value SURVEY_FORM_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value SURVEY_FORM_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value DNIS_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value DNIS_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value WRAP_UP_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value AGENT_WRAP_UP_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_ACTIVITY_DETAIL_VIEW was added to property viewType
* Enum value AGENT_QUEUE_ACTIVITY_SUMMARY_VIEW was added to property viewType
* Enum value QUEUE_AGENT_DETAIL_VIEW was added to property viewType
* Enum value QUEUE_INTERACTION_DETAIL_VIEW was added to property viewType
* Enum value AGENT_SCHEDULE_DETAIL_VIEW was added to property viewType
* Enum value IVR_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value IVR_PERFORMANCE_DETAIL_VIEW was added to property viewType
* Enum value ANSWER_INSIGHTS_VIEW was added to property viewType
* Enum value HANDLE_INSIGHTS_VIEW was added to property viewType
* Enum value TALK_INSIGHTS_VIEW was added to property viewType
* Enum value HOLD_INSIGHTS_VIEW was added to property viewType
* Enum value ACW_INSIGHTS_VIEW was added to property viewType
* Enum value WAIT_INSIGHTS_VIEW was added to property viewType
* Enum value AGENT_WRAP_UP_PERFORMANCE_INTERVAL_DETAIL_VIEW was added to property viewType

**ShortTermForecastListItemResponse** (1 change)

* Model was added

**ShortTermForecastListResponse** (1 change)

* Model was added

**ForecastGenerationResult** (1 change)

* Model was added

**ForecastGenerationRouteGroupResult** (1 change)

* Model was added

**ForecastSourceDayPointer** (1 change)

* Model was added

**ForecastTimeSeriesResult** (1 change)

* Model was added

**LanguageReference** (1 change)

* Model was added

**ListWrapperForecastSourceDayPointer** (1 change)

* Model was added

**ListWrapperWfmForecastModification** (1 change)

* Model was added

**QueueReference** (1 change)

* Model was added

**RouteGroupAttributes** (1 change)

* Model was added

**RoutingSkillReference** (1 change)

* Model was added

**ShortTermForecast** (1 change)

* Model was added

**ShortTermForecastResponse** (1 change)

* Model was added

**WfmForecastModification** (1 change)

* Model was added

**WfmForecastModificationAttributes** (1 change)

* Model was added

**WfmForecastModificationIntervalOffsetValue** (1 change)

* Model was added

**ImportShortTermForecastRequest** (1 change)

* Model was added

**RouteGroup** (1 change)

* Model was added

**RouteGroupList** (1 change)

* Model was added

**GenerateShortTermForecastResponse** (1 change)

* Model was added

**GenerateShortTermForecastRequest** (1 change)

* Model was added

**ForecastResultResponse** (1 change)

* Model was added

**CopyShortTermForecastRequest** (1 change)

* Model was added

**WfmHistoricalAdherenceQueryForUsers** (1 change)

* Model was added

**SchedulingRunListResponse** (1 change)

* Model was added

**SchedulingRunResponse** (1 change)

* Model was added

**AggregateMetricData** (2 changes)

* Enum value tContacting was added to property metric
* Enum value tDialing was added to property metric

**AggregationQuery** (2 changes)

* Enum value tContacting was added to property metrics
* Enum value tDialing was added to property metrics

**AnalyticsQueryPredicate** (2 changes)

* Enum value tContacting was added to property metric
* Enum value tDialing was added to property metric

**QueryDivision** (1 change)

* Model was added

**PatchUser** (1 change)

* id is no longer readonly

**ObservationQuery** (2 changes)

* Enum value tContacting was added to property metrics
* Enum value tDialing was added to property metrics

**UserMe** (1 change)

* Optional property division was added

**CallMediaPolicyConditions** (1 change)

* Optional property languages was added

**ChatMediaPolicyConditions** (1 change)

* Optional property languages was added

**EmailMediaPolicyConditions** (1 change)

* Optional property languages was added

**MessageMediaPolicyConditions** (1 change)

* Optional property languages was added

**PublishedSurveyFormReference** (1 change)

* Model was added

**SurveyAssignment** (1 change)

* Optional property sendingUser was added

**WorkPlanListItemResponse** (1 change)

* Model was added

**WorkPlanListResponse** (1 change)

* Model was added

**DeletableUserReference** (1 change)

* Model was added

**ListWrapperShiftStartVariance** (1 change)

* Model was added

**SetWrapperDayOfWeek** (1 change)

* Model was added

**ShiftStartVariance** (1 change)

* Model was added

**WorkPlan** (1 change)

* Model was added

**WorkPlanActivity** (1 change)

* Model was added

**WorkPlanShift** (1 change)

* Model was added

**CreateWorkPlan** (1 change)

* Model was added

**CreateWorkPlanActivity** (1 change)

* Model was added

**CreateWorkPlanShift** (1 change)

* Model was added

**CopyWorkPlan** (1 change)

* Model was added

**CreateManagementUnitApiRequest** (1 change)

* Model was added

**CreateManagementUnitSettings** (1 change)

* Model was added

**WfmAgent** (1 change)

* Model was added

**WfmTimeZone** (1 change)

* Model was added

**WorkPlanReference** (1 change)

* Model was added

**CreateAgentTimeOffRequest** (1 change)

* Model was added

**AgentTimeOffRequestPatch** (1 change)

* Model was added

**UpdateActivityCodeRequest** (1 change)

* Model was added

**TimeOffRequestLookup** (1 change)

* Model was added

**TimeOffRequestLookupList** (1 change)

* Model was added

**DateRange** (1 change)

* Model was added

**TimeOffRequestQueryBody** (1 change)

* Model was added

**TimeOffRequestEntityList** (1 change)

* Model was added

**CreateAdminTimeOffRequest** (1 change)

* Model was added

**QueueMediaAssociation** (1 change)

* Model was added

**ServiceGoalGroup** (1 change)

* Model was added

**ServiceGoalGroupGoals** (1 change)

* Model was added

**WfmAverageSpeedOfAnswer** (1 change)

* Model was added

**WfmServiceLevel** (1 change)

* Model was added

**CreateQueueMediaAssociationRequest** (1 change)

* Model was added

**CreateServiceGoalGroupRequest** (1 change)

* Model was added

**ServiceGoalGroupList** (1 change)

* Model was added


# Point Changes (6 changes)

**GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues** (2 changes)

* Description was changed for parameter muId
* Description was changed for parameter date

**POST /api/v2/workforcemanagement/managementunits/{muId}/intraday** (1 change)

* Description was changed for parameter muId

**POST /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery** (2 changes)

* Description was changed
* Description was changed for parameter muId

**GET /api/v2/workforcemanagement/managementunits/{muId}/users** (1 change)

* Summary was changed
