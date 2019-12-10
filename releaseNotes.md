Platform API version: 3631


# Major Changes (55 changes)

**GET /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Response 200 type was changed from ManagementUnitSettings to ManagementUnitSettingsResponse

**PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings** (1 change)

* Response 200 type was changed from ManagementUnitSettings to ManagementUnitSettingsResponse

**ManagementUnitSettings** (1 change)

* Model ManagementUnitSettings was removed

**SchedulingSettings** (1 change)

* Model SchedulingSettings was removed

**CreateManagementUnitSettings** (1 change)

* Model CreateManagementUnitSettings was removed

**ManagementUnit** (1 change)

* Property settings was changed from ManagementUnitSettings to ManagementUnitSettingsResponse

**CreateManagementUnitApiRequest** (1 change)

* Property settings was changed from CreateManagementUnitSettings to CreateManagementUnitSettingsRequest

**DomainLogicalInterface** (1 change)

* Property publicNatIpAddress was removed

**UpdateManagementUnitRequest** (1 change)

* Property settings was changed from ManagementUnitSettings to ManagementUnitSettingsRequest

**WorkPlan** (10 changes)

* Property startDayOfWeekend was removed
* Property minimumConsecutiveTimeOffPerWeekMinutes was removed
* Property constrainMaximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingDays was removed
* Property minimumShiftStartDistanceMinutes was removed
* Property minimumDaysOffPerPlanningPeriod was removed
* Property maximumDaysOffPerPlanningPeriod was removed
* Property minimumPaidHoursPerPlanningPeriod was removed
* Property maximumPaidHoursPerPlanningPeriod was removed

**WorkPlanActivity** (2 changes)

* Property minimumLengthFromShiftStartMinutes was removed
* Property minimumLengthFromShiftEndMinutes was removed

**WorkPlanShift** (6 changes)

* Property constrainEarliestStopTime was removed
* Property earliestStopTimeMinutesFromMidnight was removed
* Property synchronizeAgentsSchedules was removed
* Property synchronizationType was removed
* Property constrainDayOff was removed
* Property dayOffRule was removed

**CreateWorkPlan** (10 changes)

* Property startDayOfWeekend was removed
* Property minimumConsecutiveTimeOffPerWeekMinutes was removed
* Property constrainMaximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingDays was removed
* Property minimumShiftStartDistanceMinutes was removed
* Property minimumDaysOffPerPlanningPeriod was removed
* Property maximumDaysOffPerPlanningPeriod was removed
* Property minimumPaidHoursPerPlanningPeriod was removed
* Property maximumPaidHoursPerPlanningPeriod was removed

**CreateWorkPlanActivity** (2 changes)

* Property minimumLengthFromShiftStartMinutes was removed
* Property minimumLengthFromShiftEndMinutes was removed

**CreateWorkPlanShift** (6 changes)

* Property constrainEarliestStopTime was removed
* Property earliestStopTimeMinutesFromMidnight was removed
* Property synchronizeAgentsSchedules was removed
* Property synchronizationType was removed
* Property constrainDayOff was removed
* Property dayOffRule was removed

**WorkPlanListItemResponse** (10 changes)

* Property startDayOfWeekend was removed
* Property minimumConsecutiveTimeOffPerWeekMinutes was removed
* Property constrainMaximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingWeekends was removed
* Property maximumConsecutiveWorkingDays was removed
* Property minimumShiftStartDistanceMinutes was removed
* Property minimumDaysOffPerPlanningPeriod was removed
* Property maximumDaysOffPerPlanningPeriod was removed
* Property minimumPaidHoursPerPlanningPeriod was removed
* Property maximumPaidHoursPerPlanningPeriod was removed


# Minor Changes (23 changes)

**/api/v2/routing/settings/contactcenter** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**ManagementUnitSettingsResponse** (1 change)

* Model was added

**SchedulingSettingsResponse** (1 change)

* Model was added

**CreateManagementUnitSettingsRequest** (1 change)

* Model was added

**SchedulingSettingsRequest** (1 change)

* Model was added

**ValueWrapperPlanningPeriodSettings** (1 change)

* Model was added

**Recording** (1 change)

* Optional property exportedDate was added

**Dependency** (2 changes)

* Enum value DIALOGENGINEBOT was added to property type
* Enum value DIALOGENGINEBOTVERSION was added to property type

**DependencyObject** (2 changes)

* Enum value DIALOGENGINEBOT was added to property type
* Enum value DIALOGENGINEBOTVERSION was added to property type

**DomainLogicalInterface** (2 changes)

* Optional property publicNatAddressIpV4 was added
* Optional property publicNatAddressIpV6 was added

**ReportingExportJobResponse** (1 change)

* Optional property hasCustomParticipantAttributes was added

**ReportingExportJobRequest** (1 change)

* Optional property hasCustomParticipantAttributes was added

**ManagementUnitSettingsRequest** (1 change)

* Model was added

**EventLog** (1 change)

* Enum value MESSAGING_CAMPAIGN was added to property category

**EventMessage** (1 change)

* Enum value CAMPAIGN_STOPPED was added to property code

**RecordingMetadata** (1 change)

* Optional property exportedDate was added

**ContactCenterSettings** (1 change)

* Model was added

**TrusteeBillingOverview** (1 change)

* Enum value DEV_ORG_MONTH_TO_MONTH was added to property subscriptionType


# Point Changes (1 change)

**POST /api/v2/notifications/channels** (1 change)

* Description was changed
