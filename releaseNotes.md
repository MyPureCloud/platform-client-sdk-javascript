Platform API version: 5847


# Major Changes (10 changes)

**/api/v2/users/{userId}/roles** (1 change)

* Path /api/v2/users/{userId}/roles was removed

**GET /api/v2/gamification/metrics/{metricId}** (1 change)

* Has been deprecated

**PUT /api/v2/gamification/metrics/{metricId}** (1 change)

* Has been deprecated

**GET /api/v2/gamification/metrics** (1 change)

* Has been deprecated

**POST /api/v2/gamification/metrics** (1 change)

* Has been deprecated

**GET /api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Parameter kpiGroup was added

**EmergencyGroup** (1 change)

* Property division was changed from Division to WritableDivision

**IVR** (1 change)

* Property division was changed from Division to WritableDivision

**ScheduleGroup** (1 change)

* Property division was changed from Division to WritableDivision

**Schedule** (1 change)

* Property division was changed from Division to WritableDivision


# Minor Changes (35 changes)

**/api/v2/users/{subjectId}/roles** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/learning/assignments/{assignmentId}/reset** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/assignments/{assignmentId}/reassign** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/modules/{moduleId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/modules/{moduleId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**AuditLogMessage** (1 change)

* Enum value AdherenceExplanation was added to property entityType

**AuditQueryEntity** (1 change)

* Enum value AdherenceExplanation was added to property name

**KnowledgeBase** (1 change)

* Enum value fr-CA was added to property coreLanguage

**KnowledgeCategory** (1 change)

* Enum value fr-CA was added to property languageCode

**KnowledgeSearchDocument** (1 change)

* Enum value fr-CA was added to property languageCode

**KnowledgeExtendedCategory** (1 change)

* Enum value fr-CA was added to property languageCode

**KnowledgeImport** (3 changes)

* Enum value AbortRequested was added to property status
* Enum value Aborted was added to property status
* Enum value fr-CA was added to property languageCode

**KnowledgeDocument** (1 change)

* Enum value fr-CA was added to property languageCode

**RecordingSettings** (1 change)

* Optional property regionalRecordingStorageEnabled was added

**KeyPerformanceIndicator** (9 changes)

* Optional property dateCreated was added
* Optional property dateModified was added
* Optional property description was added
* Optional property kpiType was added
* Optional property source was added
* Optional property wrapUpCodeConfig was added
* Optional property status was added
* Optional property kpiGroup was added
* Optional property selfUri was added

**WrapUpCodeConfig** (1 change)

* Model was added

**WebMessagingMessage** (1 change)

* Optional property metadata was added

**LearningModuleJobResponse** (1 change)

* Model was added

**LearningModuleJobRequest** (1 change)

* Model was added


# Point Changes (6 changes)

**GET /api/v2/gamification/metrics/{metricId}** (1 change)

* Description was changed

**PUT /api/v2/gamification/metrics/{metricId}** (1 change)

* Description was changed

**GET /api/v2/gamification/metrics** (1 change)

* Description was changed

**POST /api/v2/gamification/metrics** (1 change)

* Description was changed

**GET /api/v2/quality/forms/surveys/bulk/contexts** (1 change)

* Description was changed for parameter contextId

**GET /api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Summary was changed
