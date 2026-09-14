Platform API version: 10793




# Major Changes (4 changes)

**GET /api/v2/outbound/contactlisttemplates** (1 change)

* Parameter timeZone was added

**GET /api/v2/outbound/contactlists** (2 changes)

* Parameter timeZone was added
* Parameter dateExpiration was added

**GET /api/v2/architect/prompts** (1 change)

* Parameter divisionId was added


# Minor Changes (89 changes)

**/api/v2/outbound/contactlists/bulk/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/users/activity** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/agents/{agentId}/schedulingpreferences/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulingpreferences/settings** (3 changes)

* Path was added
* Operation GET was added
* Operation PATCH was added

**/api/v2/workforcemanagement/schedulingpreferences** (2 changes)

* Path was added
* Operation PATCH was added

**/api/v2/workforcemanagement/schedulingpreferences/query** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/workforcemanagement/schedulingpreferences/settings** (2 changes)

* Path was added
* Operation GET was added

**CreateVerifierResponse** (1 change)

* Optional property encodedQuickResponseCode was added

**AgenticVirtualAgentVersionDefinition** (1 change)

* Optional property model was added

**SummaryAggregateQueryPredicate** (1 change)

* Enum value triggerType was added to property dimension

**SummaryAsyncAggregationQuery** (1 change)

* Enum value triggerType was added to property groupBy

**SummaryAggregationQuery** (1 change)

* Enum value triggerType was added to property groupBy

**KnowledgeBaseReference** (1 change)

* Enum value ar-SA was added to property languageCode

**KnowledgeSettingDynamicFilter** (1 change)

* Model was added

**EmailMediaSettings** (1 change)

* Optional property allOutboundEmailAddresses was added

**QueueFullReference** (1 change)

* Optional property defaultMediaLanguage was added

**Queue** (1 change)

* Optional property defaultMediaLanguage was added

**SurveyAssignment** (1 change)

* Optional property useThreadingTimelineForSendTime was added

**AgentChecklistResponse** (1 change)

* Optional property preview was added

**ChecklistFinalizePayload** (1 change)

* Optional property preview was added

**ChecklistActivationPayload** (1 change)

* Optional property preview was added

**ChecklistInferenceJobPayload** (1 change)

* Optional property preview was added

**ChecklistInferenceJobResponse** (1 change)

* Optional property preview was added

**DialerContact** (3 changes)

* Optional property retentionType was added
* Optional property retentionDays was added
* Optional property dateExpiration was added

**ContactList** (4 changes)

* Optional property retentionType was added
* Optional property retentionDays was added
* Optional property dateExpiration was added
* Optional property timeZone was added

**ContactListTemplate** (3 changes)

* Optional property retentionType was added
* Optional property retentionDays was added
* Optional property timeZone was added

**BulkEntityErrorContactList** (1 change)

* Model was added

**BulkResponseResultContactListContactListBulkEntityErrorContactList** (1 change)

* Model was added

**ContactListsBulkEditResponse** (1 change)

* Model was added

**ContactListsBulkEditRequest** (1 change)

* Model was added

**ContactListUploadUrlRequest** (3 changes)

* Optional property retentionTypeColumn was added
* Optional property retentionDaysColumn was added
* Optional property retentionDateExpirationColumn was added

**WritableDialerContact** (3 changes)

* Optional property retentionType was added
* Optional property retentionDays was added
* Optional property dateExpiration was added

**EventMessage** (2 changes)

* Enum value CAMPAIGN_RULE_QUEUE_ACTION_THROTTLED was added to property code
* Enum value CAMPAIGN_RULE_QUEUE_NOT_FOUND was added to property code

**OutboundSettings** (3 changes)

* Optional property contactListDefaultRetentionType was added
* Optional property contactListDefaultRetentionDays was added
* Optional property timeZone was added

**ConversationAttribute** (1 change)

* Model was added

**ConversationAttributeSchema** (1 change)

* Model was added

**Variable** (1 change)

* Optional property customConversationAttributes was added

**KnowledgeBase** (1 change)

* Enum value ar-SA was added to property coreLanguage

**KnowledgeBaseCreateRequest** (1 change)

* Enum value ar-SA was added to property coreLanguage

**KnowledgeDocumentsAnswerFilter** (1 change)

* Enum value ar-SA was added to property language

**OperationalEvent** (2 changes)

* Optional property dateModified was added
* Optional property entityModifiedBy was added

**QueueRequest** (1 change)

* Optional property defaultMediaLanguage was added

**UserQueue** (1 change)

* Optional property defaultMediaLanguage was added

**CreateQueueRequest** (1 change)

* Optional property defaultMediaLanguage was added

**CreateRoutingSkill** (1 change)

* Optional property divisionId was added

**TopicsDefinitionsProgramsMappingsEntityListing** (1 change)

* Optional property total was added

**ProgramsEntityListing** (1 change)

* Optional property total was added

**UnpublishedProgramsEntityListing** (1 change)

* Optional property total was added

**Prompt** (1 change)

* Optional property division was added

**RegisterArchitectJobRequest** (1 change)

* Optional property createStubs was added

**UserActivity** (1 change)

* Model was added

**UserActivityAdherencePresence** (1 change)

* Model was added

**UserActivityListing** (1 change)

* Model was added

**UserActivityOutOfOffice** (1 change)

* Model was added

**UserActivityPresenceDefinition** (1 change)

* Model was added

**UserActivityRoutingStatus** (1 change)

* Model was added

**UsersActivityRequest** (1 change)

* Model was added

**TimeOffRequestQueryBody** (1 change)

* Optional property teamIds was added

**WorkitemQueryJobSort** (2 changes)

* Enum value customFields was added to property name
* Optional property customField was added

**AgentSchedulingPreference** (1 change)

* Model was added

**AgentSchedulingPreferenceListing** (1 change)

* Model was added

**QueryAgentSchedulingPreferencesRequest** (1 change)

* Model was added

**BusinessUnitSchedulingPreferencesSettingsResponse** (1 change)

* Model was added

**UpdateBusinessUnitSchedulingPreferencesSettingsRequest** (1 change)

* Model was added

**UpdateAgentSchedulingPreferencesRequest** (1 change)

* Model was added


# Point Changes (7 changes)

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup/{integrationId}** (1 change)

* Description was changed

**POST /api/v2/conversations/messaging/integrations/whatsapp/embeddedsignup** (1 change)

* Description was changed

**GET /api/v2/users/{userId}/presences/purecloud** (1 change)

* Description was changed for parameter userId

**PATCH /api/v2/users/{userId}/presences/purecloud** (1 change)

* Description was changed for parameter userId

**GET /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Description was changed for parameter userId

**PATCH /api/v2/users/{userId}/presences/{sourceId}** (1 change)

* Description was changed for parameter userId

**GET /api/v2/billing/contracts** (1 change)

* Description was changed for parameter pageSize
