Platform API version: 8525




# Major Changes (5 changes)

**POST /api/v2/conversations/messages/{integrationId}/inbound/open/message** (1 change)

* Parameter prefetchConversationId was added

**GET /api/v2/users/{userId}/station** (1 change)

* Response 424 was removed

**PUT /api/v2/users/{userId}/station/associatedstation/{stationId}** (1 change)

* Response 424 was removed

**ConversationDivisionMembership** (1 change)

* Property entities was changed from DomainEntityRef[] to DivisionEntityRef[]

**CampaignRuleExecutionSettings** (1 change)

* Required property frequency was added


# Minor Changes (102 changes)

**/api/v2/journey/views/{viewId}/versions/{versionId}** (1 change)

* Operation put was added. Summary: Update a Journey View by ID and version

**/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}/versions/{chartVersion}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}** (1 change)

* Operation patch was added. Summary: Update the job for a journey view version. Only the status can be changed and only to Cancelled

**/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}/results/charts/{chartId}** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/knowledge/documentuploads** (1 change)

* Response 409 was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/bulk** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}** (4 changes)

* Path was added
* Operation GET was added
* Operation DELETE was added
* Operation PATCH was added

**/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**ExternalContactsSettings** (1 change)

* Model was added

**Group** (1 change)

* Optional property callsEnabled was added

**ConversationDetailQueryPredicate** (1 change)

* Enum value originatingSocialMediaPublic was added to property dimension

**SocialKeyword** (1 change)

* Model was added

**ViewFilter** (12 changes)

* Optional property socialCountries was added
* Optional property socialLanguages was added
* Optional property socialChannels was added
* Optional property socialSentimentCategory was added
* Optional property socialTopicIds was added
* Optional property socialIngestionRuleIds was added
* Optional property socialConversationCreated was added
* Optional property socialContentType was added
* Optional property socialKeywords was added
* Optional property socialPostEscalated was added
* Optional property socialClassifications was added
* Optional property filterUsersByManagerIds was added

**ReportingExportJobResponse** (1 change)

* Enum value BAD_REQUEST_SCHEDULED_RUN was added to property exportErrorMessagesType

**IdentityResolutionQueueConfig** (1 change)

* Model was added

**DivisionEntityRef** (1 change)

* Model was added

**Participant** (1 change)

* Optional property externalContactInitialDivisionId was added

**ConversationEnrichmentSentimentV2** (1 change)

* Enum value Unknown was added to property tag

**ConversationMessagingFromRecipient** (1 change)

* Optional property externalContactId was added

**ConversationMessagingToRecipient** (1 change)

* Optional property externalContactId was added

**OpenMessageNormalizedMessage** (1 change)

* Optional property conversationId was added

**ParticipantBasic** (1 change)

* Optional property externalContactInitialDivisionId was added

**CampaignRule** (3 changes)

* Optional property campaignRuleProcessing was added
* Optional property conditionGroups was added
* Optional property executionSettings was added

**CampaignRuleExecutionSettings** (1 change)

* Optional property timeZoneId was added

**CampaignStats** (3 changes)

* Optional property rightPartyContactsCount was added
* Optional property validAttempts was added
* Optional property businessCategoryMetrics was added

**GroupUpdate** (1 change)

* Optional property callsEnabled was added

**GroupCreate** (1 change)

* Optional property callsEnabled was added

**JourneyView** (1 change)

* Optional property charts was added

**JourneyViewJob** (1 change)

* Enum value Cancelled was added to property status

**IntentDefinition** (1 change)

* Optional property description was added

**NluUtterance** (1 change)

* Optional property source was added

**NamespaceDocs** (1 change)

* Optional property name was added

**FreeTrialNamespace** (1 change)

* Optional property name was added

**MessagingRecipient** (1 change)

* Optional property externalContactId was added

**IpAddressRange** (2 changes)

* Enum value byot-stt was added to property service
* Enum value bot-connector was added to property service

**TrustGroup** (1 change)

* Optional property callsEnabled was added

**Annotation** (1 change)

* Enum value Pause was added to property reason

**InfrastructureascodeJob** (3 changes)

* Enum value InternalError was added to property status
* Enum value RollbackFailed was added to property status
* Enum value RollbackComplete was added to property status

**UnifiedCommunicationsIntegration** (1 change)

* Optional property includeBadge was added

**WebDeploymentConfigurationVersionEntityListing** (2 changes)

* Optional property nextUri was added
* Optional property previousUri was added

**ExpandableWebDeploymentEntityListing** (2 changes)

* Optional property nextUri was added
* Optional property previousUri was added

**AgentWorkPlans** (1 change)

* Model was added

**AgentsWorkPlansResponse** (1 change)

* Model was added

**MuAgentsWorkPlansResult** (1 change)

* Model was added

**GetAgentsWorkPlansRequest** (1 change)

* Model was added

**UpdateMuAgentWorkPlanFailureResponse** (1 change)

* Model was added

**UpdateMuAgentWorkPlansBatchResponse** (1 change)

* Model was added

**UpdateMuAgentWorkPlanRequest** (1 change)

* Model was added

**UpdateMuAgentWorkPlansBatchRequest** (1 change)

* Model was added

**WorkPlanOverrideListWrapperWorkPlanOverrideRequest** (1 change)

* Model was added

**WorkPlanOverrideRequest** (1 change)

* Model was added

**UserNextActivityReminder** (1 change)

* Model was added

**WorkitemOnAttributeChangeCondition** (1 change)

* Model was added

**WorkitemOnAttributeChangeRule** (1 change)

* Model was added

**WorkitemRuleAction** (1 change)

* Model was added

**WorkitemOnAttributeChangeConditionUpdate** (1 change)

* Model was added

**WorkitemOnAttributeChangeRuleUpdate** (1 change)

* Model was added

**WorkitemOnAttributeChangeRuleCreate** (1 change)

* Model was added

**WorkitemOnAttributeChangeRuleListing** (1 change)

* Model was added

**WorkitemOnCreateRule** (1 change)

* Model was added

**WorkitemOnCreateRuleUpdate** (1 change)

* Model was added

**WorkitemOnCreateRuleCreate** (1 change)

* Model was added

**WorkitemOnCreateRuleListing** (1 change)

* Model was added


# Point Changes (1 change)

**GET /api/v2/webdeployments/configurations** (1 change)

* Description was changed for parameter showOnlyPublished
