Platform API version: 4344


# Major Changes (14 changes)

**/api/v2/journey/externalcontacts/{externalContactId}/segments** (1 change)

* Path /api/v2/journey/externalcontacts/{externalContactId}/segments was removed

**/api/v2/journey/customers/{customerIdType}/{customerId}/segments** (1 change)

* Path /api/v2/journey/customers/{customerIdType}/{customerId}/segments was removed

**/api/v2/journey/sessions/{sessionId}/segments** (1 change)

* Path /api/v2/journey/sessions/{sessionId}/segments was removed

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/languages/{languageCode}/documents** (1 change)

* Parameter title was added

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans** (1 change)

* Parameter validationMode was added

**PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}** (1 change)

* Parameter validationMode was added

**GET /api/v2/quality/forms/evaluations/{formId}/versions** (1 change)

* Parameter sortOrder was added

**SegmentAssignmentsUpdate** (1 change)

* Model SegmentAssignmentsUpdate was removed

**SegmentAssignment** (1 change)

* Model SegmentAssignment was removed

**SegmentAssignmentListing** (1 change)

* Model SegmentAssignmentListing was removed

**SegmentAssignmentSegment** (1 change)

* Model SegmentAssignmentSegment was removed

**SegmentAssignmentSession** (1 change)

* Model SegmentAssignmentSession was removed

**WfmHistoricalAdherenceQueryForUsers** (1 change)

* Property teamIds was removed

**WorkPlanConfigurationViolationMessage** (1 change)

* Enum value DailyShiftMaximumPossibilitiesViolated was removed from property type


# Minor Changes (102 changes)

**Flow** (1 change)

* Optional property supportedLanguages was added

**FlowVersion** (1 change)

* Optional property supportedLanguages was added

**SupportedLanguage** (1 change)

* Model was added

**ContentPostback** (1 change)

* Model was added

**ContentReaction** (1 change)

* Model was added

**MessageContent** (6 changes)

* Enum value Postback was added to property contentType
* Enum value Reactions was added to property contentType
* Enum value Mention was added to property contentType
* Optional property reactions was added
* Optional property mention was added
* Optional property postback was added

**MessagingRecipient** (1 change)

* Model was added

**WorkPlanConfigurationViolationMessage** (31 changes)

* Enum value ActivitiesOverlap was added to property type
* Enum value ActivityEndGreaterThanShiftStop was added to property type
* Enum value ActivityPaidTimeGreaterThanShiftPaidTime was added to property type
* Enum value ActivityStartBeforeShiftStart was added to property type
* Enum value ActivityStartGreaterThanEqualToShiftStop was added to property type
* Enum value ActivityStartIncrementMinutesNotDivisibleByScheduleIntervalMinutes was added to property type
* Enum value DailyMaxTotalLessThanWeeklyMin was added to property type
* Enum value DailyMaxTotalLessThanWeeklyMinWithOptional was added to property type
* Enum value DailyMaxTotalLessThanWeeklyMinWithoutOptional was added to property type
* Enum value DailyMinTotalGreaterThanWeeklyMax was added to property type
* Enum value DailyMinTotalGreaterThanWeeklyMaxWithOptional was added to property type
* Enum value DailyMinTotalGreaterThanWeeklyMaxWithoutOptional was added to property type
* Enum value DailyRequiredDaysGreaterThanWeeklyMaxDays was added to property type
* Enum value DailyShiftHasNoDaysSelected was added to property type
* Enum value DailyShiftMaxPossibilitiesViolated was added to property type
* Enum value EarliestShiftStopIsTooLate was added to property type
* Enum value ExactPaidTimeNotDivisibleByGranularity was added to property type
* Enum value MaxConsecutiveWorkingDaysNoMoreThanDoubleMaxWorkingDaysPerWeek was added to property type
* Enum value MaxDaysOffPerPlanningPeriodNotCorrect was added to property type
* Enum value MaxPaidTimeIsMoreThanShiftLength was added to property type
* Enum value MaxPaidTimeNotDivisibleByGranularity was added to property type
* Enum value MaxPaidTimePerPlanningPeriod was added to property type
* Enum value MinPaidTimeNotDivisibleByGranularity was added to property type
* Enum value MinPaidTimePerPlanningPeriod was added to property type
* Enum value PaidTimeGreaterThanMaxWorkTime was added to property type
* Enum value PaidTimeLessThanMinWorkTime was added to property type
* Enum value PaidTimeNotMetByShiftStartStop was added to property type
* Enum value ShiftDaysSelectMoreThanMinWorkingDays was added to property type
* Enum value ShiftStopEarlierThanStart was added to property type
* Enum value ShiftVarianceCannotBeMet was added to property type
* Optional property severity was added

**WorkPlanValidationMessageArgument** (18 changes)

* Enum value ActivityId was added to property type
* Enum value ActivityId2 was added to property type
* Enum value ActivityPaidTimeMinutes was added to property type
* Enum value ActivityStartTimeMinutes was added to property type
* Enum value ActivityValidationId was added to property type
* Enum value ActivityValidationId2 was added to property type
* Enum value ApplicableDays was added to property type
* Enum value DailyPaidTimeMinutes was added to property type
* Enum value MaximumDays was added to property type
* Enum value PaidTimeGranularityMinutes was added to property type
* Enum value RequiredDays was added to property type
* Enum value ShiftPaidTimeMinutes was added to property type
* Enum value ShiftStartTimeMinutes was added to property type
* Enum value ShiftStopTimeMinutes was added to property type
* Enum value ShiftValidationId was added to property type
* Enum value WeeklyPaidTimeMinutes was added to property type
* Enum value Weeks was added to property type
* Enum value WorkTimeMinutes was added to property type

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Telephony was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Telephony was added to property serviceName

**AuditLogMessage** (19 changes)

* Enum value Telephony was added to property serviceName
* Enum value ScheduleGroup was added to property entityType
* Enum value EmergencyGroup was added to property entityType
* Enum value IVR was added to property entityType
* Enum value Edge was added to property entityType
* Enum value EdgeGroup was added to property entityType
* Enum value Trunk was added to property entityType
* Enum value TrunkBase was added to property entityType
* Enum value DID was added to property entityType
* Enum value DIDPool was added to property entityType
* Enum value Extension was added to property entityType
* Enum value ExtensionPool was added to property entityType
* Enum value Phone was added to property entityType
* Enum value PhoneBase was added to property entityType
* Enum value Line was added to property entityType
* Enum value LineBase was added to property entityType
* Enum value OutboundRoute was added to property entityType
* Enum value NumberPlan was added to property entityType
* Enum value Site was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value Telephony was added to property serviceName

**AuditQueryEntity** (18 changes)

* Enum value ScheduleGroup was added to property name
* Enum value EmergencyGroup was added to property name
* Enum value IVR was added to property name
* Enum value Edge was added to property name
* Enum value EdgeGroup was added to property name
* Enum value Trunk was added to property name
* Enum value TrunkBase was added to property name
* Enum value DID was added to property name
* Enum value DIDPool was added to property name
* Enum value Extension was added to property name
* Enum value ExtensionPool was added to property name
* Enum value Phone was added to property name
* Enum value PhoneBase was added to property name
* Enum value Line was added to property name
* Enum value LineBase was added to property name
* Enum value OutboundRoute was added to property name
* Enum value NumberPlan was added to property name
* Enum value Site was added to property name

**AuditQueryService** (1 change)

* Enum value Telephony was added to property name


# Point Changes (0 changes)
