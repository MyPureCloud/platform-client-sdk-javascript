Platform API version: 5767


# Major Changes (5 changes)

**MediaParticipantRequest** (1 change)

* Property wrapup was changed from Wrapup to ExtendedWrapup

**Survey** (1 change)

* Property conversation was changed from Conversation to ConversationReference

**ScimPhoneNumber** (1 change)

* Enum value ringcentral was removed from property type

**UCIntegration** (1 change)

* Enum value RingCentral was removed from property integrationPresenceSource

**UserSearchRequest** (1 change)

* Enum value RingCentral was removed from property integrationPresenceSource


# Minor Changes (22 changes)

**ReportingTurnAction** (1 change)

* Enum value ShowKnowledgeArticleAction was added to property actionType

**ReportingExportJobResponse** (2 changes)

* Enum value DATA_ACTIONS_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value DATA_ACTIONS_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value DATA_ACTIONS_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value DATA_ACTIONS_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value DATA_ACTIONS_PERFORMANCE_SUMMARY_VIEW was added to property viewType
* Enum value DATA_ACTIONS_PERFORMANCE_DETAIL_VIEW was added to property viewType

**ConversationReference** (2 changes)

* id is no longer readonly
* selfUri is no longer readonly

**ExtendedWrapup** (1 change)

* Model was added

**MetricDefinition** (2 changes)

* Optional property mediaTypeFilteringAllowed was added
* Optional property queueFilteringAllowed was added

**KnowledgeImport** (1 change)

* Enum value Json was added to property fileType

**KeyPerformanceIndicator** (1 change)

* Optional property optimizationType was added

**GeneralProgramJobRequest** (1 change)

* Enum value nl-NL was added to property dialect

**Dependency** (1 change)

* Enum value IMAGE was added to property type

**DependencyObject** (1 change)

* Enum value IMAGE was added to property type

**MessengerHomeScreen** (1 change)

* Optional property logoUrl was added

**SupportCenterFeedbackSettings** (1 change)

* Model was added

**SupportCenterSettings** (1 change)

* Optional property feedback was added

**LearningCoverArtThumbnail** (1 change)

* Model was added

**LearningModuleCoverArtResponse** (1 change)

* Optional property thumbnails was added


# Point Changes (6 changes)

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search** (2 changes)

* Description was changed for parameter forceAsync
* Description was changed for parameter forceDownloadService

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query** (2 changes)

* Description was changed for parameter forceAsync
* Description was changed for parameter forceDownloadService

**POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search** (2 changes)

* Description was changed for parameter forceAsync
* Description was changed for parameter forceDownloadService
