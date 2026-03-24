Platform API version: 10163




# Major Changes (10 changes)

**GET /api/v2/conversations/emails/{conversationId}/messages** (1 change)

* Parameter includeAgentlessStitchedMessages was added

**AgentlessEmailSendResponseDto** (2 changes)

* Enum value Inbound was removed from property senderType
* Enum value Integration was removed from property senderType

**AgentlessEmailSendRequestDto** (2 changes)

* Enum value Inbound was removed from property senderType
* Enum value Integration was removed from property senderType

**CampaignRuleCampaignWaitTimeSettings** (1 change)

* Required property waitType was added

**CampaignRuleWeekDayOfMonth** (1 change)

* Required property dayOfWeek was added

**CampaignRuleWeekDayOfMonthInterval** (2 changes)

* Required property min was added
* Required property max was added

**Response** (1 change)

* Property assets was changed from AddressableEntityRef[] to RmsAssetAddressableRef[]


# Minor Changes (310 changes)

**/api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Operation patch was added. Summary: Update specific fields of an external contact

**/api/v2/outbound/diagnostics/campaigns/{campaignId}/summary** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/journey/views/eventdefinitions/{eventDefinitionId}** (1 change)

* Response 501 was added

**/api/v2/knowledge/connections/{connectionId}/options** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/knowledge/connections/{connectionId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/knowledge/connections** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/sources/{sourceId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/knowledge/sources** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations/{synchronizationId}/uploads** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/knowledge/sources/{sourceId}/synchronizations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/knowledge/sources/synchronizations** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/responseassets/bulk** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/telephony/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/users** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/minimumstaffing/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduler/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}/associations/{associationId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/associations/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/cases/{caseId}/associations** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/{caseplanId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/casemanagement/caseplans/{caseplanId}/publish** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/casemanagement/cases/{caseId}/datedue** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}/priority** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}** (3 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added

**/api/v2/casemanagement/cases/{caseId}/summary** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/externalcontacts/{externalContactId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/references/{referenceId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/terminate/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/stages/{stageId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/stages** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId}** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/license/infer/permissions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/responsemanagement/libraries/query** (2 changes)

* Path was added
* Operation POST was added

**BotAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**AnalyticsConversationWithoutAttributes** (2 changes)

* Optional property associatedConversationId was added
* Optional property consultationConversationIds was added

**AnalyticsFlow** (1 change)

* Enum value EMAILSEND was added to property flowType

**ConversationAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**AnalyticsConversation** (2 changes)

* Optional property associatedConversationId was added
* Optional property consultationConversationIds was added

**FlowActivityEntityData** (1 change)

* Enum value EMAILSEND was added to property flowType

**TranscriptAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**ViewFilter** (3 changes)

* Enum value emailsend was added to property flowTypes
* Optional property socialSourceTypes was added
* Optional property takeover was added

**OnDemandSummaryConfig** (1 change)

* Model was added

**ContactsPatchChange** (1 change)

* Model was added

**ExternalContactsPatchRequest** (1 change)

* Model was added

**SchemaQuantityLimits** (2 changes)

* Optional property minFieldTitleCharacters was added
* Optional property maxFieldTitleCharacters was added

**EvaluationScoringSet** (2 changes)

* Optional property maxTotalRawCriticalScore was added
* Optional property maxTotalRawScore was added

**MediaParticipantRequest** (1 change)

* Optional property resumeTime was added

**Campaign** (1 change)

* Optional property previewAutoEnd was added

**ParkingStateRequest** (1 change)

* Optional property resumeTime was added

**ConversationRecipientAdditionalProviderInfo** (1 change)

* Model was added

**CampaignRule** (1 change)

* Optional property timeZoneId was added

**CampaignRuleCampaignRunTimeSettings** (1 change)

* Optional property includeWaitingTime was added

**CampaignRuleCondition** (3 changes)

* Optional property dateTimeParameters was added
* Optional property campaignRunTimeSettings was added
* Optional property campaignWaitTimeSettings was added

**CampaignRuleDateTimeConditionParameters** (6 changes)

* Optional property inverted was added
* Optional property timeOfDay was added
* Optional property dayOfWeek was added
* Optional property dayOfMonth was added
* Optional property specificDate was added
* Optional property weekDayOfMonth was added

**CampaignRuleDayOfMonthInterval** (2 changes)

* Optional property min was added
* Optional property max was added

**CampaignRuleDayOfMonthParameters** (3 changes)

* Optional property thresholdValue was added
* Optional property inSet was added
* Optional property interval was added

**CampaignRuleDayOfWeekInterval** (2 changes)

* Optional property min was added
* Optional property max was added

**CampaignRuleDayOfWeekParameters** (2 changes)

* Optional property inSet was added
* Optional property interval was added

**CampaignRuleParameters** (1 change)

* Optional property forDuration was added

**CampaignRuleSpecificDateInterval** (2 changes)

* Optional property min was added
* Optional property max was added

**CampaignRuleSpecificDateParameters** (3 changes)

* Optional property includeYear was added
* Optional property thresholdValue was added
* Optional property interval was added

**CampaignRuleTimeOfDayInterval** (2 changes)

* Optional property min was added
* Optional property max was added

**CampaignRuleTimeOfDayParameters** (2 changes)

* Optional property interval was added
* Optional property thresholdValue was added

**CampaignRuleWeekDayOfMonth** (2 changes)

* Optional property month was added
* Optional property occurrence was added

**CampaignRuleWeekDayOfMonthParameters** (2 changes)

* Optional property thresholdValue was added
* Optional property interval was added

**EventMessage** (1 change)

* Enum value CAMPAIGN_CHECK_JOB_DUPLICATE was added to property code

**CampaignDiagnosticCampaignHealthState** (1 change)

* Model was added

**CampaignDiagnosticCampaignState** (1 change)

* Model was added

**CampaignDiagnosticConfigChange** (1 change)

* Model was added

**CampaignDiagnosticSummary** (1 change)

* Model was added

**CampaignDiagnosticWindow** (1 change)

* Model was added

**FlowsQueryCriteriaResponse** (1 change)

* Enum value emailsend was added to property flowTypes

**FlowExecutionDataQueryResult** (1 change)

* Enum value emailsend was added to property flowType

**FlowSettingsResponse** (1 change)

* Enum value emailsend was added to property type

**GuideSessionTurnInvocationParameters** (1 change)

* Enum value Date was added to property type

**Variable** (2 changes)

* Enum value Date was added to property type
* Optional property validation was added

**VariableValidation** (1 change)

* Model was added

**ConnectionOption** (1 change)

* Model was added

**ConnectionOptionListing** (1 change)

* Model was added

**AuthenticationProperties** (1 change)

* Model was added

**ConnectionResponse** (1 change)

* Model was added

**SharepointAuthenticationProperties** (1 change)

* Model was added

**ConnectionUpdateRequest** (1 change)

* Model was added

**ConnectionCreateResponse** (1 change)

* Model was added

**ConnectionCreateRequest** (1 change)

* Model was added

**ConnectionListing** (1 change)

* Model was added

**V3SourceDetailedWithErrorResponse** (1 change)

* Model was added

**V3SourceFilter** (1 change)

* Model was added

**V3SourceFilterDetails** (1 change)

* Model was added

**V3SourceFolderDetails** (1 change)

* Model was added

**V3SourceLastSynchronization** (1 change)

* Model was added

**V3SourceScheduleSettings** (1 change)

* Model was added

**V3SourceSiteDetails** (1 change)

* Model was added

**V3SynchronizationStatistics** (1 change)

* Model was added

**V3SourceDetailedResponse** (1 change)

* Model was added

**V3SourceUpdateRequest** (1 change)

* Model was added

**V3SourceWithErrorListing** (1 change)

* Model was added

**V3SourceWithErrorResponse** (1 change)

* Model was added

**V3SourceCreateRequest** (1 change)

* Model was added

**V3Synchronization** (1 change)

* Model was added

**V3SynchronizationUploadUrlResponse** (1 change)

* Model was added

**FabricTag** (1 change)

* Model was added

**V3SynchronizationUploadMetadata** (1 change)

* Model was added

**V3SynchronizationUploadUrlRequest** (1 change)

* Model was added

**V3SynchronizationUpdateRequest** (1 change)

* Model was added

**V3SynchronizationListing** (1 change)

* Model was added

**V3StartManualSyncRequest** (1 change)

* Model was added

**Miner** (1 change)

* Enum value tr-tr was added to property language

**RmsAssetAddressableRef** (1 change)

* Model was added

**ResponseFilter** (3 changes)

* Enum value BEGINS_WITH was added to property operator
* Enum value ENDS_WITH was added to property operator
* Enum value CONTAINS was added to property operator

**ResponseAssetEntityListing** (1 change)

* Model was added

**ResponseAssetBulkRequest** (1 change)

* Model was added

**Flow** (2 changes)

* Enum value EMAILSEND was added to property type
* Enum value EMAILSEND was added to property compatibleFlowTypes

**FlowVersion** (1 change)

* Enum value EMAILSEND was added to property compatibleFlowTypes

**TelephonySettings** (1 change)

* Model was added

**ArchitectFlowReference** (1 change)

* Enum value EMAILSEND was added to property type

**Dependency** (1 change)

* Enum value EMAILSENDFLOW was added to property type

**DependencyObject** (1 change)

* Enum value EMAILSENDFLOW was added to property type

**FlowDivisionView** (1 change)

* Enum value EMAILSEND was added to property type

**WebMessagingEvent** (2 changes)

* Enum value Video was added to property eventType
* Optional property video was added

**WebMessagingEventVideo** (1 change)

* Model was added

**ActivityCodeStyle** (1 change)

* Model was added

**ValueWrapperActivityCodeStyle** (1 change)

* Model was added

**BuUserListing** (1 change)

* Model was added

**ManagementUnitUserListing** (1 change)

* Model was added

**BuSchedulingSettingsResponse** (2 changes)

* Enum value FullDayEarliestStartOffsetMinutes was added to property syncTimeOffProperties
* Enum value FullDayLatestEndOffsetMinutes was added to property syncTimeOffProperties

**SetWrapperSyncTimeOffProperty** (2 changes)

* Enum value FullDayEarliestStartOffsetMinutes was added to property values
* Enum value FullDayLatestEndOffsetMinutes was added to property values

**AssignmentEffectiveDateRange** (1 change)

* Model was added

**UserAssignmentsResponse** (1 change)

* Model was added

**CreateUserAssignmentsRequest** (1 change)

* Model was added

**SetWrapperAssignmentEffectiveDateRange** (1 change)

* Model was added

**UpdateUserAssignmentsRequest** (1 change)

* Model was added

**ListWrapperInteger** (1 change)

* Model was added

**DayOfWeekMinimums** (1 change)

* Model was added

**MinimumStaffingResponse** (1 change)

* Model was added

**PlanningGroupMinimumsResponse** (1 change)

* Model was added

**ListWrapperPlanningGroupMinimumsRequest** (1 change)

* Model was added

**MinimumStaffingRequest** (1 change)

* Model was added

**PlanningGroupMinimumsRequest** (1 change)

* Model was added

**BuSchedulerSettingsResponse** (1 change)

* Model was added

**BuSchedulerSettingsRequest** (1 change)

* Model was added

**BotAsyncAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**ConversationAsyncAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**TranscriptAsyncAggregationQuery** (3 changes)

* Optional property queryType was added
* Optional property sortMetric was added
* Optional property limit was added

**CaseAssociation** (1 change)

* Model was added

**CaseReference** (1 change)

* Model was added

**StageReference** (1 change)

* Model was added

**StepReference** (1 change)

* Model was added

**CaseAssociationQueryEntityListing** (1 change)

* Model was added

**CaseAssociationQuery** (1 change)

* Model was added

**CaseAssociationListing** (1 change)

* Model was added

**CaseAssociationCreate** (1 change)

* Model was added

**Caseplan** (1 change)

* Model was added

**CustomerIntentReference** (1 change)

* Model was added

**CaseplanUpdate** (1 change)

* Model was added

**IntakeSetting** (1 change)

* Model was added

**IntakeSettingsListing** (1 change)

* Model was added

**CaseplanDataSchema** (1 change)

* Model was added

**CaseplanDataSchemaListing** (1 change)

* Model was added

**CaseplanCreateResponse** (1 change)

* Model was added

**CaseplanCreate** (1 change)

* Model was added

**CaseplanListing** (1 change)

* Model was added

**Case** (1 change)

* Model was added

**CaseExternalContactReference** (1 change)

* Model was added

**CaseplanReference** (1 change)

* Model was added

**CaseDateDueUpdate** (1 change)

* Model was added

**CasePriorityUpdate** (1 change)

* Model was added

**CaseSummaryUpdate** (1 change)

* Model was added

**CaseListing** (1 change)

* Model was added

**CaseCreate** (1 change)

* Model was added

**Intake** (1 change)

* Model was added

**TerminateJob** (1 change)

* Model was added

**Stageplan** (1 change)

* Model was added

**StageplanUpdate** (1 change)

* Model was added

**StageplanListing** (1 change)

* Model was added

**Stage** (1 change)

* Model was added

**StageListing** (1 change)

* Model was added

**StageplanReference** (1 change)

* Model was added

**Stepplan** (1 change)

* Model was added

**StepplansWorktypeReference** (1 change)

* Model was added

**WorkitemSettingsResponse** (1 change)

* Model was added

**StepplanUpdate** (1 change)

* Model was added

**WorkitemSettings** (1 change)

* Model was added

**StepplanListing** (1 change)

* Model was added

**Step** (1 change)

* Model was added

**StepListing** (1 change)

* Model was added

**QueryCriteriaGroup** (1 change)

* Model was added

**QueryCriteriaItem** (1 change)

* Model was added

**QueryCriteriaQuery** (1 change)

* Model was added


# Point Changes (11 changes)

**PATCH /api/v2/businessrules/decisiontables/{tableId}** (1 change)

* Description was changed

**POST /api/v2/businessrules/decisiontables** (1 change)

* Description was changed

**PUT /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}** (1 change)

* Description was changed

**DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}** (1 change)

* Description was changed

**POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows** (1 change)

* Description was changed

**PUT /api/v2/conversations/messaging/supportedcontent/default** (1 change)

* Description was changed for parameter body

**DELETE /api/v2/outbound/contactlists/{contactListId}/contacts** (1 change)

* Summary was changed

**GET /api/v2/routing/sms/phonenumbers/{phoneNumberId}** (1 change)

* Description was changed

**PATCH /api/v2/routing/sms/phonenumbers/{phoneNumberId}** (1 change)

* Description was changed

**GET /api/v2/routing/sms/phonenumbers** (1 change)

* Description was changed

**POST /api/v2/routing/sms/phonenumbers** (1 change)

* Description was changed
