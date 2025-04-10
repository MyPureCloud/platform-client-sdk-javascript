Platform API version: 9095




# Major Changes (6 changes)

**POST /api/v2/externalcontacts/merge/contacts** (1 change)

* Has been deprecated

**GET /api/v2/routing/email/outbound/domains** (2 changes)

* Parameter pageSize was added
* Parameter pageNumber was added

**GET /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Has been deprecated

**POST /api/v2/workforcemanagement/historicaldata/deletejob** (1 change)

* Has been deprecated

**BuImportAgentScheduleUploadSchema** (1 change)

* Property shifts was changed from BuAgentScheduleShift[] to BuAgentScheduleShiftRequest[]


# Minor Changes (150 changes)

**/api/v2/authorization/divisions/deleted** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/authorization/divisions/query** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/contacts/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/contacts/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/contacts/schemas/limits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/organizations/schemas/limits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests/uploads/prizeimages** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/dnclists/{dncListId}/whatsappnumbers** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/gamification/contests/{contestId}/prizeimages/{prizeImageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/gamification/contests/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests/{contestId}** (5 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/gamification/contests/{contestId}/agents/scores** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests/{contestId}/agents/scores/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests/{contestId}/agents/scores/trends/me** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/gamification/contests/{contestId}/agents/scores/trends** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/schemas/coretypes/{coreTypeName}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/schemas/coretypes** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/taskmanagement/workitems/schemas/limits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/externalcontacts/bulk/contacts/enrich** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/bulk/organizations/enrich** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/merge** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/contacts/enrich** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/organizations/enrich** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/externalcontacts/identifierlookup/contacts** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/externalcontacts/identifierlookup/organizations** (2 changes)

* Path was added
* Operation POST was added

**AuthzDivisionCursorListing** (1 change)

* Model was added

**DomainResourceConditionValue** (2 changes)

* Optional property team was added
* Enum value TEAM was added to property type

**ResourceConditionValue** (1 change)

* Enum value TEAM was added to property type

**User** (1 change)

* Optional property dateWelcomeSent was added

**Limit** (1 change)

* Enum value dsar was added to property namespace

**ExternalContact** (1 change)

* Optional property identifiers was added

**OrgUser** (1 change)

* Optional property dateWelcomeSent was added

**ConversationMessageMetadataContent** (1 change)

* Enum value InteractiveApplication was added to property contentType

**ConversationContentInteractiveApplication** (1 change)

* Model was added

**ConversationContentReceivedReplyMessage** (1 change)

* Model was added

**ConversationMessageContent** (1 change)

* Enum value InteractiveApplication was added to property contentType

**OpenMessagingIdentityResolutionConfig** (1 change)

* Optional property externalSource was added

**GamificationContestPrizeImageUploadUrlRequest** (1 change)

* Model was added

**DataTableImportJob** (1 change)

* Optional property uploadHeaders was added

**ContactListDivisionView** (1 change)

* Optional property whatsAppColumns was added

**DialerContact** (1 change)

* Optional property latestWhatsAppEvaluations was added

**ContactList** (1 change)

* Optional property whatsAppColumns was added

**ContactListTemplate** (1 change)

* Optional property whatsAppColumns was added

**WritableDialerContact** (1 change)

* Optional property latestWhatsAppEvaluations was added

**DncPatchWhatsAppNumbersRequest** (1 change)

* Model was added

**Condition** (2 changes)

* Enum value timeAndDateCondition was added to property type
* Enum value BETWEEN was added to property operator

**TimeAndDateSubCondition** (1 change)

* Model was added

**TimeAndDateSubConditionRange** (1 change)

* Model was added

**MessagingCampaign** (1 change)

* Optional property whatsAppConfig was added

**PrizeImages** (1 change)

* Model was added

**ContestDisqualifiedAgents** (1 change)

* Model was added

**ContestMetrics** (1 change)

* Model was added

**ContestPrizes** (1 change)

* Model was added

**ContestProfile** (1 change)

* Model was added

**ContestUserRank** (1 change)

* Model was added

**ContestWinners** (1 change)

* Model was added

**ContestsResponse** (1 change)

* Model was added

**ContestsCreateRequest** (1 change)

* Model was added

**ContestRequesingParticipantDailyInfo** (1 change)

* Model was added

**ContestScoreRanked** (1 change)

* Model was added

**ContestsEssentials** (1 change)

* Model was added

**GetContestsEssentialsListing** (1 change)

* Model was added

**ContestWinnersRequest** (1 change)

* Model was added

**ContestsFinalizeRequest** (1 change)

* Model was added

**ContestMetricScoreRanked** (1 change)

* Model was added

**ContestScoresAgents** (1 change)

* Model was added

**ContestScoresAgentsPagedList** (1 change)

* Model was added

**ContestScoresAgentTrend** (1 change)

* Model was added

**ContestScoresAgentTrendList** (1 change)

* Model was added

**ContestMetricScore** (1 change)

* Model was added

**ContestScore** (1 change)

* Model was added

**ContestScoresGroupTrend** (1 change)

* Model was added

**ContestScoresGroupTrendList** (1 change)

* Model was added

**NamedEntityTypeMechanism** (1 change)

* Optional property minLength was added

**ApprovalNamespace** (1 change)

* Enum value dsar was added to property namespace

**LimitChangeRequestDetails** (1 change)

* Enum value dsar was added to property namespace

**StatusChange** (1 change)

* Enum value dsar was added to property namespace

**TrustUser** (1 change)

* Optional property dateWelcomeSent was added

**UserMe** (1 change)

* Optional property dateWelcomeSent was added

**SchedulerMessageTypeSeverity** (3 changes)

* Enum value UnableToSchedulePlanningPeriodMaxWorkingWeekendsFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodShiftMaxCountFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodShiftMinCountFromAgentHistory was added to property type

**WorkPlanConfigurationViolationMessage** (3 changes)

* Enum value PlanningPeriodMaxWorkingWeekendsCannotBeMet was added to property type
* Enum value ShiftMaxCountPerPlanningPeriodCannotBeMet was added to property type
* Enum value ShiftMinCountPerPlanningPeriodCannotBeMet was added to property type

**WorkPlanConstraintMessage** (3 changes)

* Enum value PlanningPeriodMaximumWorkingWeekends was added to property type
* Enum value ShiftMaximumCountPerPlanningPeriod was added to property type
* Enum value ShiftMinimumCountPerPlanningPeriod was added to property type

**PlanningPeriodShiftConstraints** (1 change)

* Model was added

**ScheduleGenerationMessage** (3 changes)

* Enum value UnableToSchedulePlanningPeriodMaxWorkingWeekendsFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodShiftMaxCountFromAgentHistory was added to property type
* Enum value UnableToSchedulePlanningPeriodShiftMinCountFromAgentHistory was added to property type

**BuAgentScheduleShiftRequest** (1 change)

* Model was added

**BulkContactsEnrichResponse** (1 change)

* Model was added

**BulkEntityErrorContactEnrichRequest** (1 change)

* Model was added

**BulkResponseResultExternalContactContactEnrichRequestBulkEntityErrorContactEnrichRequest** (1 change)

* Model was added

**ContactEnrichOptions** (1 change)

* Model was added

**ContactEnrichRequest** (1 change)

* Model was added

**EnrichFieldRule** (1 change)

* Model was added

**EnrichFieldRules** (1 change)

* Model was added

**BulkContactsEnrichRequest** (1 change)

* Model was added

**BulkEntityErrorExternalOrganizationEnrichRequest** (1 change)

* Model was added

**BulkOrganizationsEnrichResponse** (1 change)

* Model was added

**BulkResponseResultExternalOrganizationExternalOrganizationEnrichRequestBulkEntityErrorExternalOrganizationEnrichRequest** (1 change)

* Model was added

**ExternalOrganizationEnrichRequest** (1 change)

* Model was added

**BulkOrganizationsEnrichRequest** (1 change)

* Model was added

**MergeContactsRequest** (1 change)

* Model was added

**ExternalOrganizationIdentifierListing** (1 change)

* Model was added

**ExternalOrganizationIdentifierClaimRequest** (1 change)

* Model was added


# Point Changes (7 changes)

**POST /api/v2/externalcontacts/merge/contacts** (1 change)

* Description was changed

**GET /api/v2/routing/email/domains** (1 change)

* Description was changed for parameter filter

**GET /api/v2/routing/email/outbound/domains** (1 change)

* Description was changed for parameter filter

**GET /api/v2/workforcemanagement/historicaldata/deletejob** (2 changes)

* Description was changed
* Summary was changed

**POST /api/v2/workforcemanagement/historicaldata/deletejob** (2 changes)

* Description was changed
* Summary was changed
