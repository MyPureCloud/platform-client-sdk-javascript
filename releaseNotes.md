Platform API version: 10662




# Major Changes (21 changes)

**GET /api/v2/casemanagement/cases/{caseId}** (1 change)

* Parameter expands was changed from string to array

**GET /api/v2/casemanagement/cases/references/{referenceId}** (1 change)

* Parameter expands was changed from string to array

**POST /api/v2/conversations/videos/{conversationId}/agentconference/communications/{communicationId}** (1 change)

* Response 200 type was changed from VideoConferenceDetails to CreateJoinVideoResponse

**TimeOffRequest** (1 change)

* Model TimeOffRequest was removed

**AppleInvitation** (1 change)

* Enum value WithoutImage was removed from property templateType

**RatingFilter** (7 changes)

* Property from was removed
* Property to was removed
* Enum value GreaterThan was removed from property operator
* Enum value GreaterThanOrEqualTo was removed from property operator
* Enum value LessThan was removed from property operator
* Enum value LessThanOrEqualTo was removed from property operator
* Enum value Between was removed from property operator

**TimeOffRequestListing** (1 change)

* Property entities was changed from TimeOffRequest[] to TimeOffRequestListItem[]

**Workitem** (2 changes)

* Property language was changed from LanguageReference to WorkitemLanguageReference
* Property skills was changed from RoutingSkillReference[] to WorkitemRoutingSkillReference[]

**WorkitemVersion** (2 changes)

* Property language was changed from LanguageReference to WorkitemLanguageReference
* Property skills was changed from RoutingSkillReference[] to WorkitemRoutingSkillReference[]

**Worktype** (2 changes)

* Property defaultLanguage was changed from LanguageReference to WorkitemLanguageReference
* Property defaultSkills was changed from RoutingSkillReference[] to WorkitemRoutingSkillReference[]

**WorktypeVersion** (2 changes)

* Property defaultLanguage was changed from LanguageReference to WorkitemLanguageReference
* Property defaultSkills was changed from RoutingSkillReference[] to WorkitemRoutingSkillReference[]


# Minor Changes (231 changes)

**/api/v2/users/me/verifiers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/users/me/verifiers/totp** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/me/verifiers/webauthn/register/options** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/me/verifiers/webauthn/register** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/users/me/verifiers/{verifierId}** (3 changes)

* Path was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/users/me/verifiers/totp/{verifierId}** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/jobs** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/agentic/virtualagents/{virtualAgentId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/agentic/virtualagents/{virtualAgentId}/versions** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/agentic/virtualagents** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**POST /api/v2/casemanagement/cases** (1 change)

* Response 422 was added

**/api/v2/casemanagement/cases/{caseId}/comments/me/{commentId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/casemanagement/cases/{caseId}/comments/{commentId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/casemanagement/cases/{caseId}/comments** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/summaries** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}/summaries** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/conversations/{conversationId}/suggestions/{suggestionId}** (1 change)

* Operation patch was added. Summary: Update a suggestion.

**/api/v2/quality/publishedforms/evaluations/divisionviews/{evaluationFormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/evaluations/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/surveys/divisionviews/{surveyFormId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/quality/publishedforms/surveys/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/libraries/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/libraries/divisionviews/{libraryId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/responses/divisionviews/{responseId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/responsemanagement/responses/divisionviews/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/decisionmetrics** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/decisionmetrics/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/decisionmetrics/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/decisionmetrics/update/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/granularityconversion** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/granularityconversion/jobs/{jobId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/granularityconversion/jobs** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values/import/uploadurl** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values/import** (2 changes)

* Path was added
* Operation POST was added

**Verifier** (2 changes)

* Optional property type was added
* Optional property credential was added

**CreateVerifierResponse** (1 change)

* Model was added

**CreateVerifierRequest** (1 change)

* Model was added

**AuthenticatorSelection** (1 change)

* Model was added

**BeginWebAuthnRegistrationResponse** (1 change)

* Model was added

**CredentialDescriptor** (1 change)

* Model was added

**CredentialParameter** (1 change)

* Model was added

**PublicKeyCredentialCreationOptions** (1 change)

* Model was added

**RelyingPartyEntity** (1 change)

* Model was added

**UserEntity** (1 change)

* Model was added

**AuthenticatorAttestationResponse** (1 change)

* Model was added

**FinishWebAuthnRegistrationRequest** (1 change)

* Model was added

**PublicKeyCredentialCreationResponse** (1 change)

* Model was added

**UpdateVerifierRequest** (1 change)

* Optional property credential was added

**ValidateVerifierRequest** (1 change)

* Model was added

**OrgAuthSettings** (1 change)

* Optional property tokenStorageLocation was added

**AgenticVirtualAgentJob** (1 change)

* Model was added

**Limit** (2 changes)

* Enum value admin.notice was added to property namespace
* Enum value sda was added to property namespace

**AgenticVersionAddressableEntity** (1 change)

* Model was added

**AgenticVirtualAgent** (1 change)

* Model was added

**UpdateAgenticVirtualAgent** (1 change)

* Model was added

**AgenticVirtualAgentComfortStatementSettings** (1 change)

* Model was added

**AgenticVirtualAgentEventSettings** (1 change)

* Model was added

**AgenticVirtualAgentGuardrailInstruction** (1 change)

* Model was added

**AgenticVirtualAgentGuardrails** (1 change)

* Model was added

**AgenticVirtualAgentPropertyDefinition** (1 change)

* Model was added

**AgenticVirtualAgentTool** (1 change)

* Model was added

**AgenticVirtualAgentToolOutputInstruction** (1 change)

* Model was added

**AgenticVirtualAgentTypeDefinition** (1 change)

* Model was added

**AgenticVirtualAgentVersion** (1 change)

* Model was added

**AgenticVirtualAgentVersionDefinition** (1 change)

* Model was added

**AgenticVirtualAgentVersionSettings** (1 change)

* Model was added

**UpdateAgenticVirtualAgentVersion** (1 change)

* Model was added

**AgenticVirtualAgentVersionPublishJob** (1 change)

* Model was added

**AgenticVirtualAgentVersionPublish** (1 change)

* Model was added

**AgenticVirtualAgentVersionPublishJobRequest** (1 change)

* Model was added

**AgenticVirtualAgentVersionJob** (1 change)

* Model was added

**CreateAgenticVirtualAgentVersion** (1 change)

* Model was added

**AgenticVirtualAgentEntityListing** (1 change)

* Model was added

**CreateAgenticVirtualAgent** (1 change)

* Model was added

**KnowledgeSource** (1 change)

* Model was added

**ReportingTurnAction** (1 change)

* Enum value AgenticAnythingElseAction was added to property actionType

**ReportingTurnActionAgentDetails** (1 change)

* Model was added

**ReportingTurnGuardrailEvent** (1 change)

* Model was added

**ReportingTurnKnowledgeMetadata** (1 change)

* Model was added

**ReportingTurnToolCall** (1 change)

* Model was added

**EmailRefinementConfig** (1 change)

* Model was added

**RefinementSettingEntity** (1 change)

* Model was added

**SummaryGenerationConfig** (3 changes)

* Optional property retentionSeconds was added
* Optional property onDemandSummaryConfig was added
* Optional property modelConfig was added

**BlendingSettings** (1 change)

* Model was added

**DecisionTableVersion** (2 changes)

* Optional property createdBy was added
* Optional property publishedBy was added

**CaseUserReference** (1 change)

* Optional property images was added

**Comment** (1 change)

* Model was added

**CommentCreate** (1 change)

* Model was added

**CommentListing** (1 change)

* Model was added

**EvaluationForm** (2 changes)

* Optional property division was added
* Optional property redacted was added

**AiAnswer** (1 change)

* Optional property markedNotApplicable was added

**Call** (1 change)

* Optional property clientIpAddress was added

**CallMediaParticipant** (1 change)

* Optional property clientIpAddress was added

**Campaign** (1 change)

* Optional property preciseDialingEnabled was added

**OnDemandSummaryAcceptedResponse** (1 change)

* Model was added

**OnDemandConversationSummaryRequest** (1 change)

* Model was added

**ConversationContentReaction** (2 changes)

* Enum value Repost was added to property reactionType
* Enum value Save was added to property reactionType

**Suggestion** (1 change)

* Optional property thirdPartySuggestion was added

**SuggestionPatchRequest** (1 change)

* Model was added

**CallBasic** (1 change)

* Optional property clientIpAddress was added

**PunctualityEvent** (1 change)

* Optional property activityColor was added

**SttEngineEntity** (1 change)

* Optional property replacedBy was added

**JourneyViewChartMetric** (1 change)

* Optional property attribute was added

**V3SourceLastSynchronization** (1 change)

* Enum value Throttled was added to property status

**V3Synchronization** (1 change)

* Enum value Throttled was added to property status

**ApprovalNamespace** (2 changes)

* Enum value admin.notice was added to property namespace
* Enum value sda was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value admin.notice was added to property namespace
* Enum value sda was added to property namespace

**StatusChange** (2 changes)

* Enum value admin.notice was added to property namespace
* Enum value sda was added to property namespace

**SurveyForm** (2 changes)

* Optional property division was added
* Optional property redacted was added

**EvaluationFormResponse** (1 change)

* Optional property division was added

**EvaluationFormSearchResponse** (1 change)

* Optional property division was added

**EvaluationSearchAggregationDTO** (2 changes)

* Enum value agentId was added to property field
* Enum value evaluatorId was added to property field

**EvaluationSearchSubAggregationDTO** (2 changes)

* Enum value agentId was added to property field
* Enum value evaluatorId was added to property field

**EvaluationFormDivisionView** (1 change)

* Model was added

**EvaluationFormDivisionViewListing** (1 change)

* Model was added

**SurveyFormDivisionView** (1 change)

* Model was added

**SurveyFormDivisionViewListing** (1 change)

* Model was added

**LibraryDivisionView** (1 change)

* Model was added

**LibraryDivisionViewEntityListing** (1 change)

* Model was added

**ResponseDivisionView** (1 change)

* Model was added

**DomainEntityListingResponseDivisionView** (1 change)

* Model was added

**ResponseDivisionViewQueryResults** (1 change)

* Model was added

**RoutingSkill** (1 change)

* Optional property division was added

**SocialMediaAsyncAggregationQuery** (1 change)

* Enum value postType was added to property groupBy

**SocialMediaQueryPredicate** (1 change)

* Enum value postType was added to property dimension

**BusinessUnitActivityCode** (1 change)

* Optional property style was added

**CreateActivityCodeRequest** (1 change)

* Optional property style was added

**UpdateActivityCodeRequest** (1 change)

* Optional property style was added

**BulkUpdateActivityCodeResponse** (1 change)

* Model was added

**BulkUpdateActivityCodeRequest** (1 change)

* Model was added

**BulkUpdateActivityCodeRequestItem** (1 change)

* Model was added

**ActivityPlanJobResponse** (3 changes)

* Enum value MaximizeOccurrence was added to property type
* Enum value CreateSession was added to property type
* Enum value EditSession was added to property type

**AvailableTimeOffRequest** (1 change)

* Optional property supportedGranularities was added

**DecisionMetricsData** (1 change)

* Model was added

**DecisionMetricsResponse** (1 change)

* Model was added

**WfmEntityMetadata** (1 change)

* Model was added

**DecisionMetricsJobReference** (1 change)

* Model was added

**DecisionMetricsUpdateError** (1 change)

* Model was added

**DecisionMetricsUpdateJobResponse** (1 change)

* Model was added

**DecisionMetricsUpdateJobRequest** (1 change)

* Model was added

**DecisionMetricsUploadData** (1 change)

* Model was added

**DecisionMetricsUploadResponse** (1 change)

* Model was added

**DecisionMetricsUploadSchema** (1 change)

* Model was added

**ValueWrapperInteger** (1 change)

* Model was added

**TimeOffRequestListItem** (1 change)

* Model was added

**BuTimeOffLimitResponse** (2 changes)

* Optional property granularity was added
* Optional property fullDayTimeOffStartTime was added

**BuCreateTimeOffLimitRequest** (2 changes)

* Optional property granularity was added
* Optional property fullDayTimeOffStartTime was added

**BuTimeOffLimitRange** (1 change)

* Optional property limitMinutesPerFifteenMinutes was added

**BuTimeOffLimitValues** (1 change)

* Model was added

**BuTimeOffLimitValuesForGranularityResponse** (1 change)

* Model was added

**TimeOffLimitValues** (1 change)

* Model was added

**QueryTimeOffLimitValuesForGranularityRequest** (1 change)

* Model was added

**BuConvertTimeOffLimitGranularityJobProgress** (1 change)

* Model was added

**BuConvertTimeOffLimitGranularityJobResponse** (1 change)

* Model was added

**BuConvertTimeOffLimitGranularityJobRequest** (1 change)

* Model was added

**BuConvertTimeOffGranularityLimitJobListing** (1 change)

* Model was added

**BuImportTimeOffLimitValue** (1 change)

* Model was added

**BuImportTimeOffLimitValuesSchema** (1 change)

* Model was added

**BuImportTimeOffLimitValuesUploadResponse** (1 change)

* Model was added

**BuTimeOffLimitValuesImportUploadUrlRequest** (1 change)

* Model was added

**BuImportTimeOffLimitValuesRequest** (1 change)

* Model was added

**WorkitemLanguageReference** (1 change)

* Model was added

**WorkitemRoutingSkillReference** (1 change)

* Model was added

**BillingCharge** (1 change)

* Optional property name was added

**CreateJoinVideoResponse** (1 change)

* Model was added


# Point Changes (8 changes)

**POST /api/v2/businessrules/decisiontables/{tableId}/execute** (1 change)

* Description was changed

**POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute** (1 change)

* Description was changed

**PATCH /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}** (2 changes)

* Description was changed
* Response 200 was changed from successful operation to Import job cancelled, or already cancelled (idempotent no-op)

**GET /api/v2/casemanagement/cases/{caseId}** (1 change)

* Description was changed for parameter expands

**GET /api/v2/casemanagement/cases/references/{referenceId}** (1 change)

* Description was changed for parameter expands

**GET /api/v2/presence/definitions** (1 change)

* Summary was changed

**GET /api/v2/flows** (1 change)

* Description was changed for parameter id
