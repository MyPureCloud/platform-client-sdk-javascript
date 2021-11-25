Platform API version: 5211


# Major Changes (21 changes)

**/api/v2/analytics/reporting/settings** (1 change)

* Path /api/v2/analytics/reporting/settings was removed

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}** (1 change)

* Path /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId} was removed

**/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}/values/{contextValueId}** (1 change)

* Path /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/contexts/{contextId}/values/{contextValueId} was removed

**POST /api/v2/uploads/workforcemanagement/historicaldata/json** (1 change)

* Has been deprecated

**GET /api/v2/routing/queues/divisionviews/all** (1 change)

* Parameter sortBy was removed

**GET /api/v2/speechandtextanalytics/dialects** (1 change)

* Has been deprecated

**AnalyticsReportingSettings** (1 change)

* Model AnalyticsReportingSettings was removed

**KnowledgeContextResponse** (1 change)

* Model KnowledgeContextResponse was removed

**KnowledgeContextValueResponse** (1 change)

* Model KnowledgeContextValueResponse was removed

**KnowledgeContextRequest** (1 change)

* Model KnowledgeContextRequest was removed

**KnowledgeContextValueRequest** (1 change)

* Model KnowledgeContextValueRequest was removed

**Metric** (1 change)

* Property dateCreated was changed from integer to string

**Metrics** (1 change)

* Property dateCreated was changed from integer to string

**AchievedOutcome** (1 change)

* Property outcome was removed

**AssignedSegment** (1 change)

* Property segment was removed

**OAuthClient** (2 changes)

* Enum value SAML2BEARER was removed from property authorizedGrantType
* Enum value CLIENT_CREDENTIALS was removed from property authorizedGrantType

**OAuthClientRequest** (2 changes)

* Enum value SAML2BEARER was removed from property authorizedGrantType
* Enum value CLIENT_CREDENTIALS was removed from property authorizedGrantType

**OrgOAuthClient** (2 changes)

* Enum value SAML2BEARER was removed from property authorizedGrantType
* Enum value CLIENT_CREDENTIALS was removed from property authorizedGrantType


# Minor Changes (121 changes)

**/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/orgauthorization/trustees/default** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers/{trusteeUserId}** (2 changes)

* Path was added
* Operation DELETE was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values** (2 changes)

* Path was added
* Operation PUT was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeofflimits** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/timeofflimits/available/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}/waitlistpositions** (2 changes)

* Path was added
* Operation GET was added

**ViewFilter** (1 change)

* Enum value openAction was added to property journeyActionMapTypes

**ReportingExportJobResponse** (2 changes)

* Enum value ALERT_RULES_VIEW was added to property viewType
* Enum value CONFIGURE_ALERT_RULE_VIEW was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value ALERT_RULES_VIEW was added to property viewType
* Enum value CONFIGURE_ALERT_RULE_VIEW was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value ALERT_RULES_VIEW was added to property viewType
* Enum value CONFIGURE_ALERT_RULE_VIEW was added to property viewType

**AuditQueryExecutionStatusResponse** (1 change)

* Enum value DynamicSchema was added to property serviceName

**AuditQueryRequest** (1 change)

* Enum value DynamicSchema was added to property serviceName

**AuditLogMessage** (3 changes)

* Enum value DynamicSchema was added to property serviceName
* Enum value SoftDelete was added to property action
* Enum value DynamicSchema was added to property entityType

**AuditRealtimeQueryRequest** (1 change)

* Enum value DynamicSchema was added to property serviceName

**AuditQueryEntity** (2 changes)

* Enum value DynamicSchema was added to property name
* Enum value SoftDelete was added to property actions

**AuditQueryService** (1 change)

* Enum value DynamicSchema was added to property name

**Queue** (1 change)

* Optional property userMemberCount was added

**DataSchema** (1 change)

* Enum value OPEN_ACTION was added to property appliesTo

**Message** (1 change)

* Enum value instagram was added to property type

**MessageMediaParticipant** (1 change)

* Enum value instagram was added to property type

**OpenMessagingChannel** (1 change)

* Optional property metadata was added

**SendAgentlessOutboundMessageResponse** (1 change)

* Optional property useExistingActiveConversation was added

**SendAgentlessOutboundMessageRequest** (1 change)

* Optional property useExistingActiveConversation was added

**ActionMapAction** (2 changes)

* Enum value openAction was added to property mediaType
* Optional property openActionFields was added

**OpenActionFields** (1 change)

* Model was added

**PatchAction** (2 changes)

* Enum value openAction was added to property mediaType
* Optional property openActionFields was added

**ActionTemplate** (1 change)

* Enum value openAction was added to property mediaType

**PatchActionTemplate** (1 change)

* Enum value openAction was added to property mediaType

**AssociatedValueField** (1 change)

* Model was added

**Outcome** (1 change)

* Optional property associatedValueField was added

**PatchOutcome** (1 change)

* Optional property associatedValueField was added

**DraftTopics** (1 change)

* Model was added

**Miner** (1 change)

* Enum value es-us was added to property language

**DraftRequest** (1 change)

* Optional property topic was added

**LogCaptureUserConfiguration** (1 change)

* dateExpired is no longer readonly

**OAuthClient** (2 changes)

* Enum value SAML2-BEARER was added to property authorizedGrantType
* Enum value CLIENT-CREDENTIALS was added to property authorizedGrantType

**OAuthClientRequest** (2 changes)

* Enum value SAML2-BEARER was added to property authorizedGrantType
* Enum value CLIENT-CREDENTIALS was added to property authorizedGrantType

**ClonedUser** (1 change)

* Model was added

**ClonedUserEntityListing** (1 change)

* Model was added

**ButtonResponse** (1 change)

* Optional property messageType was added

**GenericTemplate** (1 change)

* Model was added

**RecordingButtonComponent** (1 change)

* Model was added

**RecordingContentActions** (1 change)

* Model was added

**QueueRequest** (1 change)

* Optional property userMemberCount was added

**UserQueue** (1 change)

* Optional property userMemberCount was added

**CreateQueueRequest** (1 change)

* Optional property userMemberCount was added

**ConversationMetrics** (1 change)

* Optional property sentimentTrendClass was added

**OrgOAuthClient** (2 changes)

* Enum value SAML2-BEARER was added to property authorizedGrantType
* Enum value CLIENT-CREDENTIALS was added to property authorizedGrantType

**CoachingSlotsResponse** (1 change)

* Optional property wfmScheduleActivities was added

**FullDayTimeOffMarker** (1 change)

* Model was added

**ScheduleActivity** (1 change)

* Model was added

**WfmScheduleActivity** (1 change)

* Model was added

**CoachingSlotsRequest** (1 change)

* Optional property interruptibleAppointmentIds was added

**TimeOffLimit** (1 change)

* Model was added

**UpdateTimeOffLimitRequest** (1 change)

* Model was added

**SetTimeOffLimitValuesRequest** (1 change)

* Model was added

**TimeOffLimitRange** (1 change)

* Model was added

**QueryTimeOffLimitValuesResponse** (1 change)

* Model was added

**TimeOffLimitReference** (1 change)

* Model was added

**TimeOffLimitValueRange** (1 change)

* Model was added

**LocalDateRange** (1 change)

* Model was added

**QueryTimeOffLimitValuesRequest** (1 change)

* Model was added

**CreateTimeOffLimitRequest** (1 change)

* Model was added

**TimeOffLimitListing** (1 change)

* Model was added

**TimeOffPlan** (1 change)

* Model was added

**CreateTimeOffPlanRequest** (1 change)

* Model was added

**TimeOffPlanListing** (1 change)

* Model was added

**SetWrapperString** (1 change)

* Model was added

**UpdateTimeOffPlanRequest** (1 change)

* Model was added

**TimeOffRequestReference** (1 change)

* Model was added

**WaitlistPosition** (1 change)

* Model was added

**WaitlistPositionListing** (1 change)

* Model was added

**QueryWaitlistPositionsRequest** (1 change)

* Model was added

**UserTimeOffRequestReference** (1 change)

* Model was added

**AvailableTimeOffRange** (1 change)

* Model was added

**AvailableTimeOffResponse** (1 change)

* Model was added

**AvailableTimeOffRequest** (1 change)

* Model was added


# Point Changes (5 changes)

**PATCH /api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}** (1 change)

* Summary was changed

**POST /api/v2/languageunderstanding/miners/{minerId}/execute** (1 change)

* Summary was changed

**GET /api/v2/quality/evaluations/query** (1 change)

* Description was changed

**GET /api/v2/routing/queues/divisionviews/all** (1 change)

* Summary was changed

**GET /api/v2/speechandtextanalytics/dialects** (1 change)

* Description was changed
