Platform API version: 5888


# Major Changes (3 changes)

**GET /api/v2/routing/queues** (2 changes)

* Parameter peerId was added
* Parameter hasPeer was added

**RecordingSettings** (1 change)

* Property regionalRecordingStorageEnabled was removed


# Minor Changes (68 changes)

**/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/values/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/{userId}/values/trends** (2 changes)

* Path was added
* Operation GET was added

**PUT /api/v2/learning/modules/{moduleId}** (1 change)

* Response 409 was added

**POST /api/v2/learning/modules/{moduleId}/publish** (1 change)

* Response 409 was added

**/api/v2/learning/modules/assignments** (2 changes)

* Path was added
* Operation GET was added

**PUT /api/v2/learning/modules/{moduleId}/rule** (1 change)

* Response 409 was added

**ReportingTurn** (1 change)

* Optional property sessionEndDetails was added

**SessionEndDetails** (1 change)

* Model was added

**ReportingExportJobResponse** (1 change)

* Enum value KNOWLEDGE_PERFORMANCE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (1 change)

* Enum value KNOWLEDGE_PERFORMANCE_VIEW was added to property viewType

**ReportingExportJobRequest** (1 change)

* Enum value KNOWLEDGE_PERFORMANCE_VIEW was added to property viewType

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value Voicemail was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value Voicemail was added to property serviceName

**AuditLogMessage** (1 change)

* Enum value Voicemail was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value Voicemail was added to property serviceName

**AuditQueryService** (1 change)

* Enum value Voicemail was added to property name

**BaseMediaSettings** (1 change)

* Model was added

**MediaSetting** (2 changes)

* Optional property enableAutoAnswer was added
* Optional property subTypeSettings was added

**Queue** (1 change)

* Optional property peerId was added

**UploadUrlRequest** (1 change)

* Optional property contentType was added

**MetricValueTrendAverage** (1 change)

* Model was added

**AvailableTopic** (1 change)

* Enum value ProcessAutomation was added to property transports

**QueueRequest** (1 change)

* Optional property peerId was added

**UserQueue** (1 change)

* Optional property peerId was added

**CreateQueueRequest** (1 change)

* Optional property peerId was added

**Check** (3 changes)

* Enum value SalesConversionRateValue was added to property type
* Enum value RetentionRateValue was added to property type
* Enum value ChurnRateValue was added to property type

**Dependency** (1 change)

* Enum value STTENGINE was added to property type

**DependencyObject** (1 change)

* Enum value STTENGINE was added to property type

**AssignedLearningModule** (1 change)

* Model was added

**AssignedLearningModuleDomainEntityListing** (1 change)

* Model was added

**BusinessUnitActivityCode** (4 changes)

* Optional property countsTowardShrinkage was added
* Optional property plannedShrinkage was added
* Optional property interruptible was added
* Optional property secondaryPresences was added

**CreateActivityCodeRequest** (4 changes)

* Optional property countsTowardShrinkage was added
* Optional property plannedShrinkage was added
* Optional property interruptible was added
* Optional property secondaryPresences was added

**UpdateActivityCodeRequest** (4 changes)

* Optional property countsTowardShrinkage was added
* Optional property plannedShrinkage was added
* Optional property interruptible was added
* Optional property secondaryPresences was added

**TimeOffRequestResponse** (2 changes)

* Optional property paid was added
* Optional property substatus was added

**TimeOffRequest** (2 changes)

* Optional property paid was added
* Optional property substatus was added

**TimeOffRequestQueryBody** (2 changes)

* Optional property ids was added
* Optional property substatuses was added

**CreateAdminTimeOffRequest** (1 change)

* Optional property paid was added

**WorkPlanShift** (2 changes)

* Optional property constrainDayOff was added
* Optional property dayOffRule was added

**CreateWorkPlanShift** (2 changes)

* Optional property constrainDayOff was added
* Optional property dayOffRule was added

**HistoricalAdherenceActuals** (1 change)

* Optional property actualSecondaryPresenceLookupId was added

**HistoricalAdherenceExceptionInfo** (2 changes)

* Optional property scheduledSecondaryPresenceLookupIds was added
* Optional property actualActivityCodeId was added

**HistoricalAdherenceQueryResult** (1 change)

* Optional property actualsEndsDate was added

**WfmHistoricalAdherenceQuery** (1 change)

* Optional property teamIds was added

**UserScheduleAdherence** (1 change)

* Optional property scheduledActivityCode was added

**BuQueryAgentSchedulesRequest** (1 change)

* Optional property teamIds was added


# Point Changes (0 changes)
