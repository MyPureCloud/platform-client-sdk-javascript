Platform API version: 2680


# Major Changes (18 changes)

**/api/v2/messaging/integrations/line/webhook/{integrationId}** (1 change)

* Path /api/v2/messaging/integrations/line/webhook/{integrationId} was removed

**/api/v2/outbound/campaigns/divisionviews/{campaignId}** (1 change)

* Path /api/v2/outbound/campaigns/divisionviews/{campaignId} was removed

**GET /api/v2/quality/publishedforms/surveys** (1 change)

* Parameter onlyLatestEnabledPerContext was added

**GET /api/v2/quality/publishedforms/evaluations** (1 change)

* Parameter onlyLatestPerContext was added

**GET /api/v2/quality/publishedforms** (1 change)

* Parameter onlyLatestPerContext was added

**GET /api/v2/routing/message/recipients** (1 change)

* Parameter messengerType was added

**JsonNode** (1 change)

* Model JsonNode was removed

**HeadcountForecastResponse** (1 change)

* Model HeadcountForecastResponse was removed

**HeadcountIntervalResponse** (1 change)

* Model HeadcountIntervalResponse was removed

**DncList** (1 change)

* dncSourceType has been made readonly

**JsonNodeSearchResponse** (2 changes)

* Property results was changed from JsonNode to ArrayNode
* Property aggregations was changed from JsonNode to ArrayNode

**WeekSchedule** (1 change)

* Property headcountForecast was changed from HeadcountForecastResponse to HeadcountForecast

**LineIntegrationRequest** (1 change)

* Property channelAccessToken was removed

**AnalyticsSurvey** (4 changes)

* Property participantId was removed
* Property externalContactId was removed
* Property customerAddress was removed
* Property createdDate was removed


# Minor Changes (45 changes)

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}** (2 changes)

* Operation get was added. Summary: Gets the status for a specific scheduling run
* Operation patch was added. Summary: Marks a specific scheduling run as applied, allowing a new rescheduling run to be started

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/conversations/messages** (1 change)

* Operation post was added. Summary: Create an outbound messaging conversation.

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlists/{contactListId}/timezonemappingpreview** (2 changes)

* Path was added
* Operation GET was added

**ViewFilter** (2 changes)

* Optional property filterQueuesByUserIds was added
* Optional property filterUsersByQueueIds was added

**Dependency** (2 changes)

* Enum value TTSENGINE was added to property type
* Enum value TTSVOICE was added to property type

**DependencyObject** (2 changes)

* Enum value TTSENGINE was added to property type
* Enum value TTSVOICE was added to property type

**Queue** (1 change)

* Optional property outboundMessagingAddresses was added

**QueueMessagingAddresses** (1 change)

* Model was added

**CreateQueueRequest** (1 change)

* Optional property outboundMessagingAddresses was added

**Recipient** (1 change)

* Optional property messengerType was added

**ReschedulingOptionsResponse** (1 change)

* Model was added

**SchedulingRunResponse** (6 changes)

* Optional property schedulerRunId was added
* Optional property intradayRescheduling was added
* Optional property reschedulingOptions was added
* Optional property reschedulingResultExpiration was added
* Optional property applied was added
* Optional property unscheduledAgents was added

**UnscheduledAgentWarning** (1 change)

* Model was added

**RescheduleResult** (1 change)

* Model was added

**UpdateSchedulingRunRequest** (1 change)

* Model was added

**ArrayNode** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property outboundMessagingAddresses was added

**CreateOutboundMessagingConversationRequest** (1 change)

* Model was added

**HeadcountForecast** (1 change)

* Model was added

**HeadcountInterval** (1 change)

* Model was added

**RescheduleRequest** (1 change)

* Model was added

**UpdateWeekScheduleRequest** (2 changes)

* Optional property shortTermForecast was added
* Optional property headcountForecast was added

**AnalyticsSurvey** (5 changes)

* Optional property surveyPromoterScore was added
* Optional property surveyCompletedTime was added
* Optional property mediaTypes was added
* Optional property languageIds was added
* Optional property skillIds was added

**UserQueue** (1 change)

* Optional property outboundMessagingAddresses was added

**TimeZoneMappingPreview** (1 change)

* Model was added

**CreateUser** (1 change)

* Optional property divisionId was added


# Point Changes (0 changes)
