Platform API version: 8610




# Major Changes (12 changes)

**POST /api/v2/integrations/actions/{actionId}/draft/test** (1 change)

* Parameter flatten was added

**GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}** (1 change)

* Parameter flatten was added

**POST /api/v2/integrations/actions/{actionId}/execute** (1 change)

* Parameter flatten was added

**POST /api/v2/integrations/actions/{actionId}/test** (1 change)

* Parameter flatten was added

**GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}** (1 change)

* Parameter flatten was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations/{documentVariationId}** (1 change)

* Parameter expand was added

**GET /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/documents/{documentId}/variations** (1 change)

* Parameter expand was added

**MessagingTemplateRequest** (1 change)

* Model MessagingTemplateRequest was removed

**AdditionalMessage** (1 change)

* Property messagingTemplate was changed from MessagingTemplateRequest to SendMessagingTemplateRequest

**SendAgentlessOutboundMessageResponse** (1 change)

* Property messagingTemplate was changed from MessagingTemplateRequest to SendMessagingTemplateRequest

**SendAgentlessOutboundMessageRequest** (1 change)

* Property messagingTemplate was changed from MessagingTemplateRequest to SendMessagingTemplateRequest

**ContentFileResponse** (1 change)

* Required property contentUrl was added


# Minor Changes (45 changes)

**/api/v2/journey/views/schedules** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/journey/views/{viewId}/schedules** (5 changes)

* Path was added
* Operation GET was added
* Operation POST was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/telephony/providers/edges/sites/search** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**EmailCommunicationSentMessageEvent** (1 change)

* Model was added

**ReportingTurn** (1 change)

* Enum value PartialCollection was added to property askActionResult

**ViewFilter** (2 changes)

* Optional property workitemsStatuses was added
* Optional property slideshowIds was added

**WorkitemStatusFilter** (1 change)

* Model was added

**ReportingExportJobResponse** (2 changes)

* Enum value DASHBOARD_SLIDESHOWS was added to property viewType
* Enum value DASHBOARD_SLIDESHOWS_DETAIL was added to property viewType

**ReportingExportMetadataJobResponse** (2 changes)

* Enum value DASHBOARD_SLIDESHOWS was added to property viewType
* Enum value DASHBOARD_SLIDESHOWS_DETAIL was added to property viewType

**ReportingExportJobRequest** (2 changes)

* Enum value DASHBOARD_SLIDESHOWS was added to property viewType
* Enum value DASHBOARD_SLIDESHOWS_DETAIL was added to property viewType

**Limit** (2 changes)

* Enum value business.rules was added to property namespace
* Enum value gamification was added to property namespace

**ExternalContact** (1 change)

* Optional property externalIds was added

**InstagramId** (1 change)

* Optional property handle was added

**Session** (1 change)

* Optional property lastScreen was added

**Campaign** (1 change)

* Optional property agentOwnedColumn was added

**ConversationNotificationTemplateButton** (1 change)

* Model was added

**SendMessagingTemplateRequest** (1 change)

* Model was added

**JourneyViewSchedule** (1 change)

* Model was added

**JourneyViewScheduleListing** (1 change)

* Model was added

**ApprovalNamespace** (2 changes)

* Enum value business.rules was added to property namespace
* Enum value gamification was added to property namespace

**LimitChangeRequestDetails** (2 changes)

* Enum value business.rules was added to property namespace
* Enum value gamification was added to property namespace

**StatusChange** (2 changes)

* Enum value business.rules was added to property namespace
* Enum value gamification was added to property namespace

**SitesSearchResponse** (1 change)

* Model was added

**SiteSearchCriteria** (1 change)

* Model was added

**SiteSearchRequest** (1 change)

* Model was added

**Dependency** (1 change)

* Enum value DECISIONTABLE was added to property type

**DependencyObject** (1 change)

* Enum value DECISIONTABLE was added to property type

**MonthlyPlanningPeriodSettings** (1 change)

* Model was added

**ValueWrapperMonthlyPlanningPeriodSettings** (1 change)

* Model was added

**WorkitemStatus** (1 change)

* Optional property autoTerminateWorkitem was added


# Point Changes (16 changes)

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Description was changed for parameter expand

**GET /api/v2/externalcontacts/contacts/{contactId}/unresolved** (1 change)

* Description was changed for parameter expand

**DELETE /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Summary was changed

**PATCH /api/v2/users/{userId}/routinglanguages/{languageId}** (1 change)

* Summary was changed

**GET /api/v2/users/{userId}/routinglanguages** (1 change)

* Summary was changed

**POST /api/v2/users/{userId}/routinglanguages** (1 change)

* Summary was changed

**PATCH /api/v2/users/{userId}/routinglanguages/bulk** (1 change)

* Summary was changed

**PUT /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Summary was changed

**DELETE /api/v2/users/{userId}/routingskills/{skillId}** (1 change)

* Summary was changed

**GET /api/v2/users/{userId}/routingskills** (1 change)

* Summary was changed

**POST /api/v2/users/{userId}/routingskills** (1 change)

* Summary was changed

**PUT /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Summary was changed

**PATCH /api/v2/users/{userId}/routingskills/bulk** (1 change)

* Summary was changed

**GET /api/v2/speechandtextanalytics/translations/languages/{languageId}/conversations/{conversationId}** (3 changes)

* Summary was changed
* Description was changed for parameter communicationId
* Description was changed for parameter recordingId
