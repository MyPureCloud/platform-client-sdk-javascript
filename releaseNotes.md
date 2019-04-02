Platform API version: 3144


# Major Changes (10 changes)

**GET /api/v2/architect/prompts** (1 change)

* Parameter name was changed from string to array

**GET /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Has been deprecated

**PUT /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Has been deprecated

**DELETE /api/v2/webchat/deployments/{deploymentId}** (1 change)

* Has been deprecated

**POST /api/v2/flows/actions/checkin** (1 change)

* Response 200 type was changed from Flow to Operation

**GET /api/v2/analytics/conversations/details** (1 change)

* Response 200 type was changed from AnalyticsConversation to AnalyticsConversationMultiGetResponse

**GET /api/v2/webchat/deployments** (1 change)

* Has been deprecated

**POST /api/v2/webchat/deployments** (1 change)

* Has been deprecated

**Flow** (1 change)

* Property division was changed from Division to WritableDivision

**FlowDivisionView** (1 change)

* Property division was changed from Division to WritableDivision


# Minor Changes (159 changes)

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/state** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/widgets/deployments/{deploymentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/license/users** (1 change)

* Operation get was added. Summary: Get a page of users and their licenses

**/api/v2/workforcemanagement/managementunits/{muId}/shifttrades/matched** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{muId}/shifttrades/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/sessions/{sessionId}/events** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/workforcemanagement/adhocmodelingjobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/schedulingjobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/notifications** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/notifications/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/shifttrades** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/widgets/deployments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}** (1 change)

* Operation patch was added. Summary: Update agent details

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades** (2 changes)

* Path was added
* Operation GET was added

**InboundRoute** (2 changes)

* Optional property autoBcc was added
* Optional property spamFlow was added

**Call** (1 change)

* Optional property startAlertingTime was added

**Callback** (1 change)

* Optional property startAlertingTime was added

**Cobrowsesession** (1 change)

* Optional property startAlertingTime was added

**ConversationChat** (1 change)

* Optional property startAlertingTime was added

**Email** (1 change)

* Optional property startAlertingTime was added

**Message** (1 change)

* Optional property startAlertingTime was added

**Screenshare** (1 change)

* Optional property startAlertingTime was added

**SocialExpression** (1 change)

* Optional property startAlertingTime was added

**Video** (2 changes)

* Optional property startAlertingTime was added
* Optional property self was added

**MediaTranscription** (1 change)

* Enum value CALLJOURNEY was added to property transcriptionProvider

**AggregationQuery** (1 change)

* Enum value protocolCallId was added to property groupBy

**AnalyticsQueryPredicate** (1 change)

* Enum value protocolCallId was added to property dimension

**ObservationMetricData** (2 changes)

* Optional property truncated was added
* Optional property observations was added

**ObservationValue** (1 change)

* Model was added

**ObservationQuery** (1 change)

* Optional property detailMetrics was added

**ManagementUnitSettings** (1 change)

* Optional property shiftTrading was added

**ShiftTradeActivityRule** (1 change)

* Model was added

**ShiftTradeSettings** (1 change)

* Model was added

**UserScheduleAdherence** (2 changes)

* Optional property activeQueues was added
* Optional property activeQueuesModifiedTime was added

**ActionSurvey** (1 change)

* Model was added

**JourneySurveyQuestion** (1 change)

* Model was added

**Context** (1 change)

* Model was added

**ContextPattern** (1 change)

* Model was added

**Criteria** (1 change)

* Model was added

**EntityTypeCriteria** (1 change)

* Model was added

**Journey** (1 change)

* Model was added

**JourneyPattern** (1 change)

* Model was added

**Outcome** (1 change)

* Model was added

**LineIntegrationRequest** (1 change)

* Optional property serviceCode was added

**SearchShiftTradeResponse** (1 change)

* Model was added

**SearchShiftTradesResponse** (1 change)

* Model was added

**ShiftTradeActivityPreviewResponse** (1 change)

* Model was added

**ShiftTradePreviewResponse** (1 change)

* Model was added

**ShiftTradeResponse** (1 change)

* Model was added

**WeekScheduleReference** (1 change)

* Model was added

**SearchShiftTradesRequest** (1 change)

* Model was added

**ShiftTradeMatchReviewResponse** (1 change)

* Model was added

**ShiftTradeMatchReviewUserResponse** (1 change)

* Model was added

**ShiftTradeMatchViolation** (1 change)

* Model was added

**WeekShiftTradeListResponse** (1 change)

* Model was added

**WeekShiftTradeResponse** (1 change)

* Model was added

**AddShiftTradeRequest** (1 change)

* Model was added

**UpdateShiftTradeStateRequest** (1 change)

* Model was added

**UpdateShiftTradeRequest** (1 change)

* Model was added

**MatchShiftTradeResponse** (1 change)

* Model was added

**MatchShiftTradeRequest** (1 change)

* Model was added

**WidgetClientConfig** (1 change)

* Model was added

**WidgetClientConfigThirdParty** (1 change)

* Model was added

**WidgetClientConfigV1** (1 change)

* Model was added

**WidgetClientConfigV2** (1 change)

* Model was added

**WidgetDeployment** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Enum value COMPLETED_WITH_PARTIAL_RESULTS was added to property status

**ViewFilter** (1 change)

* Optional property sipCallIds was added

**HistoryEntry** (1 change)

* Model was added

**HistoryListing** (5 changes)

* Optional property entities was added
* Optional property total was added
* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property pageCount was added

**JourneySegment** (1 change)

* Model was added

**ChatMessage** (1 change)

* Optional property bodyType was added

**ShiftTradeMatchesSummaryResponse** (1 change)

* Model was added

**WeekShiftTradeMatchesSummaryResponse** (1 change)

* Model was added

**ActionMap** (1 change)

* Model was added

**ActionMapAction** (1 change)

* Model was added

**ActionProperties** (1 change)

* Model was added

**Activation** (1 change)

* Model was added

**EventCondition** (1 change)

* Model was added

**OutcomeProbabilityCondition** (1 change)

* Model was added

**UrlCondition** (1 change)

* Model was added

**ActionTarget** (1 change)

* Model was added

**Browser** (1 change)

* Model was added

**Cursors** (1 change)

* Model was added

**CustomEventAttribute** (1 change)

* Model was added

**Device** (1 change)

* Model was added

**Event** (1 change)

* Model was added

**EventAction** (1 change)

* Model was added

**EventListing** (1 change)

* Model was added

**GenericActionEvent** (1 change)

* Model was added

**GenericEventAction** (1 change)

* Model was added

**JourneyCampaign** (1 change)

* Model was added

**JourneyGeolocation** (1 change)

* Model was added

**JourneyPage** (1 change)

* Model was added

**OutcomeAchievedEvent** (1 change)

* Model was added

**Referrer** (1 change)

* Model was added

**SegmentAssignedEvent** (1 change)

* Model was added

**Session** (1 change)

* Model was added

**WebActionEvent** (1 change)

* Model was added

**WebEvent** (1 change)

* Model was added

**UserLicenses** (1 change)

* Model was added

**UserLicensesEntityListing** (1 change)

* Model was added

**CreateManagementUnitSettings** (1 change)

* Optional property shiftTrading was added

**UserScheduleContainer** (1 change)

* Optional property publishedSchedules was added

**UserScheduleShift** (1 change)

* Optional property weekSchedule was added

**CurrentUserScheduleRequestBody** (1 change)

* Optional property loadFullWeeks was added

**ModelingProcessingError** (1 change)

* Model was added

**ModelingStatusResponse** (1 change)

* Model was added

**SchedulingProcessingError** (1 change)

* Model was added

**SchedulingStatusResponse** (1 change)

* Model was added

**UserListScheduleRequestBody** (1 change)

* Optional property loadFullWeeks was added

**AnalyticsSession** (1 change)

* Optional property protocolCallId was added

**AnalyticsConversationMultiGetResponse** (1 change)

* Model was added

**NotificationsResponse** (1 change)

* Model was added

**ShiftTradeNotification** (1 change)

* Model was added

**WfmUserNotification** (1 change)

* Model was added

**UpdateNotificationResponse** (1 change)

* Model was added

**UpdateNotificationsResponse** (1 change)

* Model was added

**UpdateNotificationsRequest** (1 change)

* Model was added

**ShiftTradeListResponse** (1 change)

* Model was added

**WidgetDeploymentEntityListing** (1 change)

* Model was added

**CallBasic** (1 change)

* Optional property startAlertingTime was added

**CallbackBasic** (1 change)

* Optional property startAlertingTime was added

**WfmAgent** (1 change)

* Optional property acceptDirectShiftTrades was added

**UpdateAgentRequest** (1 change)

* Model was added


# Point Changes (12 changes)

**GET /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Description was changed

**PUT /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Description was changed

**DELETE /api/v2/flows/datatables/{datatableId}/rows/{rowId}** (1 change)

* Description was changed

**GET /api/v2/flows/datatables** (1 change)

* Description was changed

**POST /api/v2/flows/datatables** (1 change)

* Description was changed

**GET /api/v2/flows/datatables/{datatableId}/rows** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/flows/datatables/{datatableId}/rows** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/flows/datatables/{datatableId}** (1 change)

* Description was changed

**PUT /api/v2/flows/datatables/{datatableId}** (1 change)

* Description was changed

**DELETE /api/v2/flows/datatables/{datatableId}** (1 change)

* Description was changed
