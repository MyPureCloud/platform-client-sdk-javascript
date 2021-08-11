Platform API version: 4893


# Major Changes (14 changes)

**/uploads/v1/publicassets/{subResources}** (1 change)

* Path /uploads/v1/publicassets/{subResources} was removed

**/webdeployments/v1/{subResources}** (1 change)

* Path /webdeployments/v1/{subResources} was removed

**/api/v2/quality/conversations/{conversationId}/audits** (1 change)

* Path /api/v2/quality/conversations/{conversationId}/audits was removed

**GET /api/v2/outbound/messagingcampaigns/divisionviews** (1 change)

* Parameter type was added

**GET /api/v2/learning/assignments** (3 changes)

* Parameter pass was added
* Parameter minPercentageScore was added
* Parameter maxPercentageScore was added

**GET /api/v2/learning/assignments/me** (3 changes)

* Parameter pass was added
* Parameter minPercentageScore was added
* Parameter maxPercentageScore was added

**GET /api/v2/learning/modules** (1 change)

* Parameter isPublished was added

**QualityAudit** (1 change)

* Model QualityAudit was removed

**QualityAuditPage** (1 change)

* Model QualityAuditPage was removed

**Edge** (1 change)

* Enum value BYOH was removed from property edgeDeploymentType


# Minor Changes (85 changes)

**/api/v2/gamification/profiles/{performanceProfileId}/activate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/gamification/profiles/{performanceProfileId}/deactivate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/recording/jobs/{jobId}/failedrecordings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webdeployments/configurations/{configurationId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/webdeployments/configurations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/webdeployments/configurations/{configurationId}/versions** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webdeployments/configurations/{configurationId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/webdeployments/configurations/{configurationId}/versions/draft** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/webdeployments/configurations/{configurationId}/versions/draft/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/webdeployments/deployments/{deploymentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/webdeployments/deployments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/learning/assessments/scoring** (2 changes)

* Path was added
* Operation POST was added

**ViewFilter** (3 changes)

* Optional property isRecorded was added
* Optional property hasEvaluation was added
* Optional property hasScoredEvaluation was added

**AuditLogMessage** (1 change)

* Enum value DynamicGroup was added to property entityType

**AuditQueryEntity** (1 change)

* Enum value DynamicGroup was added to property name

**EventLog** (1 change)

* Enum value MESSAGE_RESTRICTION was added to property category

**EventMessage** (1 change)

* Enum value INVALID_EMAIL_ADDRESS was added to property code

**Recording** (1 change)

* Optional property recordingErrorStatus was added

**FailedRecordingsEntityListing** (1 change)

* Model was added

**RecordingJobFailedRecording** (1 change)

* Model was added

**RecordingJob** (1 change)

* Optional property failedRecordings was added

**Edge** (1 change)

* Enum value CHS was added to property edgeDeploymentType

**AuthenticationSettings** (1 change)

* Model was added

**FileUploadMode** (1 change)

* Model was added

**FileUploadSettings** (1 change)

* Model was added

**FormsTrackTrigger** (1 change)

* Model was added

**IdleEventTrigger** (1 change)

* Model was added

**JourneyEventsSettings** (1 change)

* Model was added

**LauncherButtonSettings** (1 change)

* Model was added

**MessengerSettings** (1 change)

* Model was added

**MessengerStyles** (1 change)

* Model was added

**ScrollPercentageEventTrigger** (1 change)

* Model was added

**SelectorEventTrigger** (1 change)

* Model was added

**WebDeploymentConfigurationVersion** (1 change)

* Model was added

**WebDeploymentConfigurationVersionEntityListing** (1 change)

* Model was added

**WebDeployment** (1 change)

* Model was added

**WebDeploymentConfigurationVersionEntityRef** (1 change)

* Model was added

**WebDeploymentEntityListing** (1 change)

* Model was added

**DevelopmentActivityAggregateQueryResponseMetric** (3 changes)

* Enum value nPassedActivities was added to property metric
* Enum value nFailedActivities was added to property metric
* Enum value oActivityScore was added to property metric

**DevelopmentActivityAggregateQueryResponseStatistics** (3 changes)

* Optional property min was added
* Optional property max was added
* Optional property sum was added

**DevelopmentActivityAggregateParam** (3 changes)

* Enum value nPassedActivities was added to property metrics
* Enum value nFailedActivities was added to property metrics
* Enum value oActivityScore was added to property metrics

**LearningAssessmentScoringRequest** (1 change)

* Model was added

**LearningAssignmentAggregateQueryResponseMetric** (3 changes)

* Enum value nPassedActivities was added to property metric
* Enum value nFailedActivities was added to property metric
* Enum value oActivityScore was added to property metric

**LearningAssignmentAggregateQueryResponseStats** (3 changes)

* Optional property min was added
* Optional property max was added
* Optional property sum was added

**LearningAssignmentAggregateParam** (3 changes)

* Enum value nPassedActivities was added to property metrics
* Enum value nFailedActivities was added to property metrics
* Enum value oActivityScore was added to property metrics

**LearningAssignment** (4 changes)

* Optional property assessment was added
* Optional property percentageScore was added
* Optional property isPassed was added
* Optional property assessmentForm was added

**LearningModule** (3 changes)

* Optional property type was added
* Optional property assessmentForm was added
* Optional property summaryData was added

**LearningModuleRequest** (2 changes)

* Optional property type was added
* Optional property assessmentForm was added


# Point Changes (0 changes)
