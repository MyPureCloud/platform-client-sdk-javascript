Platform API version: 4513


# Major Changes (8 changes)

**GET /api/v2/flows/datatables** (1 change)

* Parameter divisionId was added

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Response 200 was removed

**POST /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Parameter async was removed

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Parameter async was removed

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Parameter async was removed

**POST /api/v2/routing/queues/{queueId}/members** (1 change)

* Response 200 was removed

**POST /api/v2/conversations/messaging/integrations/line** (1 change)

* Parameter async was removed

**SupportedContent** (1 change)

* Model SupportedContent was removed


# Minor Changes (142 changes)

**/api/v2/speechandtextanalytics/topics/general** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/topics/publishjobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/programs/publishjobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/topics** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/speechandtextanalytics/programs/general/jobs** (2 changes)

* Path was added
* Operation POST was added

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Response default was added

**/api/v2/speechandtextanalytics/programs/general/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/routing/queues/{queueId}/members** (1 change)

* Response default was added

**/api/v2/speechandtextanalytics/programs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/speechandtextanalytics/dialects** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/speechandtextanalytics/programs/{programId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/topics/publishjobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/topics/{topicId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/speechandtextanalytics/programs/publishjobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/programs/unpublished** (2 changes)

* Path was added
* Operation GET was added

**SupportedContentReference** (1 change)

* Model was added

**GeneralTopic** (1 change)

* Model was added

**GeneralTopicsEntityListing** (1 change)

* Model was added

**DataTable** (1 change)

* Optional property division was added

**WorkPlanActivity** (2 changes)

* Optional property minimumLengthFromShiftStartMinutes was added
* Optional property minimumLengthFromShiftEndMinutes was added

**WorkPlanShift** (2 changes)

* Optional property constrainEarliestStopTime was added
* Optional property earliestStopTimeMinutesFromMidnight was added

**WorkPlanValidationRequest** (11 changes)

* Optional property minimumConsecutiveNonWorkingMinutesPerWeek was added
* Optional property constrainMaximumConsecutiveWorkingWeekends was added
* Optional property maximumConsecutiveWorkingWeekends was added
* Optional property constrainMaximumConsecutiveWorkingDays was added
* Optional property maximumConsecutiveWorkingDays was added
* Optional property minimumShiftStartDistanceMinutes was added
* Optional property minimumDaysOffPerPlanningPeriod was added
* Optional property maximumDaysOffPerPlanningPeriod was added
* Optional property minimumPaidMinutesPerPlanningPeriod was added
* Optional property maximumPaidMinutesPerPlanningPeriod was added
* Optional property shiftStartVarianceType was added

**WorkPlan** (11 changes)

* Optional property minimumConsecutiveNonWorkingMinutesPerWeek was added
* Optional property constrainMaximumConsecutiveWorkingWeekends was added
* Optional property maximumConsecutiveWorkingWeekends was added
* Optional property constrainMaximumConsecutiveWorkingDays was added
* Optional property maximumConsecutiveWorkingDays was added
* Optional property minimumShiftStartDistanceMinutes was added
* Optional property minimumDaysOffPerPlanningPeriod was added
* Optional property maximumDaysOffPerPlanningPeriod was added
* Optional property minimumPaidMinutesPerPlanningPeriod was added
* Optional property maximumPaidMinutesPerPlanningPeriod was added
* Optional property shiftStartVarianceType was added

**CreateWorkPlan** (11 changes)

* Optional property minimumConsecutiveNonWorkingMinutesPerWeek was added
* Optional property constrainMaximumConsecutiveWorkingWeekends was added
* Optional property maximumConsecutiveWorkingWeekends was added
* Optional property constrainMaximumConsecutiveWorkingDays was added
* Optional property maximumConsecutiveWorkingDays was added
* Optional property minimumShiftStartDistanceMinutes was added
* Optional property minimumDaysOffPerPlanningPeriod was added
* Optional property maximumDaysOffPerPlanningPeriod was added
* Optional property minimumPaidMinutesPerPlanningPeriod was added
* Optional property maximumPaidMinutesPerPlanningPeriod was added
* Optional property shiftStartVarianceType was added

**CreateWorkPlanActivity** (2 changes)

* Optional property minimumLengthFromShiftStartMinutes was added
* Optional property minimumLengthFromShiftEndMinutes was added

**CreateWorkPlanShift** (2 changes)

* Optional property constrainEarliestStopTime was added
* Optional property earliestStopTimeMinutesFromMidnight was added

**WorkPlanListItemResponse** (11 changes)

* Optional property minimumConsecutiveNonWorkingMinutesPerWeek was added
* Optional property constrainMaximumConsecutiveWorkingWeekends was added
* Optional property maximumConsecutiveWorkingWeekends was added
* Optional property constrainMaximumConsecutiveWorkingDays was added
* Optional property maximumConsecutiveWorkingDays was added
* Optional property minimumShiftStartDistanceMinutes was added
* Optional property minimumDaysOffPerPlanningPeriod was added
* Optional property maximumDaysOffPerPlanningPeriod was added
* Optional property minimumPaidMinutesPerPlanningPeriod was added
* Optional property maximumPaidMinutesPerPlanningPeriod was added
* Optional property shiftStartVarianceType was added

**ManagementUnit** (1 change)

* Optional property businessUnit was added

**SchedulingSettingsResponse** (2 changes)

* Optional property planningPeriod was added
* Optional property startDayOfWeekend was added

**BaseTopicEntitiy** (1 change)

* Model was added

**TopicJob** (1 change)

* Model was added

**ExternalContact** (1 change)

* id is no longer readonly

**RoutingData** (1 change)

* Optional property scoredAgents was added

**SchedulingSettingsRequest** (2 changes)

* Optional property planningPeriod was added
* Optional property startDayOfWeekend was added

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Routing was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Routing was added to property serviceName

**AuditLogMessage** (7 changes)

* Enum value Routing was added to property serviceName
* Enum value CampaignSchedule was added to property entityType
* Enum value SequenceSchedule was added to property entityType
* Enum value OrganizationProperties was added to property entityType
* Enum value WrapUpCodeMapping was added to property entityType
* Enum value MessagingCampaign was added to property entityType
* Enum value Predictor was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Routing was added to property serviceName

**AuditQueryEntity** (6 changes)

* Enum value CampaignSchedule was added to property name
* Enum value SequenceSchedule was added to property name
* Enum value OrganizationProperties was added to property name
* Enum value WrapUpCodeMapping was added to property name
* Enum value MessagingCampaign was added to property name
* Enum value Predictor was added to property name

**AuditQueryService** (1 change)

* Enum value Routing was added to property name

**BaseProgramEntity** (1 change)

* Model was added

**ProgramJob** (1 change)

* Model was added

**ListedTopic** (1 change)

* Model was added

**TopicsEntityListing** (1 change)

* Model was added

**Phrase** (1 change)

* Model was added

**Topic** (1 change)

* Model was added

**TopicRequest** (1 change)

* Model was added

**ExternalSegment** (1 change)

* Model was added

**JourneySegment** (1 change)

* Optional property externalSegment was added

**PatchExternalSegment** (1 change)

* Model was added

**PatchSegment** (1 change)

* Optional property externalSegment was added

**AvailableTopic** (1 change)

* Optional property permissionDetails was added

**PermissionDetails** (1 change)

* Model was added

**GeneralProgramJob** (1 change)

* Model was added

**GeneralProgramJobRequest** (1 change)

* Model was added

**ListedProgram** (1 change)

* Model was added

**ProgramsEntityListing** (1 change)

* Model was added

**Program** (1 change)

* Model was added

**ProgramRequest** (1 change)

* Model was added

**TranscriptAggregateQueryPredicate** (2 changes)

* Enum value flowVersion was added to property dimension
* Enum value topicId was added to property dimension

**TranscriptAggregationQuery** (2 changes)

* Enum value flowVersion was added to property groupBy
* Enum value topicId was added to property groupBy

**TopicJobRequest** (1 change)

* Model was added

**ProgramJobRequest** (1 change)

* Model was added

**UnpublishedProgramsEntityListing** (1 change)

* Model was added


# Point Changes (7 changes)

**GET /api/v2/workforcemanagement/managementunits** (3 changes)

* Description was changed for parameter pageSize
* Description was changed for parameter pageNumber
* Description was changed for parameter expand

**GET /api/v2/workforcemanagement/managementunits/{managementUnitId}** (1 change)

* Description was changed

**POST /api/v2/authorization/divisions/{divisionId}/objects/{objectType}** (1 change)

* Description was changed

**GET /api/v2/users/development/activities** (1 change)

* Description was changed for parameter relationship

**GET /api/v2/users/development/activities/me** (1 change)

* Description was changed for parameter relationship
