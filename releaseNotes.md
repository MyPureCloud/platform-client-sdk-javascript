Platform API version: 4480


# Major Changes (11 changes)

**DELETE /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Has been deprecated

**PATCH /api/v2/routing/queues/{queueId}/users/{memberId}** (1 change)

* Has been deprecated

**GET /api/v2/notifications/availabletopics** (1 change)

* Parameter includePreview was added

**GET /api/v2/routing/queues/{queueId}/users** (1 change)

* Has been deprecated

**POST /api/v2/routing/queues/{queueId}/users** (1 change)

* Has been deprecated

**PATCH /api/v2/routing/queues/{queueId}/users** (1 change)

* Has been deprecated

**Edge** (2 changes)

* callDrainingState has been made readonly
* conversationCount has been made readonly

**EntityListing** (1 change)

* Property entities was changed from object[] to DataTableImportJob[]

**TranscriptAggregateQueryPredicate** (1 change)

* Enum value topic was removed from property dimension

**TranscriptAggregationQuery** (1 change)

* Enum value topic was removed from property groupBy


# Minor Changes (141 changes)

**POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate** (1 change)

* Response 502 was added

**/api/v2/uploads/workforcemanagement/historicaldata/json** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/uploads/workforcemanagement/historicaldata/csv** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/actiontemplates/{actionTemplateId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/uploads/recordings** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/journey/outcomes/{outcomeId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/routing/email/domains/{domainId}/validate** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/telephony/providers/edges/didpools/dids** (2 changes)

* Path was added
* Operation GET was added

**GET /api/v2/scim/v2/users/{userId}** (1 change)

* Response 409 was added

**/api/v2/routing/queues/{queueId}/members** (4 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PATCH was added

**PUT /api/v2/outbound/schedules/sequences/{sequenceId}** (1 change)

* Response 409 was added

**POST /api/v2/integrations/actions/{actionId}/execute** (1 change)

* Response 405 was added

**/api/v2/routing/queues/{queueId}/members/{memberId}** (3 changes)

* Path was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/actiontemplates** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/actionmaps/{actionMapId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/journey/actionmaps** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/journey/outcomes** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**OrphanRecording** (2 changes)

* Enum value PUREENGAGE was added to property providerType
* Enum value PURECONNECT was added to property providerType

**AgentActivity** (1 change)

* Optional property numEvaluationsWithoutViewPermission was added

**AgentEvaluatorActivity** (1 change)

* Optional property numEvaluationsWithoutViewPermission was added

**ReportingExportJobResponse** (4 changes)

* Enum value AGENT_PERFORMANCE_ME_VIEW was added to property viewType
* Enum value AGENT_STATUS_ME_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_ME_VIEW was added to property viewType
* Enum value NOT_AUTHORIZED_TO_VIEW_EXPORT was added to property exportErrorMessagesType

**ViewFilter** (6 changes)

* Optional property developmentRoleList was added
* Optional property developmentTypeList was added
* Optional property developmentStatusList was added
* Optional property developmentModuleIds was added
* Optional property developmentKeyType was added
* Optional property developmentActivityOverdue was added

**ConversationDetailQueryPredicate** (2 changes)

* Enum value tCallback was added to property metric
* Enum value tCallbackComplete was added to property metric

**ReportingExportJobRequest** (3 changes)

* Enum value AGENT_PERFORMANCE_ME_VIEW was added to property viewType
* Enum value AGENT_STATUS_ME_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_ME_VIEW was added to property viewType

**ActionTemplate** (1 change)

* Model was added

**CallToAction** (1 change)

* Model was added

**CloseButtonStyleProperties** (1 change)

* Model was added

**ContentOffer** (1 change)

* Model was added

**ContentOfferStyleProperties** (1 change)

* Model was added

**ContentOfferStylingConfiguration** (1 change)

* Model was added

**ContentPositionProperties** (1 change)

* Model was added

**CtaButtonStyleProperties** (1 change)

* Model was added

**IntegrationAction** (1 change)

* Model was added

**IntegrationActionFields** (1 change)

* Model was added

**RequestMapping** (1 change)

* Model was added

**TextStyleProperties** (1 change)

* Model was added

**PatchActionTemplate** (1 change)

* Model was added

**PatchCallToAction** (1 change)

* Model was added

**PatchCloseButtonStyleProperties** (1 change)

* Model was added

**PatchContentOffer** (1 change)

* Model was added

**PatchContentOfferStyleProperties** (1 change)

* Model was added

**PatchContentOfferStylingConfiguration** (1 change)

* Model was added

**PatchContentPositionProperties** (1 change)

* Model was added

**PatchCtaButtonStyleProperties** (1 change)

* Model was added

**PatchIntegrationAction** (1 change)

* Model was added

**PatchIntegrationActionFields** (1 change)

* Model was added

**PatchTextStyleProperties** (1 change)

* Model was added

**OAuthClient** (1 change)

* Enum value CODE_PKCE was added to property authorizedGrantType

**Outcome** (1 change)

* Model was added

**GenesysBotConnector** (1 change)

* Model was added

**PostTextRequest** (1 change)

* Optional property genesysBotConnector was added

**ActionMap** (1 change)

* Model was added

**ActionMapAction** (1 change)

* Model was added

**ActionMapActionTemplate** (1 change)

* Model was added

**ActionMapScheduleGroup** (1 change)

* Model was added

**ActionMapScheduleGroups** (1 change)

* Model was added

**ActionProperties** (1 change)

* Model was added

**ActionSurvey** (1 change)

* Model was added

**Activation** (1 change)

* Model was added

**ArchitectFlowFields** (1 change)

* Model was added

**EventCondition** (1 change)

* Model was added

**JourneySurveyQuestion** (1 change)

* Model was added

**OutcomeProbabilityCondition** (1 change)

* Model was added

**UrlCondition** (1 change)

* Model was added

**AnalyticsConversationSegment** (1 change)

* Enum value callback was added to property segmentType

**AvailableTopic** (3 changes)

* Optional property requiresDivisionPermissions was added
* Optional property enforced was added
* Optional property visibility was added

**PatchOutcome** (1 change)

* Model was added

**OAuthClientRequest** (1 change)

* Enum value CODE_PKCE was added to property authorizedGrantType

**DIDNumber** (1 change)

* Model was added

**DIDNumberEntityListing** (1 change)

* Model was added

**EntityListing** (4 changes)

* Optional property pageSize was added
* Optional property pageNumber was added
* Optional property total was added
* Optional property pageCount was added

**OrgOAuthClient** (1 change)

* Enum value CODE_PKCE was added to property authorizedGrantType

**ReportingExportMetadataJobResponse** (3 changes)

* Enum value AGENT_PERFORMANCE_ME_VIEW was added to property viewType
* Enum value AGENT_STATUS_ME_VIEW was added to property viewType
* Enum value AGENT_EVALUATION_ME_VIEW was added to property viewType

**RecordingSettings** (1 change)

* Optional property maxConfigurableScreenRecordingStreams was added

**ActionTemplateListing** (1 change)

* Model was added

**PatchAction** (1 change)

* Model was added

**PatchActionMap** (1 change)

* Model was added

**PatchActionMapScheduleGroups** (1 change)

* Model was added

**PatchActionProperties** (1 change)

* Model was added

**PatchActionSurvey** (1 change)

* Model was added

**PatchSurveyQuestion** (1 change)

* Model was added

**ConversationAggregationQuery** (2 changes)

* Enum value tCallback was added to property metrics
* Enum value tCallbackComplete was added to property metrics

**ConversationAggregationView** (2 changes)

* Enum value tCallback was added to property target
* Enum value tCallbackComplete was added to property target

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value SpeechAndTextAnalytics was added to property serviceName

**AuditLogMessage** (3 changes)

* Enum value SpeechAndTextAnalytics was added to property serviceName
* Enum value TranscriptionSettings was added to property entityType
* Enum value SpeechTextAnalyticsSettings was added to property entityType

**AuditQueryEntity** (2 changes)

* Enum value TranscriptionSettings was added to property name
* Enum value SpeechTextAnalyticsSettings was added to property name

**AuditQueryService** (1 change)

* Enum value SpeechAndTextAnalytics was added to property name

**AuditQueryRequest** (1 change)

* Enum value SpeechAndTextAnalytics was added to property serviceName

**AuditRealtimeQueryRequest** (1 change)

* Enum value SpeechAndTextAnalytics was added to property serviceName

**ActionMapListing** (1 change)

* Model was added

**EvaluatorActivity** (1 change)

* Optional property numEvaluationsWithoutViewPermission was added

**OutcomeListing** (1 change)

* Model was added


# Point Changes (1 change)

**POST /api/v2/oauth/clients** (1 change)

* Description was changed
