Platform API version: 8117




# Major Changes (19 changes)

**/api/v2/conversations/messaging/integrations/line/{integrationId}** (1 change)

* Path /api/v2/conversations/messaging/integrations/line/{integrationId} was removed

**/api/v2/conversations/messaging/integrations/line** (1 change)

* Path /api/v2/conversations/messaging/integrations/line was removed

**/api/v2/conversations/messaging/integrations/twitter/{integrationId}** (1 change)

* Path /api/v2/conversations/messaging/integrations/twitter/{integrationId} was removed

**/api/v2/conversations/messaging/integrations/twitter** (1 change)

* Path /api/v2/conversations/messaging/integrations/twitter was removed

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships** (1 change)

* Parameter expand was changed from string to array

**GET /api/v2/externalcontacts/organizations/{externalOrganizationId}** (1 change)

* Parameter expand was changed from string to array

**GET /api/v2/externalcontacts/relationships/{relationshipId}** (1 change)

* Parameter expand was changed from string to array

**ConditionalGroupRoutingCondition** (1 change)

* Model ConditionalGroupRoutingCondition was removed

**LineIntegration** (1 change)

* Model LineIntegration was removed

**LineIntegrationRequest** (1 change)

* Model LineIntegrationRequest was removed

**LineIntegrationEntityListing** (1 change)

* Model LineIntegrationEntityListing was removed

**TwitterIntegration** (1 change)

* Model TwitterIntegration was removed

**TwitterIntegrationRequest** (1 change)

* Model TwitterIntegrationRequest was removed

**TwitterIntegrationEntityListing** (1 change)

* Model TwitterIntegrationEntityListing was removed

**GenericActionEvent** (1 change)

* Model GenericActionEvent was removed

**GenericEventAction** (1 change)

* Model GenericEventAction was removed

**PhoneStatus** (1 change)

* Property name was removed

**WfmUserEntityListing** (1 change)

* Property entities was changed from User[] to UserReference[]

**Event** (1 change)

* Property genericActionEvent was removed


# Minor Changes (45 changes)

**/api/v2/audits/query/realtime/related** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/campaigns/{campaignId}/linedistribution** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/update** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlists/{contactListId}/contacts/bulk/remove** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/contactlists/{contactListId}/contacts/search** (2 changes)

* Path was added
* Operation POST was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value videoPresent was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value videoPresent was added to property groupBy

**FlowAggregateQueryPredicate** (1 change)

* Enum value videoPresent was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value videoPresent was added to property groupBy

**ReportingTurn** (1 change)

* Optional property knowledgeBaseEvents was added

**ReportingTurnKnowledgeEvents** (1 change)

* Model was added

**ReportingTurnKnowledgeFeedbackEvent** (1 change)

* Model was added

**ReportingTurnKnowledgeSearchEvent** (1 change)

* Model was added

**ConversationProperties** (1 change)

* Optional property isScreenMonitored was added

**ViewFilter** (2 changes)

* Optional property isScreenRecorded was added
* Optional property screenMonitorUserIds was added

**AuditRealtimeRelatedResultsResponse** (1 change)

* Model was added

**AuditRealtimeRelatedRequest** (1 change)

* Model was added

**AiAnswer** (1 change)

* Model was added

**AiScoring** (1 change)

* Model was added

**Campaign** (1 change)

* Optional property dynamicLineBalancingSettings was added

**CampaignOutboundLinesAllocation** (1 change)

* Model was added

**CampaignOutboundLinesDistribution** (1 change)

* Model was added

**CampaignOutboundLinesReservation** (1 change)

* Model was added

**CampaignStats** (1 change)

* Optional property linesUtilization was added

**ContactsBulkOperationJob** (1 change)

* Model was added

**ContactBulkEditRequest** (1 change)

* Model was added

**ContactBulkSearchParameters** (1 change)

* Model was added

**ContactListingResponse** (1 change)

* Model was added

**ContactListingRequest** (1 change)

* Model was added

**EventMessage** (2 changes)

* Enum value ACTION_EXECUTION_FAILED was added to property code
* Enum value ACTION_EXECUTION_FAILED_INVALID_PARAMETER was added to property code

**FlowPathsFlowDetails** (3 changes)

* Enum value InboundShortMessage was added to property type
* Enum value InboundEmail was added to property type
* Enum value OutboundCall was added to property type

**IpAddressRange** (1 change)

* Enum value open-messaging was added to property service

**Library** (1 change)

* version is no longer readonly

**PhoneStatus** (1 change)

* id is no longer readonly

**ConversationAsyncAggregationQuery** (1 change)

* Enum value videoPresent was added to property groupBy

**FlowAsyncAggregationQuery** (1 change)

* Enum value videoPresent was added to property groupBy


# Point Changes (0 changes)
