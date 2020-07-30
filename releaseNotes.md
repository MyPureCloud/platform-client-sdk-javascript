Platform API version: 4112


# Major Changes (10 changes)

**GET /api/v2/architect/schedulegroups** (1 change)

* Parameter scheduleIds was added

**GET /api/v2/outbound/attemptlimits** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/callabletimesets** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/sequences** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/contactlistfilters** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/callanalysisresponsesets** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/campaignrules** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/dnclists** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/contactlists** (1 change)

* Parameter allowEmptyResult was added

**GET /api/v2/outbound/rulesets** (1 change)

* Parameter allowEmptyResult was added


# Minor Changes (76 changes)

**/api/v2/outbound/messagingcampaigns/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/campaigns/all** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/messagingcampaigns** (3 changes)

* Path was added
* Operation GET was added
* Operation POST was added

**DELETE /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 202 was added

**PATCH /api/v2/coaching/appointments/{appointmentId}** (1 change)

* Response 202 was added

**/api/v2/outbound/messagingcampaigns/progress** (2 changes)

* Path was added
* Operation POST was added

**/api/v2/outbound/messagingcampaigns/{messagingCampaignId}/progress** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/messagingcampaigns/{messagingCampaignId}** (4 changes)

* Path was added
* Operation GET was added
* Operation PUT was added
* Operation DELETE was added

**/api/v2/outbound/campaigns/all/divisionviews** (2 changes)

* Path was added
* Operation GET was added

**/api/v2/outbound/messagingcampaigns/divisionviews/{messagingCampaignId}** (2 changes)

* Path was added
* Operation GET was added

**POST /api/v2/coaching/appointments** (1 change)

* Response 202 was added

**MessagingCampaignDivisionView** (1 change)

* Model was added

**MessagingCampaignDivisionViewEntityListing** (1 change)

* Model was added

**SegmentDetailQueryPredicate** (4 changes)

* Enum value requestedRouting was added to property dimension
* Enum value selectedAgentId was added to property dimension
* Enum value selectedAgentRank was added to property dimension
* Enum value usedRouting was added to property dimension

**VoicemailUserPolicy** (1 change)

* Optional property sendEmailNotifications was added

**WfmBusinessUnitReference** (1 change)

* Model was added

**WfmScheduleReference** (1 change)

* Model was added

**CommonCampaign** (1 change)

* Model was added

**CommonCampaignEntityListing** (1 change)

* Model was added

**FlowAggregateQueryPredicate** (4 changes)

* Enum value requestedRouting was added to property dimension
* Enum value selectedAgentId was added to property dimension
* Enum value selectedAgentRank was added to property dimension
* Enum value usedRouting was added to property dimension

**FlowAggregationQuery** (4 changes)

* Enum value requestedRouting was added to property groupBy
* Enum value selectedAgentId was added to property groupBy
* Enum value selectedAgentRank was added to property groupBy
* Enum value usedRouting was added to property groupBy

**ObservationValue** (2 changes)

* Optional property requestedRoutings was added
* Optional property usedRouting was added

**EventMessage** (2 changes)

* Enum value APPROACHING_DNC_LIST_PHONE_NUMBER_LIMIT was added to property code
* Enum value APPROACHING_DNC_ORGANIZATION_PHONE_NUMBER_LIMIT was added to property code

**AnalyticsSession** (4 changes)

* Optional property requestedRoutings was added
* Optional property usedRouting was added
* Optional property selectedAgentId was added
* Optional property selectedAgentRank was added

**ConversationAggregateQueryPredicate** (4 changes)

* Enum value requestedRouting was added to property dimension
* Enum value selectedAgentId was added to property dimension
* Enum value selectedAgentRank was added to property dimension
* Enum value usedRouting was added to property dimension

**ConversationAggregationQuery** (4 changes)

* Enum value requestedRouting was added to property groupBy
* Enum value selectedAgentId was added to property groupBy
* Enum value selectedAgentRank was added to property groupBy
* Enum value usedRouting was added to property groupBy

**Dependency** (1 change)

* Enum value NLUDOMAIN was added to property type

**DependencyObject** (1 change)

* Enum value NLUDOMAIN was added to property type

**MessagingCampaign** (1 change)

* Model was added

**SmsConfig** (1 change)

* Model was added

**SmsPhoneNumberRef** (1 change)

* Model was added

**MessagingCampaignEntityListing** (1 change)

* Model was added

**HistoricalAdherenceActuals** (1 change)

* Model was added

**HistoricalAdherenceDayMetrics** (1 change)

* Model was added

**HistoricalAdherenceExceptionInfo** (1 change)

* Model was added

**HistoricalAdherenceQueryResult** (1 change)

* Model was added

**WfmHistoricalAdherenceResponse** (1 change)

* Optional property downloadResult was added

**WfmHistoricalAdherenceResultWrapper** (1 change)

* Model was added

**CommonCampaignDivisionView** (1 change)

* Model was added

**CommonCampaignDivisionViewEntityListing** (1 change)

* Model was added

**ReportingExportJobResponse** (3 changes)

* Optional property excludeEmptyRows was added
* Optional property hasSplitByMedia was added
* Optional property enabled was added

**ReportingExportJobRequest** (2 changes)

* Optional property excludeEmptyRows was added
* Optional property hasSplitByMedia was added


# Point Changes (53 changes)

**GET /api/v2/coaching/appointments/me** (1 change)

* Description was changed for parameter interval

**GET /api/v2/scim/v2/schemas** (2 changes)

* Summary was changed
* Description was changed for parameter filter

**GET /api/v2/scim/v2/schemas/{schemaId}** (2 changes)

* Summary was changed
* Description was changed for parameter schemaId

**PATCH /api/v2/conversations/messaging/integrations/whatsapp/{integrationId}** (1 change)

* Response 202 was changed from Processing Request - If request was to Activate, do a GET checking for activationStatus set to CODE_SENT. 
If request was to Confirm, do a GET checking for the integration status set to Active to Processing Request - If request was to Activate, do a GET checking for activationStatus set to CodeSent. 
If request was to Confirm, do a GET checking for the integration status set to Active

**GET /api/v2/scim/v2/users/{userId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/v2/users** (4 changes)

* Description was changed
* Description was changed for parameter count
* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**POST /api/v2/conversations/{conversationId}/disconnect** (1 change)

* Summary was changed

**GET /api/v2/scim/groups/{groupId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**DELETE /api/v2/scim/groups/{groupId}** (4 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match
* Response 204 was changed from Group Deleted with no content returned. to Group deleted with no content returned.

**GET /api/v2/scim/groups** (4 changes)

* Description was changed for parameter count
* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
* Description was changed for parameter filter

**POST /api/v2/scim/groups** (2 changes)

* Description was changed
* Summary was changed

**GET /api/v2/scim/schemas** (2 changes)

* Summary was changed
* Description was changed for parameter filter

**GET /api/v2/scim/schemas/{schemaId}** (2 changes)

* Summary was changed
* Description was changed for parameter schemaId

**GET /api/v2/scim/users/{userId}** (2 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/scim/users** (4 changes)

* Description was changed
* Description was changed for parameter count
* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes

**GET /api/v2/coaching/appointments** (1 change)

* Description was changed for parameter interval

**GET /api/v2/scim/v2/groups/{groupId}** (3 changes)

* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
* Description was changed for parameter If-None-Match

**DELETE /api/v2/scim/v2/groups/{groupId}** (4 changes)

* Summary was changed
* Description was changed for parameter groupId
* Description was changed for parameter If-Match
* Response 204 was changed from Group Deleted with no content returned. to Group deleted with no content returned.

**GET /api/v2/scim/v2/groups** (4 changes)

* Description was changed for parameter count
* Description was changed for parameter attributes
* Description was changed for parameter excludedAttributes
* Description was changed for parameter filter

**POST /api/v2/scim/v2/groups** (3 changes)

* Description was changed
* Summary was changed
* Description was changed for parameter body

**POST /api/v2/conversations/messaging/integrations/whatsapp** (1 change)

* Description was changed

**PUT /api/v2/externalcontacts/conversations/{conversationId}** (2 changes)

* Description was changed
* Summary was changed
