Platform API version: 3648


# Major Changes (1 change)

**WorkPlanReference** (1 change)

* id has been made readonly


# Minor Changes (30 changes)

**/api/v2/routing/settings/transcription** (3 changes)

* Path was added
* Operation GET was added
* Operation PUT was added

**/api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Operation delete was added. Summary: Delete a WhatsApp messaging integration

**/api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Operation post was added. Summary: Create a WhatsApp Integration

**/api/v2/conversations/messages/agentless** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/scim/groups/{groupId}** (1 change)

* Operation delete was added. Summary: Delete a group.

**/api/v2/scim/groups** (1 change)

* Operation post was added. Summary: The information used to create a group.

**/api/v2/scim/v2/groups/{groupId}** (1 change)

* Operation delete was added. Summary: Delete a group.

**/api/v2/scim/v2/groups** (1 change)

* Operation post was added. Summary: The information used to create a group.

**POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search** (1 change)

* Response 408 was added

**/api/v2/workforcemanagement/managementunits/{muId}/agentschedules/search** (2 changes)

* Path was added
* Operation POST was added

**BuSearchAgentSchedulesRequest** (1 change)

* Model was added

**TranscriptionSettings** (1 change)

* Model was added

**ShiftTradeSettings** (1 change)

* Optional property requiresMatchingPlanningGroups was added

**SegmentDetailQueryPredicate** (1 change)

* Enum value remote was added to property dimension

**ManagementUnitReference** (1 change)

* Model was added

**WorkPlanReference** (2 changes)

* Optional property managementUnit was added
* Optional property selfUri was added

**WhatsAppIntegrationRequest** (1 change)

* Model was added

**SendAgentlessOutboundMessageResponse** (1 change)

* Model was added

**SendAgentlessOutboundMessageRequest** (1 change)

* Model was added

**ScimV2Group** (1 change)

* Optional property externalId was added

**ConversationAggregateQueryPredicate** (1 change)

* Enum value remote was added to property dimension

**ConversationAggregationQuery** (1 change)

* Enum value remote was added to property groupBy

**AnalyticsSession** (1 change)

* Optional property remote was added

**FlowAggregateQueryPredicate** (1 change)

* Enum value remote was added to property dimension

**FlowAggregationQuery** (1 change)

* Enum value remote was added to property groupBy


# Point Changes (0 changes)
