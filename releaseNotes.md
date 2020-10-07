Platform API version: 4240


# Major Changes (9 changes)

**GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}** (1 change)

* Parameter expand was added

**GET /api/v2/knowledge/knowledgebases** (1 change)

* Parameter name was added

**EntityListing** (5 changes)

* Property pageSize was removed
* Property pageNumber was removed
* Property total was removed
* Property pageCount was removed
* Property entities was changed from DataTableImportJob[] to object[]

**DevelopmentActivity** (2 changes)

* Enum value AssessedContent was removed from property type
* Enum value Questionnaire was removed from property type


# Minor Changes (55 changes)

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/conversations/details/jobs/availability** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/divisions/{divisionId}/grants** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/actiontargets/{actionTargetId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/analytics/transcripts/aggregates/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/analytics/users/details/jobs/availability** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/actiontargets** (2 changes)

* Path was added
* Operation GET was added

**Organization** (1 change)

* Enum value GenesysCloud was added to property productPlatform

**Site** (1 change)

* Optional property coreSite was added

**KnowledgeBase** (1 change)

* Optional property faqCount was added

**AssignmentGroup** (1 change)

* Model was added

**ReportingExportJobResponse** (2 changes)

* Optional property hasSummaryRow was added
* Optional property csvDelimiter was added

**ReportingExportJobRequest** (2 changes)

* Optional property hasSummaryRow was added
* Optional property csvDelimiter was added

**ConstraintConflictMessage** (1 change)

* Model was added

**ValidateWorkPlanMessages** (1 change)

* Model was added

**ValidateWorkPlanResponse** (1 change)

* Model was added

**WorkPlanConfigurationViolationMessage** (1 change)

* Model was added

**WorkPlanConstraintConflictMessage** (1 change)

* Model was added

**WorkPlanConstraintMessage** (1 change)

* Model was added

**WorkPlanValidationMessageArgument** (1 change)

* Model was added

**WorkPlanValidationRequest** (1 change)

* Model was added

**Participant** (1 change)

* Optional property coachedParticipantId was added

**DataAvailabilityResponse** (1 change)

* Model was added

**BuQueryAgentSchedulesRequest** (1 change)

* Optional property teamIds was added

**GoogleDialogflowCustomSettings** (3 changes)

* Optional property eventName was added
* Optional property webhookQueryParameters was added
* Optional property eventInputParameters was added

**PostTextRequest** (1 change)

* Optional property messagingPlatformType was added

**AuthzDivisionGrantEntityListing** (1 change)

* Model was added

**KeyValue** (1 change)

* Model was added

**OrphanRecording** (1 change)

* Optional property sourceOrphaningId was added

**ActionTarget** (1 change)

* Model was added

**PatchActionTarget** (1 change)

* Model was added

**ParticipantBasic** (1 change)

* Optional property coachedParticipantId was added

**Entity** (1 change)

* Model was added

**TokenInfo** (1 change)

* Optional property clonedUser was added

**TokenInfoClonedUser** (1 change)

* Model was added

**TranscriptAggregateDataContainer** (1 change)

* Model was added

**TranscriptAggregateQueryResponse** (1 change)

* Model was added

**TranscriptAggregateQueryClause** (1 change)

* Model was added

**TranscriptAggregateQueryFilter** (1 change)

* Model was added

**TranscriptAggregateQueryPredicate** (1 change)

* Model was added

**TranscriptAggregationQuery** (1 change)

* Model was added

**TranscriptAggregationView** (1 change)

* Model was added

**ActionTargetListing** (1 change)

* Model was added


# Point Changes (4 changes)

**GET /api/v2/users/development/activities** (2 changes)

* Description was changed for parameter interval
* Description was changed for parameter completionInterval

**GET /api/v2/users/development/activities/me** (2 changes)

* Description was changed for parameter interval
* Description was changed for parameter completionInterval
