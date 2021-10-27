Platform API version: 5137


# Major Changes (2 changes)

**MemberGroup** (1 change)

* memberCount has been made readonly

**CreateOutboundMessagingConversationRequest** (1 change)

* Property externalOrganizationId was removed


# Minor Changes (81 changes)

**/api/v2/voicemail/userpolicies/{userId}** (1 change)

* Operation put was added. Summary: Update a user's voicemail policy

**Station** (1 change)

* Optional property webRtcCallAppearances was added

**ReportingTurn** (1 change)

* Enum value ExpressionError was added to property askActionResult

**ReportingTurnAction** (1 change)

* Enum value GetResponseAction was added to property actionType

**ViewFilter** (13 changes)

* Optional property journeyFrequencyCapReasons was added
* Optional property journeyBlockingActionMapIds was added
* Optional property journeyActionTargetIds was added
* Optional property journeyBlockingScheduleGroupIds was added
* Optional property journeyBlockingEmergencyScheduleGroupIds was added
* Optional property journeyUrlEqualConditions was added
* Optional property journeyUrlNotEqualConditions was added
* Optional property journeyUrlStartsWithConditions was added
* Optional property journeyUrlEndsWithConditions was added
* Optional property journeyUrlContainsAnyConditions was added
* Optional property journeyUrlNotContainsAnyConditions was added
* Optional property journeyUrlContainsAllConditions was added
* Optional property journeyUrlNotContainsAllConditions was added

**AuditLogMessage** (5 changes)

* Enum value AgentRoutingInfo was added to property entityType
* Enum value ConversationAttributes was added to property entityType
* Enum value RoutingUtilizationTag was added to property entityType
* Enum value ShiftTrade was added to property entityType
* Enum value TimeOffRequest was added to property entityType

**AuditQueryEntity** (5 changes)

* Enum value AgentRoutingInfo was added to property name
* Enum value ConversationAttributes was added to property name
* Enum value RoutingUtilizationTag was added to property name
* Enum value ShiftTrade was added to property name
* Enum value TimeOffRequest was added to property name

**MemberGroup** (1 change)

* Enum value GROUP was added to property type

**CreateCallRequest** (1 change)

* Optional property externalContactId was added

**CreateEmailRequest** (1 change)

* Optional property externalContactId was added

**OpenNormalizedMessage** (5 changes)

* id is no longer readonly
* status is no longer readonly
* reasons is no longer readonly
* isFinalReceipt is no longer readonly
* direction is no longer readonly

**WorkdayValuesTrend** (2 changes)

* Optional property dateReferenceWorkday was added
* Optional property metric was added

**RecordingMessagingMessage** (2 changes)

* Optional property quickReplies was added
* Optional property buttonResponse was added

**LearningModuleInformStep** (1 change)

* Enum value RichText was added to property type

**LearningModuleInformStepRequest** (1 change)

* Enum value RichText was added to property type

**SchedulerMessageTypeSeverity** (19 changes)

* Enum value UnableToScheduleMaxConsecutiveWorkingDaysFromAgentHistory was added to property type
* Enum value UnableToScheduleMaxConsecutiveWorkingWeekendsFromAgentHistory was added to property type
* Enum value UnableToScheduleMaxWeeklyPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMaxWorkDayPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMinIntershiftTimeFromAgentHistory was added to property type
* Enum value UnableToScheduleMinIntershiftTimeFromDst was added to property type
* Enum value UnableToScheduleMinShiftStartDistanceFromAgentHistory was added to property type
* Enum value UnableToScheduleMinShiftStartDistanceFromDst was added to property type
* Enum value UnableToScheduleMinWeeklyPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMinWeeklyWorkDaysFromTimeOff was added to property type
* Enum value UnableToScheduleMinWorkDayPaidTimeFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxDaysOffFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxDaysOffFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxPaidTimeFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxPaidTimeFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMinDaysOffFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMinPaidTimeFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMinPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleWorkDayFromTimeOff was added to property type

**SchedulerMessageSeverityCount** (1 change)

* Model was added

**ScheduleGenerationMessage** (19 changes)

* Enum value UnableToScheduleMaxConsecutiveWorkingDaysFromAgentHistory was added to property type
* Enum value UnableToScheduleMaxConsecutiveWorkingWeekendsFromAgentHistory was added to property type
* Enum value UnableToScheduleMaxWeeklyPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMaxWorkDayPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMinIntershiftTimeFromAgentHistory was added to property type
* Enum value UnableToScheduleMinIntershiftTimeFromDst was added to property type
* Enum value UnableToScheduleMinShiftStartDistanceFromAgentHistory was added to property type
* Enum value UnableToScheduleMinShiftStartDistanceFromDst was added to property type
* Enum value UnableToScheduleMinWeeklyPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleMinWeeklyWorkDaysFromTimeOff was added to property type
* Enum value UnableToScheduleMinWorkDayPaidTimeFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxDaysOffFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxDaysOffFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxPaidTimeFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMaxPaidTimeFromTimeOff was added to property type
* Enum value UnableToSchedulePlanningPeriodMinDaysOffFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMinPaidTimeFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodMinPaidTimeFromTimeOff was added to property type
* Enum value UnableToScheduleWorkDayFromTimeOff was added to property type

**SchedulingTestingOptionsRequest** (1 change)

* Optional property populateDeprecatedWarnings was added


# Point Changes (4 changes)

**POST /api/v2/conversations/messaging/integrations/facebook** (1 change)

* Response 202 was changed from Accepted - If async is true, the integration creation in progress. to Accepted - The integration creation in progress.

**POST /api/v2/conversations/messaging/integrations/line** (1 change)

* Response 202 was changed from Accepted - If async is true, the integration creation in progress. to Accepted - The integration creation in progress.

**POST /api/v2/conversations/messaging/integrations/twitter** (1 change)

* Response 202 was changed from Accepted - If async is true, the integration creation is in progress. to Accepted - The integration creation is in progress.

**PATCH /api/v2/routing/conversations/{conversationId}** (1 change)

* Description was changed
