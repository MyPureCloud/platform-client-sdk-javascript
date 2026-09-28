Platform API version: 10831


## Release Notes

* Bug fix: the window message event listener was not properly removed when completing Authentication via popup.

* Introducing skiptest option in loginPKCEGrant - when true, the loginPKCEGrant will not check the validity of an existing token.


# Major Changes (27 changes)

**/api/v2/journey/actiontargets/{actionTargetId}** (1 change)

* Operation PATCH was removed

**GET /api/v2/routing/predictors/keyperformanceindicators** (1 change)

* Response 200 type was changed from KeyPerformanceIndicator[] to KeyPerformanceIndicatorEntityListing

**ActionProperties** (1 change)

* Model ActionProperties was removed

**ActionSurvey** (1 change)

* Model ActionSurvey was removed

**JourneySurveyQuestion** (1 change)

* Model JourneySurveyQuestion was removed

**PatchActionProperties** (1 change)

* Model PatchActionProperties was removed

**PatchActionSurvey** (1 change)

* Model PatchActionSurvey was removed

**PatchSurveyQuestion** (1 change)

* Model PatchSurveyQuestion was removed

**PatchActionTarget** (1 change)

* Model PatchActionTarget was removed

**CreateVerifierResponse** (2 changes)

* Enum value TOTP was removed from property type
* Enum value WEBAUTHN was removed from property type

**Verifier** (2 changes)

* Enum value TOTP was removed from property type
* Enum value WEBAUTHN was removed from property type

**ViewFilter** (1 change)

* Enum value webchat was removed from property journeyActionMapTypes

**ActionMapAction** (4 changes)

* Property actionTargetId was removed
* Property isPacingEnabled was removed
* Property props was removed
* Enum value webchat was removed from property mediaType

**PatchAction** (4 changes)

* Property actionTargetId was removed
* Property isPacingEnabled was removed
* Property props was removed
* Enum value webchat was removed from property mediaType

**ActionTemplate** (1 change)

* Enum value webchat was removed from property mediaType

**PatchActionTemplate** (1 change)

* Enum value webchat was removed from property mediaType

**EventAction** (1 change)

* Enum value webchat was removed from property mediaType

**WebActionEvent** (1 change)

* Property actionTarget was removed

**DeploymentWebAction** (1 change)

* Enum value webchat was removed from property mediaType


# Minor Changes (157 changes)

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/takeover** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/speechandtextanalytics/programs/{programId}/settings/processing** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/speechandtextanalytics/programs/settings/processing** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/deletions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/deletions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/jobs** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/deletions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/deletions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/sessions/deletions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/sessions/deletions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/sessions/{sessionId}/users/deletions/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/occurrences/{occurrenceId}/sessions/{sessionId}/users/deletions/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/reasoncodes/{reasonCodeId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/reasoncodes/bulk** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/reasoncodes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/adherence/adjustments/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/adherence/adjustments/{adjustmentId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/query/jobs** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/query/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/bulk** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/adjustments/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/adherence/adjustments/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/adherence/adjustments/{adjustmentId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/adherence/adjustments** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/unavailabletimes** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}/description** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/casemanagement/cases/{caseId}/externalid** (2 changes)

* Path was added
* Operation PATCH was added

**CreateVerifierResponse** (2 changes)

* Enum value totp was added to property type
* Enum value webauthn was added to property type

**Verifier** (2 changes)

* Enum value totp was added to property type
* Enum value webauthn was added to property type

**AgenticVirtualAgentAgentCardSkill** (1 change)

* Model was added

**AgenticVirtualAgentDataActionSchemas** (1 change)

* Model was added

**AgenticVirtualAgentInputValidation** (1 change)

* Model was added

**AgenticVirtualAgentToolError** (1 change)

* Model was added

**AgenticVirtualAgentToolInput** (1 change)

* Model was added

**AnalyticsFlow** (1 change)

* Enum value BUSINESSPROCESS was added to property flowType

**FlowActivityEntityData** (1 change)

* Enum value BUSINESSPROCESS was added to property flowType

**SummaryAggregateQueryPredicate** (1 change)

* Enum value wrapupCodesSupported was added to property dimension

**SummaryAsyncAggregationQuery** (1 change)

* Enum value wrapupCodesSupported was added to property groupBy

**SummaryAggregationQuery** (1 change)

* Enum value wrapupCodesSupported was added to property groupBy

**ViewFilter** (3 changes)

* Enum value businessprocess was added to property flowTypes
* Optional property socialEngagementSaves was added
* Optional property socialEngagementReposts was added

**Case** (2 changes)

* Optional property externalId was added
* Optional property description was added

**CaseCreate** (2 changes)

* Optional property description was added
* Optional property externalId was added

**ContactIdentifier** (1 change)

* Enum value SocialInstagramHandle was added to property type

**ColumnDataTypeSpecification** (1 change)

* Enum value DATETIME was added to property columnDataType

**FlowsQueryCriteriaResponse** (1 change)

* Enum value businessprocess was added to property flowTypes

**FlowExecutionDataQueryResult** (1 change)

* Enum value businessprocess was added to property flowType

**FlowSettingsResponse** (1 change)

* Enum value businessprocess was added to property type

**DataActionInput** (1 change)

* Model was added

**FieldMapping** (1 change)

* Model was added

**ListItem** (1 change)

* Model was added

**TtsVoiceEntity** (4 changes)

* Optional property displayName was added
* Optional property voiceType was added
* Optional property supportedModels was added
* Optional property provider was added

**Response** (1 change)

* Optional property form was added

**Flow** (2 changes)

* Enum value BUSINESSPROCESS was added to property type
* Enum value BUSINESSPROCESS was added to property compatibleFlowTypes

**FlowVersion** (1 change)

* Enum value BUSINESSPROCESS was added to property compatibleFlowTypes

**KeyPerformanceIndicatorEntityListing** (1 change)

* Model was added

**InstagramHashtags** (1 change)

* Model was added

**InstagramNonOwnedAccount** (1 change)

* Model was added

**ProgramProcessingSettings** (1 change)

* Model was added

**ProgramProcessingSettingsPatchResponse** (1 change)

* Model was added

**ProcessingSettingsRequest** (1 change)

* Model was added

**ProgramProcessingSettingsEntityListing** (1 change)

* Model was added

**TestTopicPhraseTopic** (1 change)

* Optional property matchingType was added

**TopicRequest** (1 change)

* Optional property matchingType was added

**ArchitectFlowReference** (1 change)

* Enum value BUSINESSPROCESS was added to property type

**Dependency** (1 change)

* Enum value BUSINESSPROCESSFLOW was added to property type

**DependencyObject** (1 change)

* Enum value BUSINESSPROCESSFLOW was added to property type

**FlowDivisionView** (1 change)

* Enum value BUSINESSPROCESS was added to property type

**ActivityPlanOccurrencesDeletionJobResponse** (1 change)

* Model was added

**ActivityPlanStructureWithOccurrencesReference** (1 change)

* Model was added

**ActivityPlanDeletionOccurrenceIds** (1 change)

* Model was added

**ActivityPlanDeletionSessionIds** (1 change)

* Model was added

**ActivityPlanDeletionSessionUserIds** (1 change)

* Model was added

**AdherenceAdjustmentsReasonCode** (1 change)

* Model was added

**UpdateAdherenceAdjustmentsReasonCodeRequest** (1 change)

* Model was added

**AdherenceAdjustmentsReasonCodesListing** (1 change)

* Model was added

**CreateAdherenceAdjustmentsReasonCodeRequest** (1 change)

* Model was added

**CreateAdherenceAdjustmentsReasonCodesBulkRequest** (1 change)

* Model was added

**UpdateAdherenceAdjustmentsReasonCodesBulkItem** (1 change)

* Model was added

**UpdateAdherenceAdjustmentsReasonCodesBulkRequest** (1 change)

* Model was added

**AdherenceAdjustment** (1 change)

* Model was added

**AdherenceAdjustmentsReasonCodeReference** (1 change)

* Model was added

**CursorAdherenceAdjustmentsListing** (1 change)

* Model was added

**AgentQueryAdherenceAdjustmentsRequest** (1 change)

* Model was added

**UpdateAdherenceAdjustmentAdminRequest** (1 change)

* Model was added

**AdherenceAdjustmentsListing** (1 change)

* Model was added

**BuAdherenceAdjustmentsQueryJob** (1 change)

* Model was added

**BuQueryAdherenceAdjustmentsRequest** (1 change)

* Model was added

**BuAdherenceAdjustmentsQueryJobsReference** (1 change)

* Model was added

**BuAdherenceAdjustmentsQueryJobsReferenceListing** (1 change)

* Model was added

**UpdateAdherenceAdjustmentsBulkItem** (1 change)

* Model was added

**UpdateAdherenceAdjustmentsBulkRequest** (1 change)

* Model was added

**BuAdherenceAdjustmentsSettings** (1 change)

* Model was added

**UpdateBuAdherenceAdjustmentsSettingsRequest** (1 change)

* Model was added

**CurrentAgentAdherenceAdjustment** (1 change)

* Model was added

**CurrentAgentCursorAdherenceAdjustmentsListing** (1 change)

* Model was added

**UpdateAdherenceAdjustmentAgentRequest** (1 change)

* Model was added

**AddAdherenceAdjustmentAgentRequest** (1 change)

* Model was added

**BulkUpdateAgentUnavailableTimesResponse** (1 change)

* Model was added

**BulkUpdateAgentUnavailableTimesResultItem** (1 change)

* Model was added

**TargetUnavailableTime** (1 change)

* Model was added

**CoachingNotification** (3 changes)

* Enum value AnnotationAdded was added to property actionType
* Enum value AnnotationEdited was added to property actionType
* Enum value AnnotationDeleted was added to property actionType

**CaseDescriptionUpdate** (1 change)

* Model was added

**CaseExternalIdUpdate** (1 change)

* Model was added


# Point Changes (98 changes)

**PUT /api/v2/businessrules/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/businessrules/schemas/{schemaId}/versions/{schemaVersion}** (1 change)

* Response 422 was added

**GET /api/v2/businessrules/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/businessrules/schemas** (1 change)

* Response 422 was added

**POST /api/v2/businessrules/schemas** (1 change)

* Response 422 was added

**GET /api/v2/users/{userId}/callforwarding** (1 change)

* Response 424 was added

**POST /api/v2/casemanagement/cases** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/contacts/{contactId}/notes** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/contacts/{contactId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/contacts/{contactId}/identifiers** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/contacts/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/contacts/schemas** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/merge/contacts** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/contacts/merge** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/contacts** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/contacts/divisionviews/all** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/contacts** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/organizations/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/organizations/schemas** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/organizations** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/organizations/divisionviews/all** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/organizations** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/externalsources/{externalSourceId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/externalsources** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/identifierlookup/organizations** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/identifierlookup** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/identifierlookup/contacts** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/notes/divisionviews/all** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/notes** (1 change)

* Response 422 was added

**PUT /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 422 was added

**PATCH /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Response 422 was added

**POST /api/v2/externalcontacts/relationships** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/relationships/divisionviews/all** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/scan/relationships** (1 change)

* Response 422 was added

**GET /api/v2/externalcontacts/import/csv/uploads/{uploadId}/preview** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/customattributes/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/conversations/customattributes/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/conversations/customattributes/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 422 was added

**GET /api/v2/conversations/customattributes/schemas** (1 change)

* Response 422 was added

**POST /api/v2/conversations/customattributes/schemas** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/apple/{integrationId}** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/facebook/{integrationId}** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/instagram/{integrationId}** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/open/{integrationId}** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/twitter/{integrationId}** (1 change)

* Response 422 was added

**PUT /api/v2/conversations/messaging/identityresolution/integrations/whatsapp/{integrationId}** (1 change)

* Response 422 was added

**POST /api/v2/dataprivacy/maskingrules/validate** (1 change)

* Response 422 was added

**GET /api/v2/outbound/diagnostics/campaigns/{campaignId}/summary** (1 change)

* Response 422 was added

**POST /api/v2/journey/externalevents/configurations/{configurationId}/events** (1 change)

* Response 422 was added

**PUT /api/v2/journey/externalevents/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/journey/externalevents/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/journey/externalevents/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 422 was added

**GET /api/v2/journey/externalevents/schemas** (1 change)

* Response 422 was added

**POST /api/v2/journey/externalevents/schemas** (1 change)

* Response 422 was added

**DELETE /api/v2/knowledge/knowledgebases/{knowledgeBaseId}** (1 change)

* Response 424 was added

**POST /api/v2/journey/deployments/{deploymentId}/appevents** (1 change)

* Response 422 was added

**POST /api/v2/journey/deployments/{deploymentId}/webevents** (1 change)

* Response 422 was added

**PUT /api/v2/routing/queues/{queueId}/identityresolution** (1 change)

* Response 422 was added

**POST /api/v2/routing/assessments/jobs** (1 change)

* Description was changed

**PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution** (1 change)

* Response 422 was added

**PUT /api/v2/routing/sms/identityresolution/phonenumbers/{addressId}** (1 change)

* Response 422 was added

**PUT /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}** (1 change)

* Response 422 was added

**POST /api/v2/speechandtextanalytics/dictionaryfeedback** (1 change)

* Response 422 was added

**POST /api/v2/speechandtextanalytics/sentimentfeedback** (1 change)

* Response 422 was added

**PUT /api/v2/users/customattributes/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/users/customattributes/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/users/customattributes/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 422 was added

**GET /api/v2/users/customattributes/schemas** (1 change)

* Response 422 was added

**POST /api/v2/users/customattributes/schemas** (1 change)

* Response 422 was added

**PUT /api/v2/voicemail/policy** (1 change)

* Response 424 was added

**PUT /api/v2/architect/ivrs/{ivrId}/identityresolution** (1 change)

* Response 422 was added

**PUT /api/v2/webdeployments/deployments/{deploymentId}/identityresolution** (1 change)

* Response 422 was added

**POST /api/v2/taskmanagement/workitems** (1 change)

* Response 422 was added

**PATCH /api/v2/taskmanagement/workitems/{workitemId}** (1 change)

* Response 422 was added

**PUT /api/v2/taskmanagement/workitems/schemas/{schemaId}** (1 change)

* Response 422 was added

**GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId}** (1 change)

* Response 422 was added

**GET /api/v2/taskmanagement/workitems/schemas/{schemaId}/versions** (1 change)

* Response 422 was added

**GET /api/v2/taskmanagement/workitems/schemas** (1 change)

* Response 422 was added

**POST /api/v2/taskmanagement/workitems/schemas** (1 change)

* Response 422 was added

**POST /api/v2/journey/outcomes/attributions/jobs** (1 change)

* Response 422 was added

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}** (1 change)

* Response 422 was added

**GET /api/v2/journey/outcomes/attributions/jobs/{jobId}/results** (1 change)

* Response 422 was added

**POST /api/v2/speechandtextanalytics/reprocessing/jobs** (1 change)

* Response 422 was added
