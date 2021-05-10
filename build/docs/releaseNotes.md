Platform API version: 4658


Changes to logging and SDK configuration. See https://developer.genesys.cloud/api/rest/client-libraries/ for more information

# Major Changes (24 changes)

**/api/v2/quality/keywordsets** (1 change)

* Path /api/v2/quality/keywordsets was removed

**/api/v2/quality/keywordsets/{keywordSetId}** (1 change)

* Path /api/v2/quality/keywordsets/{keywordSetId} was removed

**/api/v2/quality/spotability** (1 change)

* Path /api/v2/quality/spotability was removed

**Keyword** (1 change)

* Model Keyword was removed

**KeywordSet** (1 change)

* Model KeywordSet was removed

**KeywordSetEntityListing** (1 change)

* Model KeywordSetEntityListing was removed

**Annotation** (10 changes)

* Property keywordName was removed
* Property confidence was removed
* Property keywordSetId was removed
* Property keywordSetName was removed
* Property utterance was removed
* Property timeBegin was removed
* Property timeEnd was removed
* Property keywordConfidenceThreshold was removed
* Property agentScoreModifier was removed
* Property customerScoreModifier was removed

**PatchUser** (3 changes)

* Property certifications was removed
* Property biography was removed
* Property employerInfo was removed

**AnalyticsEvaluation** (2 changes)

* Property oTotalCriticalScore was removed
* Property oTotalScore was removed

**AnalyticsResolution** (1 change)

* Property nNextContactAvoided was removed

**AnalyticsSurvey** (1 change)

* Property oSurveyTotalScore was removed

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]


# Minor Changes (92 changes)

**/api/v2/learning/modules/{moduleId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/modules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/learning/modules/{moduleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/learning/modules/{moduleId}/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/assignments/{assignmentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/learning/assignments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/learning/assignments/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/learning/assignments/bulkadd** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/assignments/bulkremove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/{userId}/presences/zoomphone** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview/results** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/campaigns/{campaignId}/agentownedmappingpreview** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/rules/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/coaching/scheduleslots/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/learning/modules/{moduleId}/rule** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**IntentDefinition** (1 change)

* Optional property entityNameReferences was added

**AssessmentForm** (1 change)

* Model was added

**AssessmentFormQuestion** (1 change)

* Model was added

**AssessmentFormQuestionGroup** (1 change)

* Model was added

**LearningModule** (1 change)

* Model was added

**LearningModuleInformStep** (1 change)

* Model was added

**LearningModuleRule** (1 change)

* Model was added

**LearningModuleRuleParts** (1 change)

* Model was added

**LearningModuleSummary** (1 change)

* Model was added

**LearningModulesDomainEntityListing** (1 change)

* Model was added

**LearningModuleInformStepRequest** (1 change)

* Model was added

**LearningModuleRequest** (1 change)

* Model was added

**LearningModulePublishResponse** (1 change)

* Model was added

**AuditLogMessage** (2 changes)

* Enum value Move was added to property action
* Enum value Workspace was added to property entityType

**AuditQueryEntity** (2 changes)

* Enum value Workspace was added to property name
* Enum value Move was added to property actions

**EventMessage** (1 change)

* Enum value CONTACT_ID_LENGTH_LIMIT_EXCEEDED was added to property code

**BotAggregationQuery** (3 changes)

* Enum value tBotDisconnect was added to property metrics
* Enum value tBotExit was added to property metrics
* Enum value tBotRecognitionFailure was added to property metrics

**BotAggregationView** (3 changes)

* Enum value tBotDisconnect was added to property target
* Enum value tBotExit was added to property target
* Enum value tBotRecognitionFailure was added to property target

**AnalyticsEvaluation** (2 changes)

* Optional property getoTotalCriticalScore was added
* Optional property getoTotalScore was added

**AnalyticsResolution** (1 change)

* Optional property getnNextContactAvoided was added

**AnalyticsSurvey** (1 change)

* Optional property getoSurveyTotalScore was added

**AssessmentQuestionGroupScore** (1 change)

* Model was added

**AssessmentQuestionScore** (1 change)

* Model was added

**AssessmentScoringSet** (1 change)

* Model was added

**LearningAssessment** (1 change)

* Model was added

**LearningAssignment** (1 change)

* Model was added

**LearningAssignmentUpdate** (1 change)

* Model was added

**LearningAssignmentCreate** (1 change)

* Model was added

**LearningAssignmentsDomainEntity** (1 change)

* Model was added

**DisallowedEntityLearningAssignmentItem** (1 change)

* Model was added

**LearningAssignmentBulkAddResponse** (1 change)

* Model was added

**LearningAssignmentItem** (1 change)

* Model was added

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**AgentOwnedMappingPreview** (1 change)

* Model was added

**AgentOwnedMappingPreviewListing** (1 change)

* Model was added

**LearningAssignmentUser** (1 change)

* Model was added

**LearningAssignmentUserListing** (1 change)

* Model was added

**LearningAssignmentUserQuery** (1 change)

* Model was added

**NamedEntityDefinition** (1 change)

* Model was added

**NluDomainVersion** (1 change)

* Optional property entities was added

**AvailableTime** (1 change)

* Model was added

**CoachingSlot** (1 change)

* Model was added

**CoachingSlotsResponse** (1 change)

* Model was added

**UserAvailableTimes** (1 change)

* Model was added

**CoachingSlotsRequest** (1 change)

* Model was added


# Point Changes (0 changes)
